<template>
  <div class="markdown-content prose max-w-none" v-html="processedContent"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMarkdownWithAssets } from '@/composables/useMarkdownWithAssets'

interface Props {
  content?: string
  item?: any
  debug?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  debug: false
})

const { processMarkdownContent } = useMarkdownWithAssets()

// Process markdown content
const processedContent = computed(() => {
  if (props.item) {
    return processMarkdownContent(props.item, props.debug)
  }
  
  if (props.content) {
    const itemForProcessing = {
      content: props.content,
      markdown: { content: props.content }
    }
    return processMarkdownContent(itemForProcessing, props.debug)
  }
  
  return ''
})
</script>

<style scoped>
/* Ensure images are properly responsive */
.markdown-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.75rem;
  margin: 1.5rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Viewport-filling images */
.markdown-content :deep(img.viewport-image) {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  border-radius: 0;
}
</style>