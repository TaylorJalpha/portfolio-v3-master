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
