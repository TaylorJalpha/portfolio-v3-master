<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

interface TocItem { id: string; text: string; level: number }

const props = defineProps<{ contentSelector?: string }>()
const items = ref<TocItem[]>([])
const activeId = ref('')
const windowWidth = ref(process.client ? window.innerWidth : 1200)
let observer: IntersectionObserver | null = null

// Position TOC in the right margin: content is max-w-3xl (48rem = 768px) centered
const tocRight = computed(() => {
  const contentWidth = 768
  const margin = (windowWidth.value - contentWidth) / 2
  const tocWidth = 192 // w-48
  const gap = 32
  const right = margin - tocWidth - gap
  return right > 16 ? `${right}px` : '1rem'
})

function onResize() { windowWidth.value = window.innerWidth }

function extractHeadings() {
  const container = document.querySelector(props.contentSelector || '.portfolio-detail')
  if (!container) return
  const headings = container.querySelectorAll('h2')
  items.value = Array.from(headings).filter(el => {
    const text = (el.textContent || '').trim()
    // Skip headings that contain images, have no text, or text that looks like a file path/URL
    if (!text || text.length < 2) return false
    if (el.querySelector('img')) return false
    if (/^(https?:\/\/|\/|\.\.?\/)/.test(text)) return false
    return true
  }).map(el => {
    if (!el.id) {
      el.id = (el.textContent || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    }
    return { id: el.id, text: el.textContent?.trim() || '', level: parseInt(el.tagName[1]) }
  }).filter(item => item.id && item.text)
}

function observeHeadings() {
  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      }
    },
    { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
  )
  items.value.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) observer!.observe(el)
  })
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(async () => {
  window.addEventListener('resize', onResize)
  await nextTick()
  setTimeout(() => {
    extractHeadings()
    if (items.value.length) observeHeadings()
  }, 600)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <Teleport to="body">
    <nav v-if="items.length" class="hidden lg:block fixed top-24 w-48 z-40" :style="{ right: tocRight }" aria-label="Table of contents">
      <p class="text-xs uppercase tracking-widest text-white/60 mb-3">On this page</p>
      <ul class="space-y-1.5 border-l border-white/10 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <li v-for="item in items" :key="item.id">
          <a
            :href="`#${item.id}`"
            @click.prevent="scrollTo(item.id)"
            class="block text-sm leading-snug py-1 transition-colors duration-200"
            :class="[
              item.level <= 2 ? 'pl-3' : item.level === 3 ? 'pl-6' : 'pl-9',
              activeId === item.id
                ? 'text-white border-l-2 -ml-px'
                : 'text-white/60 hover:text-white/80'
            ]"
            :style="activeId === item.id ? { borderColor: '#746CFF' } : {}"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>
  </Teleport>
</template>
