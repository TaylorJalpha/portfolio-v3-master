<script setup>
import moment from "moment";
import { ref, onMounted } from 'vue';

const terminalLines = ref([]);
const currentLineIndex = ref(0);
const currentCharIndex = ref(0);
const showCursor = ref(true);
const isTyping = ref(false);

const commands = [
  { type: 'command', text: '$ whoami', delay: 1000 },
  { type: 'output', text: 'Taylor Alpha', delay: 800 },
  { type: 'command', text: '$ echo "Your Role"', delay: 1000 },
  { type: 'output', text: 'product manager', delay: 1000 },
];

const typeText = async () => {
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
    terminalLines.value[terminalLines.value.length - 1].text = fullText.substring(0, i);
    await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 30));
  }
  
  // Mark line as complete
  terminalLines.value[terminalLines.value.length - 1].isComplete = true;
  isTyping.value = false;
  
  // Wait before next command
  await new Promise(resolve => setTimeout(resolve, currentCommand.delay));
  
  currentLineIndex.value++;
  await typeText();
};

// Cursor blinking
const blinkCursor = () => {
  setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 530);
};

onMounted(() => {
  blinkCursor();
  setTimeout(() => {
    typeText();
  }, 1500);
});
</script>

<template>
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-2">
    <div class="terminal-container">
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
            v-if="isTyping || terminalLines.length === 0"
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
</style>
