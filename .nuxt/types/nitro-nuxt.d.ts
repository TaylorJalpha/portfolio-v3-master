
<<<<<<< HEAD
/// <reference path="nitro-middleware.d.ts" />
=======
>>>>>>> 6e8ec1e3102f642078bf0e8d3595bdb2b6d6cc4f
/// <reference path="./schema.d.ts" />

import type { RuntimeConfig } from 'nuxt/schema'
import type { H3Event } from 'h3'
import type { LogObject } from 'consola'
import type { NuxtIslandContext, NuxtIslandResponse, NuxtRenderHTMLContext } from 'nuxt/app'

declare module 'nitropack' {
  interface NitroRuntimeConfigApp {
    buildAssetsDir: string
    cdnURL: string
  }
  interface NitroRuntimeConfig extends RuntimeConfig {}
  interface NitroRouteConfig {
    ssr?: boolean
<<<<<<< HEAD
    noScripts?: boolean
    /** @deprecated Use `noScripts` instead */
=======
>>>>>>> 6e8ec1e3102f642078bf0e8d3595bdb2b6d6cc4f
    experimentalNoScripts?: boolean
  }
  interface NitroRouteRules {
    ssr?: boolean
<<<<<<< HEAD
    noScripts?: boolean
    /** @deprecated Use `noScripts` instead */
=======
>>>>>>> 6e8ec1e3102f642078bf0e8d3595bdb2b6d6cc4f
    experimentalNoScripts?: boolean
    appMiddleware?: Record<string, boolean>
  }
  interface NitroRuntimeHooks {
    'dev:ssr-logs': (ctx: { logs: LogObject[], path: string }) => void | Promise<void>
    'render:html': (htmlContext: NuxtRenderHTMLContext, context: { event: H3Event }) => void | Promise<void>
    'render:island': (islandResponse: NuxtIslandResponse, context: { event: H3Event, islandContext: NuxtIslandContext }) => void | Promise<void>
  }
}
