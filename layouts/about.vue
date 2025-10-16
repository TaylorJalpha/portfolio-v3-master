<template>
  <div class="relative w-full min-h-screen bg-[#111111] text-white">
    <FloatingNav />
    <!-- Dotted background only (gradient removed per request) -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>
    <main class="relative z-10">
      <slot />
    </main>
    <Footer />
  </div>
  
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import FloatingNav from '@/components/FloatingNav.vue'
</script>
