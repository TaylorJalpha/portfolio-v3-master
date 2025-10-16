<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Props {
  values?: number[] // percentages 0-100
  height?: number   // px
  width?: number    // px
  startYear?: number // starting year for labels
  showYears?: boolean // toggle year labels
}

const props = withDefaults(defineProps<Props>(), {
  values: () => [18, 28, 24, 42, 55, 63, 72, 84],
  height: 96,
  width: 180,
  startYear: 2018,
  showYears: true,
})

const rootRef = ref<HTMLElement | null>(null)
const started = ref(false)
let io: IntersectionObserver | null = null

onMounted(() => {
  if (typeof window === 'undefined') return
  if (!('IntersectionObserver' in window)) {
    started.value = true
    return
  }
  io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        started.value = true
        if (io) io.disconnect()
        io = null
      }
    })
  }, { threshold: 0.3 })
  if (rootRef.value) io.observe(rootRef.value)
})

onBeforeUnmount(() => { if (io) io.disconnect() })
</script>

<template>
  <div
    ref="rootRef"
    class="relative select-none rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
    :style="{ height: `${height}px`, width: `${width}px` }"
    :aria-label="`Growth over time chart, ${props.startYear}\u2013${props.startYear + props.values.length - 1}`"
    role="img"
  >
    <!-- Grid lines -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-x-0 top-1/4 h-px bg-white/10"></div>
      <div class="absolute inset-x-0 top-2/4 h-px bg-white/10"></div>
      <div class="absolute inset-x-0 top-3/4 h-px bg-white/10"></div>
    </div>

    <!-- Bars -->
    <div class="absolute inset-0 px-3 pb-6 flex items-end gap-1.5">
      <div
        v-for="(v, i) in props.values"
        :key="i"
        class="flex-1 rounded-t-sm"
        :style="{
          height: started ? `${Math.max(4, Math.min(100, v))}%` : '4px',
          transition: 'height 900ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          transitionDelay: `${i * 80}ms`,
          backgroundImage: 'linear-gradient(to top, #E63946 0%, #667eea 100%)',
          boxShadow: '0 0 10px rgba(102,126,234,0.15), 0 0 0 1px rgba(255,255,255,0.06) inset',
        }"
      />
    </div>

    <!-- Year labels -->
    <div v-if="showYears" class="absolute inset-x-0 bottom-1 px-3" aria-hidden="true">
      <div class="flex items-end gap-1.5">
        <div
          v-for="(_, i) in props.values"
          :key="`year-${i}`"
          class="flex-1 text-[10px] leading-none text-white/60 text-center"
        >
          {{ String((props.startYear + i) % 100).padStart(2, '0') }}
        </div>
      </div>
    </div>

    <!-- Caption -->
    <div class="absolute left-3 top-2 text-[10px] uppercase tracking-wide text-white/60">
      Growth
    </div>
  </div>
</template>

<style scoped>
</style>
