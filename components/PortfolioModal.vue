<template>
  <teleport to="body">
    <transition name="fade" mode="out-in">
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div
          v-motion="{
            initial: { scale: 0.8, opacity: 0 },
            enter: { scale: 1, opacity: 1 },
            leave: { scale: 0.8, opacity: 0 }
          }"
          class="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 relative"
        >
          <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" @click="close">
            &times;
          </button>
          <!-- Title -->
          <h2 class="text-2xl font-bold mb-2">{{ item.title }}</h2>

          <!-- Description (Markdown or HTML) -->
          <div v-if="item.content && item.content_type === 'blog_post'" class="mb-4 prose max-w-none">
            <div v-html="renderMarkdown(item.content)"></div>
          </div>
          <div v-else-if="item.description" class="mb-4">
            <p class="text-gray-700">{{ item.description }}</p>
          </div>

          <!-- PDF Support for Case Studies -->
          <div v-if="item.pdf_url && item.content_type === 'case_study'" class="mb-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-2">Case Study Document</h3>
              <p class="text-sm text-gray-600 mb-3">View the complete case study in PDF format</p>
              <iframe 
                :src="`${item.pdf_url}#toolbar=0&navpanes=0&scrollbar=0`" 
                class="w-full h-96 border border-gray-300 rounded"
                title="Case Study PDF"
              ></iframe>
              <p class="text-xs text-gray-500 mt-2">
                Note: PDF viewing and downloading is disabled for security purposes
              </p>
            </div>
          </div>

          <!-- Featured Image -->
          <div v-if="featuredImageUrl" class="mb-4 flex justify-center">
            <img :src="featuredImageUrl" alt="Project image" class="rounded-lg max-h-48 object-contain" />
          </div>

          <!-- Project Details Paragraph -->
          <div v-if="item.details" class="mb-4">
            <p>{{ item.details }}</p>
          </div>

          <!-- Tech Used Icons -->
          <div v-if="item.techUsed?.length" class="mb-4 flex flex-wrap gap-2 items-center">
            <span v-for="tech in item.techUsed" :key="tech.name" class="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-sm">
              <img v-if="tech.icon" :src="tech.icon" :alt="tech.name" class="w-5 h-5 mr-1" />
              {{ tech.name }}
            </span>
          </div>

          <!-- Key Achievements Section -->
          <div v-if="item.achievements?.length" class="mb-4">
            <h3 class="text-lg font-semibold mb-2">Key Achievements</h3>
            <ul class="list-disc pl-5">
              <li v-for="ach in item.achievements" :key="ach">{{ ach }}</li>
            </ul>
          </div>

          <!-- Blog Embed HTML -->
          <div v-if="item.blog_embed_html" class="mb-4">
            <div v-html="item.blog_embed_html"></div>
          </div>

          <!-- Screenshots -->
          <div v-if="item.screenshots?.length" class="mb-4 grid grid-cols-2 gap-2">
            <img v-for="src in item.screenshots" :key="src" :src="src" class="rounded-lg w-full h-32 object-cover" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
// Import a simple markdown renderer or use a lightweight library
// For now, we'll use a simple function to handle basic markdown

const props = defineProps<{ item: any; open: boolean }>();
const emit = defineEmits(['close']);

function close() {
  emit('close');
}

// Simple markdown renderer for basic formatting
function renderMarkdown(content: string): string {
  if (!content) return ''
  
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>')
    // Bold and italic
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2" class="text-blue-600 underline" target="_blank">$1</a>')
    // Line breaks
    .replace(/\n/gim, '<br>')
    // Code blocks (simple)
    .replace(/`([^`]+)`/gim, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
}

// Computed property for featured image
const featuredImageUrl = computed(() => {
  return props.item?.featured_image_url || props.item?.image
})

// Computed property for gallery images
const galleryImages = computed(() => {
  return props.item?.gallery_images || props.item?.screenshots || []
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>