<template>
  <div id="projects" class="w-full min-h-screen">
    <!-- Header Section -->
    <div class="flex flex-col items-center pt-4 pb-12">
      <div class="relative flex h-[400px] w-[500px] max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border px-40 pb-40 pt-8 md:pb-48 mt-12">
          <div class="absolute inset-0">
            <Meteors :number="30" />
          </div>
          <BlurFade in-view :delay="250">
            <h1 class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">Portfolio</h1>
          </BlurFade>
          <Globe />
          <div class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
      <PortfolioNav />
        <BlurFade in-view :delay="250">
          <p class="text-lg mb-8 mt-2 pt-2 text-center max-w-2xl px-4">
            A collection of some of my work: case studies, business cases, projects, and blog posts from over the years - showcasing my skills and expertise as a PM/ Technical Product Manager and Business Leader
          </p>
        </BlurFade>
        
        <!-- Filter Buttons -->
        <BlurFade in-view :delay="300">
          <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 px-4">
            <button
              @click="filterByType('')"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                selectedFilter === '' 
                  ? 'bg-[#E63946] text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500'
              ]"
            >
              All Projects
            </button>
            <button
              @click="filterByType('project')"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                selectedFilter === 'project' 
                  ? 'bg-[#E63946] text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500'
              ]"
            >
              Projects
            </button>
            <button
              @click="filterByType('caseStudy')"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                selectedFilter === 'caseStudy' 
                  ? 'bg-[#E63946] text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500'
              ]"
            >
              Case Studies
            </button>
            <button
              @click="filterByType('blogPost')"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                selectedFilter === 'blogPost' 
                  ? 'bg-[#E63946] text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500'
              ]"
            >
              Blog Posts
            </button>
          </div>
        </BlurFade>
    </div>

    <!-- Portfolio Grid Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <!-- Results Counter -->
      <div v-if="!loading || items.length > 0" class="flex justify-between items-center mb-6">
        <p class="text-gray-400 text-sm">
          {{ items.length }}
          {{ items.length === 1 ? mappedTypeLabel(selectedFilter) : mappedTypeLabel(selectedFilter, true) }}
          {{ selectedFilter ? `in ${mappedTypeLabel(selectedFilter, true)}` : 'total' }}
        </p>
        <div v-if="hasMore" class="text-gray-500 text-sm">
          More available...
        </div>
      </div>
      
      <div class="portfolio-grid auto-rows-fr">
        <!-- Actual portfolio cards -->
        <PortfolioCard
          v-for="item in items"
          :key="item._id || item.id"
          :item="{ ...item, content_type: item._type }"
          class="portfolio-card"
          @learn-more="goToDetail"
        />
        
        <!-- Loading skeleton cards -->
        <PortfolioCardSkeleton 
          v-if="loading && items.length === 0"
          v-for="n in 6" 
          :key="`skeleton-${n}`"
        />
      </div>
      
      <!-- Empty State -->
      <div v-if="!loading && items.length === 0" class="text-center py-16">
        <div class="max-w-md mx-auto">
          <div class="mb-6">
            <svg class="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
          <p class="text-gray-500 mb-6">
            {{ selectedFilter ? 'Try adjusting your filter or' : '' }} Check back later for new projects and updates.
          </p>
          <button
            v-if="selectedFilter"
            @click="filterByType('')"
            class="px-6 py-2 bg-[#E63946] text-white rounded-lg font-semibold hover:bg-[#d62839] transition-colors"
          >
            Show All Projects
          </button>
        </div>
      </div>
      
      <!-- Loading and Load More Section -->
      <div class="flex flex-col items-center mt-12 space-y-4">
        <div v-if="loading" class="text-center py-4">
          <div class="inline-flex items-center gap-2">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading more projects...
          </div>
        </div>
        <button
          v-if="hasMore && !loading"
          @click="loadMore"
          class="px-8 py-3 bg-[#E63946] text-white rounded-lg font-semibold shadow-lg hover:bg-[#d62839] hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          Load More Projects
        </button>
      </div>
    </div>
    <PortfolioModal
      v-if="modalOpen"
      :item="selectedItem"
      :open="modalOpen"
      @close="modalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'
import { useHead } from '#imports'
import { useCanonicalUrl } from '@/composables/useCanonicalUrl'
import { computed } from 'vue'
const router = useRouter()

function goToDetail(item: any) {
  const type = item._type || item.content_type
  let base = 'project'
  if (type === 'caseStudy' || type === 'case_study') base = 'case-study'
  else if (type === 'blogPost' || type === 'blog_post') base = 'blog'
  const slug = item.slug?.current || item.slug
  router.push({ path: `/${base}/${slug}` })
}

import { fetchSanityContent } from '@/services/sanityApi'
import Meteors from '~/components/Meteors.vue'
import BlurFade from '~/components/BlurFade.vue'
import PortfolioCardSkeleton from '~/components/PortfolioCardSkeleton.vue'
import PortfolioNav from '~/components/PortfolioNav.vue'

definePageMeta({ layout: 'portfolio' })
// SEO defaults for portfolio listing page
const canonical = useCanonicalUrl('/portfolio')
const title = 'Portfolio'
const description = 'A collection of projects, case studies, and blog posts by Taylor J. Ferguson.'
const ogImage = computed(() => { try { const u = new URL(canonical); return `${u.origin}/me/me1.webp` } catch { return '/me/me1.webp' } })

useHead({
  title,
  link: [{ rel: 'canonical', href: canonical }],
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: ogImage.value },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage.value }
  ]
})


