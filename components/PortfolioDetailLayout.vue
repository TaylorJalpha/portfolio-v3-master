<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import { useSanityImageUrl } from '@/composables/useSanityImageUrl'

const props = defineProps<{ item: any }>()

function imageUrl(image: any) {
  return image && image.asset ? useSanityImageUrl(image) : ''
}

// Custom Portable Text components
import { h } from 'vue'

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      return value && value.asset
        ? h('img', {
            src: imageUrl(value),
            alt: value.alt || '',
            class: 'my-6 rounded-xl w-full max-h-96 object-cover'
          })
        : null
    }
  },
  marks: {
    link: ({ children, value }: any) => {
      return h(
        'a',
        {
          href: value.href,
          target: '_blank',
          rel: 'noopener',
          class: 'text-blue-600 underline'
        },
        children
      )
    }
  }
}
</script>

<template>
  <div class="portfolio-detail">
    <h1 class="text-3xl font-bold mb-2">{{ item.title }}</h1>
    <p class="text-lg text-gray-500 mb-4">{{ item.description }}</p>
    <img
      v-if="item.featuredImage && item.featuredImage.asset"
      :src="imageUrl(item.featuredImage)"
      class="mb-6 rounded-xl w-full max-h-96 object-cover"
    />
    <!-- Blog Post: blockContent -->
    <div v-if="item._type === 'blogPost' && item.content">
      <PortableText :value="item.content" :components="ptComponents" class="prose max-w-none" />
    </div>
    <!-- Case Study: markdown (if needed) -->
    <!-- ...existing caseStudy/project rendering... -->
    <div v-if="item.galleryImages && item.galleryImages.length">
      <h2 class="text-xl font-semibold mt-8 mb-2">Gallery</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img
          v-for="(img, i) in item.galleryImages"
          :key="i"
          :src="imageUrl(img)"
          class="rounded-lg w-full object-cover"
        />
      </div>
    </div>
    <div v-if="item.tags && item.tags.length" class="mt-6">
      <h3 class="text-md font-semibold mb-1">Tags:</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in item.tags"
          :key="tag._id || tag.title"
          class="px-2 py-1 bg-gray-200 rounded text-sm text-gray-700"
        >{{ tag.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose {
  max-width: 100%;
}
</style>