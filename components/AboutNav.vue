<template>
  <nav 
    class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg bg-white/30 shadow-xl rounded-full transition-all duration-300 opacity-95 border border-black/10"
    :class="[
      'px-3 py-2 sm:px-6 sm:py-2',
      'flex items-center justify-center',
      'gap-2 sm:gap-4',
      'w-auto max-w-[90vw] sm:max-w-none'
    ]"
  >
    <button
      @click="navigateToHome"
      class="font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"
      :class="[
        'px-2 py-1.5 sm:px-3 sm:py-2',
        'gap-1 sm:gap-2',
        'text-xs sm:text-sm',
        'text-blue-600 bg-white/10 shadow-lg hover:text-blue-900 hover:bg-white/15 active:scale-95'
      ]"
      :aria-label="'Navigate to home page'"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
           :class="['w-4 h-4 sm:w-5 sm:h-5', 'flex-shrink-0']">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M4.5 10.5V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0010.5 19v-4.5h3V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019.5 19v-8.5" />
      </svg>
      <span class="hidden sm:inline">Home</span>
    </button>

    <div class="w-px h-4 sm:h-6 bg-gray-500/30"></div>

    <button
      @click="scrollToTop"
      class="font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"
      :class="[
        'px-2 py-1.5 sm:px-3 sm:py-2',
        'gap-1 sm:gap-2',
        'text-xs sm:text-sm',
        'text-gray-700 hover:text-blue-900 hover:bg-white/10 active:scale-95'
      ]"
      :aria-label="'Navigate to about top'"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
           :class="['w-4 h-4 sm:w-5 sm:h-5', 'flex-shrink-0']">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0-1.125.504-1.125 1.125V11.25a9 9 0 00-9-9z" />
      </svg>
      <span class="hidden sm:inline">About</span>
    </button>
  </nav>
</template>

<script setup>
const router = useRouter()

const navigateToHome = () => {
  router.push('/')
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
