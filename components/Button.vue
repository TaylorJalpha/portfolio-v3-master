<template>
    <button :class="buttonClasses">
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue';

// Props declaration
const props = defineProps({
    rounded: Boolean
});

// Computed class
const buttonClasses = computed(() => {
    return `custom-btn text-base sm:text-lg max-h-[48px] shadow-custom active:shadow-none active:translate-x-[3px] active:translate-y-[3px] text-gray-200 px-4 py-2 sm:px-5 border border-primary-500 hover:text-primary-500 transition-colors duration-100 ease-in-out bg-gray-900 cursor-pointer ${props.rounded ? "rounded-full" : "rounded-lg"
        }`;
});
</script>