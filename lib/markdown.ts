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
  const hostname = (typeof window !== 'undefined' && window.location?.hostname) ? window.location.hostname : '';
  const isExternal = href.startsWith('http') && (hostname ? !href.includes(hostname) : true);
  const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
  const titleAttr = title ? ` title="${title}"` : '';
  const linkClass = 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-200';
  
  return `<a href="${href}" class="${linkClass}"${titleAttr}${targetAttr}>${text}</a>`;
};

// Override table rendering to ensure responsive layout and styling hooks
renderer.table = function(header: string, body: string) {
  const tableHtml = `
    <div class="md-table-wrapper">
      <table class="md-table">
        <thead>${header}</thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
  return tableHtml;
};

// Configure marked options
marked.setOptions({
  renderer: renderer,
  gfm: true, // GitHub Flavored Markdown
  breaks: false, // Don't convert single \n to <br> as it interferes with lists
  pedantic: false
});

// Utilities for TOC generation and heading anchors
type HeadingItem = { text: string; level: number; id: string };

function slugify(text: string, counts: Map<string, number>): string {
  const base = text
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/g, '') // strip HTML tags
    .replace(/&[a-z]+;/g, '') // strip HTML entities
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  const prev = counts.get(base) || 0;
  counts.set(base, prev + 1);
  return prev === 0 ? base : `${base}-${prev}`;
}

function buildToc(headings: HeadingItem[]): string {
  if (!headings.length) return '';
  // Prefer H2-H4; if none exist, fall back to all levels
  const primary = headings.filter(h => h.level >= 2 && h.level <= 4);
  const list = primary.length ? primary : headings;
  let html = '<nav class="md-toc"><div class="md-toc-title">On this page</div>';
  let currentLevel = 0;
  list.forEach(h => {
    const level = h.level;
    if (currentLevel === 0) {
      html += '<ul class="md-toc-list">';
      currentLevel = level;
    }
    while (level > currentLevel) {
      html += '<ul class="md-toc-sub">';
      currentLevel++;
    }
    while (level < currentLevel) {
      html += '</ul>';
      currentLevel--;
    }
    html += `<li><a href="#${h.id}">${h.text}</a></li>`;
  });
  while (currentLevel > 0) {
    html += '</ul>';
    currentLevel--;
  }
  html += '</nav>';
  return html;
}

export function renderMarkdown(md: string): string {
  if (!md) return '';

  try {
    // Detect TOC placeholders and mark them with a unique token
    const tocRegex = /(^|\n)\s*(\[\[toc\]\]|\[toc\]|<!--\s*toc\s*-->)/gi;
    const TOC_MARKER = '::TOC_MARKER::';
    const hasToc = tocRegex.test(md);
    const src = hasToc ? md.replace(tocRegex, `$1${TOC_MARKER}`) : md;

    // Capture headings per-render and ensure unique slugs
    const headings: HeadingItem[] = [];
    const slugCounts = new Map<string, number>();

    // Create a per-call renderer that reuses base overrides for image/link/table
    const localRenderer = new marked.Renderer();
    // Reuse global overrides
    localRenderer.image = renderer.image.bind(renderer) as any;
    localRenderer.link = renderer.link.bind(renderer) as any;
    localRenderer.table = renderer.table.bind(renderer) as any;
    // Override headings to add ids and capture for TOC
    (localRenderer as any).heading = function(text: string, level: number) {
      const id = slugify(text, slugCounts);
      headings.push({ text, level, id });
      return `<h${level} id="${id}">${text}</h${level}>`;
    };

    // Parse with the local renderer
    let html = marked.parse(src, { renderer: localRenderer as any }) as unknown as string;

    // Inject TOC HTML where the marker appears
    if (hasToc) {
      const tocHtml = buildToc(headings);
      html = html.replaceAll(TOC_MARKER, tocHtml);
    }

    // Sanitize HTML output for safe rendering
    if (typeof window !== 'undefined') {
      // Use DOMPurify in browser
      let domPurifyInstance;
      if (typeof (globalThis as any).DOMPurify !== 'undefined') {
        domPurifyInstance = (globalThis as any).DOMPurify;
      } else if ((window as any)['DOMPurify']) {
        domPurifyInstance = (window as any)['DOMPurify'];
      }
      if (domPurifyInstance) {
        html = domPurifyInstance.sanitize(html, { USE_PROFILES: { html: true } });
      }
    } else {
      // SSR: require dompurify and jsdom
      try {
        // @ts-ignore
        const createDOMPurify = require('dompurify');
        // @ts-ignore
        const { JSDOM } = require('jsdom');
        const window = new JSDOM('').window;
        const DOMPurify = createDOMPurify(window);
        html = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
      } catch (e) {
        // Fallback: return unsanitized HTML
      }
    }
    return html;
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
