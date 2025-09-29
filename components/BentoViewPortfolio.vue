<script setup lang="ts">
import { useHeroSpotlight } from '#imports'

const { data, pending, error } = useHeroSpotlight()
</script>

<template>
  <Card class="spotlight-card" colSpan="md:col-span-1" rowSpan="md:row-span-3">
    <template v-if="!pending && !error && data">
  <NuxtLink :to="data.linkUrl || '/portfolio'" class="block focus:outline-none group">
        <div class="mb-3">
          <AnimatedShinyText class="text-base font-semibold text-[#FFFFFF] dark:text-[#ff6b73] featured-shimmer-text" :shimmerWidth="120">
            ✨ Latest Case Study
          </AnimatedShinyText>
        </div>
        <div class="relative overflow-hidden rounded-md aspect-[16/9] mb-4"> 
          <!-- Simple Skills Marquee -->
          <div class="absolute inset-0 flex items-center">
            <div class="flex animate-marquee-scroll whitespace-nowrap">
              <!-- First set of skills -->
              <div class="flex items-center space-x-4 mr-8">
                <div class="skill-badge">
                  <span class="skill-icon">📊</span>
                  <span>Product Strategy</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">🔍</span>
                  <span>User Research</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">⚡</span>
                  <span>Agile/Scrum</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">📈</span>
                  <span>Data Analysis</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">🎯</span>
                  <span>KPI Tracking</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">💡</span>
                  <span>Innovation</span>
                </div>
              </div>
              <!-- Duplicate for seamless loop -->
              <div class="flex items-center space-x-4 mr-8">
                <div class="skill-badge">
                  <span class="skill-icon">📊</span>
                  <span>Product Strategy</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">🔍</span>
                  <span>User Research</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">⚡</span>
                  <span>Agile/Scrum</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">📈</span>
                  <span>Data Analysis</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">🎯</span>
                  <span>KPI Tracking</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">💡</span>
                  <span>Innovation</span>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        </div>
        <h2 class="text-xl font-bold m-0 z-20 line-clamp-1">{{ data.title }}</h2>
        
        <!-- CTA -->
  <div class="mt-4 inline-flex items-center gap-2 text-[#746CFF] hover:text-[#ff6b73] transition-colors">
          <span class="text-sm font-medium">Explore case study</span>
          <svg class="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </NuxtLink>
    </template>

    <!-- Fallback / loading state -->
    <template v-else>
      <NuxtLink to="/portfolio" class="block focus:outline-none group">
        <div class="relative overflow-hidden rounded-md aspect-[16/9] mb-4">
          <!-- Same skills marquee for fallback -->
          <div class="absolute inset-0 flex items-center">
            <div class="flex animate-marquee-scroll whitespace-nowrap">
              <div class="flex items-center space-x-4 mr-8">
                <div class="skill-badge">
                  <span class="skill-icon">🚀</span>
                  <span>Product Launch</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">💻</span>
                  <span>Full-Stack Dev</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">🎨</span>
                  <span>UI/UX Design</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">📱</span>
                  <span>Mobile First</span>
                </div>
              </div>
              <div class="flex items-center space-x-4 mr-8">
                <div class="skill-badge">
                  <span class="skill-icon">🚀</span>
                  <span>Product Launch</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">💻</span>
                  <span>Full-Stack Dev</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">🎨</span>
                  <span>UI/UX Design</span>
                </div>
                <div class="skill-badge">
                  <span class="skill-icon">📱</span>
                  <span>Mobile First</span>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        </div>
        <h2 class="text-xl font-bold m-0 z-20">My Work</h2>
        <p class="mt-2 text-sm text-gray-300">Product management portfolio and case studies</p>
        <div class="mt-4 inline-flex items-center gap-2 text-[#E63946] hover:text-[#ff6b73] transition-colors">
          <span class="text-sm font-medium">Browse portfolio</span>
          <svg class="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </NuxtLink>
    </template>
  </Card>
</template>



<style lang="css" scoped>
.spotlight-card {
  position: relative;
  overflow: visible;
  /* Override Card's solid background with dotted pattern */
  background: #171717 !important; /* base color (bg-darkslate-500) */
  background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0) !important;
  background-size: 20px 20px !important;
  background-position: 0 0 !important;
}

/* Higher specificity to override Card.vue's hover:border-primary-500 */
.spotlight-card.spotlight-card:hover {
  border-color: transparent !important;
}

