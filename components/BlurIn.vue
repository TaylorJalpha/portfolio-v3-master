<script setup lang='ts'>
import { cn } from '@/lib/utils'

interface BlurIntProps {
  word?: string
  class?: string
  variant?: {
    hidden: { filter: string, opacity: number }
    visible: { filter: string, opacity: number }
  }
  duration?: number
  inView?: boolean
  tag?: string
};

const props = withDefaults(defineProps<BlurIntProps>(), {
  duration: 500,
  inView: undefined,
  tag: 'h1',
})

const defaultVariants = {
  hidden: { filter: 'blur(10px)', opacity: 0 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: {
      duration: props.duration,
    },
  },
}

const combinedVariants = props.variant || defaultVariants
// Use provided class prop directly; don't force a large default so the
// component can be used for both titles and smaller text blocks.
const className = cn(props.class || '')

// Determine whether the component is being controlled via an inView prop.
const hasInView = typeof props.inView === 'boolean'
// If controlled, only show visible when inView is true. If not controlled,
// preserve previous behavior (always show/animate on mount).
const visibleVariant = hasInView ? (props.inView ? combinedVariants.visible : undefined) : combinedVariants.visible
const enterVariant = hasInView ? (!props.inView ? combinedVariants.visible : undefined) : undefined
</script>

<template>
  <component
    :is="props.tag"
    v-motion
    :initial="combinedVariants.hidden"
    :visible="visibleVariant"
    :enter="enterVariant"
    :class="className"
  >
    <slot>{{ props.word || '' }}</slot>
  </component>
</template>