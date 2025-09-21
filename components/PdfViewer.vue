
<template>
  <div v-if="pdfUrl" class="pdf-viewer-container">
    <!-- Desktop: keep native PDF viewer in iframe for best UX -->
    <ClientOnly>
      <div v-if="!isMobile" class="pdf-iframe-wrapper">
        <iframe
          :src="computedIframeSrc"
          width="100%"
          height="800"
          style="border:none;"
          allowfullscreen
        ></iframe>
        <div class="pdf-toolbar-overlay" aria-hidden="true"></div>
      </div>

      <!-- Mobile: custom pdf.js renderer with toolbar and lazy page rendering -->
      <div v-else class="pdfjs-mobile-wrapper">
        <div class="pdfjs-toolbar">
          <button class="btn" @click="zoomOut" :disabled="scale <= minScale" aria-label="Zoom out">−</button>
          <span class="zoom">{{ Math.round(scale * 100) }}%</span>
          <button class="btn" @click="zoomIn" :disabled="scale >= maxScale" aria-label="Zoom in">＋</button>
          <div class="spacer"></div>
          <a class="btn outline" :href="pdfUrl" target="_blank" rel="noopener" aria-label="Open in new tab">Open</a>
          <a class="btn outline" :href="pdfUrl" download aria-label="Download PDF">Download</a>
        </div>

        <div ref="scrollContainer" class="pdfjs-pages" @scroll.passive="onScroll">
          <div v-if="error" class="error">
            <p>We couldn’t render the PDF on this device.</p>
            <p>
              <a :href="pdfUrl" target="_blank" rel="noopener" class="link">Open in new tab</a>
              or
              <a :href="pdfUrl" download class="link">download</a> to view.
            </p>
          </div>

          <div v-else>
            <div
              v-for="page in pages"
              :key="page.num"
              class="pdfjs-page"
              :style="{ height: Math.round(page.estHeightPx) + 'px' }"
              :ref="setPageContainerRef"
              :data-page="page.num"
            >
              <canvas v-show="page.rendered" :ref="el => setCanvasRef(el, page.num)" class="canvas"></canvas>
              <div v-if="!page.rendered" class="skeleton"></div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
  <div v-else>
    <p>No PDF available.</p>
  </div>
</template>


<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, reactive, computed, watch } from 'vue'

// Props: expects a direct URL to a PDF (e.g., Sanity asset url)
const props = defineProps<{ pdfUrl: string | null }>()

// Responsive breakpoint for mobile treatment
const isMobile = ref(true)
const computeIsMobile = () => typeof window !== 'undefined' ? window.innerWidth < 768 : true

// Iframe URL with Chrome/Adobe toolbar hidden (desktop only)
const computedIframeSrc = computed(() => props.pdfUrl ? `${props.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0` : '')

// pdf.js state (mobile)
type PageState = { num: number; rendered: boolean; estHeightPx: number }
const pages = reactive<PageState[]>([])
const pdfDoc = ref<any>(null)
const scale = ref(1)
const minScale = 0.6
const maxScale = 3
const baseWidth = ref<number | null>(null)
const scrollContainer = ref<HTMLElement | null>(null)
const error = ref<string | null>(null)

let io: IntersectionObserver | null = null
const pageContainers = new Map<number, HTMLElement>()
const canvases = new Map<number, HTMLCanvasElement>()
let destroyRequested = false

function setPageContainerRef(el: any) {
  if (!el) return
  const elh = el as HTMLElement
  const num = Number(elh.dataset.page)
  pageContainers.set(num, elh)
  if (io) io.observe(elh)
}
function setCanvasRef(el: any, pageNum: number) {
  if (!el) return
  if (el instanceof HTMLCanvasElement) {
    canvases.set(pageNum, el)
  }
}

function zoomIn() {
  scale.value = Math.min(maxScale, Math.round((scale.value + 0.1) * 10) / 10)
  requestRerenderVisible()
}
function zoomOut() {
  scale.value = Math.max(minScale, Math.round((scale.value - 0.1) * 10) / 10)
  requestRerenderVisible()
}

function onScroll() {
  // placeholder to mark passive scroll handler; IO handles rendering
}

let rerenderTimer: number | null = null
function requestRerenderVisible() {
  if (rerenderTimer) window.clearTimeout(rerenderTimer)
  rerenderTimer = window.setTimeout(() => {
    canvases.forEach((_c, n) => {
      // mark as not rendered to trigger re-render on intersect
      const p = pages.find(p => p.num === n)
      if (p) p.rendered = false
      const container = pageContainers.get(n)
      if (container && io) {
        io.unobserve(container)
        io.observe(container)
      }
    })
  }, 100)
}

async function ensurePdfJsLoaded() {
  // Load pdf.js only on client and only if needed
  const pdfjs = await import('pdfjs-dist')
  // In Vite/Nuxt, import worker as URL and set workerSrc to avoid bundling complexity
  const workerSrc = (await import('pdfjs-dist/build/pdf.worker.min.mjs?url')).default
  ;(pdfjs as any).GlobalWorkerOptions.workerSrc = workerSrc
  return pdfjs
}

