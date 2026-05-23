export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const indexable = String(config.public?.indexable || 'true') === 'true'
  const robots = indexable ? 'index, follow' : 'noindex, nofollow'
  useHead({
    meta: [
      { name: 'robots', content: robots }
    ]
  })
})
