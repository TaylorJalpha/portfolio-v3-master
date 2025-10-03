
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
      'About': typeof import("../../components/About.vue")['default']
    'AboutNav': typeof import("../../components/AboutNav.vue")['default']
    'AnimatedGradientText': typeof import("../../components/AnimatedGradientText.vue")['default']
    'AnimatedShinyText': typeof import("../../components/AnimatedShinyText.vue")['default']
    'AuroraBackground': typeof import("../../components/AuroraBackground.vue")['default']
    'AuroraBackgroundDemo': typeof import("../../components/AuroraBackgroundDemo.vue")['default']
    'BentoViewPortfolio': typeof import("../../components/BentoViewPortfolio.vue")['default']
    'BlurFade': typeof import("../../components/BlurFade.vue")['default']
    'Button': typeof import("../../components/Button.vue")['default']
    'Card': typeof import("../../components/Card.vue")['default']
    'Contact': typeof import("../../components/Contact.vue")['default']
    'ContactForm': typeof import("../../components/ContactForm.vue")['default']
    'CurrentWeather': typeof import("../../components/CurrentWeather.vue")['default']
    'DotPattern': typeof import("../../components/DotPattern.vue")['default']
    'ExperienceTimeline': typeof import("../../components/ExperienceTimeline.vue")['default']
    'FloatingNav': typeof import("../../components/FloatingNav.vue")['default']
    'Footer': typeof import("../../components/Footer.vue")['default']
    'Globe': typeof import("../../components/Globe.vue")['default']
    'Intro': typeof import("../../components/Intro.vue")['default']
    'MarkdownRenderer': typeof import("../../components/MarkdownRenderer.vue")['default']
    'Meteors': typeof import("../../components/Meteors.vue")['default']
    'PdfViewer': typeof import("../../components/PdfViewer.vue")['default']
    'PortfolioCard': typeof import("../../components/PortfolioCard.vue")['default']
    'PortfolioCardSkeleton': typeof import("../../components/PortfolioCardSkeleton.vue")['default']
    'PortfolioDetailLayout': typeof import("../../components/PortfolioDetailLayout.vue")['default']
    'PortfolioDetailView': typeof import("../../components/PortfolioDetailView.vue")['default']
    'PortfolioModal': typeof import("../../components/PortfolioModal.vue")['default']
    'PortfolioNav': typeof import("../../components/PortfolioNav.vue")['default']
    'PoweredByRubyOnRails': typeof import("../../components/PoweredByRubyOnRails.vue")['default']
    'PreviewBanner': typeof import("../../components/PreviewBanner.vue")['default']
    'SanityImage': typeof import("../../components/SanityImage.vue")['default']
    'Status': typeof import("../../components/Status.vue")['default']
    'TerminalCard': typeof import("../../components/TerminalCard.vue")['default']
    'UiBackgroundGradient': typeof import("../../components/ui/BackgroundGradient.vue")['default']
    'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'Motion': typeof import("@vueuse/motion")['MotionComponent']
    'MotionGroup': typeof import("@vueuse/motion")['MotionGroupComponent']
    'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAbout': LazyComponent<typeof import("../../components/About.vue")['default']>
    'LazyAboutNav': LazyComponent<typeof import("../../components/AboutNav.vue")['default']>
    'LazyAnimatedGradientText': LazyComponent<typeof import("../../components/AnimatedGradientText.vue")['default']>
    'LazyAnimatedShinyText': LazyComponent<typeof import("../../components/AnimatedShinyText.vue")['default']>
    'LazyAuroraBackground': LazyComponent<typeof import("../../components/AuroraBackground.vue")['default']>
    'LazyAuroraBackgroundDemo': LazyComponent<typeof import("../../components/AuroraBackgroundDemo.vue")['default']>
    'LazyBentoViewPortfolio': LazyComponent<typeof import("../../components/BentoViewPortfolio.vue")['default']>
    'LazyBlurFade': LazyComponent<typeof import("../../components/BlurFade.vue")['default']>
    'LazyButton': LazyComponent<typeof import("../../components/Button.vue")['default']>
    'LazyCard': LazyComponent<typeof import("../../components/Card.vue")['default']>
    'LazyContact': LazyComponent<typeof import("../../components/Contact.vue")['default']>
    'LazyContactForm': LazyComponent<typeof import("../../components/ContactForm.vue")['default']>
    'LazyCurrentWeather': LazyComponent<typeof import("../../components/CurrentWeather.vue")['default']>
    'LazyDotPattern': LazyComponent<typeof import("../../components/DotPattern.vue")['default']>
    'LazyExperienceTimeline': LazyComponent<typeof import("../../components/ExperienceTimeline.vue")['default']>
    'LazyFloatingNav': LazyComponent<typeof import("../../components/FloatingNav.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../../components/Footer.vue")['default']>
    'LazyGlobe': LazyComponent<typeof import("../../components/Globe.vue")['default']>
    'LazyIntro': LazyComponent<typeof import("../../components/Intro.vue")['default']>
    'LazyMarkdownRenderer': LazyComponent<typeof import("../../components/MarkdownRenderer.vue")['default']>
    'LazyMeteors': LazyComponent<typeof import("../../components/Meteors.vue")['default']>
    'LazyPdfViewer': LazyComponent<typeof import("../../components/PdfViewer.vue")['default']>
    'LazyPortfolioCard': LazyComponent<typeof import("../../components/PortfolioCard.vue")['default']>
    'LazyPortfolioCardSkeleton': LazyComponent<typeof import("../../components/PortfolioCardSkeleton.vue")['default']>
    'LazyPortfolioDetailLayout': LazyComponent<typeof import("../../components/PortfolioDetailLayout.vue")['default']>
    'LazyPortfolioDetailView': LazyComponent<typeof import("../../components/PortfolioDetailView.vue")['default']>
    'LazyPortfolioModal': LazyComponent<typeof import("../../components/PortfolioModal.vue")['default']>
    'LazyPortfolioNav': LazyComponent<typeof import("../../components/PortfolioNav.vue")['default']>
    'LazyPoweredByRubyOnRails': LazyComponent<typeof import("../../components/PoweredByRubyOnRails.vue")['default']>
    'LazyPreviewBanner': LazyComponent<typeof import("../../components/PreviewBanner.vue")['default']>
    'LazySanityImage': LazyComponent<typeof import("../../components/SanityImage.vue")['default']>
    'LazyStatus': LazyComponent<typeof import("../../components/Status.vue")['default']>
    'LazyTerminalCard': LazyComponent<typeof import("../../components/TerminalCard.vue")['default']>
    'LazyUiBackgroundGradient': LazyComponent<typeof import("../../components/ui/BackgroundGradient.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyMotion': LazyComponent<typeof import("@vueuse/motion")['MotionComponent']>
    'LazyMotionGroup': LazyComponent<typeof import("@vueuse/motion")['MotionGroupComponent']>
    'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
