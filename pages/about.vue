<template>
  <section class="relative overflow-visible">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <Meteors :number="28" />
    </div>

    <!-- Hero / Intro Section -->
    <div
      ref="heroSection"
      class="relative mx-auto max-w-5xl px-6 pb-4 pt-12 sm:pb-12 sm:pt-32 lg:pt-36"
    >
      <header
        class="space-y-6 sm:space-y-12 max-w-4xl relative z-10 pb-4 md:pb-8"
        aria-labelledby="about-hero-title"
      >
        <BlurFade :delay="120" class="inline-block" :inView="heroInView">
          <AnimatedGradientText class="text-xs tracking-wide uppercase"
            >About Me</AnimatedGradientText
          >
        </BlurFade>
        <BlurFade :delay="180" :inView="heroInView">
          <h1
            id="about-hero-title"
            class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-neutral-900 dark:text-white max-w-3xl"
          >
            Hasten growth and unleash innovation
          </h1>
        </BlurFade>
        <BlurFade :delay="260" :inView="heroInView">
          <div
            class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_280px] items-start gap-6 md:gap-8"
          >
            <p
              class="max-w-2xl text-lg sm:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 m-0"
            >
              Sr Technical Product & Program Manager with 7+ years shipping outcomes across fintech, consultancy, and emerging tech. I lead with structured discovery, align cross-functional teams around clear priorities, and drive delivery against the metrics that matter — pricing, revenue, and go-to-market readiness.
              <br /><br />
            </p>
            <div class="md:justify-self-end">
              <GrowthMiniChart
                :width="280"
                :height="120"
                :start-year="2018"
                :show-years="true"
              />
            </div>
          </div>
        </BlurFade>
        <BlurFade :delay="300" :inView="heroInView">
          <div
            class="mt-4 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <button
              @click="scrollToBento"
              class="group relative inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-4 sm:px-7 sm:py-3.5 lg:px-9 lg:py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-base font-semibold text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]/50"
            >
              <span class="relative z-10 flex items-center gap-2">
                <span
                  class="h-2 w-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#E63946] animate-pulse"
                ></span>
                Product Approach
                <svg
                  class="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12l-7.5 7.5M3 12h18"
                  />
                </svg>
              </span>
              <span
                class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#667eea]/30 via-[#E63946]/20 to-transparent blur transition"
              />
            </button>
            <button
              @click="scrollToAbout"
              class="group relative inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-4 sm:px-7 sm:py-3.5 lg:px-9 lg:py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-base font-semibold text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]/50"
            >
              <span class="relative z-10 flex items-center gap-2">
                <span
                  class="h-2 w-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#E63946] animate-pulse"
                ></span>
                More About Me
                <svg
                  class="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12l-7.5 7.5M3 12h18"
                  />
                </svg>
              </span>
              <span
                class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#667eea]/30 via-[#E63946]/20 to-transparent blur transition"
              />
            </button>
          </div>
        </BlurFade>
      </header>
      <!-- Divider -->
      <div class="mt-12 md:mt-16 h-px w-full bg-white/10" />
    </div>

    <div class="relative mx-auto max-w-5xl px-6" ref="marqueeSection">
      <AboutMarquee :forceMotion="true" :inView="marqueeInView" />
    </div>

    <div ref="bentoSection">
      <BentoGrid />
    </div>

    <!-- More About Section -->
    <div class="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 pb-32">
      <div ref="aboutHeaderSection">
        <BlurFade :delay="300" :inView="aboutHeaderInView">
          <div id="more-about-section" class="mt-16 md:mt-24 text-center">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-white/60"
            >
              Profile
              <span
                class="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#667eea] to-[#E63946]"
                aria-hidden="true"
              ></span>
              Spotlight
            </span>
            <h2
              class="mt-5 text-3xl sm:text-4xl font-semibold sm:font-bold tracking-tight text-white/95 leading-tight"
            >
              More <AuroraText>About Me</AuroraText>
            </h2>
          </div>
        </BlurFade>
        <div ref="aboutIntroSection">
          <BlurFade :delay="340" :inView="aboutIntroInView">
            <p
              class="mx-auto mt-6 max-w-3xl text-center text-lg sm:text-xl leading-relaxed text-[#9CA3AF]"
            >
              A snapshot of the product craft, motivations, and operating
              principles that shape how I partner with teams and guide work from
              idea to measurable impact.
            </p>
          </BlurFade>
        </div>

        <section id="about-content" class="mt-8 md:mt-12 relative z-10">
          <div
            class="grid gap-6 md:gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1.15fr)] xl:gap-16 items-center"
          >
            <div
              class="order-2 lg:order-1 -mt-4 sm:-mt-6 md:mt-0"
              ref="aboutImageSection"
            >
              <BlurFade :delay="360" :inView="aboutImageInView">
                <div
                  class="relative flex h-full min-h-[320px] md:min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 dark:bg-white/[0.04]"
                >
                  <LightRays
                    rays-origin="top-center"
                    rays-color="#98A197"
                    :rays-speed="1.5"
                    :light-spread="0.8"
                    :ray-length="1.2"
                    :follow-mouse="true"
                    :mouse-influence="0.1"
                    :noise-amount="0.1"
                    :distortion="0.05"
                    class="absolute inset-0 w-full h-full"
                  />
                  <img
                    src="/me/taylor-ferguson-profile-pic-no-background-v2.png"
                    alt="Taylor J. Ferguson - Sr Technical Product & Program Manager"
                    class="relative z-10 h-full w-full object-cover object-center opacity-80"
                    loading="lazy"
                  />
                  <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f172a]/20 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </BlurFade>
            </div>
            <div class="order-1 lg:order-2 space-y-6">
              <div v-for="(para, i) in narrative" :key="i">
                <div :ref="el => { aboutParagraphRefs[i] = el as HTMLElement }">
                  <BlurFade
                    :delay="380 + i * 240"
                    :inView="aboutParagraphsInView[i]"
                  >
                    <p
                      class="text-neutral-100/85 leading-relaxed text-lg sm:text-xl"
                      v-html="para"
                    ></p>
                  </BlurFade>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Toolbox and Platforms - Grid Section -->
        <div
          class="mt-28 md:mt-32 space-y-10 relative z-10"
          ref="toolboxSection"
        >
          <BlurFade :delay="120" :inView="toolboxInView">
            <h2
              class="text-3xl sm:text-4xl font-bold tracking-tight text-white/90"
            >
              Toolbox & Platforms
            </h2>
          </BlurFade>
          <BlurFade :delay="200" :inView="toolboxInView">
            <p
              class="max-w-3xl text-lg sm:text-xl leading-relaxed text-[#9CA3AF]"
            >
              Overview of my my chosen toolbox, and platforms- Used to
              coordinate product delivery, strategy, and discovery; UI/UX
              Design, collaboration, engineering/development, and data
              analytics.
            </p>
          </BlurFade>

          <div
            class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:gap-8"
            role="list"
            ref="toolboxCardsContainer"
          >
            <article
              v-for="(group, gi) in groupedTools"
              :key="group.label"
              class="card group relative flex h-full flex-col overflow-hidden rounded-lg border border-darkslate-100 bg-darkslate-500 p-4 sm:p-6 shadow-lg transition duration-300 hover:border-primary-500"
            >
              <div class="relative z-10 flex h-full flex-col">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p
                      class="text-[0.65rem] uppercase tracking-[0.38em] text-white/40"
                    >
                      Focus area
                    </p>
                    <h3
                      class="mt-2 text-xl sm:text-2xl font-semibold text-white/90"
                    >
                      {{ group.label }}
                    </h3>
                  </div>
                  <div
                    :class="[
                      'flex h-12 w-12 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/75 transition-colors duration-200',
                      group.label === 'Engineering & Platform' &&
                        'bg-white/[0.08]',
                    ]"
                  >
                    <svg
                      class="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      aria-hidden="true"
                    >
                      <template v-if="group.label === 'Product & Strategy'">
                        <rect
                          x="3"
                          y="8"
                          width="18"
                          height="12"
                          rx="2"
                          ry="2"
                        />
                        <rect x="9" y="4" width="6" height="4" rx="1" />
                      </template>
                      <template
                        v-else-if="group.label === 'Execution & Process'"
                      >
                        <line
                          x1="5"
                          y1="7"
                          x2="19"
                          y2="7"
                          stroke-linecap="round"
                        />
                        <circle cx="9" cy="7" r="1.5" />
                        <line
                          x1="5"
                          y1="12"
                          x2="19"
                          y2="12"
                          stroke-linecap="round"
                        />
                        <circle cx="14" cy="12" r="1.5" />
                        <line
                          x1="5"
                          y1="17"
                          x2="19"
                          y2="17"
                          stroke-linecap="round"
                        />
                        <circle cx="11" cy="17" r="1.5" />
                      </template>
                      <template v-else-if="group.label === 'Data & Insights'">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 19V10M12 19V5M19 19v-6"
                        />
                      </template>
                      <template
                        v-else-if="group.label === 'Engineering & Platform'"
                      >
                        <rect x="5" y="7" width="14" height="10" rx="2" />
                        <rect x="10" y="10" width="4" height="4" rx="1" />
                        <path
                          d="M12 3v3M7 4v3M17 4v3M4 12h3M17 12h3M12 18v3M7 17v3M17 17v3"
                          stroke-linecap="round"
                        />
                      </template>
                      <template v-else-if="group.label === 'UX & Frontend'">
                        <path
                          d="M12 4l7 4-7 4-7-4 7-4z"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 12l7 4-7 4-7-4 7-4z"
                          stroke-linejoin="round"
                        />
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
                <p
                  class="mt-4 text-sm sm:text-base leading-relaxed text-neutral-200/85"
                >
                  {{ group.description }}
                </p>
                <ul
                  class="mt-6 grid grid-cols-2 gap-2 max-[420px]:grid-cols-1"
                  role="list"
                >
                  <li v-for="tool in group.items" :key="tool">
                    <span
                      class="inline-flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.06] px-3 py-1.5 text-xs sm:text-sm font-medium text-white/80 transition duration-200 group-hover:border-white/12 group-hover:bg-white/[0.1]"
                    >
                      <span
                        class="h-1.5 w-1.5 rounded-sm"
                        :style="{ backgroundColor: toolboxAccent.dot }"
                      ></span>
                      <span>{{ tool }}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- Feature post section - leverages the same featured spotlight logic as the homepage bento card -->
      <div class="mt-24 relative z-10" ref="featureSection">
        <BlurFade :delay="180" :inView="featureInView">
          <div
            class="rounded-3xl border border-white/12 bg-white/[0.03] p-6 sm:p-8"
          >
            <template v-if="spotlightPending">
              <div class="flex flex-col gap-6 md:flex-row md:items-center">
                <div
                  class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:w-2/5"
                >
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
              <AnimatedGradientText
                class="text-xs tracking-wide uppercase text-white/70"
              >
                Featured Post
              </AnimatedGradientText>
              <div class="mt-4 flex flex-col gap-5 md:flex-row md:items-center">
                <div
                  class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:w-2/5"
                >
                  <div
                    class="grid h-full place-content-center text-sm text-neutral-400"
                  >
                    Image unavailable
                  </div>
                </div>
                <div class="flex-1 space-y-4">
                  <h3 class="text-2xl font-semibold text-white/95">
                    Unable to load spotlight post right now
                  </h3>
                  <p class="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                    Something went wrong while fetching the latest featured
                    work. You can still explore my portfolio to see recent
                    projects and case studies.
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
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
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
                  <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                  />
                  <AnimatedShinyText
                    class="absolute left-4 top-4 text-xs font-semibold text-white"
                    :shimmerWidth="120"
                  >
                    ✨ Featured Post
                  </AnimatedShinyText>
                </NuxtLink>
                <div class="flex-1 space-y-4">
                  <AnimatedGradientText
                    class="text-[0.7rem] uppercase tracking-[0.35em] text-white/70"
                  >
                    Spotlight
                  </AnimatedGradientText>
                  <h3
                    class="text-2xl sm:text-3xl font-semibold text-white/95 leading-snug"
                  >
                    {{ heroSpotlight.title }}
                  </h3>
                  <p
                    class="text-sm sm:text-base text-neutral-300 leading-relaxed"
                  >
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
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h14M12 5l7 7-7 7"
                        />
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
              <AnimatedGradientText
                class="text-xs tracking-wide uppercase text-white/70"
              >
                Featured Post
              </AnimatedGradientText>
              <div class="mt-4 flex flex-col gap-5 md:flex-row md:items-center">
                <div
                  class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:w-2/5"
                >
                  <img
                    src="/me/me1.webp"
                    alt="Featured case study placeholder"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div class="flex-1 space-y-4">
                  <h3 class="text-2xl font-semibold text-white/95">
                    Check it out!
                  </h3>
                  <p class="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                    Explore one of my recent highlights showcasing how I combine
                    product strategy with execution.
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
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
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
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
} from "vue";
import { timeline, stagger, spring } from "motion";
// Toolbox cards animation
const toolboxCardsContainer = ref<HTMLElement | null>(null);
let toolboxCardsAnimated = false;

