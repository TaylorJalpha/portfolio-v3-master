// server/api/preview.post.ts
export default defineEventHandler(async (event) => {
  const { secret, slug, type, id } = await readBody(event)

  // Check for secret to confirm this is a valid request
  if (!secret) {
    throw createError({
      statusCode: 401,
      statusMessage: 'No secret provided'
    })
  }

  // Get runtime config for preview secret
  const config = useRuntimeConfig()
  const expectedSecret = config.previewSecret

  if (!expectedSecret || secret !== expectedSecret) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid secret'
    })
  }

  // Set preview cookies
  setCookie(event, '__prerender_bypass', secret, {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: 60 * 60 // 1 hour
  })

  setCookie(event, '__next_preview_data', JSON.stringify({ type, id, slug }), {
    httpOnly: true,
    sameSite: 'none', 
    secure: true,
    maxAge: 60 * 60 // 1 hour
  })

  // Return success with redirect path
  const redirectPath = slug?.startsWith('/') ? slug : `/${slug}`
  
  return {
    success: true,
    redirectPath,
    message: 'Preview mode enabled'
  }
})