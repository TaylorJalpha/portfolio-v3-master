# Implementation Plan: Homepage Professional Enhancement

## Overview

This implementation plan transforms the portfolio homepage from a multi-component layout into a streamlined, professional presentation optimized for management and leadership audiences. The work involves creating a new HeroSection component, restructuring the homepage to display only Hero → Bento Grid → Experience Timeline, and updating the About page to use a professional photo instead of a memoji avatar.

The implementation follows Vue 3 Composition API patterns with TypeScript, uses Tailwind CSS for styling, and maintains the existing animation quality through BlurFade components and Motion.js.

## Tasks

- [x] 1. Create HeroSection component with professional layout
  - [x] 1.1 Create components/HeroSection.vue with two-column responsive grid
    - Implement grid layout: text content left, professional photo right
    - Use `grid-cols-1 md:grid-cols-[minmax(0,1fr)_400px]` for responsive behavior
    - Stack vertically on mobile (< 768px)
    - _Requirements: 2.1, 2.6, 2.7, 7.1, 7.2_
  
  - [x] 1.2 Add eyebrow text with AnimatedGradientText component
    - Display "Product Leadership" text above H1
    - Use AnimatedGradientText component from existing design system
    - Wrap in BlurFade with 120ms delay
    - _Requirements: 2.1, 2.8_
  
  - [x] 1.3 Implement H1 heading with leadership-focused messaging
    - Display heading: "Control outcomes, mitigate risk"
    - Use text-4xl sm:text-5xl md:text-6xl font-extrabold
    - Apply dark theme text colors (text-neutral-900 dark:text-white)
    - Wrap in BlurFade with 180ms delay
    - _Requirements: 2.2, 9.6, 11.2_
  
  - [x] 1.4 Add description paragraph referencing Bento Grid themes
    - Display description about Technical Product and Program Manager specialization
    - Reference: secure, reliable, scalable delivery, Agile, performance optimization, API integrations
    - Use text-lg sm:text-xl leading-relaxed
    - Wrap in BlurFade with 260ms delay
    - _Requirements: 2.3, 7.5_
  
  - [x] 1.5 Implement professional photo with proper styling
    - Use NuxtImg component with src="/me/taylor-ferguson-profile-img.jpg"
    - Set width="400" height="400" for aspect ratio preservation
    - Apply rounded corners and shadow effects matching About page
    - Set loading="eager" and fetchpriority="high" for LCP optimization
    - Add alt text: "Taylor J. Ferguson - Technical Product Manager"
    - Wrap in BlurFade with 340ms delay
    - _Requirements: 2.4, 4.1, 4.2, 4.3, 4.4, 4.5, 9.3, 10.1_
  
  - [x] 1.6 Create two CTA buttons with scroll navigation
    - First CTA: "Product Approach" → scrolls to Bento Grid
    - Second CTA: "Experience" → scrolls to Experience Timeline
    - Use button styling from About page (gradient border, pulse dot, arrow icon)
    - Implement smooth scroll with `scrollIntoView({ behavior: 'smooth', block: 'start' })`
    - Wrap button container in BlurFade with 300ms delay
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 7.3, 9.2, 9.4_
  
  - [ ]* 1.7 Add error handling for missing scroll targets
    - Check if target element exists before scrolling
    - Log warning to console if target not found
    - Gracefully fail without breaking user experience
    - _Requirements: Design error handling section_
  
  - [ ]* 1.8 Implement image loading error handling
    - Add @error handler to NuxtImg component
    - Display fallback placeholder with initials "TF" on error
    - Log error to console for debugging
    - _Requirements: Design error handling section_

- [ ] 2. Checkpoint - Verify HeroSection component renders correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 3. Restructure homepage (pages/index.vue)
  - [x] 3.1 Remove old component imports and template usage
    - Remove imports: Intro, About, Contact, Status, BentoViewPortfolio, CurrentWeather, PoweredByRubyOnRails, TerminalCard
    - Remove all animation setup code for old components (cards ref, animateCards function)
    - Clean up template to remove all old component tags
    - _Requirements: 1.2_
  
  - [x] 3.2 Import new HeroSection component
    - Add import: `import HeroSection from '~/components/HeroSection.vue'`
    - Import BentoGrid and ExperienceTimeline (already exist)
    - _Requirements: 1.1_
  
  - [x] 3.3 Update template to render three sections in order
    - Render: `<HeroSection />`, `<BentoGrid />`, `<ExperienceTimeline />`
    - Ensure BentoGrid has id="bento-grid" for scroll targeting
    - Ensure ExperienceTimeline has class="experience-timeline" for scroll targeting
    - _Requirements: 1.1, 1.4_
  
  - [x] 3.4 Update SEO metadata for professional positioning
    - Update title: "Taylor J. Ferguson - Technical Product Manager | Product Leadership"
    - Update description: "Technical Product and Program Manager specializing in secure, reliable, and scalable product delivery. Expert in Agile methodologies, API integrations, and performance optimization."
    - Update ogImage to use /me/taylor-ferguson-profile-img.jpg
    - Maintain existing canonical URL and structured data
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_
  
  - [x] 3.5 Verify responsive behavior at all breakpoints
    - Test at 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large desktop)
    - Verify hero section stacks vertically on mobile
    - Verify Bento Grid and Experience Timeline maintain existing responsive behavior
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 4. Checkpoint - Verify homepage restructure is complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Update About page professional photo
  - [x] 5.1 Replace memoji avatar with professional photo
    - In pages/about.vue, locate the About_Page_Image_Section
    - Change src from "/me/me3.webp" to "/me/taylor-ferguson-profile-pic-no-background.png"
    - Update alt text to "Taylor J. Ferguson - Technical Product Manager"
    - Maintain all existing styling (mix-blend-luminosity, opacity-90, object-cover)
    - Preserve AuroraBackground component and animation
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_
  
  - [x] 5.2 Verify transparent background works with aurora animation
    - Test that PNG transparency allows aurora gradient to show through
    - Verify mix-blend-luminosity creates desired visual effect
    - Check responsive behavior at all breakpoints
    - _Requirements: 6.3, 6.5_

