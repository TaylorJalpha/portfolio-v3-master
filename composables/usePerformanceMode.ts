import { ref, onMounted, computed, readonly } from 'vue'

const isLowEndDevice = ref(false)
const prefersReducedMotion = ref(false)

export function usePerformanceMode() {
  onMounted(() => {
    if (!process.client) return
    
    // Detect low-end devices
    const hardwareConcurrency = navigator.hardwareConcurrency || 4
    const deviceMemory = (navigator as any).deviceMemory || 4
    const isWindows = /Windows/.test(navigator.userAgent)
    const isOldChrome = /Chrome\/([0-9]+)/.test(navigator.userAgent) && 
                       parseInt(RegExp.$1) < 100

    isLowEndDevice.value = hardwareConcurrency <= 4 || 
                          deviceMemory <= 4 || 
                          (isWindows && isOldChrome)

    // Check reduced motion preference
    try {
      prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch {}
  })

  return {
    isLowEndDevice: readonly(isLowEndDevice),
    prefersReducedMotion: readonly(prefersReducedMotion),
    shouldReduceAnimations: computed(() => isLowEndDevice.value || prefersReducedMotion.value)
  }
}
