<template>
  <main class="bg-[#111111] text-white min-h-screen w-full relative">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#171717] to-[#111111] opacity-50"></div>
    
    <!-- Subtle dot pattern background -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10">
      <slot />
    </div>
  </main>
</template>

<script setup>
// Enhanced layout for portfolio page
</script>
