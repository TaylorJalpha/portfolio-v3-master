// Composable: Lightweight data-access layer for portfolio content stored in Sanity.
//
// What this file does
// - Defines TypeScript interfaces for portfolio items and detail payloads
// - Provides small helpers to normalize Sanity documents into UI-friendly shapes
// - Implements fetch functions using GROQ queries to retrieve lists and single items
// - Exposes a tiny API to be consumed by pages/components
//
// Key ideas
// - Normalization: Sanity content can vary (slug object vs string, asset refs, etc.).
//   We standardize fields like slug, featured image URL, gallery images, and PDF URL.
// - Pagination: We compute list slices client-side (start...end) for now; for a true
//   total count you’d run a separate GROQ count query.
// - Safety: We exclude drafts to avoid duplicates (draft + published) in production.

import { fetchSanityContent } from '@/services/sanityApi'

/**
 * Core (list) shape used by the UI when rendering portfolio cards.
 * This is a normalized view over Sanity documents across multiple types.
 */
interface PortfolioItem {
  id?: number
  _id?: string
  title: string
  description?: string
  meta_description?: string
  metadata?: any
  seo?: { description?: string }
  // In Sanity documents, slug is usually { current: string }. We normalize to string when possible.
  slug: any
  _type?: string
  content_type?: 'project' | 'caseStudy' | 'blogPost' | 'case_study' | 'blog_post'
  featuredImage?: any
  featured_image_url?: string
  tags?: Array<{ name?: string; title?: string; slug?: string; _id?: string }>
  published_at?: string
  _createdAt?: string
  external_url?: string
}

/**
 * Detail shape that extends list item with long-form content and media.
 */
interface PortfolioItemDetail extends PortfolioItem {
  content?: string // Markdown content or rich text
  markdown?: { content?: string }
  pdf_url?: string
  gallery_images?: string[]
  galleryImages?: any[]
  pdfFile?: {
    asset?: {
      url?: string
      _ref?: string
    }
  }
  portableText?: any
}

/**
 * Response for paginated list fetches. Note: total_count is a best-effort value
 * with the current list query; for a real total count, issue a separate count(*) query.
 */
interface PortfolioResponse {
  data: PortfolioItem[]
  meta: {
    current_page: number
    per_page: number 
    total_count: number
    has_more: boolean
  }
}


export interface PortfolioDetailResponse { data: PortfolioItemDetail }

/**
 * Helper: derive a unified meta description from possible fields (in priority order).
 * Prioritizes meta_description (dedicated SEO field) over description (display content).
 * Falls back through meta_description -> seo.description -> metadata.description -> description.
 */
export function resolveMetaDescription(item: PortfolioItem | PortfolioItemDetail | null | undefined): string {
  if (!item) return ''
  return (
    item.meta_description ||
    item.seo?.description ||
    (typeof item.metadata === 'string' ? item.metadata : item.metadata?.description) ||
    item.description ||
    ''
  )
}

/**
 * Helper: normalize a raw Sanity document into the shape our UI expects.
 * - slug: ensure string via slug.current when present
 * - content_type: mirror _type to keep a single field the UI can switch on
 * - featured_image_url: surface asset URL for easy <img> usage
 * - gallery_images: standardize on an array, regardless of field naming
 * - pdfFile.asset.url: ensure URL is present; fall back to _ref if necessary
 */
export function normalizeItem(raw: any): PortfolioItemDetail {
  if (!raw) return raw
  // Normalize slug structure
  const slug = raw.slug?.current || raw.slug
  // Normalize pdfFile URL if only _ref
  if (raw?.pdfFile?.asset) {
    raw.pdfFile.asset.url = raw.pdfFile.asset.url || raw.pdfFile.asset._ref || ''
  }
  return {
    ...raw,
    slug,
    content_type: (raw._type || raw.content_type) as any,
    featured_image_url: raw.featuredImage?.asset?.url || raw.featured_image_url,
    gallery_images: raw.galleryImages || raw.gallery_images || [],
  }
}

