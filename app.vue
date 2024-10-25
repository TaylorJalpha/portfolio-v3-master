<script setup>
useHead({
    bodyAttrs: {
        class: computed(() => {
            return 'bg-gradient-to-b from-[#0c0a09] to-[#565e66] md:h-screen flex flex-col justify-center items-center';
        }),
    },
});
</script>
<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
