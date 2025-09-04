<script setup lang='ts'>
import { cn } from '@/lib/utils'
import { ref, watch, onMounted } from 'vue'
interface MeteorsProps {
  number?: number
}

const props = withDefaults(defineProps<MeteorsProps>(), {
  number: 20
})

const meteorStyles = ref<Array<any>>([])

const generateMeteorStyles = () => {
  const containerWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
  const styles = Array.from({ length: props.number }).map(() => ({
    top: `${Math.random() * -100}px`,
    left: `${Math.floor(Math.random() * (containerWidth + 400))}px`,
    animationDelay: `${Math.random() * 1 + 0.2}s`,
    animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
  }))
  meteorStyles.value = styles
}

onMounted(() => {
  generateMeteorStyles()
})

watch(() => props.number, () => {
  generateMeteorStyles()
})
</script>

<template>
  <div v-for="(style, index) in meteorStyles" :key="index">
    <span
      :class="cn(
        'pointer-events-none absolute size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
      )" 
      :style="style"
    >
      <div
        class="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent"
      />
    </span>
  </div>
</template>