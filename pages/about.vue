<template>
  <section class="relative overflow-visible">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <Meteors :number="28" />
    </div>

  <div class="relative mx-auto max-w-5xl px-6 pb-12 pt-28 sm:pt-32 lg:pt-36">
      <!-- Hero / Intro -->
  <header class="space-y-10 sm:space-y-12 max-w-4xl relative z-10 pb-6 md:pb-8" aria-labelledby="about-hero-title">
        <BlurFade :delay="120" class="inline-block">
          <AnimatedGradientText class="text-xs tracking-wide uppercase">About Me</AnimatedGradientText>
        </BlurFade>
        <BlurFade :delay="180">
          <h1 id="about-hero-title" class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-neutral-900 dark:text-white max-w-3xl">
            Hasten growth and unleash innovation
          </h1>
        </BlurFade>
        <BlurFade :delay="260">
          <div class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_280px] items-start gap-6 md:gap-8">
            <p class="max-w-2xl text-lg sm:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 m-0">
              A Product & Technical Program Manager with a passion for driving product strategy, discovery, and execution. With a background spanning industries and business models, I specialize in transforming complex challenges into actionable roadmaps that accelerate growth and drive revenue.
              <br><br>
              

            </p>
            <div class="md:justify-self-end">
              <GrowthMiniChart :width="280" :height="120" :start-year="2018" :show-years="true" />
            </div>
          </div>
        </BlurFade>
        <BlurFade :delay="300">
          <div class="mt-6 md:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <button @click="scrollToBento" class="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-white/85 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]/50">
              <span class="relative z-10 flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#E63946] animate-pulse"></span>
                Product Approach
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M3 12h18" />
                </svg>
              </span>
              <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#667eea]/30 via-[#E63946]/20 to-transparent blur transition" />
            </button>
            <button @click="scrollToAbout" class="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-white/85 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]/50">
              <span class="relative z-10 flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#E63946] animate-pulse"></span>
                 More About Me
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M3 12h18" />
                </svg>
              </span>
              <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#667eea]/30 via-[#E63946]/20 to-transparent blur transition" />
            </button>
          </div>
        </BlurFade>
      </header>
  <!-- Divider -->
  <div class="mt-12 md:mt-16 h-px w-full bg-white/10" />
    </div>
    <div class="relative mx-auto max-w-5xl px-6">
      <AboutMarquee :forceMotion="true" />
    </div>
    <BentoGrid />
  <div class="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 pb-32">
      <!-- Section Header -->
      <BlurFade :delay="300">
        <div id="more-about-section" class="mt-16 md:mt-24 text-center">
          <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-white/60">
            Profile
            <span class="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#667eea] to-[#E63946]" aria-hidden="true"></span>
            Spotlight
          </span>
          <h2 class="mt-5 text-3xl sm:text-4xl font-semibold sm:font-bold tracking-tight text-white/95 leading-tight">
           More <AuroraText>About Me</AuroraText>
          </h2>
        </div>
      </BlurFade>
      <BlurFade :delay="340">
        <p class="mx-auto mt-6 max-w-3xl text-center text-lg sm:text-xl leading-relaxed text-[#9CA3AF]">
          A snapshot of the product craft, motivations, and operating principles that shape how I partner with teams and guide work from idea to measurable impact.
        </p>
      </BlurFade>

      <section id="about-content" class="mt-8 md:mt-12 relative z-10">
        <div class="grid gap-6 md:gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1.15fr)] xl:gap-16 items-center">
          <div class="order-2 lg:order-1 -mt-4 sm:-mt-6 md:mt-0">
            <AuroraBackground
              class-name="relative flex h-full min-h-[320px] md:min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 dark:bg-white/[0.04]"
              min-height="360px"
              :show-radial-gradient="false"
            >
              <img
                src="/me/me3.webp"
                alt="Taylor J. Ferguson leading product collaboration"
                class="relative z-10 h-full w-full object-cover object-center mix-blend-luminosity opacity-90"
                loading="lazy"
              />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f172a]/40 via-transparent to-[#667eea]/20" aria-hidden="true" />
            </AuroraBackground>
          </div>
          <div class="order-1 lg:order-2 space-y-6">
            <BlurFade v-for="(para, i) in narrative" :key="i" :delay="320 + i*240" class="will-change-transform">
              <p class="text-neutral-100/85 leading-relaxed text-lg sm:text-xl">{{ para }}</p>
            </BlurFade>
          </div>
        </div>
      </section>

      <!-- Tooling / Tech Section -->
  <div class="mt-28 md:mt-32 space-y-10 relative z-10">
        <BlurFade :delay="120">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">Toolbox & Platforms</h2>
        </BlurFade>
        <BlurFade :delay="200">
          <p class="max-w-3xl text-lg sm:text-xl leading-relaxed text-[#9CA3AF]">
            Tag-based overview of my my chosen toolbox, and platforms I use to orchestrate product delivery, product strategy, discovery, UI/UX Design, collaboration, engineering/development, and data analytics.
          </p>
        </BlurFade>

  <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:gap-8" role="list">
          <BlurFade v-for="(group, gi) in groupedTools" :key="group.label" :delay="260 + gi*90">
            <article role="listitem" class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.1] hover:shadow-[0_24px_45px_-26px_rgba(102,126,234,0.85)]">
              <span
                aria-hidden="true"
                class="pointer-events-none absolute inset-0 opacity-40 transition duration-500 ease-out group-hover:opacity-80"
                :style="{ background: `radial-gradient(120% 120% at 0% 0%, ${toolboxAccent.glow}, transparent 65%), radial-gradient(120% 120% at 100% 0%, ${toolboxAccent.glowSecondary}, transparent 70%)` }"
              />
              <div class="relative z-10 flex h-full flex-col">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="text-[0.65rem] uppercase tracking-[0.38em] text-white/40">Focus area</p>
                    <h3 class="mt-2 text-xl sm:text-2xl font-semibold text-white/90">{{ group.label }}</h3>
                  </div>
                  <div
                    :class="[
                      'flex h-12 w-12 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/75 transition-colors duration-200',
                      group.label === 'Engineering & Platform' && 'bg-white/[0.08]'
                    ]"
                  >
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                      <template v-if="group.label === 'Product & Strategy'">
                        <rect x="3" y="8" width="18" height="12" rx="2" ry="2" />
                        <rect x="9" y="4" width="6" height="4" rx="1" />
                      </template>
                      <template v-else-if="group.label === 'Execution & Process'">
                        <line x1="5" y1="7" x2="19" y2="7" stroke-linecap="round" />
                        <circle cx="9" cy="7" r="1.5" />
                        <line x1="5" y1="12" x2="19" y2="12" stroke-linecap="round" />
                        <circle cx="14" cy="12" r="1.5" />
                        <line x1="5" y1="17" x2="19" y2="17" stroke-linecap="round" />
                        <circle cx="11" cy="17" r="1.5" />
                      </template>
                      <template v-else-if="group.label === 'Data & Insights'">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 19V10M12 19V5M19 19v-6" />
                      </template>
                      <template v-else-if="group.label === 'Engineering & Platform'">
                        <rect x="5" y="7" width="14" height="10" rx="2" />
                        <rect x="10" y="10" width="4" height="4" rx="1" />
                        <path d="M12 3v3M7 4v3M17 4v3M4 12h3M17 12h3M12 18v3M7 17v3M17 17v3" stroke-linecap="round" />
                      </template>
                      <template v-else-if="group.label === 'UX & Frontend'">
                        <path d="M12 4l7 4-7 4-7-4 7-4z" stroke-linejoin="round" />
                        <path d="M12 12l7 4-7 4-7-4 7-4z" stroke-linejoin="round" />
                      </template>
                      <template v-else>
                        <rect x="5" y="5" width="3" height="3" rx="0.5" />
                        <rect x="10.5" y="5" width="3" height="3" rx="0.5" />
                        <rect x="16" y="5" width="3" height="3" rx="0.5" />
                        <rect x="5" y="10.5" width="3" height="3" rx="0.5" />
                        <rect x="10.5" y="10.5" width="3" height="3" rx="0.5" />
                        <rect x="16" y="10.5" width="3" height="3" rx="0.5" />
                        <rect x="5" y="16" width="3" height="3" rx="0.5" />
                        <rect x="10.5" y="16" width="3" height="3" rx="0.5" />
                        <rect x="16" y="16" width="3" height="3" rx="0.5" />
                      </template>
                    </svg>
                  </div>
                </div>
                <p class="mt-4 text-sm sm:text-base leading-relaxed text-neutral-200/85">
                  {{ group.description }}
                </p>
                <ul class="mt-6 grid grid-cols-2 gap-2 max-[420px]:grid-cols-1" role="list">
                  <li v-for="tool in group.items" :key="tool">
                    <span class="inline-flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.06] px-3 py-1.5 text-xs sm:text-sm font-medium text-white/80 transition duration-200 group-hover:border-white/12 group-hover:bg-white/[0.1]">
                      <span class="h-1.5 w-1.5 rounded-sm" :style="{ backgroundColor: toolboxAccent.dot }"></span>
                      <span>{{ tool }}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          </BlurFade>
        </div>
      </div>

      <!-- Feature post section - leverages the same featured spotlight logic as the homepage bento card -->
      <div class="mt-24 relative z-10">
        <BlurFade :delay="180">
          <div class="rounded-3xl border border-white/12 bg-white/[0.03] p-6 sm:p-8">
            <template v-if="spotlightPending">
              <div class="flex flex-col gap-6 md:flex-row md:items-center">
                <div class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:w-2/5">
                  <div class="h-full w-full animate-pulse bg-white/10" />
                </div>
                <div class="flex-1 space-y-4 animate-pulse">
                  <div class="h-4 w-28 rounded-full bg-white/10" />
                  <div class="h-8 w-3/4 rounded bg-white/10" />
                  <div class="h-4 w-full rounded bg-white/5" />
                  <div class="h-4 w-2/3 rounded bg-white/5" />
                  <div class="h-10 w-40 rounded-full bg-white/10" />
                </div>
              </div>
            </template>
            <template v-else-if="spotlightError">
              <AnimatedGradientText class="text-xs tracking-wide uppercase text-white/70">
                Featured Post
              </AnimatedGradientText>
              <div class="mt-4 flex flex-col gap-5 md:flex-row md:items-center">
                <div class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:w-2/5">
                  <div class="grid h-full place-content-center text-sm text-neutral-400">
                    Image unavailable
                  </div>
                </div>
                <div class="flex-1 space-y-4">
                  <h3 class="text-2xl font-semibold text-white/95">Unable to load spotlight post right now</h3>
                  <p class="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                    Something went wrong while fetching the latest featured work. You can still explore my portfolio to see recent projects and case studies.
                  </p>
                  <NuxtLink
                    to="/portfolio"
                    class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:bg-white/10"
                  >
                    <span>Browse portfolio</span>
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </template>
            <template v-else-if="heroSpotlight">
              <div class="flex flex-col gap-6 md:flex-row md:items-center">
                <NuxtLink
                  :to="heroSpotlight.linkUrl || '/portfolio'"
                  class="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition md:w-2/5"
                >
                  <img
                    :src="spotlightImage"
                    :alt="heroSpotlight.title"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <AnimatedShinyText class="absolute left-4 top-4 text-xs font-semibold text-white" :shimmerWidth="120">
                    ✨ Featured Post
                  </AnimatedShinyText>
                </NuxtLink>
                <div class="flex-1 space-y-4">
                  <AnimatedGradientText class="text-[0.7rem] uppercase tracking-[0.35em] text-white/70">
                    Spotlight
                  </AnimatedGradientText>
                  <h3 class="text-2xl sm:text-3xl font-semibold text-white/95 leading-snug">
                    {{ heroSpotlight.title }}
                  </h3>
                  <p class="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {{ featuredDescription }}
                  </p>
                  <div class="flex flex-wrap gap-3 pt-2">
                    <NuxtLink
                      :to="heroSpotlight.linkUrl || '/portfolio'"
                      class="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:border-white/40 hover:bg-white/10"
                    >
                      <span>Read the featured post</span>
                      <svg
                        class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </NuxtLink>
                    <NuxtLink
                      to="/portfolio"
                      class="inline-flex items-center gap-2 rounded-full border border-transparent bg-white/10 px-5 py-2.5 text-sm font-medium text-white/70 transition hover:border-white/20 hover:bg-white/15"
                    >
                      <span>More posts and case studies</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <AnimatedGradientText class="text-xs tracking-wide uppercase text-white/70">
                Featured Post
              </AnimatedGradientText>
              <div class="mt-4 flex flex-col gap-5 md:flex-row md:items-center">
                <div class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:w-2/5">
                  <img
                    src="/me/me1.webp"
                    alt="Featured case study placeholder"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div class="flex-1 space-y-4">
                  <h3 class="text-2xl font-semibold text-white/95">Check it out!</h3>
                  <p class="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                    Explore one of my recent highlights showcasing how I combine product strategy with execution.
                  </p>
                  <NuxtLink
                    to="/portfolio"
                    class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:bg-white/10"
                  >
                    <span>Browse portfolio</span>
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </template>
          </div>
        </BlurFade>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHead, useHeroSpotlight } from '#imports'