// Place this after toolboxInView is declared
import { useHead, useHeroSpotlight } from "#imports";
import { useCanonicalUrl } from "@/composables/useCanonicalUrl";
import BlurFade from "@/components/BlurFade.vue";
import AnimatedGradientText from "@/components/AnimatedGradientText.vue";
import AnimatedShinyText from "@/components/AnimatedShinyText.vue";
import Meteors from "@/components/Meteors.vue";
import GrowthMiniChart from "@/components/GrowthMiniChart.vue";
import AuroraBackground from "@/components/AuroraBackground.vue";
import PixelBlast from "~/components/ui/PixelBlast.vue";
import LightRays from "~/components/ui/LightRays.vue";
import BentoGrid from "~/components/BentoGrid.vue";
import AuroraText from "~/components/AuroraText.vue";

const canonical = useCanonicalUrl("/about");
definePageMeta({ layout: "about" });
useHead({
  title: "About | Taylor J. Ferguson - Sr Technical Product & Program Manager",
  link: [{ rel: "canonical", href: canonical }],
  meta: [
    {
      name: "description",
      content:
        "Sr Technical Product & Program Manager with 7+ years driving strategy, cross-functional delivery, and technical execution across fintech, consultancy, and emerging tech.",
    },
    { property: "og:title", content: "About | Taylor J. Ferguson" },
    {
      property: "og:description",
      content:
        "Sr Technical Product & Program Manager with 7+ years driving strategy, cross-functional delivery, and technical execution across fintech, consultancy, and emerging tech.",
    },
    { property: "og:url", content: canonical },
  ],
});

