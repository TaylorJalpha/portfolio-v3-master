<!-- components/PreviewBanner.vue -->
<template>
  <div v-if="isPreview" class="preview-banner">
    <div class="preview-content">
      <span class="preview-icon">📝</span>
      <span class="preview-text">Preview Mode</span>
      <span class="preview-info">You are viewing unpublished content</span>
      <button @click="handleExitPreview" class="exit-btn" :disabled="isExiting">
        {{ isExiting ? 'Exiting...' : 'Exit Preview' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isPreview, exitPreview } = usePreview()
const isExiting = ref(false)

const handleExitPreview = async () => {
  if (isExiting.value) return
  
  try {
    isExiting.value = true
    await exitPreview()
  } catch (error) {
    console.error('Failed to exit preview:', error)
    isExiting.value = false
  }
}
</script>

<style scoped>
.preview-banner {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(90deg, #f59e0b, #d97706);
  color: white;
  padding: 12px 16px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.preview-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.preview-icon {
  font-size: 16px;
}

.preview-text {
  font-weight: 600;
}

.preview-info {
  opacity: 0.9;
  font-size: 13px;
}

.exit-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.exit-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.exit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .preview-content {
    flex-direction: column;
    gap: 8px;
  }
  
  .preview-banner {
    padding: 10px 16px;
  }
}
</style>