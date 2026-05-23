export default defineEventHandler((event) => {
  // Only apply to GET requests for HTML pages
  if (getMethod(event) !== 'GET') return
  const url = getRequestURL(event)
  // Ignore assets and API routes
  if (url.pathname.startsWith('/_nuxt') || url.pathname.startsWith('/api') || url.pathname.includes('.')) return
  // Remove trailing slash except for root
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    const target = url.pathname.replace(/\/$/, '') + (url.search || '')
    return sendRedirect(event, target, 301)
  }
})