const {
  data: heroSpotlight,
  pending: spotlightPending,
  error: spotlightError,
} = useHeroSpotlight();

const featuredDescription = computed(() => {
  const raw = heroSpotlight.value?.description?.trim();
  if (raw && raw.length > 0) return raw;
  return "Explore one of my recent highlights across product strategy, discovery, and delivery.";
});

const spotlightImage = computed(() => {
  const candidate =
    heroSpotlight.value?.imageUrl ||
    (heroSpotlight.value as any)?.featured_image_url;
  if (typeof candidate === "string" && candidate.trim().length > 0)
    return candidate;
  return "/me/me1.webp";
});

const narrative = [
  "I'm Taylor J. Ferguson — a Sr product and technical project manager based in Los Angeles, originally from East Setauket, NY, with 7+ years turning ambiguous mandates into shipped outcomes across fintech, consultancy, and emerging tech.",
  "My work sits at the intersection of product strategy and technical execution. I lead with structured discovery — testing assumptions and validating hypotheses early, aligning cross-functional teams around clear priorities, and driving delivery against real business metrics: pricing, revenue, and go-to-market readiness.",
  "Recently, I built <b>RevSec AI</b>, an agentic pricing intelligence platform that supports everything from usage-based to complex hybrid pricing models — covering financial modeling, plans/CPQ with Stripe integration, market research, and more. I also serve as Technical PM and Co-Director at <b>OneSynergee</b>, where I've stood up the delivery process, shaped the roadmap, and aligned product, data, design, and engineering for a decentralized marketplace connecting farmers to new markets.",
  "In parallel, I completed a Product Leadership Certification and deepened my technical fluency in Vue/Nuxt, AWS, and AI/ML — so I can partner more effectively with engineering and data science teams, not just manage them.",
  "If we work together, expect someone who brings a process-based approach and structure, asks the right questions early, and stays focused on outcomes that matter to the business and the people building the product.",
  "When I'm not working, I'm usually riding my bike 🚴, exploring LA, or hacking away on a side project.",
];

