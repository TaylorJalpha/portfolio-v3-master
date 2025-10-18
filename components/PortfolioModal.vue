<template>
  <teleport to="body">
    <transition name="fade" mode="out-in">
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
        <div
          v-motion="{
            initial: { scale: 0.8, opacity: 0 },
            enter: { scale: 1, opacity: 1 },
            leave: { scale: 0.8, opacity: 0 }
          }"
          :class="[
            'rounded-xl shadow-2xl relative',
            item.content_type === 'blog_post' 
              ? 'bg-gray-900 text-white max-w-4xl w-full h-[90vh] flex flex-col' 
              : 'bg-white max-w-2xl w-full'
          ]"
        >
          <button 
            :class="[
              'absolute top-4 right-4 text-2xl font-bold z-10',
              item.content_type === 'blog_post' 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-500 hover:text-gray-700'
            ]"
            @click="close"
          >
            &times;
          </button>
          
          <!-- Blog Post Layout -->
          <div v-if="item.content_type === 'blog_post'" class="h-full flex flex-col p-6">
            <!-- Title -->
            <h2 class="text-3xl font-bold mb-4 text-white">{{ item.title }}</h2>
            
            <!-- Scrollable Content -->
            <div class="flex-1 overflow-y-auto prose prose-invert max-w-none">
              <div v-html="processedContent"></div>
            </div>
          </div>
          
          <!-- Regular Project Layout -->
          <div v-else class="p-6">
            <!-- Title -->
            <h2 class="text-2xl font-bold mb-2">{{ item.title }}</h2>

            <!-- Description (Markdown or HTML) -->
            <div v-if="item.description" class="mb-4">
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
              <NuxtImg :src="featuredImageUrl" alt="Project image" class="rounded-lg max-h-48 object-contain" sizes="(max-width:640px) 320px, 640px" width="640" />
            </div>

            <!-- Project Details Paragraph -->
            <div v-if="item.details" class="mb-4">
              <p>{{ item.details }}</p>
            </div>

            <!-- Tech Used Icons -->
            <div v-if="item.techUsed?.length" class="mb-4 flex flex-wrap gap-2 items-center">
              <span v-for="tech in item.techUsed" :key="tech.name" class="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-sm">
                <NuxtImg v-if="tech.icon" :src="tech.icon" :alt="tech.name" class="w-5 h-5 mr-1" sizes="24px" width="24" />
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
              <NuxtImg v-for="src in item.screenshots" :key="src" :src="src" class="rounded-lg w-full h-32 object-cover" sizes="(max-width:640px) 320px, 800px" width="800" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useMarkdownWithAssets } from '@/composables/useMarkdownWithAssets'

const props = defineProps<{ item: any; open: boolean }>();
const emit = defineEmits(['close']);

function close() {
  emit('close');
}

// Get markdown processing functionality
const { processMarkdownContent } = useMarkdownWithAssets()

// Process the content with asset resolution
const processedContent = computed(() => {
  if (!props.item?.content) return ''
  
  // Create a temporary item structure for the markdown processor
  const itemForProcessing = {
    content: props.item.content,
    markdown: props.item.markdown,
    ...props.item // Include any other asset data
  }
  
  return processMarkdownContent(itemForProcessing)
})

// Simple markdown renderer for basic formatting (fallback)
function renderMarkdown(content: string): string {
  if (!content) return ''
  
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-100">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-100">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-5 text-white">$1</h1>')
    // Bold and italic
    .replace(/\*\*(.*)\*\*/gim, '<strong class="text-white">$1</strong>')
    .replace(/\*(.*)\*/gim, '<em class="text-gray-200">$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2" class="text-blue-400 underline hover:text-blue-300" target="_blank">$1</a>')
    // Paragraphs (double line breaks)
    .replace(/\n\n/gim, '</p><p class="mb-4 text-gray-200 leading-relaxed">')
    // Single line breaks
    .replace(/\n/gim, '<br>')
    // Code blocks (simple)
    .replace(/`([^`]+)`/gim, '<code class="bg-gray-800 text-gray-200 px-2 py-1 rounded text-sm">$1</code>')
    // Wrap in paragraph tags
    .replace(/^(.*)$/gim, '<p class="mb-4 text-gray-200 leading-relaxed">$1</p>')
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

/* scrollbar dark theme */
.prose::-webkit-scrollbar {
  width: 8px;
}

.prose::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 4px;
}

.prose::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 4px;
}

.prose::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* Ensure proper spacing for blog content */
.prose h1:first-child,
.prose h2:first-child,
.prose h3:first-child {
  margin-top: 0;
}

.prose p:last-child {
  margin-bottom: 0;
}
</style>

  