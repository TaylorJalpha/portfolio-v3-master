<template>
  <div class="portfolio-detail-layout bg-[#171717] min-h-screen text-white flex flex-col relative">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#171717] via-[#232323] to-[#171717] opacity-50 pointer-events-none"></div>
    <!-- Subtle dot pattern background -->
    <div class="absolute inset-0 opacity-30 pointer-events-none">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>
    <FloatingNav />
    <div class="h-8 sm:h-12" /> <!-- Spacer for nav -->
    <main class="max-w-3xl mx-auto py-12 px-4 flex-1 relative z-10">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import FloatingNav from '@/components/FloatingNav.vue'
</script>

<style scoped>

.portfolio-detail-layout {
  background: linear-gradient(120deg, #171717 60%, #232323 100%);
}

</style>