const groupedTools = [
  {
    label: "Product & Strategy",
    description:
      "Translate ambiguous signals into prioritized bets, crisp narratives, and measurable product outcomes.",
    items: [
      "Roadmapping",
      "Product Discovery",
      "GTM Strategy",
      "Business Modeling",
      "Pricing & Packaging",
      "Customer Research",
      "Metric Design",
      "Experimentation",
    ],
  },
  {
    label: "Execution & Process",
    description:
      "Design operating rhythms that keep teams aligned, accountable, and shipping meaningful iterations fast.",
    items: [
      "Agile / Scrum",
      "Stakeholder Alignment",
      "EPD Process Design",
      "Prioritization",
      "Capacity Planning",
      "Velocity Planning",
      "OKRs",
      "Risk Mitigation",
    ],
  },
  {
    label: "Data & Insights",
    description:
      "Turn instrumentation, experimentation, and research into the insight loops that guide product decisions.",
    items: [
      "Product Analytics",
      "SQL (basic)",
      "User Journey Mapping",
      "Cohort Analysis",
      "Funnel Diagnostics",
      "A/B Design",
      "Statistical Thinking",
    ],
  },
  {
    label: "Engineering & Platform",
    description:
      "Partner with engineering to scope resilient systems, unblock delivery, and scale platform foundations.",
    items: [
      "Ruby on Rails",
      "Vue.js",
      "TypeScript",
      "REST APIs",
      "Auth / RBAC",
      "Shopify",
      "Stripe",
      "Plaid",
      "PostgreSQL",
      "AWS",
      "Flutter (past)",
    ],
  },
  {
    label: "UX & Frontend",
    description:
      "Shape intuitive journeys with accessible, performant interfaces and component-driven collaboration.",
    items: [
      "UI Architecture",
      "Component Systems",
      "Tailwind CSS",
      "Interaction Design",
      "Prototyping",
      "Customer Journey",
      "Accessibility (a11y)",
      "Design Tokens",
    ],
  },
  {
    label: "Supporting Tools",
    description:
      "Orchestrate workflow, context, and knowledge across the platforms that keep teams synchronized.",
    items: [
      "Linear",
      "Jira",
      "Notion",
      "AirTable",
      "Figma",
      "Miro",
      "Amplitude",
      "Mixpanel",
      "Looker ",
      "Git / GitHub",
    ],
  },
];

