<script setup lang="ts">
import { computed, watch } from 'vue'
import { useHead } from '#imports'
import ContactForm from '@/components/ContactForm.vue'
import { useContactModal } from '@/composables/useContactModal'

useHead({
  bodyAttrs: {
    class: computed(() => 'bg-darkslate-700')
  }
})

const contactModal = useContactModal()
const contactModalOpen = computed({
  get: () => contactModal.isOpen.value,
  set: (v: boolean) => { contactModal.isOpen.value = v }
})


if (process.client) {
  watch(
    () => contactModal.isOpen.value,
    (val) => {
      document.body.classList.toggle('contact-modal-open', !!val)
      console.debug('[App] contact modal isOpen changed:', val)
    },
    { immediate: true }
  )
}
</script>
<template>
    <NuxtLayout>
        <NuxtPage />
  <ContactForm v-model:isOpen="contactModalOpen" />
    </NuxtLayout>
</template>
