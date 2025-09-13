import { fetchSanityPortfolioItems, fetchSanityPortfolioItem } from '@/lib/sanity'

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
  const config = useRuntimeConfig()
    // Sanity does not need baseURL

  // Fetch portfolio items with pagination and filters
  // Fetch single portfolio item by slug
    // Fetch portfolio items from Sanity
    const fetchPortfolioItems = async (params: {
      page?: number
      per_page?: number
      content_type?: string
      tag?: string
    } = {}): Promise<PortfolioResponse> => {
      const response = await fetchSanityPortfolioItems(params)
      // Normalize type and slug for routing
      response.data = response.data.map((item: any) => ({
        ...item,
        type: item.content_type || item._type,
        slug: item.slug?.current || item.slug
      }))
      return response
    }

    // Fetch single portfolio item by ID or slug from Sanity
    const fetchPortfolioItem = async (idOrSlug: string): Promise<PortfolioDetailResponse> => {
      return await fetchSanityPortfolioItem(idOrSlug)
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
