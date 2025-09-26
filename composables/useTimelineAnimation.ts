import { ref, onMounted, onBeforeUnmount, nextTick, type ComponentPublicInstance } from 'vue'

interface UseTimelineAnimationParams {
  containerRef: any
  progressLineRef: any
  getItemCount: () => number
  pivotRatio?: number // viewport ratio to decide active index (0 top - 1 bottom)
}

// Easing helpers
const easeOutCubic = (t:number) => 1 - Math.pow(1 - t, 3)

export function useTimelineAnimation({ containerRef, progressLineRef, getItemCount, pivotRatio = 0.38 }: UseTimelineAnimationParams) {
  const activeIndex = ref(-1)
  const scrollProgress = ref(0)
  const timelineItems = ref<(HTMLDivElement | null)[]>([])

  // geometry caches
  let containerTop = 0
  let containerHeight = 0
  let itemOffsets: number[] = []
  let rAFPending = false
  let resizeTimer: number | null = null
  let prefersReduced: MediaQueryList | null = null

  const setItemRef = (el: Element | ComponentPublicInstance | null, index: number) => {
    timelineItems.value[index] = el as HTMLDivElement | null
  }

  const measure = () => {
    if (!containerRef.value) return
    const rect = containerRef.value.getBoundingClientRect()
    containerTop = rect.top + window.scrollY
    containerHeight = rect.height
    itemOffsets = timelineItems.value.map(el => el ? (el.offsetTop || 0) : 0)
  }

  const applyReducedMotion = () => {
    timelineItems.value.forEach(item => {
      if (!item) return
      const cardWrapper = item.querySelector('.timeline-card-wrapper') as HTMLElement | null
      if (cardWrapper) {
        cardWrapper.style.transform = 'none'
        cardWrapper.style.filter = 'none'
      }
      item.style.opacity = '1'
    })
    if (progressLineRef.value) {
      progressLineRef.value.style.transform = 'scaleY(1)'
      progressLineRef.value.style.opacity = '1'
    }
  }

  const animate = () => {
    rAFPending = false
    if (!containerRef.value) return
    if (prefersReduced?.matches) { applyReducedMotion(); return }

    const scrollY = window.scrollY
    const vh = window.innerHeight

    // Slightly earlier start so second card is visible sooner
    const start = containerTop - vh * 0.9
    const end = containerTop + containerHeight - vh * 0.1

    let raw = 0
    if (scrollY > start && scrollY < end) raw = (scrollY - start) / (end - start)
    else if (scrollY >= end) raw = 1
    raw = Math.max(0, Math.min(1, raw))
    const eased = easeOutCubic(raw)
    scrollProgress.value = eased

    // active index using pivot ratio anchored inside container
    const pivot = scrollY + vh * pivotRatio - containerTop
    const total = getItemCount()
    let idx = 0
    for (let i=0;i<itemOffsets.length;i++) { if (pivot >= itemOffsets[i]) idx = i; else break }
    activeIndex.value = Math.min(idx, total - 1)

    // progress line updates (scaled to visible portion of container rather than eased value)
    if (progressLineRef.value) {
      if (containerHeight === 0) measure()
      const viewportBottom = scrollY + vh * 0.8 // advance line a bit before absolute bottom
      const rawLine = (viewportBottom - containerTop) / containerHeight
      const lineScale = Math.max(0, Math.min(1, rawLine))
      progressLineRef.value.style.transform = `scaleY(${lineScale})`
      progressLineRef.value.style.opacity = lineScale > 0 ? '1' : '0'
      progressLineRef.value.style.willChange = 'transform, opacity'
      const indicator = progressLineRef.value.querySelector('.absolute.w-3.h-3') as HTMLElement | null
      if (indicator) {
        indicator.style.top = `${Math.min(lineScale * 100, 100)}%`
        if (lineScale > 0 && lineScale < 1) {
          const pulse = 1 + Math.sin(Date.now() * 0.004) * 0.12
          indicator.style.transform = `translateX(-50%) translateY(-50%) scale(${pulse})`
        } else {
          indicator.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
        }
      }
    }

    // item animations
    timelineItems.value.forEach((item, i) => {
      if (!item) return
      const cardWrapper = item.querySelector('.timeline-card-wrapper') as HTMLElement | null

      // window for each item reveal
      const norm = i / ( (getItemCount() - 1) || 1 )
      const windowStart = norm - 0.18
      const local = (eased - windowStart) / 0.40
      const clamped = Math.max(0, Math.min(1, local))
      const reveal = clamped < 0.08 ? 0 : clamped > 0.92 ? 1 : (clamped - 0.08) / 0.84

      const baseOpacity = activeIndex.value >= i ? 1 : 0.5
      const finalOpacity = Math.max(0.25, baseOpacity * (0.35 + reveal * 0.65))
      item.style.opacity = finalOpacity.toString()

      if (cardWrapper) {
        const translateX = reveal > 0.35 ? 0 : 42 * (1 - reveal / 0.35)
        const translateY = reveal > 0.65 ? 0 : 16 * (1 - (reveal / 0.65))
        const scale = 0.955 + reveal * 0.045
        cardWrapper.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`
        cardWrapper.style.willChange = 'transform'
        item.style.setProperty('--scale-factor', scale.toString())
      }
    })
  }

  const requestAnimate = () => { if (!rAFPending) { rAFPending = true; requestAnimationFrame(animate) } }

  let scrollListener: (() => void) | null = null
  let resizeListener: (() => void) | null = null

  onMounted(() => {
    prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    nextTick(() => {
      measure()
      timelineItems.value.forEach(i => { if (i) i.style.willChange = 'opacity' })
      animate()
      scrollListener = () => requestAnimate()
      resizeListener = () => {
        if (resizeTimer) window.clearTimeout(resizeTimer)
        resizeTimer = window.setTimeout(() => { measure(); requestAnimate() }, 120)
      }
      window.addEventListener('scroll', scrollListener, { passive: true })
      window.addEventListener('resize', resizeListener, { passive: true })
      // measure again after images/fonts settle
      setTimeout(() => { measure(); requestAnimate() }, 400)
      setTimeout(() => { measure(); requestAnimate() }, 1000)
      prefersReduced?.addEventListener('change', () => { prefersReduced?.matches ? applyReducedMotion() : requestAnimate() })
    })
  })

  onBeforeUnmount(() => {
    if (scrollListener) window.removeEventListener('scroll', scrollListener)
    if (resizeListener) window.removeEventListener('resize', resizeListener)
    if (resizeTimer) window.clearTimeout(resizeTimer)
  })

  return { setItemRef, activeIndex, scrollProgress }
}
