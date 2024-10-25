// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-10-16',
  app: {
    head: {
      meta: [
        { name: 'google-site-verification', content: 'HRD7ZPskFWyXNDiPLlJY3uLUhz1RrcA8tLsEGuUHlhQ' } // <- Google Site Verification
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
  }
})