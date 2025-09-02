<template>
  <nav class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 mb-4 backdrop-blur-lg shadow-lg rounded-full px-6 py-2 flex items-center gap-4 border border-gray-600">
    <button
      @click="$router.push('/')"
      class="text-[#E63946] hover:text-[#F1FAEE] font-semibold flex items-center gap-2 focus:outline-none"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M4.5 10.5V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0010.5 19v-4.5h3V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019.5 19v-8.5" />
      </svg>
      Home
    </button>
  </nav>
  <div id="projects" class="w-full">
    <div class="flex flex-col items-center pt-4 pb-4">
        <div class="relative flex h-[400px] w-[500px] max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border px-40 pb-40 pt-8 md:pb-48 mt-32">
          <h1 class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">Portfolio</h1>
          <Globe />
          <div class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
        <p class="text-lg mb-8 text-center max-w-2xl bg-gradient-to-b mt-5 from-black to-gray-300/80 bg-clip-text text-transparent dark:from-white dark:to-slate-900/10">
          A collection of my work, case studies, projects, and blog posts from over the years - showcasing my skills and expertise as a Technical Product Manager and Business Leader
        </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full py-16">
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


definePageMeta({ layout: 'portfolio' })


const items = ref([
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A web app for managing tasks and productivity.',
    image: '/assets/css/mdrg.jpg',
    tags: ['Vue', 'Nuxt', 'Productivity']
  },
  {
    id: 2,
    title: 'Case Study: Rails Migration',
    description: 'Migrated legacy systems to Ruby on Rails.',
    image: '/assets/css/rails-svgrepo-com.svg',
    tags: ['Ruby on Rails', 'Migration']
  },
  {
    id: 3,
    title: 'Blog: Product Leadership',
    description: 'Insights on leading technical product teams.',
    image: '/assets/css/main.css',
    tags: ['Blog', 'Leadership']
  },
  {
    id: 4,
    title: 'Project Beta',
    description: 'A mobile app for tracking fitness goals.',
    image: '/assets/css/fitness-svgrepo-com.svg',
    tags: ['Flutter', 'Mobile', 'Fitness']
  }
])

const loading = ref(false)
const hasMore = ref(false)
const modalOpen = ref(false)
const selectedItem = ref<any>(null)

function loadMore() {
  // No-op for mock data
}

function openModal(item: any) {
  selectedItem.value = item
  modalOpen.value = true
}

</script>


