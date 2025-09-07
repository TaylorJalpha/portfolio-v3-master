<script setup lang="ts">
import Meteors from '~/components/Meteors.vue'
import AuroraBackgroundDemo from '~/components/AuroraBackgroundDemo.vue'
import FloatingNav from '~/components/FloatingNav.vue'
import Footer from '~/components/Footer.vue'
import BlurFade from '~/components/BlurFade.vue'

// Experience timeline data
const experiences = ref([
  {
    year: '2024',
    title: 'Product Management Sabbatical',
    company: 'Consultant - Los Angeles, CA',
    description: 'Took intentional time off to reassess priorities and deepen skills across product strategy, software development, AI/ML, cloud engineering, business strategy, and customer acquisition.',
    skills: ['Rails API Development', 'Vue.js', 'AWS Certification', 'Product Strategy', 'UX Design', 'Technical Discovery'],
    achievements: [
      'Completed advanced training in Rails API development and Vue.js frameworks',
      'Led freelance consulting projects for early-stage teams',
      'Pursuing AWS certification for cloud engineering expertise',
      'Focused on deepening AI/ML and business strategy knowledge'
    ]
  },
  {
    year: '2022-2024',
    title: 'Product Manager, Technical',
    company: 'Consultant - Los Angeles, CA',
    description: 'Led cross-functional teams on projects including personalization, customer acquisition, fiat-to-crypto onramp, role-based access control, Shopify re-build, UI/UX strategy, NFT marketplace optimization, and fintech API integrations.',
    skills: ['Cross-functional Leadership', 'Stripe & Plaid APIs', 'DeFi Platforms', 'Web3 Gaming', 'Vue.js', 'Rails', 'AWS', 'PostgreSQL'],
    achievements: [
      'Delivered 10% increase in transaction volume and 90%+ CSAT for 13+ months for a DeFi platform',
      'Launched Web3 gaming retention campaigns that reactivated dormant users by 4%',
      'Spearheaded full-stack B2B website redesign using Vue.js, Rails, AWS, and PostgreSQL',
      'Oversaw end-to-end product delivery including PRDs and business case validation'
    ]
  },
  {
    year: '2021-2022',
    title: 'Product Manager',
    company: 'GalacticWay - Los Angeles',
    description: 'Led development of NEAR-based NFT marketplace and drove significant user growth through strategic GTM execution and user-focused roadmap development.',
    skills: ['GTM Strategy', 'NEAR Blockchain', 'NFT Marketplace', 'User Onboarding', 'Market Research', 'Product Discovery'],
    achievements: [
      'Drove 600% increase in user growth via GTM strategy and user-focused roadmap execution',
      'Achieved $293 LTV with onboarding automation for NEAR-based NFT marketplace',
      'Conducted market research and discovery resulting in successful codebase acquisition',
      'Led pitch development and strategic product positioning'
    ]
  },
  {
    year: '2021',
    title: 'Product Manager, Consultant',
    company: 'Erupt - Los Angeles, US',
    description: 'Implemented unified Engineering-Product-Design (EPD) processes and led process improvement initiatives to streamline team workflows across the organization.',
    skills: ['Process Improvement', 'EPD Alignment', 'Stakeholder Management', 'Workshop Facilitation', 'Team Leadership'],
    achievements: [
      'Implemented unified Engineering-Product-Design (EPD) processes',
      'Secured buy-in from senior stakeholders to streamline team workflows',
      'Led workshops, presentations, and regular team check-ins for successful adoption',
      'Improved cross-functional collaboration across multiple teams'
    ]
  },
  {
    year: '2019-2020',
    title: 'Associate Product Manager, Admin',
    company: 'GoGuardian - Los Angeles',
    description: 'Collaborated with data science teams to enhance machine learning models and drove significant revenue growth by solving critical customer pain points during the COVID-19 pandemic.',
    skills: ['Machine Learning', 'Data Science', 'Product Analytics', 'User Research', 'Statistical Analysis', 'Customer Feedback Analysis'],
    achievements: [
      'Played key role in driving multimillion-dollar increase in ARR/MRR during COVID-19',
      'Collaborated with data science teams to optimize ML models and platform performance',
      'Led multiple rounds of product discovery and user research initiatives',
      'Implemented comprehensive product analytics and statistical analysis frameworks'
    ]
  },
  {
    year: '2019',
    title: 'Product & Project Manager',
    company: 'EatOS By POS Labs - Beverly Hills',
    description: 'Led development of time and attendance application using Dart/Flutter, managing cross-functional teams and implementing prioritization frameworks for capacity planning.',
    skills: ['Dart/Flutter', 'Cross-platform Development', 'System Architecture', 'UI/UX Development', 'Team Management', 'AirTable'],
    achievements: [
      'Led development of cross-platform time and attendance application',
      'Directed 3 cross-functional teams across multiple time zones (25+ members)',
      'Created prioritization framework using AirTable for capacity and velocity planning',
      'Managed full product lifecycle from discovery to full-stack engineering'
    ]
  }
])

