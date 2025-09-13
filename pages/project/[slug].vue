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
  portfolioItem.value = await fetchPortfolioItem(slug)
})
</script>
