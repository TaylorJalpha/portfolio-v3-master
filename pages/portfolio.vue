<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">Portfolio</h1>
    <p class="text-gray-600 mb-4">A collection of my work, projects, and blog posts</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <PortfolioCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        @learnMore="openModal"
      />
    </div>
    <div v-if="loading" class="text-center py-4">Loading...</div>
    <button
      v-if="hasMore"
      @click="loadMore"
      class="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600"
    >
      Load More
    </button>
    <PortfolioModal
      v-if="modalOpen"
      :item="selectedItem"
      :open="modalOpen"
      @close="modalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PortfolioCard from '~/components/PortfolioCard.vue'
import PortfolioModal from '~/components/PortfolioModal.vue';

const items = ref<any[]>([])
const page = ref(1)
const pageSize = 9
const loading = ref(false)
const hasMore = ref(true)
const modalOpen = ref(false)
const selectedItem = ref<any>(null)

async function fetchItems() {
  loading.value = true
  const data = await $fetch(`/api/portfolio?page=${page.value}&page_size=${pageSize}`)
  if (data.length < pageSize) hasMore.value = false
  items.value.push(...data)
  loading.value = false
}

// Initial fetch using Nuxt's lifecycle
await fetchItems()

function loadMore() {
  page.value += 1
  fetchItems()
}

function openModal(item: any) {
  selectedItem.value = item
  modalOpen.value = true
}
</script>
