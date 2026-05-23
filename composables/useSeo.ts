import { computed } from 'vue'
import { useCanonicalUrl } from '@/composables/useCanonicalUrl'

export function useSeo(defaults?: { title?: string; description?: string; path?: string }) {
  const canonical = useCanonicalUrl(defaults?.path)
  const title = defaults?.title || ''
  const description = defaults?.description || ''
  const ogImage = computed(() => {
    try {
      const u = new URL(canonical)
      return `${u.origin}/me/me1.webp`
    } catch {
      const origin = canonical.replace(/^(https?:\/\/[^/]+).*/, '$1')
      return `${origin}/me/me1.webp`
    }
  })

  const meta = computed(() => [
    description ? { name: 'description', content: description } : null,
    title ? { property: 'og:title', content: title } : null,
    description ? { property: 'og:description', content: description } : null,
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: ogImage.value },
    { name: 'twitter:card', content: 'summary_large_image' },
    title ? { name: 'twitter:title', content: title } : null,
    description ? { name: 'twitter:description', content: description } : null,
    { name: 'twitter:image', content: ogImage.value }
  ].filter(Boolean) as any)

  return { canonical, title, description, ogImage, meta }
}
