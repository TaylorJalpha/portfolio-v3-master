<template>
    <Card colSpan="md:col-span-1" rowSpan="md:row-span-3" href="/">
        <h2 class="text-xl font-bold m-0 z-20">Portfolio</h2>
        
      
        <NuxtLink to="/portfolio" class="inline-block mt-4">
            <button class="animated-gradient-button group">
                <span class="button-content">
                    <span class="button-text">View Portfolio</span>
                    <svg 
                        class="button-arrow"
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </span>
                
                <div class="shine-overlay"></div>

                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
            </button>
        </NuxtLink>
    </Card>
</template>


<!-- The current button is simply a placeholder and will need to be improved and an animated option implemented-->

<style lang="css" scoped>
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