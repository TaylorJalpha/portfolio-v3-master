export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', '@nuxt/image'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
  compatibilityDate: '2024-10-16',
  plugins: ['~/plugins/portal-vue.js', '~/plugins/seo-robots.ts'], // Register plugins
  
  // Runtime configuration for API
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: process.env.API_SECRET,
    previewSecret: process.env.PREVIEW_SECRET,
    // Keys within public, will be also exposed to the client-side
    public: {
      // Base site URL used for canonical and og:url (set NUXT_PUBLIC_SITE_URL / SITE_URL in env for production)
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'http://localhost:3000',
      // Public site name used for default titles and structured data
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Taylor J. Ferguson',
      // Control indexing via env; default to 'true' so site is indexable unless explicitly disabled
      indexable: process.env.NUXT_PUBLIC_INDEXABLE || 'true'
    }
  },
  
  // SSR configuration
  ssr: true,
  
  // Nitro configuration for better error handling during build
  nitro: {
    // Handle prerender errors more gracefully
    prerender: {
      failOnError: false
    }
  },
  
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: process.env.NUXT_PUBLIC_SITE_NAME || 'Taylor J. Ferguson',
      titleTemplate: '%s • ' + (process.env.NUXT_PUBLIC_SITE_NAME || 'Taylor J. Ferguson'),
      meta: [
        { name: 'google-site-verification', content: 'HRD7ZPskFWyXNDiPLlJY3uLUhz1RrcA8tLsEGuUHlhQ' }, // Google Site Verification
        // Global Open Graph site name (will appear in link previews)
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0f172a' },
        { property: 'og:site_name', content: process.env.NUXT_PUBLIC_SITE_NAME || 'Taylor J. Ferguson' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/me/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/me/favicon.ico' }
      ],
      script: [
        {
          type: 'text/javascript', // <- Microsoft Clarity Tag 
          innerHTML: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "okw3w7o39y");`
        }
      ]
    }
  },
  routeRules: {
    '/sitemap.xml': { prerender: true },
    '/robots.txt': { prerender: true },
    // Disable prerendering for dynamic routes that depend on API data
    '/project/**': { ssr: true, prerender: false },
    '/case-study/**': { ssr: true, prerender: false },
    '/blog/**': { ssr: true, prerender: false }
  }
})