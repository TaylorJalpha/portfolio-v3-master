import { computed } from 'vue'
import type { Ref } from 'vue'
import { useRuntimeConfig, useHead } from '#imports'
import { useCanonicalUrl } from '@/composables/useCanonicalUrl'
import { resolveMetaDescription } from '@/composables/usePortfolioApi'

interface ItemLike {
  _id?: string
  _type?: string
  content_type?: string
  slug?: any
  title?: string
  name?: string
  description?: string
  meta_description?: string
  metaDescription?: string
  metadata?: any
  seo?: { description?: string; meta_description?: string; metaDescription?: string }
  featuredImage?: { asset?: { url?: string } }
  published_at?: string
  _createdAt?: string
  updated_at?: string
  tags?: Array<{ title?: string; name?: string }>
}

function mapType(rawType?: string) {
  switch (rawType) {
    case 'blogPost':
      return 'BlogPosting'
    case 'caseStudy':
      return 'Report'
    case 'project':
      return 'CreativeWork'
    default:
      return 'CreativeWork'
  }
}

function pathForItem(item: ItemLike): string {
  const slug = (item.slug && (item.slug.current || item.slug)) || ''
  const t = item._type || item.content_type
  if (t === 'blogPost') return `/blog/${slug}`
  if (t === 'caseStudy') return `/case-study/${slug}`
  if (t === 'project') return `/project/${slug}`
  return `/${slug}`
}

export function useStructuredData(itemRef: Ref<ItemLike | undefined | null>) {
  const config = useRuntimeConfig()

  const jsonLd = computed(() => {
    const item = itemRef.value
    if (!item) return null

    const type = mapType(item._type || item.content_type)
    const path = pathForItem(item)
    // Build canonical URL manually to avoid calling composable inside computed
    const baseUrl = (config.public?.baseURL || config.public?.siteUrl || 'https://portfolio.taylorjferguson.com') as string
    const canonicalUrl = new URL(path, baseUrl).toString()
    const siteName = config.public?.siteName || 'Taylor J. Ferguson'
    const description = resolveMetaDescription(item as any)
    const image = item.featuredImage?.asset?.url
    const tags = (item.tags || []).map(t => t.title || t.name).filter(Boolean)

  const base: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': type,
      name: item.title || item.name,
      headline: item.title || item.name,
      description,
      url: canonicalUrl,
      ...(image ? { image } : {}),
      ...(tags.length ? { keywords: tags.join(', ') } : {}),
      author: {
        '@type': 'Person',
        name: 'Taylor J. Ferguson'
      },
      publisher: {
        '@type': 'Organization',
        name: siteName
      }
    }

    if (type === 'BlogPosting') {
      base.articleSection = tags[0]
    }

  const published = (item as any).datePublished || (item as any).date || item.published_at || (item as any)._createdAt
    if (published) base.datePublished = published
  const updated = item.updated_at || published
    if (updated) base.dateModified = updated

    return base
  })

  // Inject when available
  useHead(() => {
    if (!jsonLd.value) return {}
    return {
      script: [
        {
          type: 'application/ld+json',
          // Nuxt escapes by default; innerHTML is correct here.
          innerHTML: JSON.stringify(jsonLd.value)
        }
      ]
    }
  })

  return { jsonLd }
}
