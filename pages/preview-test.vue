<!-- pages/preview-test.vue -->
<template>
  <div class="container mx-auto py-8 px-4">
    <h1 class="text-3xl font-bold mb-8">Preview Feature Test</h1>
    
    <div class="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Preview Status</h2>
      <p><strong>Preview Active:</strong> {{ isPreview ? 'Yes' : 'No' }}</p>
      <p v-if="previewData"><strong>Preview Data:</strong> {{ JSON.stringify(previewData, null, 2) }}</p>
    </div>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Test Preview Mode</h2>
      <form @submit.prevent="testPreview" class="space-y-4">
        <div>
          <label for="secret" class="block text-sm font-medium mb-2">Preview Secret:</label>
          <input
            id="secret"
            v-model="testSecret"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter your preview secret"
          />
        </div>
        <div>
          <label for="slug" class="block text-sm font-medium mb-2">Content Slug:</label>
          <input
            id="slug"
            v-model="testSlug"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="e.g., /project/my-project-slug"
          />
        </div>
        <div>
          <label for="type" class="block text-sm font-medium mb-2">Content Type:</label>
          <select
            id="type"
            v-model="testType"
            class="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="project">Project</option>
            <option value="caseStudy">Case Study</option>
            <option value="blogPost">Blog Post</option>
          </select>
        </div>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          :disabled="isEnabling"
        >
          {{ isEnabling ? 'Enabling...' : 'Enable Preview' }}
        </button>
      </form>
    </div>

    <div v-if="isPreview" class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Exit Preview</h2>
      <button
        @click="testExitPreview"
        class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        :disabled="isExiting"
      >
        {{ isExiting ? 'Exiting...' : 'Exit Preview Mode' }}
      </button>
    </div>

    <div v-if="error" class="p-4 bg-red-100 dark:bg-red-900 rounded-lg">
      <h3 class="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Error</h3>
      <p class="text-red-700 dark:text-red-300">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isPreview, previewData, enablePreview, exitPreview } = usePreview()

const testSecret = ref('')
const testSlug = ref('/project/test-project')
const testType = ref('project')
const isEnabling = ref(false)
const isExiting = ref(false)
const error = ref('')

const testPreview = async () => {
  if (!testSecret.value || !testSlug.value) {
    error.value = 'Please fill in all fields'
    return
  }

  try {
    isEnabling.value = true
    error.value = ''
    
    await enablePreview(testSecret.value, testSlug.value, testType.value)
  } catch (err: any) {
    error.value = err.message || 'Failed to enable preview mode'
  } finally {
    isEnabling.value = false
  }
}

const testExitPreview = async () => {
  try {
    isExiting.value = true
    error.value = ''
    
    await exitPreview()
  } catch (err: any) {
    error.value = err.message || 'Failed to exit preview mode'
  } finally {
    isExiting.value = false
  }
}

// SEO
useHead({
  title: 'Preview Test',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>