const toolboxAccent = {
  border: "linear-gradient(90deg, rgba(102,126,234,0.9), rgba(230,57,70,0.65))",
  glow: "rgba(102,126,234,0.32)",
  glowSecondary: "rgba(230,57,70,0.22)",
  dot: "#E63946",
};

// Section refs and inView states
const heroSection = ref(null);
const aboutSection = ref(null);
const toolboxSection = ref(null);
const featureSection = ref(null);
const marqueeSection = ref(null);

// More About Me section: individual block refs and inView states
const aboutHeaderSection = ref(null);
const aboutIntroSection = ref(null);
const aboutImageSection = ref(null);
const aboutHeaderInView = ref(false);
const aboutIntroInView = ref(false);
const aboutImageInView = ref(false);
const aboutParagraphRefs = ref<Array<HTMLElement | null>>([]);
const aboutParagraphsInView = ref<Array<boolean>>([]);

const heroInView = ref(false);
const aboutInView = ref(false);
const toolboxInView = ref(false);
const marqueeInView = ref(false);

// Toolbox cards animation
watch(toolboxInView, (inView) => {
  if (inView && toolboxCardsContainer.value && !toolboxCardsAnimated) {
    const cards = toolboxCardsContainer.value.querySelectorAll(".card");
    if (cards.length > 0) {
      timeline([
        [
          [...cards],
          { y: ["40%", "0%"], opacity: [0, 1] },
          {
            at: "-0.1",
            duration: 0.4,
            delay: stagger(0.3),
            easing: spring({ velocity: 100, stiffness: 50, damping: 10 }),
          },
        ],
      ]);
      toolboxCardsAnimated = true;
    }
  }
});
const featureInView = ref(false);

