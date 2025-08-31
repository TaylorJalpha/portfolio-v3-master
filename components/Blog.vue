<<<<<<< HEAD
<template>
    <Card colSpan="md:col-span-1" rowSpan="md:row-span-3" href="/">
        <h2 class="text-xl font-bold m-0 z-20">Portfolio</h2>
        <!-- Animated Button -->
        <NuxtLink to="/portfolio">
            <button
                class="mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
            >
                View Portfolio -&gt;
            </button>
        </NuxtLink>
        <p class="text-xs text-gray-500 mb-1 pt-5">
            Click the button above to view my portfolio projects, blog posts, etc.
        </p>
    </Card>
</template>


<!-- The current button is simply a placeholder and will need to be improved and an animated option implemented-->
=======
<script setup>
import { reactive } from 'vue';
const posts = reactive([
    {
        title: 'Volve Go EV Charging mobile app',
        link: 'https://drive.google.com/file/d/1-Wprb-oG2z1RX6bYusTx8uHscFQAbbrH/view?usp=sharing'
    },
    {
        title: 'Carters case study',
        link: 'https://docs.google.com/presentation/d/1nGEIPWHnwHEH8U3HmR4QuOCpgWyKUxbOex0HvwH_PWo/edit#slide=id.p'
    },
    {
        title: 'GalacticWay White Paper',
        link: 'https://drive.google.com/file/d/1nm3KxsLgiKZNTmSQ7pTMEf36fP8cDSPq/view'
    },
    {
        title: 'My Smile Guide',
        link: 'https://mysmileguideu.org/'
    },
    {
        title: 'Systems Innovation Overview - Blog Post',
        link: 'https://www.economyblocked.com/terms/what-is-systems-innovation'
    },
    {
        title: 'What is Token Engineering? - Blog Post',
        link: 'https://www.economyblocked.com/terms/token-engineering'
    }
])

</script>
<template>
    <Card colSpan="md:col-span-1" rowSpan="md:row-span-3" href="/">
        <h2 class="text-xl font-bold m-0 z-20">Posts/ Portfolio </h2>
        <p class="text-xs text-gray-500 mb-1">Blog posts and portfolio projects</p>
        <p class="text-sm font-light text-base hover:text-red-500" v-for="({title, link}, index) in posts" :key="index">
            <a :href="link" target="_blank">
                - {{ title }}
            </a>
        </p>
    </Card>
</template>
>>>>>>> 6e8ec1e3102f642078bf0e8d3595bdb2b6d6cc4f
