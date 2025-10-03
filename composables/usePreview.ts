// composables/usePreview.ts
export const usePreview = () => {
  const isPreview = ref(false)
  const previewData = ref(null)

  // Check if we're in preview mode (client-side only)
  if (process.client) {
    const cookies = document.cookie
    const hasPreviewBypass = cookies.includes('__prerender_bypass')
    const hasPreviewData = cookies.includes('__next_preview_data')
    
    if (hasPreviewBypass && hasPreviewData) {
      isPreview.value = true
      
      // Try to parse preview data from cookie
      try {
        const previewCookie = cookies
          .split('; ')
          .find(row => row.startsWith('__next_preview_data='))
        
        if (previewCookie) {
          const cookieValue = previewCookie.split('=')[1]
          previewData.value = JSON.parse(decodeURIComponent(cookieValue))
        }
      } catch (error) {
        console.warn('Failed to parse preview data:', error)
      }
    }
  }

  const enablePreview = async (secret: string, slug: string, type: string, id?: string) => {
    try {
      const response = await $fetch('/api/preview', {
        method: 'POST',
        body: { secret, slug, type, id }
      }) as { success: boolean; redirectPath?: string; message: string }
      
      if (response.success && response.redirectPath) {
        // Redirect to the preview page
        await navigateTo(response.redirectPath)
      }
      
      return response
    } catch (error) {
      console.error('Failed to enable preview:', error)
      throw error
    }
  }

  const exitPreview = async () => {
    try {
      await $fetch('/api/exit-preview', {
        method: 'POST'
      })
      
      // Reload the page to clear preview state
      if (process.client) {
        window.location.reload()
      }
    } catch (error) {
      console.error('Failed to exit preview:', error)
      throw error
    }
  }

  return {
    isPreview: readonly(isPreview),
    previewData: readonly(previewData),
    enablePreview,
    exitPreview
  }
}