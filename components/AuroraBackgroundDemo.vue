<template>
  <AuroraBackground 
    class="py-20 lg:py-32"
    min-height="600px"
  >
    <div
      v-motion="motionConfig"
      class="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div class="text-3xl md:text-7xl font-bold text-white text-center">
       
      </div>
      <div class="font-extralight text-base md:text-4xl text-neutral-200 py-4 text-center">
       
      </div>
      <button class="bg-black hover:bg-gray-800 transition-colors rounded-full w-fit text-white px-6 py-3 mt-4">
        Debug now
      </button>
    </div>
  </AuroraBackground>
</template>

<script setup lang="ts">
const motionConfig = {
  initial: { 
    opacity: 0, 
    y: 40 
  },
  visibleOnce: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 300,
      duration: 800,
      ease: 'easeInOut'
    }
  }
}
</script>
