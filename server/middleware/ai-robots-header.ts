export default defineEventHandler((event) => {
  // Add X-Robots-Tag header to discourage AI training while allowing search indexing
  // Note: `noai` and `noimageai` are adopted by several AI crawlers; harmless for standard SEO
  setHeader(event, 'X-Robots-Tag', 'noai, noimageai')
})
