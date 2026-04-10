<script setup lang='ts'>
import { ref } from 'vue'
interface BlurFadeProps {
  class?: string
  variant?: {
    hidden: { y: number }
    visible: { y: number }
    enter: { y: number }
  }
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  blur?: string
  inViewMargin?: string
  tag?: string
};

const props = withDefaults(defineProps<BlurFadeProps>(), {
  duration: 0.4,
  delay: 500,
  yOffset: 6,
  inView: false,
  inViewMargin: '-50px',
  blur: '6px',
  tag: 'div',
})
const defaultVariants = {
  hidden: { y: props.yOffset, opacity: 0, filter: `blur(${props.blur})` },
  visible: {
    y: -props.yOffset,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay: 0.04 + props.delay,
      duration: 500,
      ease: 'easeIn',
    },
  },
  enter: {
    y: -props.yOffset,
    opacity: 1,
    transition: {
      delay: 0.04 + props.delay,
      duration: 500,
      ease: 'easeIn',
    },
    filter: 'blur(0px)',
  },
}

// Reduce blur on low-end devices
const isLowEnd = process.client && (
  navigator.hardwareConcurrency <= 4 || 
  (navigator as any).deviceMemory <= 4
);

if (isLowEnd) {
  defaultVariants.hidden.filter = `blur(${Math.max(2, parseInt(props.blur) / 2)}px)`;
}

const combinedVariants = props.variant || defaultVariants
const rootEl = ref<HTMLElement | null>(null)
defineExpose({ root: rootEl })
</script>

<template>
  <component
    :is="props.tag"
    ref="rootEl"
    v-motion
    :initial="combinedVariants.hidden"
    :visible="props.inView ? combinedVariants.visible : undefined"
    :enter="!props.inView ? combinedVariants.enter : undefined"
    :class="[props.class, 'blur-fade-fallback']"
  >
    <slot />
  </component>
</template>

<style>
/* CSS safety net: if v-motion never fires, content becomes visible after 2s */
@keyframes blur-fade-safety {
  to { opacity: 1; filter: blur(0px); }
}
.blur-fade-fallback {
  animation: blur-fade-safety 0.5s ease forwards;
  animation-delay: 2s;
}
</style>