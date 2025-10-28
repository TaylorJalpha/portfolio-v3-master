<script setup>
import moment from "moment";
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Reactive state
const terminalLines = ref([]);
const currentLineIndex = ref(0);
const currentCharIndex = ref(0); // reserved for potential future granular control
const showCursor = ref(true);
const isTyping = ref(false);
const hasStarted = ref(false); // currently running instance
const hasRunOnce = ref(false);  // track first visibility engagement

// Refs / observers
const terminalCardRef = ref(null); // element to observe
let io; // IntersectionObserver instance

const commands = [
  { type: 'command', text: '$ whoami', delay: 1000 },
  { type: 'output', text: 'TaylorJAlpha', delay: 800 },
  { type: 'command', text: '$ echo your role', delay: 1000 },
  { type: 'output', text: 'Technical Product Manager', delay: 1000 },
];

// Simple cancellation token for overlapping runs
let runCounter = 0;

// Main typing routine (recursive)
const typeText = async (runId) => {
  // Abort if a new run has been started
  if (runId !== runCounter) return;
  if (currentLineIndex.value >= commands.length) return;
  
  isTyping.value = true;
  const currentCommand = commands[currentLineIndex.value];
  const fullText = currentCommand.text;
  
  // Add empty line for this command
  terminalLines.value.push({ 
    type: currentCommand.type, 
    text: '', 
    isComplete: false 
  });
  
  // Type character by character
  for (let i = 0; i <= fullText.length; i++) {
    if (runId !== runCounter) return; // cancelled mid-typing
    terminalLines.value[terminalLines.value.length - 1].text = fullText.substring(0, i);
    await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 30));
  }
  
  // Mark line as complete
  terminalLines.value[terminalLines.value.length - 1].isComplete = true;
  isTyping.value = false;
  
  // Wait before next command
  await new Promise(resolve => setTimeout(resolve, currentCommand.delay));
  if (runId !== runCounter) return; // cancelled between lines
  
  currentLineIndex.value++;
  await typeText(runId);
};

// Cursor blinking
const blinkCursor = () => {
  // Independent blinking toggle
  const interval = setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 530);
  // If needed we could store interval id for cleanup; not essential once animation starts
  return interval;
};

let cursorIntervalId;

const dispatchStartEvent = () => {
  try {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('terminal-animation-start', {
        detail: { timestamp: Date.now(), replay: hasRunOnce.value }
      }));
    }
  } catch { /* no-op */ }
};

const startAnimation = () => {
  if (hasStarted.value) return;
  hasStarted.value = true;
  hasRunOnce.value = true;
  cursorIntervalId = blinkCursor();
  dispatchStartEvent();
  
  setTimeout(() => { 
    runCounter++; // start a new run and invalidate any prev
    const thisRun = runCounter;
    typeText(thisRun); 
  }, 350);
};

const resetAndReplay = () => {
  // Clear existing state
  terminalLines.value = [];
  currentLineIndex.value = 0;
  currentCharIndex.value = 0;
  isTyping.value = false;
  hasStarted.value = false;
  showCursor.value = true; // reset cursor state
  // Invalidate any in-flight typing loops
  runCounter++;
  // Stop previous cursor interval
  if (cursorIntervalId) clearInterval(cursorIntervalId);
  // Immediately start (user intent overrides intersection gating)
  startAnimation();
};

onMounted(() => {
  // Guard: if IntersectionObserver unsupported, start immediately
  if (typeof window === 'undefined') return; // SSR safety
  if (!('IntersectionObserver' in window)) {
    startAnimation();
    return;
  }

  io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation();
        // run only once
        if (io) {
          io.disconnect();
          io = null;
        }
      }
    });
  }, {
    // start a bit before fully in view (esp. mobile) so user sees full sequence
    threshold: 0.3,
    rootMargin: '0px 0px -10% 0px' // negative bottom margin starts earlier
  });

  if (terminalCardRef.value) {
    // terminalCardRef may be a component instance (Card) or an element; resolve to element
    const target = (terminalCardRef.value instanceof Element)
      ? terminalCardRef.value
      : terminalCardRef.value.$el instanceof Element
        ? terminalCardRef.value.$el
        : null;
    if (target) {
      io.observe(target);
    } else {
      // fallback start if we cannot resolve element
      startAnimation();
    }
  } else {
    // fallback in unlikely case ref isn't ready
    startAnimation();
  }
});

onBeforeUnmount(() => {
  if (io) io.disconnect();
  if (cursorIntervalId) clearInterval(cursorIntervalId);
});
</script>

<template>
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-2" ref="terminalCardRef">
    <div class="terminal-container relative">
      <!-- Replay Control -->
      <button
        aria-label="Replay terminal animation"
        class="replay-btn group"
        @click="resetAndReplay"
        title="Replay"
      >
        <span class="inline-block transition-transform group-hover:rotate-180">↺</span>
      </button>
      <!-- Terminal Content with fixed height -->
      <div class="terminal-content">
        <!-- Reserve space for all lines to prevent resizing -->
        <div class="terminal-lines-container">
          <div v-for="(line, index) in terminalLines" :key="index" class="terminal-line">
            <span 
              :class="[
                'terminal-text',
                line.type === 'command' ? 'text-green-400' : 'text-gray-300'
              ]"
            >
              {{ line.text }}
            </span>
          </div>
          
          <!-- Blinking Cursor -->
          <span 
            v-if="(isTyping || terminalLines.length === 0) && hasStarted"
            :class="['cursor', { 'opacity-0': !showCursor }]"
          >
            ▊
          </span>
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped>








.terminal-text {
  word-break: break-words;
  font-size: 0.775rem;
  font-family: 'Terminal', monospace;
}

.cursor {
  color: #10b981;
  display: inline-block;
  transition: opacity 100ms;
  animation: blink 1s infinite;
}

.cursor.opacity-0 {
  opacity: 0;
}

/* Custom animations */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.terminal-line {
  animation: fadeInUp 0.3s ease-out;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Terminal color scheme */
.text-green-400 {
  color: #10b981;
}

.text-gray-300 {
  color: #d1d5db;
}

/* Replay button */
.replay-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  background: rgba(17,25,40,0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,0.08);
  color: #e5e7eb;
  font-size: 0.65rem;
  line-height: 1;
  padding: 4px 6px;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s, background 0.25s, transform 0.25s;
  z-index: 5; /* ensure above content */
  pointer-events: auto;
}
.replay-btn:hover {
  opacity: 1;
  background: rgba(30,41,59,0.65);
}
.replay-btn:active {
  transform: scale(0.92);
}
</style>
