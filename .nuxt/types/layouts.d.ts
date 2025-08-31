import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default"
<<<<<<< HEAD
declare module 'nuxt/app' {
=======
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
>>>>>>> 6e8ec1e3102f642078bf0e8d3595bdb2b6d6cc4f
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}