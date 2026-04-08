# Design Document: Homepage Professional Enhancement

## Overview

This design transforms the portfolio homepage from a multi-component layout into a streamlined, professional presentation optimized for management and leadership audiences. The enhancement restructures the page to follow a clear narrative flow: Hero Section → Bento Grid → Experience Timeline, removing playful elements while maintaining the technical sophistication demonstrated through rich animations.

The design draws inspiration from the existing About page's professional aesthetic, adapting its hero section pattern with BlurFade animations, gradient text treatments, and CTA button styling. The Professional Photo replaces the easter egg functionality, presenting a consistent, leadership-appropriate visual identity.

### Design Goals

1. **Professional First Impression**: Create an immediate impression of leadership readiness through clean visual hierarchy and focused messaging
2. **Narrative Flow**: Guide visitors through a logical progression from value proposition to capabilities to experience
3. **Technical Credibility**: Maintain animation quality and responsive behavior to demonstrate technical expertise
4. **Accessibility**: Ensure all enhancements meet WCAG standards for semantic HTML, keyboard navigation, and screen reader compatibility
5. **Performance**: Optimize image delivery and animation performance for fast initial load and smooth interactions

### Target Audience

- Product, Project, and Program Management recruiters and hiring managers
- Technical leadership evaluating product management candidates
- Stakeholders assessing product-technical hybrid capabilities
- Mobile and desktop users across modern browsers

## Architecture

### Component Structure

The homepage will be restructured as a single-page layout with three main sections:

```
pages/index.vue
├── HeroSection (new component)
│   ├── BlurFade wrapper
│   ├── AnimatedGradientText (eyebrow)
│   ├── H1 heading
│   ├── Description paragraph
│   ├── CTA buttons (2)
│   └── Professional photo
├── BentoGrid (existing component, unchanged)
└── ExperienceTimeline (existing component, unchanged)
```

### File Organization

**New Files:**
- `components/HeroSection.vue` - New hero component for homepage

**Modified Files:**
- `pages/index.vue` - Complete restructure to use new layout
- `pages/about.vue` - Update image source for professional photo

**Removed Components (from homepage):**
- `components/Intro.vue` - No longer used on homepage
- `components/About.vue` - Removed from homepage
- `components/Contact.vue` - Removed from homepage
- `components/Status.vue` - Removed from homepage
- `components/BentoViewPortfolio.vue` - Removed from homepage
- `components/CurrentWeather.vue` - Removed from homepage
- `components/PoweredByRubyOnRails.vue` - Removed from homepage
- `components/TerminalCard.vue` - Removed from homepage

**Note:** These components remain in the codebase for potential use on other pages; they are simply not imported/rendered on the homepage.

### Layout Pattern

The design follows a vertical scroll pattern with three distinct sections:

1. **Hero Section** (above-the-fold)
   - Full viewport height on desktop, auto-height on mobile
   - Two-column grid on desktop (text left, image right)
   - Stacked layout on mobile
   - BlurFade animations trigger on page load

2. **Bento Grid** (scroll target 1)
   - Existing component with no modifications
   - Maintains current animation behavior
   - Scroll-triggered animations remain unchanged

3. **Experience Timeline** (scroll target 2)
   - Existing component with no modifications
   - Maintains current scroll-based progress animation
   - Responsive behavior unchanged

### Responsive Breakpoints

Following the existing design system breakpoints:

- Mobile: < 768px (sm)
- Tablet: 768px - 1024px (md)
- Desktop: > 1024px (lg)

## Components and Interfaces

### HeroSection Component

**Purpose:** Display professional hero content with leadership-focused messaging, profile photo, and navigation CTAs.

**Props:**
```typescript
interface HeroSectionProps {
  // No props needed - content is static
}
```

