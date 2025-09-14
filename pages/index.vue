<script setup>
import { onMounted, ref } from 'vue';
import { stagger, spring, timeline } from "motion";
import TerminalCard from '~/components/TerminalCard.vue';

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
    title: 'Taylor J. Ferguson - Dynamic Product Manager with Technical Expertise',
    ogTitle: 'Taylor J. Ferguson - Product Management Specialist',
    description: 'Taylor J. Ferguson - Skilled Product Manager with extensive experience in Fintech, Blockchain, and HealthTech.',
    ogDescription: 'Taylor J. Ferguson - Los Angeles-based Product Manager with a robust technical background',
    ogImage: './me/me1.png',
    twitterCard: './me/me1.png',
})
</script>

<template>
    <Intro />
    <About />
    <Contact />
    <Status />
    <BentoViewPortfolio />
    <CurrentWeather />
    <PoweredByRubyOnRails />
    <TerminalCard />
</template>
