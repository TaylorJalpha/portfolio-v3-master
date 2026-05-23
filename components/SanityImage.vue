<template>
  <figure class="sanity-image-container">
    <NuxtImg
      v-if="imageUrl"
      :src="imageUrl"
      :alt="value.alt || value.caption || 'Image'"
      class="sanity-image"
      loading="lazy"
    />
    <figcaption 
      v-if="value?.caption" 
      class="sanity-image-caption"
    >
      {{ value.caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSanityImageUrl } from '@/composables/useSanityImageUrl'

interface SanityImageAsset {
  _ref?: string
  _type: string
  url?: string
}

interface SanityCrop {
  top: number
  bottom: number
  left: number
  right: number
}

interface SanityHotspot {
  x: number
  y: number
  height: number
  width: number
}

interface SanityImageValue {
  _type: 'image'
  asset: SanityImageAsset
  caption?: string
  alt?: string
  crop?: SanityCrop
  hotspot?: SanityHotspot
}

interface Props {
  value: SanityImageValue
}

const props = defineProps<Props>()

const imageUrl = computed(() => {
  if (!props.value?.asset) return ''
  
  // If the asset has a direct URL (from Rails API), use it
  if (props.value.asset.url) {
    return props.value.asset.url
  }
  
  // Otherwise, use the existing Sanity URL builder composable
  return useSanityImageUrl(props.value)
})
</script>

<style scoped>
.sanity-image-container {
  display: block;
  margin: 2rem 0;
  width: 100%;
}

.sanity-image {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: block;
}

.sanity-image-caption {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
  font-style: italic;
  line-height: 1.5;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .sanity-image-caption {
    color: #9ca3af;
  }
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .sanity-image-container {
    margin: 1.5rem 0;
  }
  
  .sanity-image-caption {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
}
</style>