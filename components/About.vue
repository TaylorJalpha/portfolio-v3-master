<template>
    <Card colSpan="md:col-span-1" rowSpan="md:row-span-4">
        <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold m-0 z-20">About me</h2>
            <p class="text-sm font-light">
                Sr Technical Product & Program Manager with 7+ years shipping outcomes across fintech, consultancy, and emerging tech.
                <br />

            </p>
            <p class="text-sm font-light">
                Primary Toolbox:
            </p>
            <ul class="list-disc list-inside">
                <li>
                    Product Strategy
                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400">
                         Focus
                    </span>
                </li>
                <li>Product Discovery</li>
                <li>Pricing & GTM</li>
                <li>Agile / Scrum</li>
                <li>Business Modeling</li>
                <li>Vue / Nuxt</li>
                <li>Ruby on Rails</li>
                <li>AWS</li>
                <li>AI / ML</li>
                <li>Data Analytics</li>
            </ul>
                        <!-- CTA: Learn more about me -->
                        <NuxtLink to="/about" class="mt-4 inline-flex items-center gap-2 text-[#746CFF] hover:text-[#ff6b73] transition-colors text-sm font-medium">
                                Learn more about me
                                <svg class="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                        </NuxtLink>
         </div>
    </Card>
</template>