// Optionally add more for marquee/bento if needed

import type { Ref } from "vue";
function createSectionObserver(
  sectionRef: Ref<HTMLElement | null>,
  inViewRef: Ref<boolean>,
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  let observer: IntersectionObserver | null = null;
  onMounted(() => {
    if (!sectionRef.value) return;
    observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          inViewRef.value = true;
          if (observer) observer.unobserve(entry.target);
        }
      });
    }, options);
    observer.observe(sectionRef.value);
  });
  onBeforeUnmount(() => {
    if (observer && sectionRef.value) observer.unobserve(sectionRef.value);
    observer = null;
  });
}

createSectionObserver(heroSection, heroInView);
createSectionObserver(aboutSection, aboutInView);
createSectionObserver(toolboxSection, toolboxInView);
createSectionObserver(featureSection, featureInView);
createSectionObserver(marqueeSection, marqueeInView);

// More About Me section observers
createSectionObserver(aboutHeaderSection, aboutHeaderInView);
createSectionObserver(aboutIntroSection, aboutIntroInView);
createSectionObserver(aboutImageSection, aboutImageInView);

// Paragraph observers (run after mount)

onMounted(async () => {
  if (Array.isArray(narrative)) {
    aboutParagraphRefs.value = Array(narrative.length).fill(null);
    aboutParagraphsInView.value = Array(narrative.length).fill(false);
    // Wait for DOM refs (template ref callbacks) to populate
    await nextTick();
    aboutParagraphRefs.value.forEach((el, i) => {
      if (el) {
        const observer = new window.IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                aboutParagraphsInView.value[i] = true;
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        );
        observer.observe(el);
      }
    });
  }
});

createSectionObserver(heroSection, heroInView);
createSectionObserver(aboutSection, aboutInView);
createSectionObserver(toolboxSection, toolboxInView);
createSectionObserver(featureSection, featureInView);
createSectionObserver(marqueeSection, marqueeInView);

// Smooth scroll to main content block
const scrollToBento = () => {
  const el = document.getElementById("bento-grid");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const scrollToAbout = () => {
  const el = document.getElementById("more-about-section");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<style scoped>
/* Baseline minimal styles only; more advanced theming / motion to be added later */
</style>