export const usePortfolioApi = () => {
  // Get preview state
  const { isPreview } = usePreview()

  // Fetch portfolio items with pagination and filters
  // Contract
  // - Input: optional page (1-based), per_page, content_type filter, and tag filter
  // - Output: list of normalized PortfolioItem plus paging meta
  // Edge cases handled: no results, unknown content_type, missing fields in documents
  const fetchPortfolioItems = async (params: {
    page?: number
    per_page?: number
    content_type?: string
    tag?: string
    preview?: boolean
  } = {}): Promise<PortfolioResponse> => {
    // Build GROQ query for portfolio items
    // Notes on GROQ:
    // - We restrict to known types and exclude drafts to avoid duplicate draft+published documents.
    // - Tag filter checks membership by resolving tag references and comparing their title.
    // - Pagination is done via slicing [start...end].
    let filter = ''
    if (params.content_type) filter += ` && _type == "${params.content_type}"`
    if (params.tag) filter += ` && \"${params.tag}\" in tags[]->title`
    const start = ((params.page || 1) - 1) * (params.per_page || 12)
    const end = start + (params.per_page || 12)
    
    // Include drafts in preview mode, exclude them in production
    const previewMode = params.preview || isPreview.value
    const draftFilter = previewMode ? '' : ' && !(_id in path(\'drafts.**\'))'
    
    // Select only the fields the UI needs; fetch assets via asset-> projection to lift url.
    const query = `*[_type in ["project", "caseStudy", "blogPost"]${draftFilter}${filter}] | order(coalesce(published_at, _createdAt) desc) [${start}...${end}] { _id, title, description, meta_description, metadata, seo{ description }, slug, _type, featuredImage{ asset->{_id, url} }, tags[]->{ _id, title }, published_at, _createdAt, external_url }`
    const result = await fetchSanityContent(query, previewMode)
    const docs: any[] = Array.isArray(result) ? result : (result?.data || [])
    const normalized = docs.map(d => normalizeItem(d))
    // Caution: total_count here is the page length, not the true collection size.
    // If you need the real total count for pagination UI, run a separate query such as:
    // const countQuery = `count(*[_type in ["project", "caseStudy", "blogPost"] && !(_id in path('drafts.**'))${filter}])`
    // const total_count = await fetchSanityContent(countQuery)
    return {
      data: normalized as any,
      meta: {
        current_page: params.page || 1,
        per_page: params.per_page || 12,
        total_count: normalized.length, // For real total you'd run a separate count(*) query
        has_more: normalized.length === (params.per_page || 12)
      }
    }
  }

  // Fetch single portfolio item by ID or slug
  // Implementation detail:
  // - Uses [0] at the end of the GROQ to return the first match only.
  // - Matches either slug.current or exact _id. If your slugs can contain quotes
  //   or special characters, consider escaping or using query parameters.
  const fetchPortfolioItem = async (idOrSlug: string, preview?: boolean): Promise<PortfolioDetailResponse> => {
    // Include drafts in preview mode, exclude them in production
    const previewMode = preview || isPreview.value
    const draftFilter = previewMode ? '' : ' && !(_id in path(\'drafts.**\'))'
    
    // Escape any quotes in the slug to prevent query breakage
    const safeIdOrSlug = (idOrSlug || '').replace(/"/g, '\\"')

    // Standard query that works with sanity-plugin-markdown out of the box
    const query = `*[_type in ["project", "caseStudy", "blogPost"]${draftFilter} && (slug.current == "${safeIdOrSlug}" || _id == "${safeIdOrSlug}")][0]{ 
      _id, 
      title, 
      description, 
      meta_description, 
      metadata, 
      seo{ description }, 
      slug, 
      _type, 
      featuredImage{ asset->{_id, _ref, url} }, 
      tags[]->{ _id, title }, 
      published_at, 
      _createdAt,
      external_url, 
      "markdown": {
        "content": coalesce(readme.content, content.content, markdown.content, content, ""),
        "assets": coalesce(readme.assets, content.assets, markdown.assets, []),
        "markdownAssets": coalesce(readme.markdownAssets, content.markdownAssets, markdown.markdownAssets, [])
      },
      content,
      galleryImages[]{ asset->{_id, _ref, url} }, 
      pdfFile{ asset->{url,_ref} }
    }`
    const raw = await fetchSanityContent(query, previewMode)
    const data = normalizeItem(raw)
    return { data }
  }

  // Fetch all tags (stub, implement if needed)
  // Suggestion: Implement via GROQ like `*[_type == "tag"] | order(title asc){ _id, title, slug }`
  const fetchTags = async () => {
    return []
  }

  return {
    fetchPortfolioItems,
    fetchPortfolioItem,
    fetchTags,
    resolveMetaDescription,
    normalizeItem
  }
}