**Template Structure:**
```vue
<template>
  <section class="hero-section">
    <div class="container">
      <div class="content-grid">
        <!-- Text Content Column -->
        <div class="text-content">
          <BlurFade :delay="120" :inView="true">
            <AnimatedGradientText>Product Leadership</AnimatedGradientText>
          </BlurFade>
          
          <BlurFade :delay="180" :inView="true">
            <h1>Control outcomes, mitigate risk</h1>
          </BlurFade>
          
          <BlurFade :delay="260" :inView="true">
            <p class="description">
              Technical Product and Program Manager specializing in secure, 
              reliable, and scalable product delivery through Agile methodologies, 
              performance optimization, and API-first integrations.
            </p>
          </BlurFade>
          
          <BlurFade :delay="300" :inView="true">
            <div class="cta-buttons">
              <button @click="scrollToBento" class="cta-primary">
                <span class="pulse-dot"></span>
                Product Approach
                <ArrowIcon />
              </button>
              <button @click="scrollToTimeline" class="cta-secondary">
                <span class="pulse-dot"></span>
                Experience
                <ArrowIcon />
              </button>
            </div>
          </BlurFade>
        </div>
        
        <!-- Image Column -->
        <div class="image-content">
          <BlurFade :delay="340" :inView="true">
            <NuxtImg
              src="/me/taylor-ferguson-profile-img.jpg"
              alt="Taylor J. Ferguson - Technical Product Manager"
              class="profile-photo"
              width="400"
              height="400"
              loading="eager"
              fetchpriority="high"
            />
          </BlurFade>
        </div>
      </div>
    </div>
  </section>
</template>
```

**Styling Approach:**
- Use Tailwind CSS classes matching About page patterns
- Dark theme with white/neutral text colors
- Gradient accents using `from-[#667eea] to-[#E63946]`
- Rounded corners and shadow effects on photo
- Responsive grid with `grid-cols-1 md:grid-cols-[minmax(0,1fr)_400px]`

**Animation Behavior:**
- All BlurFade animations set `inView={true}` to trigger on page load
- Staggered delays: 120ms, 180ms, 260ms, 300ms, 340ms
- No scroll-based triggers for hero section
- Animations complete before user scrolls

**Scroll Methods:**
```typescript
const scrollToBento = () => {
  const el = document.getElementById('bento-grid')
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const scrollToTimeline = () => {
  const el = document.querySelector('.experience-timeline')
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
```

### Updated Index Page

**Purpose:** Orchestrate the three-section homepage layout.

**Structure:**
```vue
<script setup>
import { computed } from 'vue'
import { useCanonicalUrl } from '@/composables/useCanonicalUrl'
import { useHead } from '#imports'
import HeroSection from '~/components/HeroSection.vue'
import BentoGrid from '~/components/BentoGrid.vue'
import ExperienceTimeline from '~/components/ExperienceTimeline.vue'

const canonical = useCanonicalUrl()
const title = 'Taylor J. Ferguson - Technical Product Manager | Product Leadership'
const description = 'Technical Product and Program Manager specializing in secure, reliable, and scalable product delivery. Expert in Agile methodologies, API integrations, and performance optimization.'
const ogImage = computed(() => {
  try {
    const u = new URL(canonical)
    return `${u.origin}/me/taylor-ferguson-profile-img.jpg`
  } catch {
    return '/me/taylor-ferguson-profile-img.jpg'
  }
})

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Taylor J. Ferguson',
  url: canonical,
  logo: ogImage.value,
  sameAs: []
}

useHead({
  title,
  link: [{ rel: 'canonical', href: canonical }],
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: ogImage.value },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage.value }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationJsonLd)
    }
  ]
})
</script>

<template>
  <div class="homepage">
    <HeroSection />
    <BentoGrid />
    <ExperienceTimeline 
      :data="experienceData"
      title="Changelog from my journey"
      description="Here's a timeline of my journey and experiences."
    />
  </div>
</template>
```

### Updated About Page Image

**Change:** Replace memoji avatar with professional photo with transparent background.

**Before:**
```vue
<img
  src="/me/me3.webp"
  alt="Taylor J. Ferguson leading product collaboration"
  class="relative z-10 h-full w-full object-cover object-center mix-blend-luminosity opacity-90"
  loading="lazy"
/>
```

**After:**
```vue
<img
  src="/me/taylor-ferguson-profile-pic-no-background.png"
  alt="Taylor J. Ferguson - Technical Product Manager"
  class="relative z-10 h-full w-full object-cover object-center mix-blend-luminosity opacity-90"
  loading="lazy"
/>
```

**Rationale:** The transparent background allows the AuroraBackground animation to show through, creating a professional yet dynamic visual effect. The mix-blend-luminosity and opacity settings remain unchanged to maintain visual consistency with the aurora effect.

