<script setup lang="ts">
import { computed } from 'vue'
import { useSanityImageUrl } from '@/composables/useSanityImageUrl'
import { useMarkdownWithAssets } from '@/composables/useMarkdownWithAssets'
import { PortableText } from '@portabletext/vue'
import { usePortableTextComponents } from '@/composables/usePortableTextComponents'
import PdfViewer from './PdfViewer.vue'
import { useInView } from '@/composables/useInView'
import { formatDisplayDate } from '@/lib/utils'

const props = defineProps<{ item: any }>()
const item = props.item

// base id used for per-section uids
const idBase = computed(() => (props.item?._id || props.item?.slug?.current || props.item?.slug || 'detail'))

// per-section inView composables
const titleView = useInView({ uid: `${idBase.value}-title`, once: true, rootMargin: '-30px' })
const descView = useInView({ uid: `${idBase.value}-description`, once: true, rootMargin: '-30px' })
const dateView = useInView({ uid: `${idBase.value}-date`, once: true, rootMargin: '-30px' })
const tagsView = useInView({ uid: `${idBase.value}-tags`, once: true, rootMargin: '-30px' })
const imageView = useInView({ uid: `${idBase.value}-image`, once: true, rootMargin: '-40px' })
const contentView = useInView({ uid: `${idBase.value}-content`, once: true, rootMargin: '-30px' })
const pdfView = useInView({ uid: `${idBase.value}-pdf`, once: true, rootMargin: '-30px' })
const galleryView = useInView({ uid: `${idBase.value}-gallery`, once: true, rootMargin: '-30px' })

// expose unwrapped booleans for template props (BlurFade expects boolean)
const titleIn = computed(() => !!titleView.inView.value)
const descIn = computed(() => !!descView.inView.value)
const dateIn = computed(() => !!dateView.inView.value)
const tagsIn = computed(() => !!tagsView.inView.value)
const imageIn = computed(() => !!imageView.inView.value)
const contentIn = computed(() => !!contentView.inView.value)
const pdfIn = computed(() => !!pdfView.inView.value)
const galleryIn = computed(() => !!galleryView.inView.value)

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

// Conditionally format published date using explicit Sanity fields only.
// Checks datePublished, date, then published_at; shows nothing if absent.
const formattedDate = computed(() => {
  const raw = props.item?.datePublished || props.item?.date || props.item?.published_at
  return formatDisplayDate(raw, { variant: 'long' })
})
</script>

<template>
  <div class="portfolio-detail overflow-x-hidden">
    <BlurFade
      tag="h1"
      ref="titleView.root"
      :delay="100"
      :inView="titleIn"
      class="text-3xl sm:text-4xl font-bold mb-4 text-gray-100 leading-tight"
    >
      {{ item.title }}
    </BlurFade>

    <BlurFade :delay="180" :inView="descIn">
      <p ref="descView.root" class="text-lg text-gray-400 mb-6">
        {{ item.description }}
      </p>
    </BlurFade>

    <BlurFade :delay="260" :inView="dateIn">
      <div ref="dateView.root" class="mb-2">
        <div v-if="formattedDate" class="flex items-center gap-2 text-sm text-gray-400/80 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
            <path d="M6 2a1 1 0 0 1 1 1v1h6V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 1 1 2 0v1Zm11 6H3v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z"/>
          </svg>
          <span>Published {{ formattedDate }}</span>
        </div>
      </div>
    </BlurFade>

    <div :ref="tagsView.root">
      <BlurFade :delay="340" :inView="tagsIn">
        <!-- Tags below description, styled like PortfolioCard -->
        <div v-if="item.tags && item.tags.length" class="mb-4">
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            <span
              v-for="tag in item.tags"
              :key="tag._id || tag.title"
              class="inline-flex items-center px-2 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-xs font-medium hover:bg-gray-700/50 hover:border-gray-500 transition-colors duration-200"
            >
              {{ tag.title }}
            </span>
          </div>
        </div>
      </BlurFade>
    </div>

    <div :ref="imageView.root">
      <BlurFade :delay="420" :inView="imageIn">
        <NuxtImg
          v-if="item.featuredImage && item.featuredImage.asset"
          :src="imageUrl(item.featuredImage)"
          class="mb-6 rounded-xl w-full max-w-full max-h-96 object-cover"
          sizes="(max-width:640px) 320px, 800px"
          width="1200"
          style="display: block;"
        />
      </BlurFade>
    </div>

    <div :ref="contentView.root">
      <BlurFade :delay="500" :inView="contentIn">
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
      </BlurFade>
    </div>

    <div :ref="pdfView.root">
      <BlurFade :delay="580" :inView="pdfIn">
        <!-- PDF Viewer for case studies -->
        <PdfViewer
          v-if="item.pdfFile && item.pdfFile.asset && item.pdfFile.asset.url"
          :pdfUrl="item.pdfFile.asset.url"
        />
      </BlurFade>
    </div>

    <div :ref="galleryView.root">
      <BlurFade :delay="660" :inView="galleryIn">
        <div v-if="item.galleryImages && item.galleryImages.length">
          <h2 class="text-xl font-semibold mt-8 mb-2">Gallery</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <NuxtImg
              v-for="(img, i) in item.galleryImages"
              :key="i"
              :src="imageUrl(img)"
              class="rounded-lg w-full max-w-full object-cover"
              sizes="(max-width:640px) 320px, 800px"
              width="800"
              style="display: block;"
            />
          </div>
        </div>
      </BlurFade>
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