import { useCanonicalUrl } from '@/composables/useCanonicalUrl'
import BlurFade from '@/components/BlurFade.vue'
import AnimatedGradientText from '@/components/AnimatedGradientText.vue'
import AnimatedShinyText from '@/components/AnimatedShinyText.vue'
import Meteors from '@/components/Meteors.vue'
import GrowthMiniChart from '@/components/GrowthMiniChart.vue'
import AuroraBackground from '@/components/AuroraBackground.vue'
import BentoGrid from '~/components/BentoGrid.vue'
import AuroraText from '~/components/AuroraText.vue'

const canonical = useCanonicalUrl('/about')
definePageMeta({ layout: 'about' })
useHead({
  title: 'About | Taylor J. Ferguson',
  link: [{ rel: 'canonical', href: canonical }],
  meta: [
    { name: 'description', content: 'Product & Technical Program Manager with depth across product strategy, discovery, execution, and emerging tech.' },
    { property: 'og:title', content: 'About | Taylor J. Ferguson' },
    { property: 'og:description', content: 'Product & Technical Program Manager with depth across product strategy, discovery, execution, and emerging tech.' },
    { property: 'og:url', content: canonical }
  ]
})

const { data: heroSpotlight, pending: spotlightPending, error: spotlightError } = useHeroSpotlight()

