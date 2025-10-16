<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ name: 'AboutMarquee' });

// Default icon set used for both rows unless overridden by props
const defaultImages: string[] = [
  "https://app.imgforce.com/images/user/O1j_1670884991_js-logo.png",
  "https://app.imgforce.com/images/user/Igx_1670885749_vue-logo.png",
  "https://app.imgforce.com/images/user/TPs_1670885858_react-logo.png",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/astro-icon-light-gradient_a1YuUUY4I.svg?updatedAt=1724086400436",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/Swift_uDvYF0F18.svg?updatedAt=1724085762758",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/Ruby_UEhmadA_d.svg?updatedAt=1724087126323",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/Ruby%20on%20Rails_7-qiG9LFa.svg?updatedAt=1724087127443",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/JavaScript_8iHgpqEGeX.svg?updatedAt=1724087125926",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/python-logo-only_CqVg6oIkw.svg?updatedAt=1724085984288",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/GraphQL_uq9N44d_H.svg?updatedAt=1724087126072",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/PostgresSQL_H2Lunxan83.svg?updatedAt=1724087128469",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/MongoDB_Ae2EC9Xdj.svg?updatedAt=1724087126856",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/Flutter%20logo_AK-IkdgvG.svg?updatedAt=1724087127384",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/AWS_Nsn7mFeCe.svg?updatedAt=1724087128442",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/Azure%20SQL%20Database_q9depiMqV.svg?updatedAt=1724087129380",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/Jamstack_MLod1g8q7.svg?updatedAt=1724089525099",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/Docker_Z6MgvGLjzl.svg?updatedAt=1724089525099",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/TypeScript_YEO9SOzS4.svg?updatedAt=1724089525106",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/Tailwind%20CSS_5qx-D9Ohkt.svg?updatedAt=1724089525060",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/PHP_OHtzZQqwS.svg?updatedAt=1724089525180",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/Heroku_18jUI8QEp.svg?updatedAt=1724089528606",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/MySQL_qXh23va5I.svg?updatedAt=1724089532593",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/Google%20Cloud_78VrynWgab.svg?updatedAt=1724089532690",
  "https://ik.imagekit.io/lvk9c6tsm/Fuel%20and%20Signal%20Marquee%20-%20Programming%20languages%20images/NGINX_Kzw25N5PXs.svg?updatedAt=1724089532665",
];

const props = withDefaults(defineProps<{
  // Icon rows (override to customize). If not provided, fall back to defaultImages.
  row1Images?: string[];
  row2Images?: string[];
  // Back-compat (ignored if row*Images provided)
  images?: string[]; // legacy single row images
  // Optional overrides for the heading
  title?: string;
  subtitle?: string;
  // If true, ignore prefers-reduced-motion and force animation
  forceMotion?: boolean;
}>(), {
  row1Images: undefined,
  row2Images: undefined,
  images: undefined,
  title: () => "Tech used throughout my product career",
  subtitle: () => "Experience across major stacks and languages as a product manager, and experience building personally with Rails, HTML/CSS, AWS/Heroku, Vue/Nuxt, React, Flutter, and more, but I know my limitations - I'm always learning!",
  forceMotion: false,
});

// Resolve rows with sensible fallbacks
const row1 = computed<string[]>(() => props.row1Images?.length ? props.row1Images : (props.images?.length ? props.images : defaultImages));
const row2 = computed<string[]>(() => props.row2Images?.length ? props.row2Images : defaultImages);
// Generate accessible alt text from filename
const logoAlt = (src: string) => {
  try {
    const file = (src.split('/').pop() || '').replace(/\.(svg|png|jpe?g|webp|gif)$/i, '')
    const cleaned = file.replace(/[%_\-]+/g, ' ').replace(/\s+/g, ' ').trim()
    return cleaned ? `${cleaned} logo` : 'technology logo'
  } catch {
    return 'technology logo'
  }
}
</script>

<template>
  <br />
  <br />
  <br />
  <br />
  <section id="technologies used and tech stacks" class="max-w-[75%] mx-auto pb-24 sm:pb-32" :class="{ 'force-motion': forceMotion }">
    <header class="mx-auto mb-8 max-w-3xl text-center">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="mt-3 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
        {{ subtitle }}
      </p>
    </header>
    <!-- Row 1: Icons -->
    <div class="mx-auto">
      <div class="marquee-row" aria-hidden="false">
        <div class="marquee-track">
          <div class="marquee-content">
            <NuxtImg
              v-for="(src, idx) in row1"
              :key="`r1-a-${idx}`"
              :src="src"
              :alt="logoAlt(src)"
              class="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition"
              sizes="(max-width: 768px) 48px, 64px"
              decoding="async"
              loading="lazy"
              fetchpriority="low"
              fit="contain"
            />
          </div>
          <div class="marquee-content" aria-hidden="true">
            <NuxtImg
              v-for="(src, idx) in row1"
              :key="`r1-b-${idx}`"
              :src="src"
              :alt="logoAlt(src)"
              class="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition"
              sizes="(max-width: 768px) 48px, 64px"
              decoding="async"
              loading="lazy"
              fetchpriority="low"
              fit="contain"
            />
          </div>
        </div>
      </div>
    </div>
    <br />
    <!-- Row 2: Icons (reverse direction) -->
    <div class="mx-auto">
      <div class="marquee-row" data-reverse>
        <div class="marquee-track">
          <div class="marquee-content">
            <NuxtImg
              v-for="(src, idx) in row2"
              :key="`r2-a-${idx}`"
              :src="src"
              :alt="logoAlt(src)"
              class="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition"
              sizes="(max-width: 768px) 48px, 64px"
              decoding="async"
              loading="lazy"
              fetchpriority="low"
              fit="contain"
            />
          </div>
          <div class="marquee-content" aria-hidden="true">
            <NuxtImg
              v-for="(src, idx) in row2"
              :key="`r2-b-${idx}`"
              :src="src"
              :alt="logoAlt(src)"
              class="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition"
              sizes="(max-width: 768px) 48px, 64px"
              decoding="async"
              loading="lazy"
              fetchpriority="low"
              fit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<style scoped>
/* Marquee shell */
.marquee-row {
  --gap: 3rem;
  --duration: 40s;
  position: relative;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent 100%);
}
.marquee-row[data-reverse] .marquee-track {
  animation-direction: reverse;
}

/* Track scrolls left continuously */
.marquee-track {
  display: flex;
  gap: 0; /* keep gap on content blocks so halves are equal width */
  width: max-content;
  animation: marquee-scroll var(--duration) linear infinite;
  will-change: transform;
}

/* Duplicate content blocks */
.marquee-content {
  display: flex;
  gap: var(--gap);
  flex: 0 0 auto;
  /* Ensure the seam between duplicated blocks has the same spacing as between items */
  padding-right: var(--gap);
}

/* Prevent individual logos (NuxtImg <picture> roots) from shrinking */
.marquee-content > * {
  flex: 0 0 auto;
  min-width: 48px; /* match small size */
}

@media (min-width: 768px) {
  .marquee-content > * {
    min-width: 64px; /* match md size */
  }
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
  .force-motion .marquee-track {
    animation: marquee-scroll var(--duration) linear infinite;
  }
}
</style>
