<script setup>
import { onMounted, ref } from 'vue';
import { stagger, spring, timeline } from "motion";

const cards = ref([]);

const animateCards = () => {
    cards.value = document.querySelectorAll(".card");
    const sequence = [
        [
            cards.value,
            { y: ["40%", "0%"], opacity: [0, 1] },
            {
                at: "-0.1",
                duration: 0.4,
                delay: stagger(0.3),
                easing: spring({ velocity: 100, stiffness: 50, damping: 10 }),
            },
        ],
    ];
    timeline(sequence);
};

onMounted(animateCards);

useSeoMeta({
    title: 'Taylor J. Ferguson - Product Manager and Web  Developer',
    ogTitle: 'Taylor J. Ferguson - Product Manager and Web  Developer ',
    description: 'Taylor J. Ferguson - Los Angeles-based certified Product Manager (PMC) and Web  Developer, with Biz Dev knowledge',
    ogDescription: 'Taylor J. Ferguson - Los Angeles-based Product Manager and Web  Developer, with Biz Dev knowledge',
    ogImage: './me/me1.png',
    twitterCard: './me/me1.png',
})

</script>
<template>
    <Intro />
    <About />
    <Contact />
    <TimeZone />
    <Blog />
    <CurrentWeather />
    <Currently />
    <Copyright />
</template>
