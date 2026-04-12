<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

interface TocItem { id: string; text: string; level: number }

const props = defineProps<{ contentSelector?: string }>()
const items = ref<TocItem[]>([])
const activeId = ref('')
let observer: IntersectionObserver | null = null

function extractHeadings() {
  const container = document.querySelector(props.contentSelector || '.portfolio-detail')
  if (!container) return
  const headings = container.querySelectorAll('h1, h2, h3, h4')
  items.value = Array.from(headings).map(el => {
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
  await nextTick()
  // Wait for content to render
  setTimeout(() => {
    extractHeadings()
    if (items.value.length) observeHeadings()
  }, 600)
})

onBeforeUnmount(() => { observer?.disconnect() })
</script>

<template>
  <nav v-if="items.length" class="hidden lg:block" aria-label="Table of contents">
    <div class="sticky top-24">
      <p class="text-xs uppercase tracking-widest text-white/40 mb-3">On this page</p>
      <ul class="space-y-1.5 border-l border-white/10">
        <li v-for="item in items" :key="item.id">
          <a
            :href="`#${item.id}`"
            @click.prevent="scrollTo(item.id)"
            class="block text-sm leading-snug py-1 transition-colors duration-200"
            :class="[
              item.level === 1 ? 'pl-3' : item.level === 2 ? 'pl-3' : item.level === 3 ? 'pl-6' : 'pl-9',
              activeId === item.id
                ? 'text-white border-l-2 border-white -ml-px'
                : 'text-white/40 hover:text-white/70'
            ]"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
