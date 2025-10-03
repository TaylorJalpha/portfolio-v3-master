// server/api/exit-preview.post.ts
export default defineEventHandler(async (event) => {
  // Clear the preview mode cookies
  deleteCookie(event, '__prerender_bypass')
  deleteCookie(event, '__next_preview_data')
  
  return {
    success: true,
    message: 'Preview mode disabled'
  }
})