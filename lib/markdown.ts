// lib/markdown.ts
import { marked } from 'marked';
import { useSanityImageUrl } from '@/composables/useSanityImageUrl'

// Image URL optimization using Nuxt Image's provider system
function optimizeImageUrl(src: string): string {
  // Only optimize if it's an actual HTTP URL
  if (!src.startsWith('http')) return src;
  
  try {
    // Add Nuxt Image optimization parameters for better performance
    const url = new URL(src);
    
    // Add format and quality parameters for Sanity images
    if (url.hostname.includes('sanity') || url.hostname.includes('cdn.sanity.io')) {
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', 'max');
      if (!url.searchParams.has('q')) {
        url.searchParams.set('q', '80');
      }
    }
    
    return url.toString();
  } catch (error) {
    console.warn('Failed to optimize image URL:', src, error);
    return src;
  }
}

// Custom renderer for handling Sanity images in markdown
const renderer = new marked.Renderer();

// Override image rendering to handle Sanity asset references
renderer.image = function(href: string, title: string | null, text: string) {
  let src = href;
  let cssClasses = 'w-full max-w-full object-cover rounded-lg my-6';
  
  // Check if this is a Sanity asset reference
  if (href.includes('image-') || href.includes('sanity://') || href.includes('asset->')) {
    // Try to convert Sanity asset reference to URL
    try {
      // If it's a raw asset reference, create a mock asset object
      const assetObj = {
        asset: {
          _ref: href.replace('sanity://', '').replace('image://', ''),
          url: href.startsWith('http') ? href : undefined
        }
      };
      
      src = useSanityImageUrl(assetObj);
    } catch (error) {
      console.warn('Failed to process Sanity image:', href, error);
      src = href; // Fallback to original href
    }
  }
  
  // Handle different image size hints in alt text
  if (text && text.includes('|')) {
    const [altText, sizeHint] = text.split('|');
    text = altText.trim();
    
    switch (sizeHint.trim().toLowerCase()) {
      case 'small':
        cssClasses = 'w-1/2 mx-auto object-cover rounded-lg my-4';
        break;
      case 'medium':
        cssClasses = 'w-3/4 mx-auto object-cover rounded-lg my-6';
        break;
      case 'large':
      case 'full':
        cssClasses = 'w-full max-w-full object-cover rounded-lg my-8';
        break;
      case 'viewport':
        cssClasses = 'w-screen h-screen object-cover my-8 viewport-image';
        break;
    }
  }
  
  const titleAttr = title ? ` title="${title}"` : '';
  
  // Use optimized image URLs if available
  const optimizedSrc = optimizeImageUrl(src);
  
  return `<img src="${optimizedSrc}" alt="${text}" class="${cssClasses}"${titleAttr} loading="lazy" />`;
};

// Override link rendering to handle external links properly
renderer.link = function(href: string, title: string | null, text: string) {
  const isExternal = href.startsWith('http') && !href.includes(window?.location?.hostname || '');
  const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
  const titleAttr = title ? ` title="${title}"` : '';
  const linkClass = 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-200';
  
  return `<a href="${href}" class="${linkClass}"${titleAttr}${targetAttr}>${text}</a>`;
};

// Configure marked options
marked.setOptions({
  renderer: renderer,
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Convert \n to <br>
  pedantic: false
});

export function renderMarkdown(md: string): string {
  if (!md) return '';
  
  try {
    return marked.parse(md);
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return md; // Fallback to raw markdown
  }
}

// Helper function to process markdown with Sanity asset data
export function renderMarkdownWithAssets(md: string, assets?: any[]): string {
  if (!md) return '';
  
  let processedMd = md;
  
  // If assets are provided, replace asset references with actual URLs
  if (assets && assets.length > 0) {
    assets.forEach(asset => {
      if (asset._id && asset.url) {
        // Replace various possible asset reference formats
        const patterns = [
          new RegExp(`image://${asset._id}`, 'g'),
          new RegExp(`sanity://${asset._id}`, 'g'),
          new RegExp(asset._id, 'g')
        ];
        
        patterns.forEach(pattern => {
          processedMd = processedMd.replace(pattern, asset.url);
        });
      }
    });
  }
  
  return renderMarkdown(processedMd);
}
