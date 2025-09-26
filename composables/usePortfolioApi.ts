
import { fetchSanityContent } from '@/services/sanityApi'

interface PortfolioItem {
  id?: number
  _id?: string
  title: string
  description?: string
  meta_description?: string
  metadata?: any
  seo?: { description?: string }
  slug: any
  _type?: string
  content_type?: 'project' | 'caseStudy' | 'blogPost' | 'case_study' | 'blog_post'
  featuredImage?: any
  featured_image_url?: string
  tags?: Array<{ name?: string; title?: string; slug?: string; _id?: string }>
  published_at?: string
  external_url?: string
}

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

// Helper: derive a unified meta description from possible fields
export function resolveMetaDescription(item: PortfolioItem | PortfolioItemDetail | null | undefined): string {
  if (!item) return ''
  return (
    item.meta_description ||
    (typeof item.metadata === 'string' ? item.metadata : item.metadata?.description) ||
    item.seo?.description ||
    item.description ||
    ''
  )
}

// Helper: normalize a raw Sanity document into a PortfolioItemDetail shape used by UI
function normalizeItem(raw: any): PortfolioItemDetail {
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
  // Fetch portfolio items with pagination and filters
  const fetchPortfolioItems = async (params: {
    page?: number
    per_page?: number
    content_type?: string
    tag?: string
  } = {}): Promise<PortfolioResponse> => {
    // Build GROQ query for portfolio items
    let filter = ''
    if (params.content_type) filter += ` && _type == "${params.content_type}"`
    if (params.tag) filter += ` && \"${params.tag}\" in tags[]->title`
    const start = ((params.page || 1) - 1) * (params.per_page || 12)
    const end = start + (params.per_page || 12)
    // Exclude drafts so draft+published don't appear as duplicates
    const query = `*[_type in ["project", "caseStudy", "blogPost"] && !(_id in path('drafts.**'))${filter}] | order(published_at desc) [${start}...${end}] { _id, title, description, meta_description, metadata, seo{ description }, slug, _type, featuredImage{ asset->{_id, url} }, tags[]->{ _id, title }, published_at, external_url }`
    const result = await fetchSanityContent(query)
    const docs: any[] = Array.isArray(result) ? result : (result?.data || [])
    const normalized = docs.map(d => normalizeItem(d))
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
  const fetchPortfolioItem = async (idOrSlug: string): Promise<PortfolioDetailResponse> => {
    const query = `*[_type in ["project", "caseStudy", "blogPost"] && !(_id in path('drafts.**')) && (slug.current == "${idOrSlug}" || _id == "${idOrSlug}")][0]{ _id, title, description, meta_description, metadata, seo{ description }, slug, _type, featuredImage{ asset->{_id, url} }, tags[]->{ _id, title }, published_at, external_url, content, markdown, galleryImages, pdfFile{ asset->{url,_ref} } }`
    const raw = await fetchSanityContent(query)
    const data = normalizeItem(raw)
    return { data }
  }

  // Fetch all tags (stub, implement if needed)
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
