<template>

  <div class="about-placeholder">
    <h1>About Page Coming Soon</h1>
    <p>I'm redesigning this page as part of v3.2 of my portfolio. Stay tuned, fam, and keep building!</p>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import { useCanonicalUrl } from '@/composables/useCanonicalUrl'
const canonical = useCanonicalUrl('/about')
useHead({
  title: 'About',
  link: [{ rel: 'canonical', href: canonical }],
  meta: [
    { name: 'description', content: "About Taylor J. Ferguson." },
    { property: 'og:title', content: 'About' },
    { property: 'og:description', content: "About Taylor J. Ferguson." },
    { property: 'og:url', content: canonical }
  ]
})

</script>

<style scoped>
.about-placeholder {
  max-width: 600px;
  margin: 4rem auto;
  padding: 3rem 2rem;
  background: #fff;
  color: #222;
  border-radius: 16px;
  box-shadow: 0 2px 24px rgba(0,0,0,0.08);
  text-align: center;
}
</style>
