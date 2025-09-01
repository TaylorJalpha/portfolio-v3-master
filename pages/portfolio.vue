<template>
  <nav class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-lg shadow-lg rounded-full px-6 py-2 flex items-center gap-4 border border-gray-200">
    <button
      @click="$router.push('/')"
      class="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 focus:outline-none"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M4.5 10.5V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0010.5 19v-4.5h3V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019.5 19v-8.5" />
      </svg>
      Home
    </button>
  </nav>
  <div class="min-h-screen py-12 bg-gradient-to-br bg-colorfrom-gray-50 via-white to-blue-50">
    <div class="px-4">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl font-extrabold mb-4 text-center via-white drop-shadow">Portfolio</h1>
        <p class="text-lg text-gray-600 mb-8 text-center max-w-2xl">A collection of my work, case studies, projects, and blog posts from over the years - showcasing my skills and expertise as a Technical Product Manager and Business Leader</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-screen items-stretch justify-items-center">
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
  </div>
</template>

<script setup lang="ts">

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
