<template>
  <nav 
    class="relative left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg bg-black/30 shadow-xl rounded-full transition-all duration-300 opacity-95 border border-white/10"
    :class="[
      'px-3 py-2 sm:px-6 sm:py-2',
      'flex items-center justify-center',
      'gap-2 sm:gap-4',
      'w-auto max-w-[90vw] sm:max-w-none'
    ]"
  >
    <button
      @click="scrollToSection('home')"
      class="font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"
      :class="[
        'px-2 py-1.5 sm:px-3 sm:py-2',
        'gap-1 sm:gap-2',
        'text-xs sm:text-sm',
        'hover:bg-white/10 active:scale-95',
        activeSection === 'home' 
          ? 'text-[#E63946] bg-white/10 shadow-lg' 
          : 'text-gray-300 hover:text-[#F1FAEE]'
      ]"
      :aria-label="'Navigate to home section'"
      :aria-pressed="activeSection === 'home'"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
           :class="['w-4 h-4 sm:w-5 sm:h-5', 'flex-shrink-0']">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M4.5 10.5V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0010.5 19v-4.5h3V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019.5 19v-8.5" />
      </svg>
      <span class="hidden sm:inline">Home</span>
    </button>

    <div class="w-px h-4 sm:h-6 bg-gray-500/30"></div>

    <button
      @click="scrollToSection('experience')"
      class="font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"
      :class="[
        'px-2 py-1.5 sm:px-3 sm:py-2',
        'gap-1 sm:gap-2',
        'text-xs sm:text-sm',
        'hover:bg-white/10 active:scale-95',
        activeSection === 'experience' 
          ? 'text-[#E63946] bg-white/10 shadow-lg' 
          : 'text-gray-300 hover:text-[#F1FAEE]'
      ]"
      :aria-label="'Navigate to experience section'"
      :aria-pressed="activeSection === 'experience'"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
           :class="['w-4 h-4 sm:w-5 sm:h-5', 'flex-shrink-0']">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.108 48.108 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
      <span class="hidden sm:inline">Experience</span>
    </button>

    <div class="w-px h-4 sm:h-6 bg-gray-500/30"></div>

    <button
      @click="navigateToPortfolio"
      class="font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"
      :class="[
        'px-2 py-1.5 sm:px-3 sm:py-2',
        'gap-1 sm:gap-2',
        'text-xs sm:text-sm',
        'text-gray-300 hover:text-[#F1FAEE] hover:bg-white/10 active:scale-95'
      ]"
      :aria-label="'Navigate to portfolio page'"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
           :class="['w-4 h-4 sm:w-5 sm:h-5', 'flex-shrink-0']">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0-1.125.504-1.125 1.125V11.25a9 9 0 00-9-9z" />
      </svg>
      <span class="hidden sm:inline">Portfolio</span>
    </button>
    <!-- About Me Nav Item -->
    <button
      @click="navigateToAbout"
      :aria-label="'Navigate to about me page'"
      class="nav-item"
    >
      <span class="hidden sm:inline">About Me</span>
    </button>
  </nav>
</template>

<script setup>
const router = useRouter()
const isVisible = ref(true) // Always visible now
const activeSection = ref('home')

// Detect if on detail page (no experience section)
const isDetailPage = computed(() => {
  // crude check: no experience section and not home/portfolio route
  if (typeof window !== 'undefined') {
    return !document.querySelector('[data-section="experience"]')
  }
  return false
})

const goHome = () => router.push('/')
const goExperience = () => router.push('/#experience')
const goPortfolio = () => router.push('/portfolio')
const goAbout = () => router.push('/about')

const scrollToSection = (section) => {
  if (isDetailPage.value) {
    if (section === 'home') goHome()
    else if (section === 'experience') goExperience()
    return
  }
  if (section === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else if (section === 'experience') {
    const experienceSection = document.querySelector('[data-section="experience"]')
    if (experienceSection) {
      const offsetTop = experienceSection.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }
}

const navigateToPortfolio = () => {
  goPortfolio()
}
const navigateToAbout = () => {
  goAbout()
}

const handleScroll = () => {
  const scrollY = window.pageYOffset
  const viewportHeight = window.innerHeight
  
  // Nav is always visible now - removed visibility toggle
  
  // Determine active section
  const experienceSection = document.querySelector('[data-section="experience"]')
  if (experienceSection) {
    const experienceTop = experienceSection.getBoundingClientRect().top + window.pageYOffset
    const experienceBottom = experienceTop + experienceSection.offsetHeight
    
    if (scrollY >= experienceTop - 200 && scrollY < experienceBottom - 200) {
      activeSection.value = 'experience'
    } else {
      activeSection.value = 'home'
    }
  } else {
    activeSection.value = scrollY < viewportHeight ? 'home' : 'home'
  }
}

let scrollListener = null

onMounted(() => {
  nextTick(() => {
    scrollListener = () => handleScroll()
    window.addEventListener('scroll', scrollListener, { passive: true })
    handleScroll() // Initial check
  })
})

onBeforeUnmount(() => {
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener)
  }
})
</script>