async function openPdf() {
  if (!props.pdfUrl) return
  try {
    const pdfjs: any = await ensurePdfJsLoaded()
    const loadingTask = pdfjs.getDocument({ url: props.pdfUrl, withCredentials: false })
    const doc = await loadingTask.promise
    pdfDoc.value = doc

    // Precompute baseWidth from first page to fit width
    const first = await doc.getPage(1)
    const viewport1 = first.getViewport({ scale: 1 })
    baseWidth.value = viewport1.width

    // Fit to container width
    const cw = scrollContainer.value?.clientWidth || (typeof window !== 'undefined' ? window.innerWidth : 360)
    scale.value = Math.max(minScale, Math.min(maxScale, cw / viewport1.width))

    // Initialize page placeholders with estimated height
    const ratio = viewport1.height / viewport1.width
    pages.splice(0, pages.length, ...Array.from({ length: doc.numPages }, (_, i) => ({
      num: i + 1,
      rendered: false,
      estHeightPx: (cw * ratio),
    })))

    setupIntersectionObserver()
  } catch (e: any) {
    console.error('PDF render error', e)
    error.value = e?.message || 'Failed to load PDF'
  }
}

function setupIntersectionObserver() {
  if (io) io.disconnect()
  io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement
        const num = Number(el.dataset.page)
        renderPage(num)
      }
    })
  }, { root: scrollContainer.value || null, rootMargin: '200px 0px', threshold: 0.01 })

  // Observe current containers
  pageContainers.forEach((el) => io?.observe(el))
}

async function renderPage(pageNum: number) {
  if (!pdfDoc.value) return
  const state = pages.find(p => p.num === pageNum)
  if (!state || state.rendered) return

  try {
    const page = await pdfDoc.value.getPage(pageNum)
    const viewport = page.getViewport({ scale: scale.value })
    const canvas = canvases.get(pageNum)
    const container = pageContainers.get(pageNum)
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = Math.ceil(viewport.width)
    canvas.height = Math.ceil(viewport.height)
    state.estHeightPx = canvas.height // update to real height

    await page.render({ canvasContext: ctx, viewport }).promise
    state.rendered = true
  } catch (e) {
    console.warn('Failed to render page', pageNum, e)
  }
}

function cleanup() {
  destroyRequested = true
  if (io) { io.disconnect(); io = null }
  pageContainers.clear()
  canvases.clear()
  pages.splice(0, pages.length)
  if (pdfDoc.value && pdfDoc.value.destroy) pdfDoc.value.destroy()
  pdfDoc.value = null
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    isMobile.value = computeIsMobile()
    const ro = () => {
      const newIsMobile = computeIsMobile()
      const wasMobile = isMobile.value
      isMobile.value = newIsMobile
      // If mobile, adjust scale to fit width and rerender placeholders
      if (newIsMobile) {
        const cw = scrollContainer.value?.clientWidth || window.innerWidth
        if (baseWidth.value) {
          const fit = Math.max(minScale, Math.min(maxScale, cw / baseWidth.value))
          if (Math.abs(fit - scale.value) > 0.01) {
            scale.value = fit
            requestRerenderVisible()
          }
        }
        if (!pdfDoc.value && props.pdfUrl) {
          // Switched from desktop -> mobile
          openPdf()
        }
      } else if (wasMobile && !newIsMobile) {
        // Switched from mobile -> desktop: cleanup mobile artifacts
        cleanup()
      }
    }
    window.addEventListener('resize', ro)
    // Open pdf only for mobile path; desktop uses iframe
    if (isMobile.value) {
      // Delay to allow container to mount with correct width
      setTimeout(() => openPdf(), 0)
    }
    onBeforeUnmount(() => {
      window.removeEventListener('resize', ro)
    })
  }
})

watch(() => props.pdfUrl, (next) => {
  if (!next) return
  cleanup()
  if (isMobile.value) openPdf()
})

onBeforeUnmount(cleanup)
</script>


<style scoped>
.pdf-viewer-container {
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  border-radius: 16px;
  overflow: hidden;
  background: #0f0f0f;
  margin: 2rem 0;
}
.pdf-iframe-wrapper { position: relative; }
iframe {
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  background: #111111;
}
.pdf-toolbar-overlay {
  position: absolute; inset: 0 0 auto 0; height: 40px; background: rgba(255,255,255,0.01); z-index: 2; pointer-events: auto;
}

/* Mobile pdf.js viewer */
.pdfjs-mobile-wrapper {
  display: flex; flex-direction: column; height: 70vh; max-height: 75vh; background: #0f0f0f;
}
.pdfjs-toolbar {
  display: flex; align-items: center; gap: 8px; padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.08);
}
.pdfjs-toolbar .spacer { flex: 1 1 auto; }
.btn { background: #1f1f1f; color: #e5e5e5; border: 1px solid rgba(255,255,255,0.12); padding: 6px 10px; border-radius: 8px; font-size: 14px; }
.btn[disabled] { opacity: 0.5; }
.btn.outline { background: transparent; }
.zoom { color: #bbb; min-width: 48px; text-align: center; font-variant-numeric: tabular-nums; }

.pdfjs-pages { overflow: auto; -webkit-overflow-scrolling: touch; padding: 12px; gap: 12px; display: grid; }
.pdfjs-page { position: relative; width: 100%; background: #111; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.22); }
.pdfjs-page .canvas { display: block; width: 100%; height: auto; }
.skeleton { width: 100%; height: 100%; background: linear-gradient(90deg, #1a1a1a 25%, #202020 37%, #1a1a1a 63%); background-size: 400% 100%; animation: shimmer 1.4s ease infinite; }
@keyframes shimmer { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }

.error { color: #e5e5e5; padding: 16px; }
.error .link { color: #60a5fa; text-decoration: underline; }

@media (min-width: 768px) {
  .pdfjs-mobile-wrapper { display: none; }
}
</style>
