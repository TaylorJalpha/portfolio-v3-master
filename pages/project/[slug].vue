<template>
  <PortfolioDetailView v-if="data" :item="data" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'portfolio-detail' })
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useHead } from '#imports'
import { usePortfolioApi, resolveMetaDescription } from '@/composables/usePortfolioApi'
import { useCanonicalUrl } from '@/composables/useCanonicalUrl'
import { useStructuredData } from '@/composables/useStructuredData'
import { useBreadcrumbsLd } from '@/composables/useBreadcrumbsLd'

const route = useRoute()
const slugParam = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug as string
const { fetchPortfolioItem } = usePortfolioApi()

const { data } = await useAsyncData(`project-${slugParam}`,( ) => fetchPortfolioItem(slugParam).then(r => r.data))

const metaDescription = computed(() => resolveMetaDescription(data.value))
const canonical = useCanonicalUrl()
const ogImage = computed(() => data.value?.featuredImage?.asset?.url || '')

useHead(() => ({
  title: data.value?.title ? `${data.value.title}` : 'Project',
  link: [ { rel: 'canonical', href: canonical } ],
  meta: [
    { name: 'description', content: metaDescription.value },
    { property: 'og:title', content: data.value?.title || '' },
    { property: 'og:description', content: metaDescription.value },
    { property: 'og:url', content: canonical },
    ogImage.value ? { property: 'og:image', content: ogImage.value } : {},
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    ogImage.value ? { name: 'twitter:image', content: ogImage.value } : {}
  ].filter(Boolean as any)
}))

useStructuredData(data)
useBreadcrumbsLd(data)
</script>
