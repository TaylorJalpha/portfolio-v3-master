import type { H3Event } from 'h3'

type UrlEntry = { loc: string; lastmod?: string }

async function getDynamicEntries(event: H3Event) {
  // Try to fetch latest slugs from the Rails API proxy to Sanity
  try {
    const query = `{
      "projects": *[_type == "project" && !(_id in path('drafts.**'))]{slug, _updatedAt},
      "caseStudies": *[_type == "caseStudy" && !(_id in path('drafts.**'))]{slug, _updatedAt},
      "blogPosts": *[_type == "blogPost" && !(_id in path('drafts.**'))]{slug, _updatedAt}
    }`
    // Use same backend axios config by hitting the local server endpoint
    const base = process.env.NODE_ENV === 'production'
      ? 'https://salty-thicket-78087-c98e1b01d069.herokuapp.com'
      : process.env.NODE_ENV === 'staging'
      ? 'https://fierce-cliffs-40135-8a4277dc65fb.herokuapp.com/'
      : 'http://localhost:3000'
    const resp = await $fetch<any>(`${base}/api/fetch-sanity`, { method: 'POST', body: { query } })
    const result = resp?.result || resp
    const entries: Array<{ loc: string; lastmod?: string }> = []
    const push = (arr: any[], prefix: string) => {
      for (const doc of arr || []) {
        const slug = doc?.slug?.current || doc?.slug
        if (!slug) continue
        entries.push({ loc: `${prefix}/${slug}`, lastmod: doc?._updatedAt })
      }
    }
    push(result?.projects, '/project')
    push(result?.caseStudies, '/case-study')
    push(result?.blogPosts, '/blog')
    return entries
  } catch (e) {
    // Fallback: no dynamic entries
    return []
  }
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const siteUrl = (config.public?.siteUrl || '').replace(/\/$/, '')

  const staticPaths = ['/', '/portfolio']
  const dynamicEntries = await getDynamicEntries(event)

  const urls: UrlEntry[] = [
    ...staticPaths.map<UrlEntry>((p) => ({ loc: p })),
    ...dynamicEntries
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.map(u => {
      const loc = siteUrl ? `${siteUrl}${u.loc}` : u.loc
      const lastmod = u.lastmod ? `<lastmod>${new Date(u.lastmod).toISOString()}</lastmod>` : ''
      return `<url><loc>${loc}</loc>${lastmod}</url>`
    }).join('') +
    `</urlset>`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return xml
})
