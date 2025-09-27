<script setup>
import { onMounted, ref, computed } from 'vue';
import { stagger, spring, timeline } from 'motion';
import TerminalCard from '~/components/TerminalCard.vue';
import { useCanonicalUrl } from '@/composables/useCanonicalUrl';
import { useHead } from '#imports';

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
const canonical = useCanonicalUrl()
const title = 'Taylor J. Ferguson - Dynamic Product Manager with Technical Expertise'
const description = 'Taylor J. Ferguson - Skilled Product Manager with extensive experience in Fintech, Blockchain, and HealthTech.'
const ogImage = computed(() => canonical + '/me/me1.webp')

// Global Organization JSON-LD (only on root page)
const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Taylor J. Ferguson',
    url: canonical,
    logo: ogImage.value,
    sameAs: [
        // Add verified profile URLs here (GitHub, LinkedIn, etc.) once available
    ]
}

useHead({
    title,
    link: [
        { rel: 'canonical', href: canonical }
    ],
    meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: canonical },
        { property: 'og:image', content: ogImage.value },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage.value }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(organizationJsonLd)
        }
    ]
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
