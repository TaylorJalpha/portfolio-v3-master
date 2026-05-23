import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

export interface UseInViewOptions {
  uid?: string
  once?: boolean
  rootMargin?: string
  threshold?: number | number[]
  initial?: boolean
}

const globalEnteredMap = (globalThis as any).__useInViewEnteredMap || new Map<string, boolean>()
;(globalThis as any).__useInViewEnteredMap = globalEnteredMap

export function useInView(options: UseInViewOptions = {}) {
  const { uid, once = true, rootMargin = '-50px', threshold = 0.08, initial = false } = options

  const root = ref<HTMLElement | null>(null)
  const inView = ref<boolean>(initial || (!!uid && !!globalEnteredMap.get(uid)))

  let observer: IntersectionObserver | null = null

  function startObserving() {
  // ...existing code...
    if (inView.value) return
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // In non-browser environments, mark visible if initial requested
      inView.value = initial || false
      return
    }

    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          inView.value = true
          if (uid) globalEnteredMap.set(uid, true)
          if (once && observer) {
            observer.disconnect()
            observer = null
          }
          break
        }
      }
    }, { root: null, rootMargin, threshold })
    if (root.value) observer.observe(root.value)
  }

  function stopObserving() {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => startObserving())
  onBeforeUnmount(() => stopObserving())

  watch(root, (el) => {
    if (observer && el) observer.observe(el)
  })

  function reset() {
    if (uid) globalEnteredMap.delete(uid)
    inView.value = false
    stopObserving()
    startObserving()
  }

  return { root, inView, reset }
}
