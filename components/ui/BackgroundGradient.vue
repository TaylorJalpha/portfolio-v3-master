<template>
  <div :class="['relative p-[4px] group', containerClassName]">
    <MotionDiv
      v-if="animate"
      :variants="variants"
      initial="initial"
      animate="animate"
      :transition="transition"
      :style="{ backgroundSize: '400% 400%' }"
      :class="[
        'absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform',
        'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
      ]"
    />
    <MotionDiv
      v-if="animate"
      :variants="variants"
      initial="initial"
      animate="animate"
      :transition="transition"
      :style="{ backgroundSize: '400% 400%' }"
      :class="[
        'absolute inset-0 rounded-3xl z-[1] will-change-transform',
        'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
      ]"
    />
    <div :class="['relative z-10', className]">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { MotionDiv } from '@vueuse/motion'

const props = defineProps({
  className: String,
  containerClassName: String,
  animate: {
    type: Boolean,
    default: true
  }
})

const variants = {
  initial: {
    backgroundPosition: '0 50%',
  },
  animate: {
    backgroundPosition: ['0 50%', '100% 50%', '0 50%'],
  },
}

const transition = {
  duration: 5,
  repeat: Infinity,
  repeatType: 'reverse',
}
</script>