- [ ] 6. Checkpoint - Verify About page update is complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Implement accessibility enhancements
  - [x] 7.1 Add semantic HTML structure to HeroSection
    - Use `<section>` wrapper with appropriate class
    - Use `<header>` for hero content container
    - Use `<h1>` for main heading
    - Use `<nav>` or appropriate wrapper for CTA buttons
    - _Requirements: 9.1_
  
  - [x] 7.2 Add ARIA labels to interactive elements
    - Add aria-label to CTA buttons describing scroll action
    - Ensure focus indicators are visible on all interactive elements
    - _Requirements: 9.2, 9.4_
  
  - [x] 7.3 Verify keyboard navigation for CTAs
    - Test Tab key navigation through CTA buttons
    - Test Enter/Space key activation of scroll actions
    - Ensure focus order is logical (top to bottom)
    - _Requirements: 9.4_
  
  - [x] 7.4 Verify color contrast ratios
    - Check all text meets 4.5:1 contrast ratio for body text
    - Check heading text meets 3:1 contrast ratio
    - Use browser DevTools or axe to validate
    - _Requirements: 9.5_
  
  - [ ]* 7.5 Test with screen readers
    - Test with NVDA (Windows) or VoiceOver (Mac)
    - Verify all content is announced correctly
    - Verify CTA button actions are clear
    - _Requirements: 9.1_

- [x] 8. Implement performance optimizations
  - [x] 8.1 Optimize professional photo for web delivery
    - Verify NuxtImg generates WebP format with JPEG fallback
    - Verify image dimensions are appropriate (400x400px minimum)
    - Check that loading="eager" and fetchpriority="high" are set for hero image
    - _Requirements: 10.1, 10.2_
  
  - [x] 8.2 Implement lazy loading for below-fold content
    - Verify BentoGrid and ExperienceTimeline images use loading="lazy"
    - Check that below-fold images don't block initial render
    - _Requirements: 10.3_
  
  - [x] 8.3 Minimize layout shift during page load
    - Set explicit width/height on all images
    - Reserve space for animated elements
    - Test Cumulative Layout Shift (CLS) score < 0.1
    - _Requirements: 10.4_
  
  - [ ]* 8.4 Measure Core Web Vitals
    - Run Lighthouse audit on homepage
    - Verify LCP < 2.5s (should be professional photo)
    - Verify FID < 100ms
    - Verify CLS < 0.1
    - _Requirements: 10.4, Design performance testing section_

- [x] 9. Implement reduced motion support
  - [x] 9.1 Add prefers-reduced-motion detection
    - Create ref to track user's motion preference
    - Use `window.matchMedia('(prefers-reduced-motion: reduce)')`
    - Listen for changes to motion preference
    - _Requirements: 8.5_
  
  - [x] 9.2 Disable animations when reduced motion is preferred
    - Set BlurFade delay to 0 when reduced motion is enabled
    - Set BlurFade duration to 0 when reduced motion is enabled
    - Ensure content is still visible without animations
    - _Requirements: 8.5_

- [ ] 10. Final checkpoint - Verify all functionality and run tests
  - Ensure all tests pass, ask the user if questions arise.

- [ ]* 11. Write unit tests for HeroSection component
  - Test that all content elements render correctly
  - Test scroll navigation functions are called on CTA click
  - Test image error handling displays fallback
  - Test missing scroll target logs warning
  - _Requirements: Design testing strategy section_

- [ ]* 12. Write integration tests for homepage
  - Test that all three sections render in correct order
  - Test scroll navigation between sections via CTAs
  - Test responsive layout at different breakpoints
  - _Requirements: Design testing strategy section_

- [ ]* 13. Perform visual regression testing
  - Capture screenshots at desktop (1440x900) and mobile (375x667)
  - Compare against design mockups
  - Test CTA button hover states
  - Test animation states (initial, mid-animation, complete)
  - _Requirements: Design testing strategy section_

- [ ]* 14. Run accessibility audit
  - Run axe-core accessibility checker
  - Test keyboard navigation through all interactive elements
  - Test with screen reader (NVDA or VoiceOver)
  - Verify color contrast ratios meet WCAG standards
  - _Requirements: Design testing strategy section_

- [ ]* 15. Perform cross-browser testing
  - Test on Chrome/Edge (last 2 versions)
  - Test on Firefox (last 2 versions)
  - Test on Safari (last 2 versions)
  - Test on Mobile Safari (iOS 15+)
  - Test on Chrome Mobile (Android 10+)
  - _Requirements: Design browser compatibility section_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- All code follows Vue 3 Composition API with TypeScript
- Styling uses Tailwind CSS matching existing design system
- Animations use BlurFade component and Motion.js library
- Professional photos are located at /me/taylor-ferguson-profile-img.jpg (with background) and /me/taylor-ferguson-profile-pic-no-background.png (transparent)
