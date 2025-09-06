<script setup>
useHead({
    bodyAttrs: {
        class: computed(() => {
            return 'bg-darkslate-700'; 
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
