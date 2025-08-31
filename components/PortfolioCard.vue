<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200">
    <img :src="item.image_url" alt="Project image" class="h-40 w-full object-cover" />
    <div class="p-4 flex-1 flex flex-col">
      <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
      <p class="text-gray-600 text-sm mb-2 truncate">{{ item.body }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tool in item.tools" :key="tool.name" class="flex items-center px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
          <img :src="tool.icon_url" alt="" class="w-4 h-4 mr-1" /> {{ tool.name }}
        </span>
      </div>
      <button
        class="mt-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow hover:from-blue-600 transition-all"
        @click="$emit('learnMore', item)"
      >
        <span class="animate-pulse">Learn More</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ item: any }>();
defineEmits(['learnMore']);
</script>