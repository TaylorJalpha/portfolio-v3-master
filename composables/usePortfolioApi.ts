
import { fetchSanityContent } from '@/services/sanityApi'

interface PortfolioItem {
  id: number
  title: string
  description: string
  slug: string
  content_type: 'project' | 'case_study' | 'blog_post'
  featured_image_url?: string
  tags: Array<{ name: string; slug: string }>
  published_at: string
  external_url?: string
}

interface PortfolioItemDetail extends PortfolioItem {
  meta_description?: string
  content?: string // Markdown content
  pdf_url?: string
  gallery_images: string[]
  metadata?: Record<string, any>
  pdfFile?: {
    asset?: {
      url?: string
      _ref?: string
    }
  }
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


export interface PortfolioDetailResponse {
  data: PortfolioItemDetail
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
    if (params.tag) filter += ` && "${params.tag}" in tags[].name`
    const start = ((params.page || 1) - 1) * (params.per_page || 12)
    const end = start + (params.per_page || 12)
    const query = `*[_type in [\"project\", \"caseStudy\", \"blogPost\"]${filter}] | order(published_at desc) [${start}...${end}] { _id, title, description, slug, _type, featuredImage{ asset->{_id, url} }, tags[]->{ _id, title }, published_at, external_url }`
    const response = await fetchSanityContent(query)
    // Normalize type and slug for routing
    response.data = response.data.map((item: any) => ({
      ...item,
      type: item.content_type || item._type,
      slug: item.slug?.current || item.slug
    }))
    // Add mock meta if not present
    response.meta = response.meta || {
      current_page: params.page || 1,
      per_page: params.per_page || 12,
      total_count: response.data.length,
      has_more: response.data.length === (params.per_page || 12)
    }
    return response
  }

  // Fetch single portfolio item by ID or slug
  const fetchPortfolioItem = async (idOrSlug: string): Promise<PortfolioDetailResponse> => {
    const query = `*[_type in [\"project\", \"caseStudy\", \"blogPost\"] && (slug.current == \"${idOrSlug}\" || _id == \"${idOrSlug}\")][0]{ _id, title, description, slug, _type, featuredImage, tags[]->{ _id, title }, published_at, external_url, content, markdown, galleryImages, pdfFile{ asset->{url,_ref} } }`
    const data = await fetchSanityContent(query)
    return { data }
  }

  // Fetch all tags (stub, implement if needed)
  const fetchTags = async () => {
    return []
  }

  return {
    fetchPortfolioItems,
    fetchPortfolioItem,
    fetchTags
  }
}
