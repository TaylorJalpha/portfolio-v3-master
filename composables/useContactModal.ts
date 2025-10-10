import type { Ref } from 'vue'

// Nuxt 3 shared state for a global contact modal
export const useContactModal = () => {
  const isOpen = useState<boolean>('contact-modal-open', () => false)

  const open = () => {
    isOpen.value = true
    if (process.client) console.debug('[ContactModal] open -> isOpen:', isOpen.value)
  }
  const close = () => {
    isOpen.value = false
    if (process.client) console.debug('[ContactModal] close -> isOpen:', isOpen.value)
  }
  const toggle = () => {
    isOpen.value = !isOpen.value
    if (process.client) console.debug('[ContactModal] toggle -> isOpen:', isOpen.value)
  }

  return { isOpen: isOpen as Ref<boolean>, open, close, toggle }
}
