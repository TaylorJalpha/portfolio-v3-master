<script setup lang="ts">
import { computed } from 'vue'
import { useSanityImageUrl } from '@/composables/useSanityImageUrl'
import { useMarkdownWithAssets } from '@/composables/useMarkdownWithAssets'
import { PortableText } from '@portabletext/vue'
import { usePortableTextComponents } from '@/composables/usePortableTextComponents'
import PdfViewer from './PdfViewer.vue'

const props = defineProps<{ item: any }>()

function imageUrl(image: any) {
  return image && image.asset ? useSanityImageUrl(image) : ''
}

// Get portable text components configuration
const { portableTextComponents } = usePortableTextComponents()

// Get markdown processing functionality
const { processMarkdownContent, hasSanityImageReferences } = useMarkdownWithAssets()

// Process the markdown content with asset resolution
const processedMarkdownContent = computed(() => {
  // Enable debug mode in development
  const debug = process.env.NODE_ENV === 'development'
  return processMarkdownContent(props.item, debug)
})

// Conditionally format published date
// - Blog posts and case studies: always show (published_at fallback to _createdAt)
// - Projects: show only if published_at is explicitly set
const formattedDate = computed(() => {
  const type = props.item?._type || props.item?.content_type
  const isArticle = type === 'blogPost' || type === 'caseStudy' || type === 'blog_post' || type === 'case_study'
  let raw: string | undefined
  if (isArticle) {
    raw = props.item?.published_at || props.item?._createdAt
  } else if (type === 'project') {
    raw = props.item?.published_at
  } else {
    raw = undefined
  }
  if (!raw) return ''
  const d = new Date(raw)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>

<template>
  <div class="portfolio-detail overflow-x-hidden">
    <h1 class="text-3xl font-bold mb-2">{{ item.title }}</h1>
    <p class="text-lg text-gray-500 mb-2">{{ item.description }}</p>
    <!-- Conditional Published Date -->
    <div v-if="formattedDate" class="flex items-center gap-2 text-sm text-gray-400 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
        <path d="M6 2a1 1 0 0 1 1 1v1h6V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 1 1 2 0v1Zm11 6H3v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z"/>
      </svg>
      <span>Published {{ formattedDate }}</span>
    </div>
    <!-- Tags below description, styled like PortfolioCard -->
    <div v-if="item.tags && item.tags.length" class="mb-4">
      <div class="flex flex-wrap gap-1.5 sm:gap-2">
        <span 
          v-for="(tag, index) in item.tags.slice(0, 4)" 
          :key="tag._id || tag.title" 
          class="inline-flex items-center px-2 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-xs font-medium hover:bg-gray-700/50 hover:border-gray-500 transition-colors duration-200"
        >
          {{ tag.title }}
        </span>
        <span 
          v-if="item.tags.length > 4"
          class="inline-flex items-center px-2 py-1 bg-gray-800/30 text-gray-400 rounded-md text-xs"
        >
          +{{ item.tags.length - 4 }}
        </span>
      </div>
    </div>
    <img
      v-if="item.featuredImage && item.featuredImage.asset"
      :src="imageUrl(item.featuredImage)"
      class="mb-6 rounded-xl w-full max-w-full max-h-96 object-cover"
      style="display: block;"
    />
    <!-- Render Portable Text if available, else fallback to markdown -->
    <div v-if="item.portableText || item.markdown?.content || item.content">
      <div class="prose max-w-none">
        <PortableText
          v-if="item.portableText"
          :value="item.portableText"
          :components="portableTextComponents"
        />
        <div
          v-else
          v-html="processedMarkdownContent"
        />
      </div>
    </div>
    <!-- PDF Viewer for case studies -->
    <PdfViewer
      v-if="item.pdfFile && item.pdfFile.asset && item.pdfFile.asset.url"
      :pdfUrl="item.pdfFile.asset.url"
    />
    <div v-if="item.galleryImages && item.galleryImages.length">
      <h2 class="text-xl font-semibold mt-8 mb-2">Gallery</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img
          v-for="(img, i) in item.galleryImages"
          :key="i"
          :src="imageUrl(img)"
          class="rounded-lg w-full max-w-full object-cover"
          style="display: block;"
        />
      </div>
    </div>
  </div>
  </template>

<style scoped>
.portfolio-detail {
  overflow-x: hidden;
}
.prose {
  max-width: 100%;
}
</style>