## Data Models

### Experience Timeline Data

The ExperienceTimeline component expects an array of timeline entries:

```typescript
interface TimelineEntry {
  title: string // Year or time period
  content: string | { component: any; props?: Record<string, any> }
}

interface ExperienceData {
  data: TimelineEntry[]
  title?: string
  description?: string
}
```

**Example Data Structure:**
```typescript
const experienceData = [
  {
    title: '2024',
    content: `
      <h3 class="text-xl font-bold mb-2">Technical Product Manager</h3>
      <p class="text-sm text-neutral-400 mb-3">OneSynergee • Part-time</p>
      <p class="text-neutral-300">
        Leading product roadmap prioritization and delivery rituals for 
        agri-tech and climate-focused fintech startup. Aligning data, 
        design, and engineering teams on sustainable operating cadence.
      </p>
    `
  },
  {
    title: '2023',
    content: `
      <h3 class="text-xl font-bold mb-2">Product Leadership Certification</h3>
      <p class="text-sm text-neutral-400 mb-3">Product School</p>
      <p class="text-neutral-300">
        Completed comprehensive product leadership program covering 
        strategy, discovery, and execution frameworks.
      </p>
    `
  }
  // Additional entries...
]
```

### Image Assets

**Homepage Professional Photo:**
- Path: `/me/taylor-ferguson-profile-img.jpg`
- Format: JPEG
- Recommended size: 400x400px minimum
- Optimization: WebP format with JPEG fallback via NuxtImg
- Alt text: "Taylor J. Ferguson - Technical Product Manager"

**About Page Professional Photo:**
- Path: `/me/taylor-ferguson-profile-pic-no-background.png`
- Format: PNG (transparent background)
- Recommended size: 400x400px minimum
- Optimization: WebP format with PNG fallback via NuxtImg
- Alt text: "Taylor J. Ferguson - Technical Product Manager"

## Error Handling

### Image Loading Failures

**Scenario:** Professional photo fails to load due to network issues or missing file.

**Handling:**
```vue
<NuxtImg
  src="/me/taylor-ferguson-profile-img.jpg"
  alt="Taylor J. Ferguson - Technical Product Manager"
  @error="handleImageError"
  class="profile-photo"
/>

<script setup>
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
  console.error('Failed to load professional photo')
}
</script>

<!-- Fallback UI -->
<div v-if="imageError" class="image-fallback">
  <div class="placeholder-avatar">TF</div>
</div>
```

### Scroll Target Missing

**Scenario:** Scroll target element (bento-grid or timeline) doesn't exist in DOM.

**Handling:**
```typescript
const scrollToBento = () => {
  const el = document.getElementById('bento-grid')
  if (!el) {
    console.warn('Bento grid section not found')
    return
  }
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
```

**Fallback:** If scroll fails, user can still manually scroll to sections. No error UI needed.

### Animation Performance Issues

**Scenario:** Low-end devices struggle with blur animations.

**Handling:** BlurFade component already includes performance detection:

```typescript
const isLowEnd = process.client && (
  navigator.hardwareConcurrency <= 4 || 
  (navigator as any).deviceMemory <= 4 ||
  /Windows.*Chrome/.test(navigator.userAgent)
)

if (isLowEnd) {
  defaultVariants.hidden.filter = `blur(${Math.max(2, parseInt(props.blur) / 2)}px)`
}
```

**Result:** Reduced blur intensity on low-end devices maintains visual effect while improving performance.

### Reduced Motion Preference

**Scenario:** User has `prefers-reduced-motion` enabled.

**Handling:** Respect user preference by disabling animations:

```vue
<script setup>
const prefersReducedMotion = ref(false)

onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion.value = mediaQuery.matches
  
  mediaQuery.addEventListener('change', (e) => {
    prefersReducedMotion.value = e.matches
  })
})
</script>

<BlurFade 
  :delay="prefersReducedMotion ? 0 : 120" 
  :duration="prefersReducedMotion ? 0 : 0.4"
  :inView="true"
>
  <!-- Content -->
</BlurFade>
```

## Testing Strategy

### Unit Testing

**Focus Areas:**
1. HeroSection component rendering
2. Scroll navigation functions
3. Image error handling
4. Responsive layout behavior

