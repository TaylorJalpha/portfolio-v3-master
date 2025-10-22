<script setup lang='ts'>
import { ref, defineExpose } from 'vue'
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
    :class="props.class"
  >
    <slot />
  </component>
</template>