// Timeline animation states
const timelineContainer = ref<HTMLDivElement>()
const timelineItems = ref<(HTMLDivElement | null)[]>([])
const progressLine = ref<HTMLDivElement>()
const activeIndex = ref(-1)
const scrollProgress = ref(0)

// Function to set timeline item refs
const setTimelineItemRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  timelineItems.value[index] = el as HTMLDivElement | null
}

// Scroll-based animation logic
const updateTimelineAnimation = () => {
  if (!timelineContainer.value) return

  const containerRect = timelineContainer.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const scrollTop = window.pageYOffset

  // Calculate progress based on container position with smoother transitions
  const containerTop = containerRect.top + scrollTop
  const containerHeight = containerRect.height
  const startPoint = containerTop - viewportHeight * 0.75
  const endPoint = containerTop + containerHeight - viewportHeight * 0.25

  let progress = 0
  if (scrollTop > startPoint && scrollTop < endPoint) {
    progress = (scrollTop - startPoint) / (endPoint - startPoint)
    progress = Math.max(0, Math.min(1, progress))
    // Apply smooth easing for natural animation
    progress = progress * progress * (3.0 - 2.0 * progress) // Smoothstep function
  } else if (scrollTop >= endPoint) {
    progress = 1
  }

  scrollProgress.value = progress

  // Update active item with buffer for smoother transitions
  const totalItems = experiences.value.length
  const itemProgress = progress * (totalItems + 0.3) // Add buffer for smoother transitions
  const currentItemIndex = Math.floor(itemProgress)
  activeIndex.value = Math.min(currentItemIndex, totalItems - 1)

  // Enhanced progress line animation with smooth scroll following
  if (progressLine.value) {
    const lineProgress = Math.min(progress * 1.02, 1) // Slightly ahead of content for better visual flow
    progressLine.value.style.transform = `scaleY(${lineProgress})`
    
    // Update the moving progress indicator position
    const progressIndicator = progressLine.value.querySelector('.absolute.w-3.h-3') as HTMLElement
    if (progressIndicator) {
      const indicatorPosition = Math.min(progress * 100, 100)
      progressIndicator.style.top = `${indicatorPosition}%`
      
      // Add pulsing effect when actively scrolling
      if (progress > 0 && progress < 1) {
        const pulseScale = 1 + Math.sin(Date.now() * 0.004) * 0.15
        progressIndicator.style.transform = `translateX(-50%) translateY(-50%) scale(${pulseScale})`
      } else {
        progressIndicator.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
      }
    }
    
    // Smooth opacity transitions
    if (progress > 0) {
      progressLine.value.style.opacity = '1'
    } else {
      progressLine.value.style.opacity = '0'
    }
  }

  // Animate timeline items with enhanced staggered reveal
  timelineItems.value.forEach((item, index) => {
    if (item) {
      const itemRevealPoint = (index / totalItems) - 0.15
      const itemProgress = Math.max(0, Math.min(1, (progress - itemRevealPoint) / 0.35))
      
      // Enhanced reveal animation
      const revealProgress = itemProgress < 0.1 ? 0 : 
        itemProgress > 0.9 ? 1 : 
        (itemProgress - 0.1) / 0.8 // Create a reveal window
      
      // Smooth opacity with fade-in effect
      const baseOpacity = activeIndex.value >= index ? 1 : 0.4
      const revealOpacity = Math.max(0.2, baseOpacity * (0.3 + revealProgress * 0.7))
      item.style.opacity = revealOpacity.toString()
      
      // Use margin-based positioning instead of transform to avoid stacking context
      const translateX = revealProgress > 0.3 ? 0 : 40 * (1 - revealProgress / 0.3)
      const translateY = revealProgress > 0.5 ? 0 : 25 * (1 - (revealProgress - 0.5) / 0.5)
      
      // Apply positioning using margins instead of transforms
      item.style.marginLeft = `${translateX}px`
      item.style.marginTop = `${translateY}px`
      
      // Use a subtle scale effect with CSS custom properties instead of transform
      const scaleValue = 0.95 + (revealProgress * 0.05)
      item.style.setProperty('--scale-factor', scaleValue.toString())
    }
  })
}

