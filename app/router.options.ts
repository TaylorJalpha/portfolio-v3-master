import type { RouterConfig } from '@nuxt/schema'

/**
 * Customizes scroll behavior so hash navigation consistently finds the target
 * section, even when coming from another page.
 */
export default <RouterConfig>{
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return new Promise((resolve) => {
        const frame = process.client && typeof window.requestAnimationFrame === 'function'
          ? window.requestAnimationFrame.bind(window)
          : (cb: FrameRequestCallback) => setTimeout(cb, 16)

        frame(() => {
          if (process.client) {
            const hashTarget = to.hash
            const dataTarget = `[data-section="${hashTarget.slice(1)}"]`
            const targetEl = document.querySelector(hashTarget) || document.querySelector(dataTarget)

            if (targetEl) {
              const yOffset = 100
              const top = targetEl.getBoundingClientRect().top + window.scrollY - yOffset
              resolve({ left: 0, top })
              return
            }
          }

          // fallback to native anchor behavior if element not found yet
          resolve({ el: to.hash })
        })
      })
    }

    return { left: 0, top: 0 }
  }
}
