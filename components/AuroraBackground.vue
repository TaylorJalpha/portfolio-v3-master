<template>
  <div
    ref="rootEl"
    :class="cn(
      'transition-bg relative bg-zinc-50 text-slate-950 dark:bg-zinc-900',
      props.className,
    )"
    :style="{ minHeight: props.minHeight || 'auto' }"
  >
    <div
      class="absolute inset-0 overflow-hidden"
      :style="cssVariables"
    >
      <div
        :class="auroraClasses"
      ></div>
    </div>
    <div class="relative z-10 w-full h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

interface AuroraBackgroundProps {
    className?: string;
    showRadialGradient?: boolean;
    minHeight?: string;
}

const props = withDefaults(defineProps<AuroraBackgroundProps>(), {
  showRadialGradient: true,
});

// Detect iOS/iPadOS Safari at runtime (client-only) to avoid SSR issues
const isIOS = ref(false);
const isVisible = ref(true);
const rootEl = ref<HTMLDivElement | null>(null);
let io: IntersectionObserver | null = null;
onMounted(() => {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || "";
  const iOSLike = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && (navigator as any).maxTouchPoints > 1);
  isIOS.value = iOSLike;

  // Pause aurora animation when the section is off-screen
  try {
    if ('IntersectionObserver' in window && rootEl.value) {
      io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          isVisible.value = entry.isIntersecting;
        }
      }, {
        root: null,
        // Start/stop right as it leaves/enters the viewport
        rootMargin: '0px',
        threshold: 0,
      });
      io.observe(rootEl.value);
    }
  } catch (e) {
    // no-op; keep default visible
  }
});

onBeforeUnmount(() => {
  if (io) {
    io.disconnect();
    io = null;
  }
});

const cssVariables = computed(() => ({
  "--aurora":
    "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
  "--dark-gradient":
    "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
  "--white-gradient":
    "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
  "--blue-300": "#93c5fd",
  "--blue-400": "#60a5fa",
  "--blue-500": "#3b82f6",
  "--indigo-300": "#a5b4fc",
  "--violet-200": "#ddd6fe",
  "--black": "#000",
  "--white": "#fff",
  "--transparent": "transparent",
}));

const auroraClasses = computed(() => {
  // Base class shared by both platforms
  const sharedBase = "animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:animate-aurora after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:mix-blend-difference after:content-[''] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]";

  // Desktop/mobile non-iOS: keep stronger blur and fixed attachment for nice parallax
  const nonIOS = `${sharedBase} blur-[10px] after:[background-attachment:fixed]`;

  // iOS/iPadOS: avoid background-attachment: fixed (janky/broken) and lighten blur for perf
  const ios = `${sharedBase} blur-[6px]`;

  const radialGradientClass = "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]";

  return cn(
    isIOS.value ? ios : nonIOS,
    props.showRadialGradient && radialGradientClass,
    // Pause animations when off-screen
    !isVisible.value && 'paused'
  );
});
</script>