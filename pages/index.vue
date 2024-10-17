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
    title: 'Taylor Ferguson - Product Manager and Web  Developer',
    ogTitle: 'Taylor Ferguson - Software Developer in Italy',
    description: 'Taylor Ferguson - New Bento Grid portfolio website',
    ogDescription: 'Taylor Ferguson - New Bento Grid portfolio website',
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
