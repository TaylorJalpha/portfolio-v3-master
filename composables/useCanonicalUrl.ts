import { useRuntimeConfig, useRoute } from '#imports'

/**
 * Returns absolute canonical URL for the current route.
 * Handles stripping trailing slashes (except root) and removing duplicate query params for SEO cleanliness.
 */
export function useCanonicalUrl(explicitPath?: string) {
  const config = useRuntimeConfig()
  const route = useRoute()

  // Prefer configured siteUrl. If absent or clearly a local placeholder, fall back to runtime origin (client only).
  let base = (config.public?.siteUrl || '').replace(/\/$/, '')
  if (!base || base.includes('localhost')) {
    if (process.client && typeof window !== 'undefined') {
      base = window.location.origin.replace(/\/$/, '')
    } else if (!base) {
      base = 'http://localhost:3000'
    }
  }

  const path = explicitPath || route.fullPath || '/'
  // Strip query + hash
  const noQuery = path.split('?')[0].split('#')[0]
  // Normalize: remove trailing slash except root
  const normalized = noQuery !== '/' ? noQuery.replace(/\/$/, '') : '/'
  return base + (normalized.startsWith('/') ? normalized : `/${normalized}`)
}