let scrollListener: (() => void) | null = null

onMounted(() => {
  nextTick(() => {
    updateTimelineAnimation()
    scrollListener = () => updateTimelineAnimation()
    window.addEventListener('scroll', scrollListener, { passive: true })
    window.addEventListener('resize', updateTimelineAnimation, { passive: true })
  })
})

onBeforeUnmount(() => {
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener)
    window.removeEventListener('resize', updateTimelineAnimation)
  }
})
</script>

<template>
    <FloatingNav />
    
    <!-- Hero Section with Dotted Background -->
    <div class="relative w-full min-h-screen bg-black">
        <!-- Background gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#171717] to-[#111111] opacity-50"></div>
        
        <!-- Subtle dot pattern background -->
        <div class="absolute inset-0 opacity-30">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div>
        </div>
        
        <Meteors :number="30" />
        
        <!-- Hero Bento Grid Section - Keep original constraints -->
        <main
            class="m-auto p-4 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-cols-4 lg:gap-4 lg:max-h-[800px] z-10 text-white">
            <slot />
        </main>

       
        <div class="flex justify-center relative z-10">
            <svg
                class="animate-bounce w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            >
                <path d="M12 5v14m7-7l-7 7-7-7" />
            </svg>
        </div>
    </div>

    <!-- New Section - Completely separate -->
    <div class="text-white relative w-full z-10" data-section="experience">
        <!-- Aurora background positioned absolutely behind content -->
        <div class="absolute inset-0 -z-10">
            <AuroraBackgroundDemo />
        </div>

        <div class="m-auto max-w-6xl">
            <section class="py-20 px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-20">
                  <BlurFade in-view :delay="250">
                    <h2 class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-6">
                        My Professional Journey
                    </h2>
                    </BlurFade>
                    <BlurFade in-view :delay="250">
                      <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                          Below is an timeline view of some of my experience as a product manager with core technical experience– Test your assumptions, world...
                      </p>
                    </BlurFade>
                </div>

                <!-- Custom Animated Timeline - Left-aligned Design -->
                <div ref="timelineContainer" class="relative max-w-6xl mx-auto">
                    <!-- Progress Line Container - Positioned to the left -->
                    <div class="absolute left-8 sm:left-10 lg:left-14 top-0 bottom-0 w-0.5 z-[1]">
                        <!-- Base static line (subtle background) -->
                        <div class="w-full h-full bg-gray-700/20 relative rounded-full">
                        </div>
                        
                        <!-- Animated progress line that follows scroll -->
                        <div 
                            ref="progressLine" 
                            class="absolute inset-0 w-full origin-top transition-all duration-300 ease-out overflow-hidden rounded-full"
                            style="transform: scaleY(0)"
                        >
                            <!-- Solid animated line with scroll gradient -->
                            <div class="w-full h-full bg-gradient-to-b from-purple-400 via-blue-500 to-cyan-400 relative rounded-full">
                                <!-- Enhanced glow effect -->
                                <div class="absolute inset-0 bg-gradient-to-b from-purple-400/70 via-blue-500/70 to-cyan-400/70 blur-sm rounded-full"></div>
                                
                                <!-- Moving progress indicator -->
                                <div class="absolute w-3 h-3 bg-white rounded-full left-1/2 -translate-x-1/2 shadow-xl border-2 border-purple-300 transition-all duration-300"
                                     style="top: 100%; transform: translateX(-50%) translateY(-50%);">
                                    <!-- Inner glow -->
                                    <div class="absolute inset-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Items - New Left-aligned Layout -->
                    <div class="space-y-12 sm:space-y-16 lg:space-y-20 relative z-[10]">
                        <div
                            v-for="(experience, index) in experiences"
                            :key="index"
                            :ref="el => setTimelineItemRef(el, index)"
                            class="relative transition-all duration-700 ease-out timeline-item-scale"
                            :class="[
                                activeIndex >= index ? 'opacity-100' : 'opacity-40'
                            ]"
                        >
                            <!-- Timeline Dot and Year Container - Fixed position on timeline -->
                            <div class="absolute left-8 sm:left-10 lg:left-14 top-6 flex items-center z-[5]">
                                <!-- Timeline Dot Container positioned on the line -->
                                <div class="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-300 dark:border-neutral-700 transition-all duration-500 flex-shrink-0 -translate-x-1/2"
                                    :class="[
                                        activeIndex >= index 
                                            ? 'shadow-lg scale-110' 
                                            : 'scale-100'
                                    ]">
                                    <!-- Timeline Dot (inner circle) -->
                                    <div class="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 transition-all duration-500"
                                        :class="[
                                            activeIndex >= index 
                                                ? 'bg-neutral-300 dark:bg-neutral-600 border-neutral-400 dark:border-neutral-600' 
                                                : 'bg-neutral-200 dark:bg-neutral-800'
                                        ]">
                                    </div>
                                </div>

                                <!-- Year Badge - Positioned to the left with absolute positioning to prevent overlap -->
                                <div class="absolute right-12 sm:right-14 lg:right-16 transition-all duration-500"
                                    :class="[
                                        activeIndex >= index 
                                            ? 'scale-105' 
                                            : 'scale-100'
                                    ]">
                                    <span class="inline-block px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm lg:text-base font-bold rounded-full whitespace-nowrap transition-all duration-500 bg-neutral-800 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-300 border border-neutral-700 dark:border-neutral-700"
                                        :class="[
                                            activeIndex >= index 
                                                ? 'bg-neutral-700 dark:bg-neutral-700 text-neutral-200 dark:text-neutral-200 border-neutral-600 dark:border-neutral-600' 
                                                : 'bg-neutral-800 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-400'
                                        ]">
                                        {{ experience.year }}
                                    </span>
                                </div>
                            </div>

                            <!-- Content Card Container - Properly offset from timeline with no overlap -->
                            <div class="ml-24 sm:ml-28 lg:ml-36 transition-all duration-700 z-[1] relative">
                                <div class="bg-white/5 border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#E63946]/10 hover:border-[#E63946]/30 hover:scale-[1.02] relative timeline-card-background max-w-3xl lg:max-w-4xl group"
                                     style="background: rgba(255, 255, 255, 0.08);">
                                    <!-- Modern glow effect overlay -->
                                    <div class="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#E63946]/5 via-transparent to-[#E63946]/5"></div>
                                    <!-- Add subtle background pattern instead of backdrop-blur -->
                                    <div class="absolute inset-0 rounded-xl sm:rounded-2xl opacity-30 pointer-events-none"
                                         style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;">
                                    </div>
                                    <!-- Job Title & Company -->
                                    <div class="mb-3 sm:mb-4 lg:mb-6 text-left">
                                        <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight">{{ experience.title }}</h3>
                                        <p class="text-sm sm:text-base lg:text-lg text-[#E63946] font-semibold">{{ experience.company }}</p>
                                    </div>

                                    <!-- Description -->
                                    <p class="text-gray-300 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base text-left">
                                        {{ experience.description }}
                                    </p>

                                    <!-- Skills & Technologies -->
                                    <div class="mb-3 sm:mb-4 lg:mb-6 text-left">
                                        <h4 class="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wider">Skills & Technologies</h4>
                                        <div class="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2 justify-start">
                                            <span
                                                v-for="skill in experience.skills"
                                                :key="skill"
                                                class="px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md sm:rounded-lg bg-blue-500/20 text-blue-200 border border-blue-400/30 hover:bg-blue-500/30 transition-colors duration-200"
                                            >
                                                {{ skill }}
                                            </span>
                                        </div>
                                    </div>

                                    <!-- Key Achievements -->
                                    <div class="text-left">
                                        <h4 class="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 lg:mb-4 uppercase tracking-wider">Key Achievements</h4>
                                        <ul class="space-y-1.5 sm:space-y-2 lg:space-y-3">
                                            <li 
                                                v-for="achievement in experience.achievements"
                                                :key="achievement"
                                                class="text-xs sm:text-sm text-gray-300 flex items-start text-left"
                                            >
                                                <span class="text-green-400 mt-0.5 sm:mt-1 flex-shrink-0 mr-2">▸</span>
                                                <span class="leading-relaxed">{{ achievement }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <!-- Timeline End -->
                        <div class="relative mt-12 sm:mt-16 lg:mt-20">
                            <!-- Timeline End Dot and Text Container -->
                            <div class="absolute left-8 sm:left-10 lg:left-14 top-6 flex items-center z-[5]">
                                <!-- Timeline End Dot Container positioned on the line -->
                                <div class="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-300 dark:border-neutral-700 shadow-lg flex-shrink-0 -translate-x-1/2">
                                    <div class="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 rounded-full bg-neutral-300 dark:bg-neutral-600 border border-neutral-400 dark:border-neutral-600"></div>
                                </div>
                                
                                <!-- End text positioned to the left with absolute positioning -->
                                <div class="absolute right-12 sm:right-14 lg:right-16 text-gray-400">
                                    <p class="text-sm sm:text-base lg:text-lg font-medium whitespace-nowrap">The journey continues...</p>
                                </div>
                            </div>
                            
                            <!-- Optional end card for mobile readability -->
                            <div class="ml-24 sm:ml-28 lg:ml-36">
                                <div class="text-gray-400 text-left">
                                    <p class="text-xs sm:text-sm mt-1">Always learning, always growing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- Bottom Section with Dotted Background -->
    <div class="relative w-full min-h-[200px] bg-black">
        <!-- Background gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#171717] to-[#111111] opacity-50"></div>
        
        <!-- Subtle dot pattern background -->
        <div class="absolute inset-0 opacity-30">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div>
        </div>
        
        <!-- Content container for any future bottom content -->
        <div class="relative z-10 text-white">
            <!-- Footer included within the dotted background container -->
            <Footer />
        </div>
        
    </div>
</template>

<style scoped>
/* Smooth reveal animation */
.timeline-reveal {
  animation: timelineReveal 0.8s ease-out forwards;
}

@keyframes timelineReveal {
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
}

/* Scale effect using CSS custom properties to avoid transform stacking context */
.timeline-item-scale {
  filter: brightness(calc(0.8 + (var(--scale-factor, 1) - 0.95) * 4));
  transition: filter 0.3s ease;
}

/* Enhanced card styling without backdrop-filter */
.timeline-card-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  border-radius: inherit;
  pointer-events: none;
}
</style>