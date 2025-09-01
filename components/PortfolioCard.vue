<template>
  <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:scale-[1.03] hover:shadow-2xl transition-transform duration-200 group h-full flex flex-col">
    <img :src="item.image || item.image_url" alt="Project image" class="h-44 w-full object-cover group-hover:brightness-95 transition-all duration-200" />
    <div class="p-5 flex-1 flex flex-col">
      <h3 class="text-xl font-bold mb-2 text-gray-900">{{ item.title }}</h3>
      <p class="text-gray-600 text-sm mb-3 line-clamp-3">{{ item.description || item.body }}</p>
      <div v-if="item.tags || item.tools" class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in item.tags || item.tools" :key="tag.name || tag" class="flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
          <template v-if="tag.icon_url"><img :src="tag.icon_url" alt="" class="w-4 h-4 mr-1" /></template>{{ tag.name || tag }}
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