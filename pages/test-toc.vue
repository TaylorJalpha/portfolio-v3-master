<template>
  <div class="portfolio-detail">
    <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-gray-100">Test Post: Pricing Intelligence Platform</h1>
    <p class="text-lg text-gray-400 mb-6">A deep dive into product decisions, architecture, and go-to-market strategy.</p>
    <div class="flex flex-wrap gap-1.5 mb-6">
      <span v-for="tag in ['Product Strategy','SaaS','AI/ML','Vue/Nuxt','Rails']" :key="tag"
        class="inline-flex items-center px-2 py-1 bg-white/[0.06] border border-white/5 text-white/80 rounded-md text-xs font-medium">
        {{ tag }}
      </span>
    </div>

    <div class="prose max-w-none">
      <h2 id="the-problem-space">The Problem Space</h2>
      <p>AI, API, and SaaS companies make pricing decisions using spreadsheets, gut instinct, and fragmented tools. Competitive intelligence lives in analyst decks nobody reads. Revenue operations teams juggle disconnected billing platforms, BI dashboards, and project management toolsets with no shared context between research and strategy.</p>
      <p>{{ filler }}</p>
      <p>Pricing strategy, discovery, and research become a bottleneck instead of a growth lever. Most platforms don't support A/B testing and proper experimentation for pricing strategy and product discovery.</p>
      <p>{{ filler }}</p>

      <h2 id="discovery-validation">Discovery &amp; Validation</h2>
      <p>Early market research revealed a crowded but shallow competitive landscape. Platforms like Pricefx, Zilliant, and Stigg each address a slice of the pricing workflow — analytics, CPQ, or billing — but none provide a unified workspace that connects research to execution end-to-end.</p>
      <p>{{ filler }}</p>
      <h3 id="ux-as-a-differentiator">UX as a Differentiator</h3>
      <p>A pivotal founder interview surfaced a key insight: the founder described a complete lack of enjoyment using their billing stack — functional but uninspiring tools that feel like obligations rather than assets. This pointed to an opportunity to build a UX-first pricing platform.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>
      <h3 id="tool-fragmentation">Tool Fragmentation</h3>
      <p>The disconnect between pricing research, billing platform, and project management tools meant strategic context was constantly lost in translation. This directly informed the decision to build project management as a core feature — not a bolt-on.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>

      <h2 id="the-solution">The Solution</h2>
      <p>RevSec AI gives product, RevOps, and GTM teams a single workspace to research, model, validate, and ship strategies end-to-end. It replaces the patchwork of spreadsheets, BI dashboards, and disconnected tools with a unified system of record for pricing decisions.</p>
      <p>{{ filler }}</p>
      <h3 id="integrated-agentic-surfaces">Integrated Agentic Surfaces</h3>
      <p>The platform spans five integrated surfaces: RevOps Analytics Dashboard, Project Management, Competitive Benchmarking, Plan Management with CPQ, and an Interactive Pricing Strategy engine.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>
      <h3 id="structured-workflow">Structured Workflow</h3>
      <p>A core design principle: the platform enforces a structured workflow from discovery → simulation → experiment → execution. Every pricing decision is traceable back to the research and modeling that informed it.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>

      <h2 id="key-product-decisions">Key Product Decisions</h2>
      <p>{{ filler }}</p>
      <h3 id="unified-workspace">Unified Workspace</h3>
      <p>The founder interviews and competitive analysis both pointed to the same conclusion: the market doesn't need another standalone tool. RevSec AI's project management layer eliminates context loss when teams switch between research, modeling, and execution tools.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>
      <h3 id="ux-first-design-philosophy">UX-First Design Philosophy</h3>
      <p>The interface follows a systematic monochromatic greyscale design language with brand accent colors reserved for semantic meaning. This was a direct response to the validated insight that existing tools feel like obligations.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>
      <h3 id="usage-rate-metering-pivot">Usage-Rate Metering Pivot</h3>
      <p>Market research revealed that usage-based pricing models are increasingly common but poorly supported by existing tools. Adding metering and analytics expanded the platform's data foundation while opening a future opportunity to offer billing as a core service.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>

      <h2 id="architecture-technical-implementation">Architecture &amp; Technical Implementation</h2>
      <p>{{ filler }}</p>
      <h3 id="frontend">Frontend</h3>
      <p>Nuxt 3 with Vue 3 Composition API, Tailwind CSS, Pinia state management, ApexCharts and Chart.js for data visualization, Tiptap for rich-text editing. Business logic lives in decoupled Vue composables.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>
      <h3 id="backend">Backend</h3>
      <p>Rails 8 API with service-layer architecture, PostgreSQL, and session-based auth with RBAC. Real-time collaboration via ActionCable with autosave and lock versioning to prevent conflicts.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>
      <h3 id="ai-engine">AI Engine</h3>
      <p>AWS Bedrock with Claude-powered prompt chains orchestrated through Rails service layers using synchronous parallel processing for sub-second response times. LLMs present findings, never decide.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>

      <h2 id="go-to-market">Go-to-Market</h2>
      <p>The GTM strategy is designed for capital efficiency as a solo founder. An automated inbound pipeline handles customer support and sales qualification — incoming requests triaged by an AI agent that validates prospects and drafts responses for human-in-the-loop review.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>

      <h2 id="what-this-demonstrates">What This Demonstrates</h2>
      <p>Product discovery in practice, full-stack execution shipped solo in six months, strategic product thinking with deliberate scope decisions, unified systems design, and a cohesive design system built on a systematic greyscale palette with semantic color usage.</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>
      <p>{{ filler }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'portfolio-detail' })

const filler = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
</script>
