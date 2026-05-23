// composables/useMarkdownWithAssets.ts
import { renderMarkdown, renderMarkdownWithAssets } from '@/lib/markdown'

interface SanityAsset {
  _id: string
  _ref?: string
  url?: string
  _type?: string
}

interface ContentWithAssets {
  content?: string
  markdown?: {
    content?: string
    assets?: SanityAsset[]
    markdownAssets?: SanityAsset[]
  }
  assets?: SanityAsset[]
  [key: string]: any // Allow additional properties for asset discovery
}

/**
 * Composable for rendering markdown content with proper Sanity asset resolution
 */
export const useMarkdownWithAssets = () => {
  
  /**
   * Process markdown content and resolve Sanity asset references
   */
  const processMarkdownContent = (item: ContentWithAssets, debug = false): string => {
    // Get the markdown content
    const markdownContent = item.markdown?.content || item.content || ''
    
    if (!markdownContent) return ''
    
    // Get assets from various possible locations
    const assets = [
      ...(item.markdown?.markdownAssets || []),
      ...(item.markdown?.assets || []),
      ...(item.assets || []),
      // Also check for inline assets in the item
      ...(extractAssetsFromItem(item) || [])
    ]
    
    // Debug mode - log information about content and assets
    if (debug) {
      if (typeof window !== 'undefined') {
        import('@/utils/debugMarkdown').then(({ debugMarkdownContent }) => {
          debugMarkdownContent(markdownContent, assets)
        })
      }
    }
    
    // If we have assets, use the enhanced renderer
    if (assets.length > 0) {
      return renderMarkdownWithAssets(markdownContent, assets)
    }
    
    // Check if content has Sanity references and warn if no assets provided
    if (hasSanityImageReferences(markdownContent)) {
      console.warn('📷 Sanity image references found in markdown but no assets provided. Images may not display correctly.')
      if (debug && typeof window !== 'undefined') {
        import('@/utils/debugMarkdown').then(({ identifyImageReferences }) => {
          const refs = identifyImageReferences(markdownContent)
          console.log('🔗 Image references found:', refs)
        })
      }
    }
    
    // Otherwise, use the standard renderer
    return renderMarkdown(markdownContent)
  }
  
  /**
   * Extract asset references from the item data structure
   */
  const extractAssetsFromItem = (item: any): SanityAsset[] => {
    const assets: SanityAsset[] = []
    
    // Check common asset fields
    if (item.featuredImage?.asset) {
      assets.push(item.featuredImage.asset)
    }
    
    if (item.galleryImages) {
      item.galleryImages.forEach((img: any) => {
        if (img.asset) {
          assets.push(img.asset)
        }
      })
    }
    
    // Look for any other asset fields in the data
    const findAssets = (obj: any, path: string = '') => {
      if (!obj || typeof obj !== 'object') return
      
      Object.entries(obj).forEach(([key, value]) => {
        if (key === 'asset' && value && typeof value === 'object') {
          const asset = value as any
          if (asset._id || asset._ref || asset.url) {
            assets.push(asset)
          }
        } else if (Array.isArray(value)) {
          value.forEach((item, index) => {
            findAssets(item, `${path}.${key}[${index}]`)
          })
        } else if (value && typeof value === 'object') {
          findAssets(value, `${path}.${key}`)
        }
      })
    }
    
    findAssets(item)
    
    return assets
  }
  
  /**
   * Check if content contains potential Sanity image references
   */
  const hasSanityImageReferences = (content: string): boolean => {
    if (!content) return false
    
    const sanityPatterns = [
      /image-[a-f0-9]{40}-\d+x\d+-[a-z]+/g, // Standard Sanity asset ID pattern
      /sanity:\/\/[^)]+/g,                    // sanity:// protocol
      /image:\/\/[^)]+/g,                     // image:// protocol  
      /_ref["\s]*:["\s]*[^"]+/g,             // _ref field patterns
    ]
    
    return sanityPatterns.some(pattern => pattern.test(content))
  }
  
  return {
    processMarkdownContent,
    extractAssetsFromItem,
    hasSanityImageReferences,
    renderMarkdown, // Re-export for convenience
    renderMarkdownWithAssets // Re-export for convenience
  }
}