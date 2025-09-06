<script setup lang="ts">
import Meteors from '~/components/Meteors.vue'
import AuroraBackgroundDemo from '~/components/AuroraBackgroundDemo.vue'
</script>

<template>
    <Meteors :number="30" />
    
    <!-- Hero Bento Grid Section - Keep original constraints -->
    <main
        class="m-auto p-4 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-cols-4 lg:gap-4 lg:max-h-[800px] z-10 text-white">
        <slot />
    </main>

    <!-- New Section - Completely separate -->
    <div class="text-white relative w-full z-10">
        <!-- Aurora background positioned absolutely behind content -->
        <div class="absolute inset-0 -z-10">
            <AuroraBackgroundDemo />
        </div>

        <div class="m-auto max-w-6xl">
            <section class="py-16 px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Test Assumptions 
                    </h2>
                    <p class="mt-4 text-lg text-gray-300">
                        - Learn more about my experience below..
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>