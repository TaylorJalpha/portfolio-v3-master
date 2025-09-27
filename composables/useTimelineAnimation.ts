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
    // Use the larger of visual height and scrollHeight to avoid 0-height glitches during mount/layout shifts
    const scrollH = (containerRef.value as HTMLElement).scrollHeight || 0
    containerHeight = Math.max(rect.height, scrollH)
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
      const fillEl = progressLineRef.value.querySelector('.progress-fill') as HTMLElement | null
      if (fillEl) {
        fillEl.style.height = '100%'
        fillEl.style.opacity = '1'
        fillEl.style.transition = 'none'
      }
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

    // progress line updates using height percentage instead of scale to maintain gradient fidelity
    if (progressLineRef.value) {
      if (containerHeight <= 0) measure()
      const fillEl = progressLineRef.value.querySelector('.progress-fill') as HTMLElement | null
      if (fillEl) {
        if (containerHeight > 0) {
          const viewportBottom = scrollY + vh * 0.7 // slightly earlier fill
          const rawLine = (viewportBottom - containerTop) / containerHeight
          let lineRatio = Math.max(0, Math.min(1, isNaN(rawLine) ? 0 : rawLine))
          if (scrollY + vh >= containerTop + containerHeight - 32) lineRatio = 1
          const pct = Math.max(0, Math.min(100, lineRatio * 100))
          fillEl.style.height = pct + '%'
          fillEl.style.opacity = lineRatio < 0.015 ? '0' : '1'
          fillEl.style.transition = 'height 0.25s ease-out'
          fillEl.style.willChange = 'height, opacity'
          // Handle optional end-cap glow opacity subtly
          const glow = fillEl.querySelector(':scope > div + div + div') as HTMLElement | null
          if (glow) {
            glow.style.opacity = (lineRatio > 0.02 && lineRatio < 0.995) ? '0.35' : (lineRatio >= 0.995 ? '0.25' : '0')
            glow.style.transition = 'opacity 0.25s ease-out'
          }
        } else {
          // Fallback while awaiting a reliable measure
          fillEl.style.height = '0%'
          fillEl.style.opacity = '0'
        }
      }
    }

    // item animations
    const totalItems = getItemCount()
    timelineItems.value.forEach((item, i) => {
      if (!item) return
      const cardWrapper = item.querySelector('.timeline-card-wrapper') as HTMLElement | null

      // window for each item reveal
      const norm = i / ( (totalItems - 1) || 1 )
      const windowStart = norm - 0.18
      // For the final item, expand the window so it can actually reach full reveal at eased=1
      const dynamicWindow = (i === totalItems - 1)
        ? Math.max(0.12, 1 - windowStart) // ensure non-zero window; typical ~0.18
        : 0.40
      const local = (eased - windowStart) / dynamicWindow
      const clamped = Math.max(0, Math.min(1, local))
      const reveal = clamped < 0.08 ? 0 : clamped > 0.92 ? 1 : (clamped - 0.08) / 0.84

      const baseOpacity = activeIndex.value >= i ? 1 : 0.5
      const finalOpacity = Math.max(0.25, baseOpacity * (0.35 + reveal * 0.65))
      item.style.opacity = finalOpacity.toString()

      if (cardWrapper) {
        const translateX = reveal > 0.35 ? 0 : 42 * (1 - reveal / 0.35)
        const translateY = reveal > 0.65 ? 0 : 16 * (1 - (reveal / 0.65))
        // Slightly larger max scale for the active card to improve foreground emphasis at the end
        const scale = 0.955 + reveal * 0.055
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
      // Kick an initial animation pass so the line is visible on load
      animate()
      scrollListener = () => requestAnimate()
      resizeListener = () => {
        if (resizeTimer) window.clearTimeout(resizeTimer)
        resizeTimer = window.setTimeout(() => { measure(); requestAnimate() }, 120)
      }
      window.addEventListener('scroll', scrollListener, { passive: true })
      window.addEventListener('resize', resizeListener, { passive: true })
      // measure again after images/fonts settle
      setTimeout(() => { measure(); requestAnimate() }, 300)
      setTimeout(() => { measure(); requestAnimate() }, 900)
      setTimeout(() => { measure(); requestAnimate() }, 1600)
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
