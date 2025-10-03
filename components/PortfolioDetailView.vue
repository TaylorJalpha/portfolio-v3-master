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
</script>

<template>
  <div class="portfolio-detail overflow-x-hidden">
    <h1 class="text-3xl font-bold mb-2">{{ item.title }}</h1>
    <p class="text-lg text-gray-500 mb-4">{{ item.description }}</p>
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
