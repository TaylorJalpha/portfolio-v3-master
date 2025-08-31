<script setup>

import AnimatedShinyText from "./AnimatedShinyText.vue";
</script>

<template>
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-4">
    <div class="h-full">
      <header class="flex items-center">
        <h1 class="text-white text-xl font-bold">Let's sync up!</h1>
      </header>
      <div class="flex flex-col mt-4">
        <h2 class="text-gray-500">Contact</h2>
        <p>📧 taylorjacobferguson @gmail.com</p>
        <p>📍Los Angeles,CA</p>
      </div>

      <div class="flex flex-col mt-4 w-fit">
        <h2 class="text-gray-500">Social Network</h2>
        <ul>
          <li>
            <a
              href="https://instagram.com/tayloralphaa"
              target="_blank"
              class="gradient font-light text-base hover:text-red-500"
              >Instagram</a
            >
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/taylor-jacob-ferguson/"
              target="_blank"
              class="text-sm font-light hover:text-red-500"
              >LinkedIn</a
            >
          </li>
          <li>
            <a
              href="https://www.strava.com/athletes/63030031"
              target="_blank"
              class="text-sm font-light hover:text-red-500"
              >Strava</a
            >
          </li>
          <li>
            <a
              href="https://github.com/TaylorJalpha"
              target="_blank"
              class="text-sm font-light hover:text-red-500"
              >GitHub</a
            >
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<style scoped>

</style>