const { isPreview } = usePreview()

// Helper to build GROQ query for items
function buildPortfolioItemsQuery(params: { page?: number; per_page?: number; content_type?: string; tag?: string; preview?: boolean }) {
  let filter = ''
  if (params.content_type) filter += ` && _type == "${params.content_type}"`
  // tags are dereferenced with title; use that in filter
  if (params.tag) filter += ` && \"${params.tag}\" in tags[]->title`
  const start = ((params.page || 1) - 1) * (params.per_page || 12)
  const end = start + (params.per_page || 12)
  
  // Include drafts in preview mode, exclude them in production
  const previewMode = params.preview || isPreview.value
  const draftFilter = previewMode ? '' : ' && !(_id in path(\'drafts.**\'))'
  
  return `*[_type in [\"project\", \"caseStudy\", \"blogPost\"]${draftFilter}${filter}] | order(coalesce(datePublished, date, published_at, _createdAt) desc) [${start}...${end}] { _id, title, description, meta_description, metaDescription, seo{ description, meta_description, metaDescription }, slug, _type, featuredImage{ asset->{_id, url} }, tags[]->{ _id, title }, datePublished, date, published_at, _createdAt, external_url }`
}

// Helper to build GROQ query for a single item
function buildPortfolioItemQuery(idOrSlug: string) {
  // Exclude drafts to ensure only the published document is returned
  return `*[_type in [\"project\", \"caseStudy\", \"blogPost\"] && !(_id in path('drafts.**')) && (slug.current == \"${idOrSlug}\" || _id == \"${idOrSlug}\")][0]{ _id, title, description, meta_description, metaDescription, metadata, seo{ description, meta_description, metaDescription }, slug, _type, featuredImage, tags[]->{ _id, title }, published_at, external_url, content, markdown, galleryImages, pdfFile{ asset->{url,_ref} } }`
}

// Reactive state
const items = ref<any[]>([])
const loading = ref(false)
const hasMore = ref(false)
const modalOpen = ref(false)
const selectedItem = ref<any>(null)
const currentPage = ref(1)
const perPage = 12
const selectedFilter = ref<string>('')
const selectedTag = ref<string>('')

// Simple client-side safeguard to remove duplicates by canonical id
function dedupeById(list: any[]) {
  const seen = new Set<string>()
  return list.filter((item) => {
    const id = (item?._id as string)?.replace(/^drafts\./, '') || (item?.id as string)
    if (!id) return true
    if (seen.has(id)) return false
    seen.add(id)
    return true
  })
}

function mappedTypeLabel(type: string, plural = false) {
  if (type === 'caseStudy') return plural ? 'Case Studies' : 'Case Study'
  if (type === 'blogPost') return plural ? 'Blog Posts' : 'Blog Post'
  if (type === 'project') return plural ? 'Projects' : 'Project'
  return plural ? 'Projects' : 'Project'
}

// Load initial data
onMounted(async () => {
  await loadPortfolioItems()
})

async function loadPortfolioItems(reset = false) {
  if (loading.value) return
  
  loading.value = true
  
  try {
    if (reset) {
      currentPage.value = 1
      items.value = []
    }

    const params = {
      page: currentPage.value,
      per_page: perPage,
      ...(selectedFilter.value && { content_type: selectedFilter.value }),
      ...(selectedTag.value && { tag: selectedTag.value })
    }

    const query = buildPortfolioItemsQuery({ ...params, preview: isPreview.value })
    const response = await fetchSanityContent(query, isPreview.value)
    console.log('Portfolio fetchSanityContent response:', response)
    // Apply de-duplication as a safety net in case backend returns overlapping docs
    if (reset) {
      items.value = dedupeById(response)
    } else {
      items.value = dedupeById([...items.value, ...response])
    }
    // hasMore logic is not applicable since response is just an array
    hasMore.value = response.length === perPage
    currentPage.value++
  } catch (error) {
    console.error('Failed to load portfolio items:', error)
    // Fallback to mock data if API fails
    if (items.value.length === 0) {
      items.value = [
        {
          id: 1,
          title: 'Project Alpha',
          description: 'A web app for managing tasks and productivity.',
          featured_image_url: '/assets/css/mdrg.jpg',
          tags: [{ name: 'Vue' }, { name: 'Nuxt' }, { name: 'Productivity' }]
        },
        {
          id: 2,
          title: 'Case Study: Rails Migration',
          description: 'Migrated legacy systems to Ruby on Rails.',
          featured_image_url: '/assets/css/rails-svgrepo-com.svg',
          tags: [{ name: 'Ruby on Rails' }, { name: 'Migration' }]
        }
      ]
    }
  } finally {
    loading.value = false
  }
}

function loadMore() {
  loadPortfolioItems()
}

async function openModal(item: any) {
  try {
    // Fetch detailed item data for modal
  const query = buildPortfolioItemQuery(item.id)
  const response = await fetchSanityContent(query)
  selectedItem.value = response.data
  modalOpen.value = true
  } catch (error) {
    console.error('Failed to fetch item details:', error)
    // Fallback to basic item data
    selectedItem.value = item
    modalOpen.value = true
  }
}

// Filter functions
function filterByType(type: string) {
  selectedFilter.value = selectedFilter.value === type ? '' : type
  loadPortfolioItems(true)
}

function filterByTag(tag: string) {
  selectedTag.value = selectedTag.value === tag ? '' : tag
  loadPortfolioItems(true)
}

</script>


