# Sanity Markdown Images Integration Guide

## Overview
This solution addresses the challenge of displaying inline Sanity image assets within markdown content in your Nuxt 3 application.

## Problem
When using the `sanity-plugin-markdown` to write content, inline images are often referenced using Sanity asset IDs or special protocols, but these references don't automatically resolve to displayable URLs.

## Solution Components

### 1. Enhanced Markdown Renderer (`lib/markdown.ts`)
- **Custom Image Renderer**: Processes Sanity asset references in markdown
- **Asset Resolution**: Converts Sanity asset IDs to URLs using your existing `useSanityImageUrl` composable
- **Size Hints**: Supports image sizing via alt text syntax (e.g., `![Alt text|viewport]`)
- **External Link Handling**: Proper target and rel attributes for external links

#### Size Options:
- `![Alt text|small]` - 50% width, centered
- `![Alt text|medium]` - 75% width, centered  
- `![Alt text|large]` or `![Alt text|full]` - Full width
- `![Alt text|viewport]` - Viewport filling (100vw x 100vh)

### 2. Markdown with Assets Composable (`composables/useMarkdownWithAssets.ts`)
- **Asset Discovery**: Automatically finds assets from various data structure locations
- **Reference Resolution**: Maps asset IDs to URLs before rendering
- **Debug Mode**: Development logging to troubleshoot asset resolution
- **Fallback Handling**: Graceful degradation when assets aren't available

### 3. Debug Utilities (`utils/debugMarkdown.ts`)
- **Content Analysis**: Identifies various Sanity image reference patterns
- **Asset Mapping**: Shows available assets vs. references found
- **Pattern Detection**: Recognizes standard Sanity asset ID formats

### 4. Updated API Query (`composables/usePortfolioApi.ts`)
Enhanced GROQ query to fetch markdown assets:
```groq
markdown{ 
  content,
  markdownAssets[]{ asset->{_id, _ref, url} }
}
```

## Usage

### In Components
```vue
<script setup>
import { useMarkdownWithAssets } from '@/composables/useMarkdownWithAssets'

const { processMarkdownContent } = useMarkdownWithAssets()

// Process markdown with asset resolution
const processedContent = computed(() => {
  return processMarkdownContent(item.value, true) // true enables debug mode
})
</script>

<template>
  <div class="prose" v-html="processedContent" />
</template>
```

### In Sanity Markdown
```markdown
# My Blog Post

Here's a regular sized image:
![Beautiful landscape](image-abc123def456-800x600-jpg)

Here's a viewport-filling image:
![Hero image|viewport](image-def456abc123-1920x1080-jpg)

Small thumbnail:
![Profile photo|small](image-789xyz321-400x400-jpg)
```

## Debugging Image Issues

### Enable Debug Mode
Set debug mode to `true` in development:
```typescript
const processedContent = computed(() => {
  const debug = process.env.NODE_ENV === 'development'
  return processMarkdownContent(props.item, debug)
})
```

### Check Browser Console
When debug mode is enabled, you'll see:
- 📝 Raw markdown content
- 🖼️ Available assets table
- 🎯 Pattern matches found
- 🔗 Image references identified

### Common Issues & Solutions

#### 1. Images Not Displaying
**Problem**: Markdown contains asset references but images don't show
**Solution**: 
- Check browser console for debug output
- Verify assets are included in API response
- Ensure asset URLs are properly formatted

#### 2. Wrong Image Sizes
**Problem**: Images too large or small
**Solution**: Use size hints in alt text:
```markdown
![My image|viewport]  <!-- Full viewport -->
![My image|small]     <!-- 50% width -->
![My image|medium]    <!-- 75% width -->
```

#### 3. Asset Reference Format
**Problem**: Sanity uses different reference formats
**Solution**: The enhanced renderer handles multiple formats:
- Standard asset IDs: `image-abc123-800x600-jpg`
- Sanity protocol: `sanity://image-abc123`
- Direct URLs: `https://cdn.sanity.io/...`

## CSS Classes Applied

Images rendered through this system receive these classes:
- Default: `w-full max-w-full object-cover rounded-lg my-6`
- Small: `w-1/2 mx-auto object-cover rounded-lg my-4`
- Medium: `w-3/4 mx-auto object-cover rounded-lg my-6`
- Viewport: `w-screen h-screen object-cover my-8`

## Integration Status

✅ **Active in:**
- `PortfolioDetailView.vue` (for projects, case studies, blog posts)
- `PortfolioModal.vue` (for modal content)

✅ **API Updated:**
- Enhanced GROQ query to fetch markdown assets
- Expanded asset field coverage

✅ **Styling:**
- Enhanced prose.css with image styles
- Viewport-filling image support
- Responsive image handling

## Next Steps

1. **Test with Real Content**: Create a blog post with inline images to verify functionality
2. **Asset Format Check**: Examine actual Sanity markdown output to ensure proper asset resolution
3. **Performance**: Consider lazy loading for viewport-filling images
4. **SEO**: Ensure proper alt text and structured data for images

## Troubleshooting Checklist

- [ ] API returns markdown.content with image references
- [ ] Assets array is populated in API response  
- [ ] Debug mode shows pattern matches
- [ ] Browser network tab shows image requests
- [ ] Console shows no JavaScript errors
- [ ] CSS classes are applied to rendered images