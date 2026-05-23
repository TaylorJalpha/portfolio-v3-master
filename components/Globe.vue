<script setup lang="ts">
import createGlobe from 'cobe'
import { onMounted, ref } from 'vue'
import { useSpring } from 'vue-use-spring'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const pointerInteracting = ref<number | null>(null)
const pointerInteractionMovement = ref(0)
const phi = ref(0)

const api = useSpring(
  { r: 0 },
  {
    mass: 1,
    tension: 280,
    friction: 40,
    precision: 0.001,
  },
)

onMounted(() => {
  createGlobe(canvasRef.value!, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0.1, 0.8, 1],
    glowColor: [1, 1, 1],
    markers: [
      // latitude, longitude
      // Color legend by region:
      // - US:       cyan [0.1, 0.8, 1]
      // - Europe:   magenta [1, 0.3, 0.6]
      // - Asia:     orange [1, 0.6, 0.1]
      // Major hubs slightly larger (size ~0.08)
      
      // US
      // SF Bay Area, CA (major hub)
      { location: [37.7749, -122.4194], size: 0.08, color: [0.1, 0.8, 1] },
      // Los Angeles, CA
      { location: [34.0522, -118.2437], size: 0.06, color: [0.1, 0.8, 1] },
      // Denver, CO
      { location: [39.7392, -104.9903], size: 0.06, color: [0.1, 0.8, 1] },
      // Setauket, NY
      { location: [40.9415, -73.1077], size: 0.06, color: [0.1, 0.8, 1] },

      // Asia
      // Tokyo, Japan (major hub)
      { location: [35.6762, 139.6503], size: 0.08, color: [1, 0.6, 0.1] },
      // New Delhi, India
      { location: [28.6139, 77.209], size: 0.06, color: [1, 0.6, 0.1] },

      // Europe
      // London, England (major hub)
      { location: [51.5074, -0.1278], size: 0.08, color: [1, 0.3, 0.6] },
      // Berlin, Germany
      { location: [52.52, 13.405], size: 0.06, color: [1, 0.3, 0.6] },
      // Kyiv, Ukraine
      { location: [50.4501, 30.5234], size: 0.06, color: [1, 0.3, 0.6] },
    ],
    onRender: (state) => {
      // This prevents rotation while dragging
      if (!pointerInteracting.value) {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        phi.value += 0.005
      }
      state.phi = phi.value + api.r
    },
  })
  canvasRef.value!.style.opacity = '1'
})

function handlePointerDown(e: PointerEvent) {
  pointerInteracting.value = e.clientX - pointerInteractionMovement.value
  canvasRef.value!.style.cursor = 'grabbing'
}

function handlePointerUp(_: PointerEvent) {
  pointerInteracting.value = null
  canvasRef.value!.style.cursor = 'grab'
}

function handlePointerOut(_: PointerEvent) {
  pointerInteracting.value = null
  canvasRef.value!.style.cursor = 'grab'
}

function handleMouseMove(e: MouseEvent) {
  if (pointerInteracting.value !== null) {
    const delta = e.clientX - pointerInteracting.value
    pointerInteractionMovement.value = delta
    api.r = delta / 200
  }
}

function handleTouchMove(e: TouchEvent) {
  if (pointerInteracting.value !== null && e.touches[0]) {
    const delta = e.touches[0].clientX - pointerInteracting.value
    pointerInteractionMovement.value = delta
    api.r = delta / 100
  }
}
</script>

<template>
  <div class="absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px] top-44">
    <canvas
      ref="canvasRef"
      class="w-[500px] h-[500px] cursor-grab opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
      width="1000"
      height="1000"
      @pointerdown="handlePointerDown"
      @pointerup="handlePointerUp"
      @pointerout="handlePointerOut"
      @mousemove="handleMouseMove"
      @touchmove="handleTouchMove"
    />
  </div>
</template>