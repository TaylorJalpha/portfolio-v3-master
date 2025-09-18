<template>
  <PortfolioDetailLayout v-if="portfolioItem" :item="portfolioItem.data" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'portfolio-detail' })
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { fetchSanityContent } from '@/services/sanityApi'

const route = useRoute()
const portfolioItem = ref<any>(null)

onMounted(async () => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
  const query = `*[_type in [\"project\", \"caseStudy\", \"blogPost\"] && (slug.current == \"${slug}\" || _id == \"${slug}\")][0]{ _id, title, description, slug, _type, featuredImage{ asset->{_id, url} }, tags[]->{ _id, title }, published_at, external_url, content, markdown, galleryImages, pdfFile{ asset->{url,_ref} } }`
  const data = await fetchSanityContent(query)
  console.log('Project [slug] fetchSanityContent response:', data)
  portfolioItem.value = { data }
})
</script>