**Example Tests:**

```typescript
// HeroSection.spec.ts
describe('HeroSection', () => {
  it('renders all content elements', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('.profile-photo').exists()).toBe(true)
    expect(wrapper.findAll('.cta-button')).toHaveLength(2)
  })
  
  it('calls scrollToBento when primary CTA clicked', async () => {
    const scrollIntoViewMock = vi.fn()
    global.Element.prototype.scrollIntoView = scrollIntoViewMock
    
    const wrapper = mount(HeroSection)
    await wrapper.find('.cta-primary').trigger('click')
    
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start'
    })
  })
  
  it('handles missing scroll target gracefully', async () => {
    const consoleSpy = vi.spyOn(console, 'warn')
    const wrapper = mount(HeroSection)
    
    // Remove target element
    document.getElementById = vi.fn(() => null)
    
    await wrapper.find('.cta-primary').trigger('click')
    expect(consoleSpy).toHaveBeenCalledWith('Bento grid section not found')
  })
})
```

### Integration Testing

**Focus Areas:**
1. Full page layout rendering
2. Section scroll navigation
3. Animation sequencing
4. Responsive breakpoint behavior

**Example Tests:**

```typescript
// index.spec.ts
describe('Homepage Integration', () => {
  it('renders all three sections in correct order', () => {
    const wrapper = mount(IndexPage)
    const sections = wrapper.findAll('section, .bento-grid, .experience-timeline')
    
    expect(sections[0].classes()).toContain('hero-section')
    expect(sections[1].attributes('id')).toBe('bento-grid')
    expect(sections[2].classes()).toContain('experience-timeline')
  })
  
  it('navigates between sections via CTA buttons', async () => {
    const wrapper = mount(IndexPage)
    const scrollSpy = vi.spyOn(Element.prototype, 'scrollIntoView')
    
    await wrapper.find('.cta-primary').trigger('click')
    expect(scrollSpy).toHaveBeenCalled()
    
    await wrapper.find('.cta-secondary').trigger('click')
    expect(scrollSpy).toHaveBeenCalledTimes(2)
  })
})
```

### Visual Regression Testing

**Focus Areas:**
1. Hero section layout at all breakpoints
2. Professional photo styling and positioning
3. CTA button hover states
4. Animation states (initial, mid-animation, complete)

**Tools:** Playwright with screenshot comparison

**Example Test:**

```typescript
// visual.spec.ts
test('hero section matches design at desktop', async ({ page }) => {
  await page.goto('/')
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.waitForLoadState('networkidle')
  
  // Wait for animations to complete
  await page.waitForTimeout(1000)
  
  await expect(page).toHaveScreenshot('hero-desktop.png', {
    fullPage: false,
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  })
})

test('hero section matches design at mobile', async ({ page }) => {
  await page.goto('/')
  await page.setViewportSize({ width: 375, height: 667 })
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(1000)
  
  await expect(page).toHaveScreenshot('hero-mobile.png')
})
```

### Accessibility Testing

**Focus Areas:**
1. Semantic HTML structure
2. Keyboard navigation
3. Screen reader compatibility
4. Color contrast ratios
5. Focus indicators

**Tools:** axe-core, NVDA/JAWS screen readers

**Example Tests:**

```typescript
// a11y.spec.ts
import { injectAxe, checkA11y } from 'axe-playwright'

test('homepage has no accessibility violations', async ({ page }) => {
  await page.goto('/')
  await injectAxe(page)
  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true }
  })
})

test('CTA buttons are keyboard navigable', async ({ page }) => {
  await page.goto('/')
  
  // Tab to first CTA
  await page.keyboard.press('Tab')
  await expect(page.locator('.cta-primary')).toBeFocused()
  
  // Tab to second CTA
  await page.keyboard.press('Tab')
  await expect(page.locator('.cta-secondary')).toBeFocused()
  
  // Activate with Enter
  await page.keyboard.press('Enter')
  // Verify scroll occurred (check URL hash or element position)
})
```

### Performance Testing

**Focus Areas:**
1. Initial page load time (LCP < 2.5s)
2. Animation frame rate (60fps target)
3. Image optimization (WebP delivery)
4. Layout shift (CLS < 0.1)

