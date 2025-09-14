<template>
  <div
    ref="containerRef"
    class="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
  >
    <div class="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <h2 class="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
        {{ title || "Changelog from my journey" }}
      </h2>
      <p class="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
        {{ description || "Here's a timeline of my journey and experiences." }}
      </p>
    </div>

    <div ref="timelineRef" class="relative max-w-7xl mx-auto pb-20">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="flex justify-start pt-10 md:pt-40 md:gap-10"
      >
        <div class="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
          <div class="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
            <div class="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
          </div>
          <h3 class="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
            {{ item.title }}
          </h3>
        </div>

  <div class="relative pl-20 pr-4 md:pl-4 w-full liquid-glass-card">
          <h3 class="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
            {{ item.title }}
          </h3>
          <div class="text-neutral-700 dark:text-neutral-300">
            <div v-if="typeof item.content === 'string'" v-html="item.content" />
            <component v-else-if="item.content?.component" :is="item.content.component" v-bind="item.content.props" />
            <slot v-else :name="`content-${index}`" :item="item">
              {{ item.content }}
            </slot>
          </div>
        </div>
      </div>
      
      <!-- Animated timeline line -->
      <div
        :style="{ height: timelineHeight + 'px' }"
        class="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        <div
          ref="progressLine"
          :style="{
            height: animatedHeight + 'px',
            opacity: animatedOpacity,
          }"
          class="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full transition-all duration-100 ease-out"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineEntry {
  title: string;
  content: string | { component: any; props?: Record<string, any> };
}

interface Props {
  data: TimelineEntry[];
  title?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
});

const containerRef = ref<HTMLDivElement>();
const timelineRef = ref<HTMLDivElement>();
const progressLine = ref<HTMLDivElement>();

const timelineHeight = ref(0);
const animatedHeight = ref(0);
const animatedOpacity = ref(0);

let scrollListener: (() => void) | null = null;

const updateTimelineHeight = () => {
  if (timelineRef.value) {
    const rect = timelineRef.value.getBoundingClientRect();
    timelineHeight.value = rect.height;
  }
};

const updateScrollProgress = () => {
  if (!containerRef.value || !timelineRef.value) return;

  const containerRect = containerRef.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  
  // Calculate scroll progress based on container position
  const startOffset = viewportHeight * 0.1; // 10% from top
  const endOffset = viewportHeight * 0.5; // 50% from top
  
  const scrollStart = -containerRect.top + startOffset;
  const scrollEnd = -containerRect.top + containerRect.height - endOffset;
  const scrollRange = scrollEnd - scrollStart;
  
  let progress = 0;
  if (scrollRange > 0) {
    progress = Math.max(0, Math.min(1, (scrollStart) / scrollRange));
  }
  
  // Update animated values
  animatedHeight.value = progress * timelineHeight.value;
  animatedOpacity.value = Math.max(0, Math.min(1, progress * 10)); // Fade in quickly
};

onMounted(() => {
  nextTick(() => {
    updateTimelineHeight();
    updateScrollProgress();
    
    // Add scroll listener
    scrollListener = () => updateScrollProgress();
    window.addEventListener('scroll', scrollListener, { passive: true });
    window.addEventListener('resize', updateTimelineHeight, { passive: true });
  });
});

onBeforeUnmount(() => {
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener);
    window.removeEventListener('resize', updateTimelineHeight);
  }
});

// Watch for data changes to recalculate height
watch(() => props.data, () => {
  nextTick(() => {
    updateTimelineHeight();
    updateScrollProgress();
  });
}, { deep: true });
</script>