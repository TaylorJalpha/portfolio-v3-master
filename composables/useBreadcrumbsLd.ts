import { computed } from 'vue'
import type { Ref } from 'vue'
import { useHead } from '#imports'

interface HasTitleSlug {
  title?: string
  name?: string
  slug?: any
  _type?: string
}

function baseForType(t?: string) {
  if (t === 'blogPost') return '/blog'
  if (t === 'caseStudy') return '/case-study'
  if (t === 'project') return '/project'
  return ''
}

export function useBreadcrumbsLd(itemRef: Ref<HasTitleSlug | null | undefined>) {
  const jsonLd = computed(() => {
    const item = itemRef.value
    if (!item) return null
    const slug = (item.slug && (item.slug.current || item.slug)) || ''
    const name = item.title || item.name || ''
    const base = baseForType(item._type)
    const items = [
      { name: 'Home', item: '/' },
      ...(base ? [{ name: base.replace('/', '').replace('-', ' '), item: base }] : []),
      { name, item: `${base}/${slug}` }
    ]
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((it, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: it.name,
        item: it.item
      }))
    }
  })

  useHead(() => {
    if (!jsonLd.value) return {}
    return {
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonLd.value)
        }
      ]
    }
  })

  return { jsonLd }
}
