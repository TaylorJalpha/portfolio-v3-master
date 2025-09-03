// Portfolio API service for Nuxt 3
// ~/composables/usePortfolioApi.ts

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

interface PortfolioDetailResponse {
  data: PortfolioItemDetail
}

export const usePortfolioApi = () => {
  const config = useRuntimeConfig()
  const baseURL: string = (config.public?.apiBaseUrl as string) || 'http://localhost:3000'

  // Fetch portfolio items with pagination and filters
  const fetchPortfolioItems = async (params: {
    page?: number
    per_page?: number
    content_type?: string
    tag?: string
  } = {}): Promise<PortfolioResponse> => {
    try {
      const query = new URLSearchParams()
      
      if (params.page) query.append('page', params.page.toString())
      if (params.per_page) query.append('per_page', params.per_page.toString())
      if (params.content_type) query.append('content_type', params.content_type)
      if (params.tag) query.append('tag', params.tag)

      const response = await $fetch<PortfolioResponse>(
        `/api/v1/portfolio_items?${query.toString()}`,
        {
          baseURL,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )

      return response
    } catch (error) {
      console.error('Error fetching portfolio items:', error)
      throw error
    }
  }

  // Fetch single portfolio item by ID
  const fetchPortfolioItem = async (id: number): Promise<PortfolioDetailResponse> => {
    try {
      const response = await $fetch<PortfolioDetailResponse>(
        `/api/v1/portfolio_items/${id}`,
        {
          baseURL,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )

      return response
    } catch (error) {
      console.error('Error fetching portfolio item:', error)
      throw error
    }
  }

  // Fetch all tags
  const fetchTags = async () => {
    try {
      const response = await $fetch('/api/v1/tags', {
        baseURL,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      return response
    } catch (error) {
      console.error('Error fetching tags:', error)
      throw error
    }
  }

  return {
    fetchPortfolioItems,
    fetchPortfolioItem,
    fetchTags
  }
}
