<template>
  <div class="bg-[#171717] rounded-xl shadow-xl border border-gray-600 overflow-hidden h-full flex flex-col min-h-[420px] sm:min-h-[450px] lg:min-h-[440px] animate-pulse">
    <!-- Image Skeleton -->
    <div class="w-full h-48 sm:h-52 lg:h-48 xl:h-44 bg-gray-700"></div>

    <!-- Content Skeleton -->
    <div class="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
      <div class="flex-1">
        <!-- Title Skeleton -->
        <div class="h-6 bg-gray-700 rounded-md mb-3"></div>
        <div class="h-4 bg-gray-700 rounded-md w-3/4 mb-3"></div>
        
        <!-- Description Skeleton -->
        <div class="space-y-2 mb-4">
          <div class="h-4 bg-gray-700 rounded-md"></div>
          <div class="h-4 bg-gray-700 rounded-md"></div>
          <div class="h-4 bg-gray-700 rounded-md w-5/6"></div>
        </div>
      </div>

      <!-- Tags Skeleton -->
      <div class="mb-4">
        <div class="flex flex-wrap gap-2">
          <div class="h-6 w-16 bg-gray-700 rounded-md"></div>
          <div class="h-6 w-20 bg-gray-700 rounded-md"></div>
          <div class="h-6 w-14 bg-gray-700 rounded-md"></div>
        </div>
      </div>

      <!-- Button Skeleton -->
      <div class="h-10 bg-gray-700 rounded-lg"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Skeleton loader component for portfolio cards
</script>
