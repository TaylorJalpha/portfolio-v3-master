<template>
  <div class="portfolio-detail-layout bg-[#171717] min-h-screen text-white">
    <header class="w-full py-8 px-4 border-b border-gray-700 flex items-center justify-between">
      <NuxtLink to="/portfolio" class="text-[#E63946] font-bold text-lg hover:underline">← Back to Portfolio</NuxtLink>
      <h1 class="text-3xl font-bold">Hmmm</h1>
    </header>
    <main class="max-w-3xl mx-auto py-12 px-4">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// No script needed for layout
</script>

<style scoped>

.portfolio-detail-layout {
  background: linear-gradient(120deg, #171717 60%, #232323 100%);
}

</style>
