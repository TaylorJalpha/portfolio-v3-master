import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "about" | "default-clean" | "default" | "portfolio-detail" | "portfolio"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}