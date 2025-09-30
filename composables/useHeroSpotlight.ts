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
 * Strategy: check for featured content across all types (blog posts, case studies, projects),
 * order by published date, and pick the first item. Falls back through content types if no featured content exists.
 * Drafts are excluded.
 */
export function useHeroSpotlight() {
  // We return the standard Nuxt useAsyncData result so components get
  // { data, pending, error, refresh } ergonomics.
  return useAsyncData<HeroSpotlightItem>('hero-spotlight-v2', async () => {
    try {
      // Primary query: check for featured content across all content types (blog posts, case studies, projects)
      const featuredContentQuery = `*[(_type == "blogPost" || _type == "caseStudy" || _type == "project") && !(_id in path('drafts.**')) && (isFeatured == true || featured == true || is_featured == true)]
        | order(published_at desc)[0]
        { _id, title, description, summary, shortDescription, heroDescription, overview, excerpt, tagline, meta_description, metadata, seo{ description }, slug, _type, featuredImage{ asset->{_id, url} }, published_at, isFeatured, featured, is_featured }`

      let raw = await fetchSanityContent(featuredContentQuery)

      // Fallback: latest blog post (non-featured) if no featured content
      if (!raw || (typeof raw === 'object' && Object.keys(raw).length === 0)) {
        const latestBlogQuery = `*[_type == "blogPost" && !(_id in path('drafts.**'))]
          | order(published_at desc)[0]
          { _id, title, description, summary, shortDescription, heroDescription, overview, excerpt, tagline, meta_description, metadata, seo{ description }, slug, _type, featuredImage{ asset->{_id, url} }, published_at }`
        raw = await fetchSanityContent(latestBlogQuery)
      }

      // Fallback: latest case study if no blog posts
      if (!raw || (typeof raw === 'object' && Object.keys(raw).length === 0)) {
        const latestCaseQuery = `*[_type == "caseStudy" && !(_id in path('drafts.**'))]
          | order(published_at desc)[0]
          { _id, title, description, summary, shortDescription, heroDescription, overview, excerpt, tagline, meta_description, metadata, seo{ description }, slug, _type, featuredImage{ asset->{_id, url} }, published_at }`
        raw = await fetchSanityContent(latestCaseQuery)
      }



      // Fallback: try projects if no blog posts
      if (!raw || (typeof raw === 'object' && Object.keys(raw).length === 0)) {

        const projectQuery = `*[_type == "project" && !(_id in path('drafts.**'))]
          | order(published_at desc)[0]
          { _id, title, description, summary, shortDescription, heroDescription, overview, excerpt, tagline, meta_description, metadata, seo{ description }, slug, _type, featuredImage{ asset->{_id, url} }, published_at }`
        raw = await fetchSanityContent(projectQuery)

      }

      // Fallback when there is no content in the dataset yet at all
      if (!raw || (typeof raw === 'object' && Object.keys(raw).length === 0)) {

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