<script setup>
import moment from "moment";

import AnimatedShinyText from './AnimatedShinyText.vue'
</script>
<template>
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-2">
    <p class="text-xs mt-3">
      Fork of
      <a
        href="https://github.com/Ladvace/astro-bento-portfolio"
        target="_blank"
        class="text-red-500"
        >Ladvace
      </a>
      Astro theme by
      <a
        href="https://github.com/apdev95/bento-portfolio-nuxt"
        target="_blank"
        class="text-red-500"
        >apdev95</a
      >– Created with
      <a href="https://nuxt.com/" target="_blank" class="text-red-500">Nuxt.</a>
      <br /><br />
      <a
        href="https://www.linkedin.com/in/taylor-jacob-ferguson/"
        target="_blank"
        style="
          background: -webkit-linear-gradient(
            rgb(133, 9, 241),
            rgb(209, 6, 205)
          );
          -webkit-background-clip: text;
          color: transparent;
        "
      >
        Taylor J. Ferguson.©
      </a>
      {{ moment().format("Y") }}
    </p>
  </Card>
  <footer>
    <AnimatedShinyText class="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span>⚡ Backend powered by Ruby on Rails and PostgreSQL</span>
    </AnimatedShinyText>

  </footer>
</template>

<style scoped>

</style>
