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
          <h2 class="text-2xl font-bold mb-2">{{ item.title }}</h2>
          <div v-html="item.description" class="mb-4 prose"></div>
          <div v-if="item.pdf_url" class="mb-4">
            <a :href="item.pdf_url" target="_blank" class="text-blue-600 underline">Download PDF</a>
            <iframe :src="item.pdf_url" class="w-full h-64 mt-2" v-if="embedPDF"></iframe>
          </div>
          <div v-if="item.blog_embed_html" class="mb-4">
            <div v-html="item.blog_embed_html"></div>
          </div>
          <div v-if="item.screenshots?.length" class="mb-4 grid grid-cols-2 gap-2">
            <img v-for="src in item.screenshots" :key="src" :src="src" class="rounded-lg w-full h-32 object-cover" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
defineProps<{ item: any; open: boolean }>();
const emit = defineEmits(['close']);
const embedPDF = ref(true);

function close() {
  emit('close');
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>