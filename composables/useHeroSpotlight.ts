import { useAsyncData } from '#app'
import { fetchSanityContent } from '@/services/sanityApi'
import { normalizeItem, resolveMetaDescription } from '@/composables/usePortfolioApi'

/**
 * Minimal view model for the hero spotlight card.
 */
export interface HeroSpotlightItem {
  title: string
  description: string
  imageUrl: string
  linkUrl: string
}

/**
 * Derive the site route for a given content type and slug.
 * - project -> /project/{slug}
 * - caseStudy/case_study -> /case-study/{slug}
 * - blogPost/blog_post -> /blog/{slug}
 */
function resolveLinkUrl(type?: string, slug?: string): string {
  const s = typeof slug === 'string' ? slug : (slug as any)?.current
  if (!s) return '/portfolio'
  const t = (type || '').toLowerCase()
  if (t.includes('case')) return `/case-study/${s}`
  if (t.includes('blog')) return `/blog/${s}`
  return `/project/${s}`
}

/**
 * Composable: fetch a single hero spotlight item from Sanity.
 * Strategy: order by the boolean "featured" flag (multiple possible field names),
 * then by published date, and pick the first item. Drafts are excluded.
 */
export function useHeroSpotlight() {
  // We return the standard Nuxt useAsyncData result so components get
  // { data, pending, error, refresh } ergonomics.
  return useAsyncData<HeroSpotlightItem>('hero-spotlight', async () => {
    try {
      // Primary query: explicitly featured case studies
      const featuredQuery = `*[_type == "caseStudy" && !(_id in path('drafts.**')) && isFeatured == true]
        | order(published_at desc)[0]
        { _id, title, description, summary, shortDescription, heroDescription, overview, excerpt, tagline, meta_description, metadata, seo{ description }, slug, _type, featuredImage{ asset->{_id, url} }, published_at }`

      let raw = await fetchSanityContent(featuredQuery)

      // Fallback: latest case study (non-featured) if none are featured
      if (!raw) {
        const latestQuery = `*[_type == "caseStudy" && !(_id in path('drafts.**'))]
          | order(published_at desc)[0]
          { _id, title, description, summary, shortDescription, heroDescription, overview, excerpt, tagline, meta_description, metadata, seo{ description }, slug, _type, featuredImage{ asset->{_id, url} }, published_at }`
        raw = await fetchSanityContent(latestQuery)
      }

      // Fallback when there is no content in the dataset yet at all
      if (!raw) {
        return {
          title: 'Check it out!',
          description: '',
          imageUrl: '', // Empty since we're using marquee
          linkUrl: '/portfolio'
        }
      }

      // Helper to resolve description based on content type specific fields
      const resolveTypeSpecificDescription = (doc: any): string => {
        const t = (doc?._type || doc?.content_type || '').toLowerCase()
        const pick = (...vals: Array<any>) => vals.find(v => typeof v === 'string' && v.trim().length > 0) || ''
        if (t.includes('case')) {
          return pick(doc.heroDescription, doc.summary, doc.shortDescription, doc.overview, doc.excerpt, doc.tagline, doc.description)
        }
        if (t.includes('blog')) {
          return pick(doc.excerpt, doc.summary, doc.shortDescription, doc.description)
        }
        // default to project-like
        return pick(doc.summary, doc.tagline, doc.shortDescription, doc.description)
      }

      // Normalize document into consistent shape
      const normalized = normalizeItem(raw)
      const typeSpecific = resolveTypeSpecificDescription(raw)
      const description = '' // Only title needed for featured posts
      const imageUrl = '' // Empty since we're using marquee instead of images
      const linkUrl = resolveLinkUrl(normalized.content_type || normalized._type, normalized.slug)

      return {
        title: normalized.title || 'Check it out!',
        description,
        imageUrl,
        linkUrl
      }
    } catch (error) {
      console.error('Error fetching hero spotlight data:', error)
      // Return a fallback when API is not available (e.g., during build)
      return {
        title: 'Check it out!',
        description: '',
        imageUrl: '',
        linkUrl: '/portfolio'
      }
    }
  })
}