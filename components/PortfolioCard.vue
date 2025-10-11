<template>
  <div class="group relative bg-[#171717] rounded-xl shadow-xl border border-gray-600 overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:border-gray-500 transition-all duration-300 h-full flex flex-col min-h-[420px] sm:min-h-[450px] lg:min-h-[440px]">
    <!-- Image Container with consistent aspect ratio -->
    <div class="relative overflow-hidden bg-gray-800">
      <img 
        :src="imageUrl(item.featuredImage)" 
        :alt="`${item.title} preview image`" 
        class="w-full h-48 sm:h-52 lg:h-48 xl:h-44 object-cover group-hover:scale-105 transition-transform duration-500" 
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <!-- Content Container with flexible layout -->
    <div class="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
      <div class="flex-1">
        <!-- Title -->
        <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white line-clamp-2 group-hover:text-[#E63946] transition-colors duration-200">
          {{ item.title }}
        </h3>
        <!-- Optional Published Date -->
        <p v-if="displayDate" class="text-xs text-gray-400 mb-2">
          {{ displayDate }}
        </p>
        
        <!-- Description -->
        <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3 flex-1">
          {{ item.description }}
        </p>
      </div>

      <!-- Tags Container -->
      <div v-if="item.tags && item.tags.length" class="mb-4">
        <div class="flex flex-wrap gap-1.5 sm:gap-2">
          <span 
            v-for="(tag, index) in item.tags.slice(0, 4)" 
            :key="tag._id" 
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

      <!-- Action Button -->
      <NuxtLink
  :to="`/${mapType(item.content_type)}/${item.slug?.current || item.slug}`"
        class="w-full px-4 py-2.5 bg-[#E63946] text-white rounded-lg font-semibold shadow-lg hover:bg-[#d62839] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2 focus:ring-offset-[#171717] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
      >
  Learn More
      </NuxtLink>
    </div>

    <!-- Hover overlay effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#E63946]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
  </div>
</template>

<script lang="ts" setup>
import { useSanityImageUrl } from '@/composables/useSanityImageUrl'
import { computed } from 'vue'
import { formatDisplayDate } from '@/lib/utils'
// Define props once and reuse within this script
const props = defineProps<{ item: any }>()

function imageUrl(image: any) {
  return image && image.asset ? useSanityImageUrl(image) : ''
}

function mapType(type: string) {
  if (type === 'caseStudy') return 'case-study'
  if (type === 'blogPost') return 'blog'
  return 'project'
}

// Conditionally derive a short date for cards
const displayDate = computed(() => {
  const raw = props.item?.datePublished || props.item?.date || props.item?.published_at
  return formatDisplayDate(raw, { variant: 'short' })
})
</script>

<style scoped>
/* Custom line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>