**Tools:** Lighthouse, WebPageTest, Chrome DevTools Performance panel

**Metrics to Track:**
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms
- Time to Interactive (TTI): < 3.8s

**Example Test:**

```typescript
// performance.spec.ts
test('homepage meets Core Web Vitals', async ({ page }) => {
  await page.goto('/')
  
  const metrics = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lcp = entries.find(e => e.entryType === 'largest-contentful-paint')
        const cls = entries.find(e => e.entryType === 'layout-shift')
        
        resolve({
          lcp: lcp?.renderTime || lcp?.loadTime,
          cls: cls?.value
        })
      }).observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] })
    })
  })
  
  expect(metrics.lcp).toBeLessThan(2500)
  expect(metrics.cls).toBeLessThan(0.1)
})
```

### Browser Compatibility Testing

**Target Browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 15+)
- Chrome Mobile (Android 10+)

**Focus Areas:**
1. CSS Grid layout support
2. Intersection Observer API
3. Smooth scroll behavior
4. WebP image format
5. CSS backdrop-filter (for blur effects)

**Fallbacks:**
- CSS Grid: Flexbox fallback for older browsers
- Intersection Observer: Polyfill via `intersection-observer` package
- Smooth scroll: Instant scroll fallback
- WebP: JPEG/PNG fallbacks via NuxtImg
- Backdrop-filter: Solid background fallback

## Implementation Notes

### Phase 1: Component Creation
1. Create `components/HeroSection.vue` with static content
2. Implement responsive grid layout
3. Add BlurFade animations with staggered delays
4. Style CTA buttons matching About page patterns
5. Integrate professional photo with proper sizing

### Phase 2: Page Restructure
1. Update `pages/index.vue` to remove old components
2. Import and render HeroSection, BentoGrid, ExperienceTimeline
3. Update SEO metadata (title, description, og:image)
4. Test scroll navigation between sections
5. Verify animation sequencing

### Phase 3: About Page Update
1. Update image source in `pages/about.vue`
2. Verify transparent background works with AuroraBackground
3. Test responsive behavior
4. Validate alt text and accessibility

### Phase 4: Testing & Optimization
1. Run unit tests for HeroSection
2. Perform visual regression testing
3. Conduct accessibility audit
4. Optimize images (WebP conversion)
5. Test on target browsers and devices

### Phase 5: Performance Tuning
1. Measure Core Web Vitals
2. Optimize animation performance
3. Implement lazy loading for below-fold content
4. Add preload hints for critical assets
5. Validate reduced-motion support

### Development Considerations

**Animation Timing:**
- Hero animations complete within 800ms total
- Stagger delays prevent overwhelming users
- Reduced motion preference disables animations entirely

**Image Optimization:**
- Use NuxtImg for automatic WebP conversion
- Set `loading="eager"` and `fetchpriority="high"` for hero image
- Lazy load below-fold images
- Provide width/height to prevent layout shift

**Responsive Design:**
- Mobile-first approach with progressive enhancement
- Test at 375px, 768px, 1024px, 1440px breakpoints
- Ensure touch targets are minimum 44x44px
- Verify text remains readable at all sizes

**Accessibility:**
- Use semantic HTML5 elements
- Provide descriptive alt text for images
- Ensure keyboard navigation works for all interactive elements
- Maintain 4.5:1 contrast ratio for body text
- Test with screen readers (NVDA, JAWS, VoiceOver)

**SEO:**
- Update meta title to emphasize product leadership
- Revise meta description to highlight key capabilities
- Change og:image to professional photo
- Maintain existing structured data
- Preserve canonical URL configuration

### Code Quality Standards

**Vue 3 Composition API:**
- Use `<script setup>` syntax
- Prefer `ref` and `computed` over reactive
- Extract reusable logic to composables
- Type all props and emits with TypeScript

**Styling:**
- Use Tailwind CSS utility classes
- Follow existing design system patterns
- Avoid custom CSS unless necessary
- Use CSS variables for theme colors

**Performance:**
- Minimize bundle size (tree-shake unused code)
- Lazy load non-critical components
- Use `v-once` for static content
- Debounce scroll listeners

**Testing:**
- Aim for 80%+ code coverage
- Write tests before implementation (TDD)
- Use descriptive test names
- Mock external dependencies

