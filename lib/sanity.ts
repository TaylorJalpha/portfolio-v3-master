// lib/sanity.ts
import { createClient } from '@sanity/client'

const config = {
  projectId: process.env.SANITY_PROJECT_ID || 'e1m6qdbk', 
  dataset: process.env.SANITY_DATASET || 'projects',
  apiVersion: '2023-09-12', // use current date
  useCdn: true,
}

export const sanityClient = createClient(config)

export async function fetchSanityPortfolioItems({ page = 1, per_page = 12, content_type = '', tag = '' } = {}) {
  // Build GROQ query
  let filter = ''
  if (content_type) filter += ` && _type == "${content_type}"`
  if (tag) filter += ` && "${tag}" in tags[].name`
  const start = (page - 1) * per_page
  const end = start + per_page
  const query = `*[_type in ["project", "caseStudy", "blogPost"]${filter}] | order(published_at desc) [${start}...${end}] {
    _id,
    title,
    description,
    slug,
  _type,
    _type,
    featured_image_url,
      tags[]->{
        _id,
        title
      },
    published_at,
    external_url
  }`
  const items = await sanityClient.fetch(query)
  // For demo, meta is mocked
  return {
    data: items,
    meta: {
      current_page: page,
      per_page,
      total_count: items.length,
      has_more: items.length === per_page
    }
  }
}

export async function fetchSanityPortfolioItem(idOrSlug: string) {
  const query = `*[_type in ["project", "caseStudy", "blogPost"] && (slug.current == "${idOrSlug}" || _id == "${idOrSlug}")][0]{
    _id,
    title,
    description,
    slug,
    _type,
    featuredImage,
    tags[]->{
      _id,
      title
    },
    published_at,
    external_url,
    content,
    markdown,
    galleryImages,
    pdfFile{
      asset->{url,_ref}
    }
  }`
  const item = await sanityClient.fetch(query)
  return { data: item }
}
