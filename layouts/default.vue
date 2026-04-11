<script setup lang="ts">
import { ref } from 'vue'
import { useExperiences } from '@/composables/useExperiences'
import { useTimelineAnimation } from '@/composables/useTimelineAnimation'
import Meteors from '~/components/Meteors.vue'
import AuroraBackground from '~/components/AuroraBackground.vue'
import FloatingNav from '~/components/FloatingNav.vue'
import Footer from '~/components/Footer.vue'
import BlurFade from '~/components/BlurFade.vue'
import PixelBlast from '~/components/ui/PixelBlast.vue'

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
  <!-- PreviewBanner removed -->
  <FloatingNav />
  <div class="relative w-full min-h-screen bg-black pt-8 md:pt-12">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#171717] to-[#111111] opacity-50"></div>
    <!-- Subtle dot pattern background -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute inset-0"
        style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;">
      </div>
    </div>

    <Meteors :number="30" />

    <!-- Hero Bento Grid Section - Keep original constraints -->
    <main
      class="m-auto p-4 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-cols-4 lg:gap-4 lg:max-h-[800px] z-10 text-white">
      <slot />
    </main>


    <div class="flex justify-center relative z-10">
      <svg class="animate-bounce w-8 h-8 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14m7-7l-7 7-7-7" />
      </svg>
    </div>
  </div>

  <div id="experience" class="text-white relative w-full z-10 isolate" data-section="experience">
    <!-- Aurora background section header -->
    <div class="absolute left-0 top-0 w-full -z-10 pointer-events-none overflow-hidden" style="height:790px"
      aria-hidden="true">
      <ClientOnly>
        <PixelBlast
          variant="circle"
          :pixel-size="6"
          color="#E63946"
          :pattern-scale="3"
          :pattern-density="1.2"
          :pixel-size-jitter="0.5"
          :enable-ripples="true"
          :ripple-speed="0.4"
          :ripple-thickness="0.12"
          :ripple-intensity-scale="1.5"
          :liquid="false"
          :speed="0.6"
          :edge-fade="0.25"
          :transparent="true"
          class="w-full h-full opacity-60"
        />
      </ClientOnly>
      <div class="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/20 to-neutral-950"></div>
    </div>

    <div class="m-auto max-w-6xl">
      <section class="py-20 px-4 sm:px-6 lg:px-8" role="region" aria-labelledby="experience-heading">
        <div class="text-center mb-20">
          <BlurFade in-view :delay="250">
            <h2 id="experience-heading"
              class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-slate-900/10 bg-clip-text text-center text-4xl md:text-5xl font-semibold leading-none text-transparent mb-6">
              My Professional Journey
            </h2>
          </BlurFade>
          <BlurFade in-view :delay="250">
            <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Below is a timeline view of my experience as a Sr Technical Product & Program Manager 
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
                <div class="progress-fill w-full absolute top-0 left-0 rounded-full overflow-visible" style="height:0%">
                  <div class="absolute inset-0 bg-gradient-to-b from-purple-400 via-blue-500 to-cyan-400 rounded-full">
                  </div>
                  <div
                    class="absolute inset-0 bg-gradient-to-b from-purple-400/70 via-blue-500/70 to-cyan-400/70 blur-sm rounded-full pointer-events-none">
                  </div>
                  <!-- Subtle end-cap glow (no moving dot) -->
                  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-[2]"
                    style="width:18px; height:18px; filter: blur(10px); opacity: 0.35; background: radial-gradient(closest-side, rgba(168,85,247,0.9) 0%, rgba(59,130,246,0.65) 50%, rgba(34,211,238,0.0) 75%);"
                    aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline Items - New Left-aligned Layout -->
          <div class="space-y-12 sm:space-y-16 lg:space-y-20 relative z-[10]" role="list">
            <div v-for="(experience, index) in experiences" :key="index"
              :ref="(el: Element | ComponentPublicInstance | null) => setTimelineItemRef(el, index)"
              class="relative transition-all duration-700 ease-out timeline-item-scale focus-within:ring-2 focus-within:ring-purple-500/60"
              role="listitem" :class="[
                activeIndex >= index ? 'opacity-100' : 'opacity-40'
              ]">
              <!-- Timeline Dot and Year Container - Fixed position on timeline -->
              <div class="absolute left-8 sm:left-10 lg:left-14 top-6 flex items-center z-[5]">
                <!-- Timeline Dot Container positioned on the line -->
                <div
                  class="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-300 dark:border-neutral-700 transition-all duration-500 flex-shrink-0 -translate-x-1/2"
                  :class="[
                    activeIndex >= index
                      ? 'shadow-lg scale-110'
                      : 'scale-100'
                  ]">
                  <!-- Timeline Dot (inner circle) -->
                  <div
                    class="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 transition-all duration-500"
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
                  <span
                    class="inline-block px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm lg:text-base font-bold rounded-full whitespace-nowrap transition-all duration-500 bg-neutral-800 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-300 border border-neutral-700 dark:border-neutral-700"
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
                <div
                  class="bg-darkslate-500 border-darkslate-100 rounded-lg p-4 sm:p-6 border shadow-lg transition-all duration-500 relative hover:border-primary-500 max-w-3xl lg:max-w-4xl group">
                  <!-- Mobile Year Badge (appears above content on small screens) -->
                  <div class="md:hidden mb-3 animate-fade-in-up">
                    <span
                      class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 shadow-sm"
                      :class="[
                        activeIndex >= index
                          ? 'bg-neutral-700 text-neutral-200 border-neutral-600'
                          : 'bg-neutral-800 text-neutral-400'
                      ]">
                      {{ experience.year }}
                    </span>
                  </div>
                  <div class="mb-3 sm:mb-4 lg:mb-6 text-left">
                    <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white/90 mb-1 sm:mb-2 leading-tight">{{
                      experience.title }}</h3>
                    <p class="text-sm sm:text-base lg:text-lg text-white font-semibold">{{ experience.company }}</p>
                  </div>


                  <p class="text-white mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base text-left">
                    {{ experience.description }}
                  </p>


                  <div class="mb-3 sm:mb-4 lg:mb-6 text-left">
                    <h4 class="text-xs sm:text-sm font-semibold text-white/60 mb-2 sm:mb-3 uppercase tracking-wider">Skills
                      & Technologies</h4>
                    <div class="skills-list flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2 justify-start">
                      <span v-for="skill in experience.skills" :key="skill"
                        class="skill-chip inline-flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.06] px-3 py-1.5 text-xs sm:text-sm font-medium text-white/80 transition duration-200 hover:border-white/12 hover:bg-white/[0.1]">
                        <span class="h-1.5 w-1.5 rounded-sm bg-[#E63946] flex-shrink-0"></span>
                        <span>{{ skill }}</span>
                      </span>
                      <!-- Mobile-only '+N more' indicator when there are more than 6 tags -->
                      <span v-if="experience.skills.length > 6"
                        class="more-indicator sm:hidden inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-md bg-white/5 text-neutral-300 border border-white/10">
                        +{{ experience.skills.length - 6 }} more
                      </span>
                    </div>
                  </div>

                  <!-- Key Achievements -->
                  <div class="text-left">
                    <h4
                      class="text-xs sm:text-sm font-semibold text-white/60 mb-2 sm:mb-3 lg:mb-4 uppercase tracking-wider">
                      Key Achievements</h4>
                    <ul class="space-y-1.5 sm:space-y-2 lg:space-y-3">
                      <li v-for="achievement in experience.achievements" :key="achievement"
                        class="text-xs sm:text-sm text-white flex items-start text-left">
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

                <div
                  class="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-300 dark:border-neutral-700 shadow-lg flex-shrink-0 -translate-x-1/2">
                  <div
                    class="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 rounded-full bg-neutral-300 dark:bg-neutral-600 border border-neutral-400 dark:border-neutral-600">
                  </div>
                </div>



              </div>

              <!-- Optional end card for mobile readability -->
              <div class="ml-24 sm:ml-28 lg:ml-36">
                <div class="text-gray-400 text-left">
                  <p class="text-xs sm:text-sm mt-1">Always learning, always growing — keep building. (Note to Self)
                  </p>
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


@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out both;
}

/* Limit skills to 6 on mobile; show all on sm+ */
@media (max-width: 639px) {
  .skills-list>.skill-chip:nth-of-type(n+7) {
    display: none !important;
  }
}
</style>