/* Simpler gradient border using box-shadow approach */
.spotlight-card::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 0.625rem; /* slightly larger than card's rounded-lg */
  background: conic-gradient(from 180deg at 50% 50%, #e63946, #7a3cff, #7e8696, #e63946);
  opacity: 0;
  transition: opacity 400ms ease;
  pointer-events: none;
  z-index: -1;
}

.spotlight-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0.5rem; /* matches card's rounded-lg */
  background: #171717; /* matches card background */
  pointer-events: none;
  z-index: -1;
}

.spotlight-card:hover::before {
  opacity: 1;
}

.spotlight-card:focus-within {
  border-color: transparent;
}
.spotlight-card:focus-within::before {
  opacity: 1;
}

/* Media hover motion */
.spotlight-card:hover .spotlight-media {
  transform: scale(1.04);
}

/* Enhanced featured text with more presence */
.featured-shimmer-text {
  font-size: 1rem;
  line-height: 1.25;
  border-radius: 5px;
  padding: 4px 8px;
  margin: 0;
  /* Override the default neutral colors with our brand colors */
  --shimmer-from: transparent;
  --shimmer-via: #484141;
  --shimmer-to: transparent;
  background: linear-gradient(90deg, var(--shimmer-from), var(--shimmer-via), var(--shimmer-to));
}

/* Simple Skills Marquee */
.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  color: white;
  font-size: 13px;
  font-weight: 500;
  backdrop-filter: blur(8px);
  white-space: nowrap;
  flex-shrink: 0;
}

.skill-icon {
  font-size: 16px;
  flex-shrink: 0;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee-scroll {
  animation: marquee-scroll 20s linear infinite;
}

/* Utility: single line clamp (fallback if tailwind plugin absent) */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
  line-clamp: 1;
}

.animated-gradient-button {
  position: relative;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  box-shadow: 
    0 4px 15px 0 rgba(102, 126, 234, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  
  /* Animated gradient background */
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

.animated-gradient-button:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 
    0 8px 25px 0 rgba(102, 126, 234, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.2) inset;
  background: linear-gradient(135deg, #764ba2 0%, #667eea 50%, #f093fb 100%);
}

.animated-gradient-button:active {
  transform: translateY(0) scale(1);
  transition: all 0.1s ease;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  z-index: 10;
}

.button-text {
  transition: all 0.3s ease;
}

.button-arrow {
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  opacity: 0.8;
}

.animated-gradient-button:hover .button-arrow {
  transform: translateX(4px);
  opacity: 1;
}

/* Shine effect overlay */
.shine-overlay {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 5;
}

.animated-gradient-button:hover .shine-overlay {
  left: 100%;
}

/* Floating particles */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}

.particle-1 {
  top: 20%;
  left: 20%;
  animation: float1 2s ease-in-out infinite;
}

.particle-2 {
  top: 60%;
  right: 30%;
  animation: float2 2.5s ease-in-out infinite 0.5s;
}

.particle-3 {
  bottom: 30%;
  left: 60%;
  animation: float3 3s ease-in-out infinite 1s;
}

.animated-gradient-button:hover .particle {
  opacity: 1;
}

/* Keyframe animations */
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes float1 {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  50% {
    transform: translateY(-10px) scale(1.2);
    opacity: 0.6;
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translateX(0) scale(1);
    opacity: 0;
  }
  50% {
    transform: translateX(8px) scale(1.1);
    opacity: 0.4;
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  50% {
    transform: translate(-6px, -8px) scale(1.3);
    opacity: 0.5;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .animated-gradient-button {
    padding: 10px 20px;
    font-size: 13px;
  }
}

/* Focus accessibility */
.animated-gradient-button:focus {
  outline: none;
  box-shadow: 
    0 8px 25px 0 rgba(102, 126, 234, 0.6),
    0 0 0 3px rgba(102, 126, 234, 0.3);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .animated-gradient-button {
    box-shadow: 
      0 4px 15px 0 rgba(102, 126, 234, 0.6),
      0 0 0 1px rgba(255, 255, 255, 0.15) inset;
  }
  
  .animated-gradient-button:hover {
    box-shadow: 
      0 8px 25px 0 rgba(102, 126, 234, 0.8),
      0 0 0 1px rgba(255, 255, 255, 0.25) inset;
  }
}
</style>