const featuredDescription = computed(() => {
  const raw = heroSpotlight.value?.description?.trim()
  if (raw && raw.length > 0) return raw
  return 'Explore one of my recent highlights across product strategy, discovery, and delivery.'
})

const spotlightImage = computed(() => {
  const candidate = heroSpotlight.value?.imageUrl || (heroSpotlight.value as any)?.featured_image_url
  if (typeof candidate === 'string' && candidate.trim().length > 0) return candidate
  return '/me/me1.webp'
})


const narrative = [
  'I’m Taylor J. Ferguson, Los Angeles–based, but originally from East Setauket, NY. I’m a product and technical product manager with 8+ years translating ambiguous mandates into traction for fintech, consultancy, and emerging tech teams.',
  'My approach to product development begins with structured continuous product discovery, immersing in customer goals, validating hypotheses with rapid testing, and iterating, and shaping products that hold up to pricing, revenue, and go-to-market scrutiny.',
  'Recent epochs have been intentionally split between consulting, focused learning, and building: completing a product leadership certification (PLC), sharpening Vue/Nuxt and AWS fundamentals, and broadening AI/ML knowledge so I can contribute deeper insight with engineering and data science stakeholders.',
  'Right now I’m a part-time Technical Co-Director and Technical PM at OneSynergee, helping an environmental startup prioritize the roadmap, formalize delivery rituals, and align data, design, and engineering on durable operating cadence.',
  'If we collaborate, you can expect clarity around objectives, principled curiosity for the user, and an insistence on shipping outcomes that compound value for the business and the teams shipping the work.',
  'When I\'m not working I\'m usually riding my bike, exploring LA, or hacking away on a side project.'
]


