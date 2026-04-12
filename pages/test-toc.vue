<template>
  <PortfolioDetailView :item="testItem" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'portfolio-detail' })

const testItem = {
  _id: 'test-toc-post',
  title: 'Building a Pricing Intelligence Platform from Zero to Production',
  description: 'A deep dive into the product decisions, architecture, and go-to-market strategy behind RevSec AI.',
  tags: [
    { _id: '1', title: 'Product Strategy' },
    { _id: '2', title: 'SaaS' },
    { _id: '3', title: 'AI/ML' },
    { _id: '4', title: 'Vue/Nuxt' },
    { _id: '5', title: 'Rails' },
  ],
  datePublished: '2026-04-10',
  portableText: [
    { _type: 'block', _key: 'a1', style: 'h2', children: [{ _type: 'span', text: 'The Problem Space' }] },
    { _type: 'block', _key: 'a2', style: 'normal', children: [{ _type: 'span', text: 'AI, API, and SaaS companies make pricing decisions using spreadsheets, gut instinct, and fragmented tools. Competitive intelligence lives in analyst decks nobody reads. Revenue operations teams juggle disconnected billing platforms, BI dashboards, and project management toolsets with no shared context between research and strategy.' }] },
    { _type: 'block', _key: 'a3', style: 'normal', children: [{ _type: 'span', text: 'Pricing strategy, discovery, and research become a bottleneck instead of a growth lever. Most platforms don\'t support A/B testing and proper experimentation for pricing strategy and product discovery.' }] },

    { _type: 'block', _key: 'b1', style: 'h2', children: [{ _type: 'span', text: 'Discovery & Validation' }] },
    { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', text: 'Early market research revealed a crowded but shallow competitive landscape. Platforms like Pricefx, Zilliant, and Stigg each address a slice of the pricing workflow — analytics, CPQ, or billing — but none provide a unified workspace that connects research to execution end-to-end.' }] },
    { _type: 'block', _key: 'b3', style: 'h3', children: [{ _type: 'span', text: 'UX as a Differentiator' }] },
    { _type: 'block', _key: 'b4', style: 'normal', children: [{ _type: 'span', text: 'A pivotal founder interview surfaced a key insight: the founder described a complete lack of enjoyment using their billing stack — functional but uninspiring tools that feel like obligations rather than assets. This pointed to an opportunity to build a UX-first pricing platform.' }] },
    { _type: 'block', _key: 'b5', style: 'h3', children: [{ _type: 'span', text: 'Tool Fragmentation' }] },
    { _type: 'block', _key: 'b6', style: 'normal', children: [{ _type: 'span', text: 'The disconnect between pricing research, billing platform, and project management tools meant strategic context was constantly lost in translation. This directly informed the decision to build project management as a core feature — not a bolt-on.' }] },

    { _type: 'block', _key: 'c1', style: 'h2', children: [{ _type: 'span', text: 'The Solution' }] },
    { _type: 'block', _key: 'c2', style: 'normal', children: [{ _type: 'span', text: 'RevSec AI gives product, RevOps, and GTM teams a single workspace to research, model, validate, and ship strategies end-to-end. It replaces the patchwork of spreadsheets, BI dashboards, and disconnected tools with a unified system of record for pricing decisions.' }] },
    { _type: 'block', _key: 'c3', style: 'h3', children: [{ _type: 'span', text: 'Integrated Agentic Surfaces' }] },
    { _type: 'block', _key: 'c4', style: 'normal', children: [{ _type: 'span', text: 'The platform spans five integrated surfaces: RevOps Analytics Dashboard, Project Management, Competitive Benchmarking, Plan Management with CPQ, and an Interactive Pricing Strategy engine.' }] },
    { _type: 'block', _key: 'c5', style: 'h3', children: [{ _type: 'span', text: 'Structured Workflow' }] },
    { _type: 'block', _key: 'c6', style: 'normal', children: [{ _type: 'span', text: 'A core design principle: the platform enforces a structured workflow from discovery → simulation → experiment → execution. Every pricing decision is traceable back to the research and modeling that informed it.' }] },

    { _type: 'block', _key: 'd1', style: 'h2', children: [{ _type: 'span', text: 'Key Product Decisions' }] },
    { _type: 'block', _key: 'd2', style: 'h3', children: [{ _type: 'span', text: 'Unified Workspace' }] },
    { _type: 'block', _key: 'd3', style: 'normal', children: [{ _type: 'span', text: 'The founder interviews and competitive analysis both pointed to the same conclusion: the market doesn\'t need another standalone tool. RevSec AI\'s project management layer eliminates context loss when teams switch between research, modeling, and execution tools.' }] },
    { _type: 'block', _key: 'd4', style: 'h3', children: [{ _type: 'span', text: 'UX-First Design Philosophy' }] },
    { _type: 'block', _key: 'd5', style: 'normal', children: [{ _type: 'span', text: 'The interface follows a systematic monochromatic greyscale design language with brand accent colors reserved for semantic meaning. This was a direct response to the validated insight that existing tools feel like obligations.' }] },
    { _type: 'block', _key: 'd6', style: 'h3', children: [{ _type: 'span', text: 'Usage-Rate Metering Pivot' }] },
    { _type: 'block', _key: 'd7', style: 'normal', children: [{ _type: 'span', text: 'Market research revealed that usage-based pricing models are increasingly common but poorly supported by existing tools. Adding metering and analytics expanded the platform\'s data foundation while opening a future opportunity to offer billing as a core service.' }] },

    { _type: 'block', _key: 'e1', style: 'h2', children: [{ _type: 'span', text: 'Architecture & Technical Implementation' }] },
    { _type: 'block', _key: 'e2', style: 'h3', children: [{ _type: 'span', text: 'Frontend' }] },
    { _type: 'block', _key: 'e3', style: 'normal', children: [{ _type: 'span', text: 'Nuxt 3 with Vue 3 Composition API, Tailwind CSS, Pinia state management, ApexCharts and Chart.js for data visualization, Tiptap for rich-text editing. Business logic lives in decoupled Vue composables.' }] },
    { _type: 'block', _key: 'e4', style: 'h3', children: [{ _type: 'span', text: 'Backend' }] },
    { _type: 'block', _key: 'e5', style: 'normal', children: [{ _type: 'span', text: 'Rails 8 API with service-layer architecture, PostgreSQL, and session-based auth with RBAC. Real-time collaboration via ActionCable with autosave and lock versioning to prevent conflicts.' }] },
    { _type: 'block', _key: 'e6', style: 'h3', children: [{ _type: 'span', text: 'AI Engine' }] },
    { _type: 'block', _key: 'e7', style: 'normal', children: [{ _type: 'span', text: 'AWS Bedrock with Claude-powered prompt chains orchestrated through Rails service layers using synchronous parallel processing for sub-second response times. LLMs present findings, never decide.' }] },

    { _type: 'block', _key: 'f1', style: 'h2', children: [{ _type: 'span', text: 'Go-to-Market' }] },
    { _type: 'block', _key: 'f2', style: 'normal', children: [{ _type: 'span', text: 'The GTM strategy is designed for capital efficiency as a solo founder. An automated inbound pipeline handles customer support and sales qualification — incoming requests triaged by an AI agent that validates prospects and drafts responses for human-in-the-loop review.' }] },

    { _type: 'block', _key: 'g1', style: 'h2', children: [{ _type: 'span', text: 'What This Demonstrates' }] },
    { _type: 'block', _key: 'g2', style: 'normal', children: [{ _type: 'span', text: 'Product discovery in practice, full-stack execution shipped solo in six months, strategic product thinking with deliberate scope decisions, unified systems design, and a cohesive design system built on a systematic greyscale palette with semantic color usage.' }] },
  ]
}
</script>
