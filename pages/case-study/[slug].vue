<template>
  <PortfolioDetailLayout v-if="portfolioItem" :item="portfolioItem.data" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'portfolio-detail' })
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { usePortfolioApi } from '~/composables/usePortfolioApi'
import type { PortfolioDetailResponse } from '~/composables/usePortfolioApi'

const route = useRoute()
const { fetchPortfolioItem } = usePortfolioApi()
const portfolioItem = ref<PortfolioDetailResponse | null>(null)

onMounted(async () => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
  const result = await fetchPortfolioItem(slug)
  // Ensure pdfFile is available in the item
  if (result?.data?.pdfFile && result.data.pdfFile.asset) {
    result.data.pdfFile.asset.url = result.data.pdfFile.asset.url || result.data.pdfFile.asset._ref || ''
  }
  portfolioItem.value = result
})
</script>
