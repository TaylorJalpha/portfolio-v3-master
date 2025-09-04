
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'About': typeof import("../components/About.vue")['default']
    'AnimatedShinyText': typeof import("../components/AnimatedShinyText.vue")['default']
    'Blog': typeof import("../components/Blog.vue")['default']
    'Button': typeof import("../components/Button.vue")['default']
    'Card': typeof import("../components/Card.vue")['default']
    'Contact': typeof import("../components/Contact.vue")['default']
    'ContactForm': typeof import("../components/ContactForm.vue")['default']
    'Copyright': typeof import("../components/Copyright.vue")['default']
    'CurrentWeather': typeof import("../components/CurrentWeather.vue")['default']
    'DotPattern': typeof import("../components/DotPattern.vue")['default']
    'Globe': typeof import("../components/Globe.vue")['default']
    'Intro': typeof import("../components/Intro.vue")['default']
    'Meteors': typeof import("../components/Meteors.vue")['default']
    'PortfolioCard': typeof import("../components/PortfolioCard.vue")['default']
    'PortfolioModal': typeof import("../components/PortfolioModal.vue")['default']
    'PoweredByRubyOnRails': typeof import("../components/PoweredByRubyOnRails.vue")['default']
    'Status': typeof import("../components/Status.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAbout': LazyComponent<typeof import("../components/About.vue")['default']>
    'LazyAnimatedShinyText': LazyComponent<typeof import("../components/AnimatedShinyText.vue")['default']>
    'LazyBlog': LazyComponent<typeof import("../components/Blog.vue")['default']>
    'LazyButton': LazyComponent<typeof import("../components/Button.vue")['default']>
    'LazyCard': LazyComponent<typeof import("../components/Card.vue")['default']>
    'LazyContact': LazyComponent<typeof import("../components/Contact.vue")['default']>
    'LazyContactForm': LazyComponent<typeof import("../components/ContactForm.vue")['default']>
    'LazyCopyright': LazyComponent<typeof import("../components/Copyright.vue")['default']>
    'LazyCurrentWeather': LazyComponent<typeof import("../components/CurrentWeather.vue")['default']>
    'LazyDotPattern': LazyComponent<typeof import("../components/DotPattern.vue")['default']>
    'LazyGlobe': LazyComponent<typeof import("../components/Globe.vue")['default']>
    'LazyIntro': LazyComponent<typeof import("../components/Intro.vue")['default']>
    'LazyMeteors': LazyComponent<typeof import("../components/Meteors.vue")['default']>
    'LazyPortfolioCard': LazyComponent<typeof import("../components/PortfolioCard.vue")['default']>
    'LazyPortfolioModal': LazyComponent<typeof import("../components/PortfolioModal.vue")['default']>
    'LazyPoweredByRubyOnRails': LazyComponent<typeof import("../components/PoweredByRubyOnRails.vue")['default']>
    'LazyStatus': LazyComponent<typeof import("../components/Status.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const About: typeof import("../components/About.vue")['default']
export const AnimatedShinyText: typeof import("../components/AnimatedShinyText.vue")['default']
export const Blog: typeof import("../components/Blog.vue")['default']
export const Button: typeof import("../components/Button.vue")['default']
export const Card: typeof import("../components/Card.vue")['default']
export const Contact: typeof import("../components/Contact.vue")['default']
export const ContactForm: typeof import("../components/ContactForm.vue")['default']
export const Copyright: typeof import("../components/Copyright.vue")['default']
export const CurrentWeather: typeof import("../components/CurrentWeather.vue")['default']
export const DotPattern: typeof import("../components/DotPattern.vue")['default']
export const Globe: typeof import("../components/Globe.vue")['default']
export const Intro: typeof import("../components/Intro.vue")['default']
export const Meteors: typeof import("../components/Meteors.vue")['default']
export const PortfolioCard: typeof import("../components/PortfolioCard.vue")['default']
export const PortfolioModal: typeof import("../components/PortfolioModal.vue")['default']
export const PoweredByRubyOnRails: typeof import("../components/PoweredByRubyOnRails.vue")['default']
export const Status: typeof import("../components/Status.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAbout: LazyComponent<typeof import("../components/About.vue")['default']>
export const LazyAnimatedShinyText: LazyComponent<typeof import("../components/AnimatedShinyText.vue")['default']>
export const LazyBlog: LazyComponent<typeof import("../components/Blog.vue")['default']>
export const LazyButton: LazyComponent<typeof import("../components/Button.vue")['default']>
export const LazyCard: LazyComponent<typeof import("../components/Card.vue")['default']>
export const LazyContact: LazyComponent<typeof import("../components/Contact.vue")['default']>
export const LazyContactForm: LazyComponent<typeof import("../components/ContactForm.vue")['default']>
export const LazyCopyright: LazyComponent<typeof import("../components/Copyright.vue")['default']>
export const LazyCurrentWeather: LazyComponent<typeof import("../components/CurrentWeather.vue")['default']>
export const LazyDotPattern: LazyComponent<typeof import("../components/DotPattern.vue")['default']>
export const LazyGlobe: LazyComponent<typeof import("../components/Globe.vue")['default']>
export const LazyIntro: LazyComponent<typeof import("../components/Intro.vue")['default']>
export const LazyMeteors: LazyComponent<typeof import("../components/Meteors.vue")['default']>
export const LazyPortfolioCard: LazyComponent<typeof import("../components/PortfolioCard.vue")['default']>
export const LazyPortfolioModal: LazyComponent<typeof import("../components/PortfolioModal.vue")['default']>
export const LazyPoweredByRubyOnRails: LazyComponent<typeof import("../components/PoweredByRubyOnRails.vue")['default']>
export const LazyStatus: LazyComponent<typeof import("../components/Status.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
