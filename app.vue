<script setup>
useHead({
    bodyAttrs: {
        class: computed(() => {
            return 'bg-darkslate-700 md:h-screen flex flex-col justify-center items-center'; 
        }),
    },
});
</script>
<template>
    <NuxtLayout>
        <NuxtPage />
        <portal-target name="modals"></portal-target>
    </NuxtLayout>
</template>
