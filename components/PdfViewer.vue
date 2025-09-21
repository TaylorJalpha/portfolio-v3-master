
<template>
  <div v-if="pdfUrl" class="pdf-viewer-container">
    <div class="pdf-iframe-wrapper">
      <iframe
        :src="pdfUrl + '#toolbar=0'"
        width="100%"
        height="100%"
        style="border:none; min-height: 400px; max-height: 80vh;"
        allowfullscreen
      ></iframe>
      <!-- Overlay to block default toolbar (download/print) -->
      <div class="pdf-toolbar-overlay"></div>
    </div>
  </div>
  <div v-else>
    <p>No PDF available.</p>
  </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{ pdfUrl: string | null }>()
</script>


<style scoped>
  .pdf-viewer-container {
    box-shadow: 0 2px 16px rgba(0,0,0,0.12);
    border-radius: 16px;
    overflow: hidden;
    background: #111111;
    margin: 2rem 0;
    width: 100%;
    max-width: 100vw;
  }
  .pdf-iframe-wrapper {
    position: relative;
    width: 100%;
    height: 80vh;
    min-height: 400px;
    max-height: 80vh;
    overflow-x: auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  iframe {
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.12);
    background: #111111;
    width: 100%;
    height: 100%;
    min-height: 400px;
    max-height: 80vh;
    display: block;
  }
  .pdf-toolbar-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: rgba(255,255,255,0.01); /* invisible but blocks toolbar */
    z-index: 2;
    pointer-events: auto;
  }

  @media (max-width: 600px) {
    .pdf-viewer-container {
      border-radius: 8px;
      margin: 1rem 0;
    }
    .pdf-iframe-wrapper {
      height: 60vh;
      min-height: 220px;
      max-height: 65vh;
    }
    iframe {
      border-radius: 8px;
      min-height: 220px;
      max-height: 65vh;
    }
  }
</style>
