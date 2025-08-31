
<<<<<<< HEAD
import { _replaceAppConfig } from '#app/config'
=======
import { updateAppConfig } from '#app/config'
>>>>>>> 6e8ec1e3102f642078bf0e8d3595bdb2b6d6cc4f
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
<<<<<<< HEAD
    _replaceAppConfig(newModule.default)
=======
    updateAppConfig(newModule.default)
>>>>>>> 6e8ec1e3102f642078bf0e8d3595bdb2b6d6cc4f
  })
}



export default /*@__PURE__*/ defuFn(inlineConfig)
