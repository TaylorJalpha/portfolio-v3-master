<script setup lang="ts">
import { ref } from 'vue'
import { useExperiences } from '@/composables/useExperiences'
import { useTimelineAnimation } from '@/composables/useTimelineAnimation'
import Meteors from '~/components/Meteors.vue'
import AuroraBackground from '~/components/AuroraBackground.vue'
import FloatingNav from '~/components/FloatingNav.vue'
import Footer from '~/components/Footer.vue'
import BlurFade from '~/components/BlurFade.vue'


const { experiences } = useExperiences()

// New composable-driven animation (earlier reveal + smoother)
const timelineContainer = ref<HTMLDivElement>()
const progressLine = ref<HTMLDivElement>()
const { setItemRef: setTimelineItemRef, activeIndex, scrollProgress } = useTimelineAnimation({
  containerRef: timelineContainer,
  progressLineRef: progressLine,
  getItemCount: () => experiences.value.length,
  pivotRatio: 0.38
})
</script>

<template>
    <FloatingNav />
  <div class="relative w-full min-h-screen bg-black pt-8 md:pt-12">
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
                class="animate-bounce w-8 h-8 text-gray-600"
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

  <div class="text-white relative w-full z-10" data-section="experience">
    <!-- Aurora background section header -->
    <div class="absolute left-0 top-0 w-full -z-10 pointer-events-none overflow-hidden" style="height:790px" aria-hidden="true">
      <AuroraBackground :className="'h-full'" :min-height="'790px'" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950"></div>
    </div>

        <div class="m-auto max-w-6xl">
      <section class="py-20 px-4 sm:px-6 lg:px-8" role="region" aria-labelledby="experience-heading">
                <div class="text-center mb-20">
                  <BlurFade in-view :delay="250">
          <h2 id="experience-heading" class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-6">
                        My Professional Journey
                    </h2>
                    </BlurFade>
                    <BlurFade in-view :delay="250">
                      <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                          Below is an timeline view of some of my experience as a product manager with core technical experience– Test your assumptions, world...
                      </p>
                    </BlurFade>
                </div>

                <!-- Animated Timeline -->
                <div ref="timelineContainer" class="relative max-w-6xl mx-auto">
                    <div class="absolute left-8 sm:left-10 lg:left-14 top-0 bottom-0 w-0.5 z-[1]">
                      <!-- Track -->
                      <div class="w-full h-full bg-gray-700/20 relative rounded-full overflow-visible" style="min-height: 200px;">
                        <!-- Progress container -->
                        <div ref="progressLine" class="absolute inset-0 w-full rounded-full">
                          <div class="progress-fill w-full absolute top-0 left-0 rounded-full overflow-visible"
                               style="height:0%">
                            <div class="absolute inset-0 bg-gradient-to-b from-purple-400 via-blue-500 to-cyan-400 rounded-full"></div>
                            <div class="absolute inset-0 bg-gradient-to-b from-purple-400/70 via-blue-500/70 to-cyan-400/70 blur-sm rounded-full pointer-events-none"></div>
                            <!-- Subtle end-cap glow (no moving dot) -->
                            <div
                              class="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-[2]"
                              style="width:18px; height:18px; filter: blur(10px); opacity: 0.35; background: radial-gradient(closest-side, rgba(168,85,247,0.9) 0%, rgba(59,130,246,0.65) 50%, rgba(34,211,238,0.0) 75%);"
                              aria-hidden="true"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Timeline Items - New Left-aligned Layout -->
                    <div class="space-y-12 sm:space-y-16 lg:space-y-20 relative z-[10]" role="list">
            <div
                            v-for="(experience, index) in experiences"
                            :key="index"
                            :ref="(el: Element | ComponentPublicInstance | null) => setTimelineItemRef(el, index)"
              class="relative transition-all duration-700 ease-out timeline-item-scale focus-within:ring-2 focus-within:ring-purple-500/60"
              role="listitem"
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

                <!-- Year Badge (desktop) - hidden on mobile, positioned externally -->
                <div class="hidden md:block absolute right-12 sm:right-14 lg:right-16 transition-all duration-500"
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
                            <div class="timeline-card-wrapper ml-20 sm:ml-24 lg:ml-36 transition-all duration-700 z-[1] relative">
            <div class="bg-white/5 border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border transition-all duration-500 relative timeline-card-background max-w-3xl lg:max-w-4xl group"
            style="background: rgba(255, 255, 255, 0.08);">
              <!-- Dotted background for texture -->
              <div class="absolute inset-0 rounded-xl sm:rounded-2xl opacity-30 pointer-events-none"
                style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;">
              </div>
                                    <!-- Mobile Year Badge (appears above content on small screens) -->
                                    <div class="md:hidden mb-3 animate-fade-in-up">
                                      <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 shadow-sm"
                                        :class="[
                                          activeIndex >= index 
                                            ? 'bg-neutral-700 text-neutral-200 border-neutral-600' 
                                            : 'bg-neutral-800 text-neutral-400'
                                        ]">
                                        {{ experience.year }}
                                      </span>
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
                    <div class="skills-list flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2 justify-start">
                      <span
                        v-for="skill in experience.skills"
                        :key="skill"
                        class="skill-chip inline-flex items-center gap-1.5 px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md sm:rounded-lg bg-white/10 text-neutral-100 border border-white/15 font-medium hover:bg-white/15 hover:border-white/25 hover:ring-1 hover:ring-blue-400/30 transition-colors duration-200"
                      >
                        <span class="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400"></span>
                        <span>{{ skill }}</span>
                      </span>
                      <!-- Mobile-only '+N more' indicator when there are more than 6 tags -->
                      <span
                        v-if="experience.skills.length > 6"
                        class="more-indicator sm:hidden inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-md bg-white/5 text-neutral-300 border border-white/10"
                      >
                        +{{ experience.skills.length - 6 }} more
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
                           
                            <div class="absolute left-8 sm:left-10 lg:left-14 top-6 flex items-center z-[5]">
                              
                                <div class="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-300 dark:border-neutral-700 shadow-lg flex-shrink-0 -translate-x-1/2">
                                    <div class="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 rounded-full bg-neutral-300 dark:bg-neutral-600 border border-neutral-400 dark:border-neutral-600"></div>
                                </div>
                                
                                
                                
                            </div>
                            
                            <!-- Optional end card for mobile readability -->
                            <div class="ml-24 sm:ml-28 lg:ml-36">
                                <div class="text-gray-400 text-left">
                                    <p class="text-xs sm:text-sm mt-1">Always learning, always growing- Keep building, fam. (Note to Self)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

  <Footer />
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

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(6px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fadeInUp 0.5s ease-out both; }

/* Limit skills to 6 on mobile; show all on sm+ */
@media (max-width: 639px) {
  .skills-list > .skill-chip:nth-of-type(n+7) {
    display: none !important;
  }
}
</style>