const groupedTools = [
  {
    label: 'Product & Strategy',
    description: 'Translate ambiguous signals into prioritized bets, crisp narratives, and measurable product outcomes.',
    items: ['Roadmapping', 'Product Discovery', 'GTM Strategy', 'Business Modeling', 'Pricing & Packaging', 'Customer Research', 'Metric Design', 'Experimentation']
  },
  {
    label: 'Execution & Process',
    description: 'Design operating rhythms that keep teams aligned, accountable, and shipping meaningful iterations fast.',
    items: ['Agile / Scrum', 'Stakeholder Alignment', 'EPD Process Design', 'Prioritization', 'Capacity Planning', 'Velocity Planning', 'OKRs', 'Risk Mitigation']
  },
  {
    label: 'Data & Insights',
    description: 'Turn instrumentation, experimentation, and research into the insight loops that guide product decisions.',
    items: ['Product Analytics', 'SQL (basic)', 'User Journey Mapping', 'Cohort Analysis', 'Funnel Diagnostics', 'A/B Design', 'Statistical Thinking']
  },
  {
    label: 'Engineering & Platform',
    description: 'Partner with engineering to scope resilient systems, unblock delivery, and scale platform foundations.',
    items: ['Ruby on Rails', 'Vue.js', 'TypeScript', 'REST APIs', 'Auth / RBAC', 'Shopify', 'Stripe', 'Plaid', 'PostgreSQL', 'AWS', 'Flutter (past)']
  },
  {
    label: 'UX & Frontend',
    description: 'Shape intuitive journeys with accessible, performant interfaces and component-driven collaboration.',
    items: ['UI Architecture', 'Component Systems', 'Tailwind CSS', 'Interaction Design', 'Prototyping', 'Customer Journey', 'Accessibility (a11y)', 'Design Tokens']
  },
  {
    label: 'Supporting Tools',
    description: 'Orchestrate workflow, context, and knowledge across the platforms that keep teams synchronized.',
    items: ['Linear', 'Jira', 'Notion', 'AirTable', 'Figma', 'Miro', 'Amplitude', 'Mixpanel','Looker ', 'Git / GitHub']
  }
]

const toolboxAccent = {
  border: 'linear-gradient(90deg, rgba(102,126,234,0.9), rgba(230,57,70,0.65))',
  glow: 'rgba(102,126,234,0.32)',
  glowSecondary: 'rgba(230,57,70,0.22)',
  dot: '#E63946'
}

// Smooth scroll to main content block
const scrollToBento = () => {
  const el = document.getElementById('bento-grid')
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const scrollToAbout = () => {
  const el = document.getElementById('more-about-section')
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
/* Baseline minimal styles only; more advanced theming / motion to be added later */
</style>
