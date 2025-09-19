import { defineComponent, ref, withCtx, createVNode, resolveDirective, mergeProps, withDirectives, createBlock, openBlock, computed, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './BlurFade-CHHK8cfH.mjs';
import { c as cn } from './utils-BqCExaFN.mjs';
import { _ as _sfc_main$3 } from './FloatingNav-7vPhTs6C.mjs';
import { F as Footer } from './Footer-B-rAgGlP.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'portal-vue';
import './ContactForm-BaMb2b7k.mjs';
import 'axios';
import 'moment';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AuroraBackground",
  __ssrInlineRender: true,
  props: {
    className: {},
    showRadialGradient: { type: Boolean, default: true },
    minHeight: {}
  },
  setup(__props) {
    const props = __props;
    const cssVariables = computed(() => ({
      "--aurora": "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
      "--dark-gradient": "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
      "--white-gradient": "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
      "--blue-300": "#93c5fd",
      "--blue-400": "#60a5fa",
      "--blue-500": "#3b82f6",
      "--indigo-300": "#a5b4fc",
      "--violet-200": "#ddd6fe",
      "--black": "#000",
      "--white": "#fff",
      "--transparent": "transparent"
    }));
    const auroraClasses = computed(() => {
      const baseClasses = "animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:animate-aurora after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[''] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]";
      const radialGradientClass = "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]";
      return cn(
        baseClasses,
        props.showRadialGradient && radialGradientClass
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "transition-bg relative bg-zinc-50 text-slate-950 dark:bg-zinc-900",
          props.className
        ),
        style: { minHeight: props.minHeight || "auto" }
      }, _attrs))}><div class="absolute inset-0 overflow-hidden" style="${ssrRenderStyle(cssVariables.value)}"><div class="${ssrRenderClass(auroraClasses.value)}"></div></div><div class="relative z-10 w-full h-full">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuroraBackground.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuroraBackgroundDemo",
  __ssrInlineRender: true,
  setup(__props) {
    const motionConfig = {
      initial: {
        opacity: 0,
        y: 40
      },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 300,
          duration: 800,
          ease: "easeInOut"
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuroraBackground = _sfc_main$2;
      const _directive_motion = resolveDirective("motion");
      _push(ssrRenderComponent(_component_AuroraBackground, mergeProps({
        class: "py-20 lg:py-32",
        "min-height": "600px"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col gap-4 items-center justify-center px-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, motionConfig)))}${_scopeId}><div class="text-3xl md:text-7xl font-bold text-white text-center"${_scopeId}></div><div class="font-extralight text-base md:text-4xl text-neutral-200 py-4 text-center"${_scopeId}></div></div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "relative flex flex-col gap-4 items-center justify-center px-4" }, [
                createVNode("div", { class: "text-3xl md:text-7xl font-bold text-white text-center" }),
                createVNode("div", { class: "font-extralight text-base md:text-4xl text-neutral-200 py-4 text-center" })
              ])), [
                [_directive_motion, motionConfig]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuroraBackgroundDemo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const experiences = ref([
      {
        year: "2024-Current",
        title: "Product Management Sabbatical",
        company: "Consultant - Los Angeles, CA",
        description: "Took intentional time off to reassess priorities and deepen skills across product strategy, software development, AI/ML, cloud engineering, business strategy, and customer acquisition.",
        skills: ["Rails API Development", "Vue.js", "AWS Certification", "Product Strategy", "UX Design", "Technical Discovery"],
        achievements: [
          "Completed advanced training in Rails API development and Vue.js frameworks",
          "Led freelance consulting projects for early-stage teams",
          "Pursuing AWS certification for cloud engineering expertise",
          "Focused on deepening AI/ML and business strategy knowledge"
        ]
      },
      {
        year: "2022-2024",
        title: "Product Manager, Technical",
        company: "Consultant - Los Angeles, CA",
        description: "Led cross-functional teams on projects including personalization, customer acquisition, fiat-to-crypto onramp, role-based access control, Shopify re-build, UI/UX strategy, NFT marketplace optimization, and fintech API integrations.",
        skills: ["Cross-functional Leadership", "Stripe & Plaid APIs", "DeFi Platforms", "Web3 Gaming", "Vue.js", "Rails", "AWS", "PostgreSQL"],
        achievements: [
          "Delivered 10% increase in transaction volume and 90%+ CSAT for 13+ months for a DeFi platform",
          "Launched Web3 gaming retention campaigns that reactivated dormant users by 4%",
          "Spearheaded full-stack B2B website redesign using Vue.js, Rails, AWS, and PostgreSQL",
          "Oversaw end-to-end product delivery including PRDs and business case validation"
        ]
      },
      {
        year: "2021-2022",
        title: "Product Manager",
        company: "GalacticWay - Los Angeles",
        description: "Led development of NEAR-based NFT marketplace and drove significant user growth through strategic GTM execution and user-focused roadmap development.",
        skills: ["GTM Strategy", "NEAR Blockchain", "NFT Marketplace", "User Onboarding", "Market Research", "Product Discovery"],
        achievements: [
          "Drove 600% increase in user growth via GTM strategy and user-focused roadmap execution",
          "Achieved $293 LTV with onboarding automation for NEAR-based NFT marketplace",
          "Conducted market research and discovery resulting in successful codebase acquisition",
          "Led pitch development and strategic product positioning"
        ]
      },
      {
        year: "2021",
        title: "Product Manager, Consultant",
        company: "Erupt - Los Angeles, US",
        description: "Implemented unified Engineering-Product-Design (EPD) processes and led process improvement initiatives to streamline team workflows across the organization.",
        skills: ["Process Improvement", "EPD Alignment", "Stakeholder Management", "Workshop Facilitation", "Team Leadership"],
        achievements: [
          "Implemented unified Engineering-Product-Design (EPD) processes",
          "Secured buy-in from senior stakeholders to streamline team workflows",
          "Led workshops, presentations, and regular team check-ins for successful adoption",
          "Improved cross-functional collaboration across multiple teams"
        ]
      },
      {
        year: "2019-2020",
        title: "Associate Product Manager, Admin",
        company: "GoGuardian - Los Angeles",
        description: "Collaborated with data science teams to enhance machine learning models and drove significant revenue growth by solving critical customer pain points during the COVID-19 pandemic.",
        skills: ["Machine Learning", "Data Science", "Product Analytics", "User Research", "Statistical Analysis", "Customer Feedback Analysis"],
        achievements: [
          "Played key role in driving multimillion-dollar increase in ARR/MRR during COVID-19",
          "Collaborated with data science teams to optimize ML models and platform performance",
          "Led multiple rounds of product discovery and user research initiatives",
          "Implemented comprehensive product analytics and statistical analysis frameworks"
        ]
      },
      {
        year: "2019",
        title: "Product & Project Manager",
        company: "EatOS By POS Labs - Beverly Hills",
        description: "Led development of time and attendance application using Dart/Flutter, managing cross-functional teams and implementing prioritization frameworks for capacity planning.",
        skills: ["Dart/Flutter", "Cross-platform Development", "System Architecture", "UI/UX Development", "Team Management", "AirTable"],
        achievements: [
          "Led development of cross-platform time and attendance application",
          "Directed 3 cross-functional teams across multiple time zones (25+ members)",
          "Created prioritization framework using AirTable for capacity and velocity planning",
          "Managed full product lifecycle from discovery to full-stack engineering"
        ]
      }
    ]);
    ref();
    ref([]);
    ref();
    const activeIndex = ref(-1);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="relative w-full min-h-screen bg-black pt-20 md:pt-24" data-v-4ff0d0cc><div class="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#171717] to-[#111111] opacity-50" data-v-4ff0d0cc></div><div class="absolute inset-0 opacity-30" data-v-4ff0d0cc><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)", "background-size": "20px 20px" })}" data-v-4ff0d0cc></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1$1, { number: 30 }, null, _parent));
      _push(`<main class="m-auto p-4 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-cols-4 lg:gap-4 lg:max-h-[800px] z-10 text-white" data-v-4ff0d0cc>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><div class="flex justify-center relative z-10" data-v-4ff0d0cc><svg class="animate-bounce w-8 h-8 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-4ff0d0cc><path d="M12 5v14m7-7l-7 7-7-7" data-v-4ff0d0cc></path></svg></div></div><div class="text-white relative w-full z-10" data-section="experience" data-v-4ff0d0cc><div class="absolute inset-0 -z-10" data-v-4ff0d0cc>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="m-auto max-w-6xl" data-v-4ff0d0cc><section class="py-20 px-4 sm:px-6 lg:px-8" data-v-4ff0d0cc><div class="text-center mb-20" data-v-4ff0d0cc>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        "in-view": "",
        delay: 250
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-6" data-v-4ff0d0cc${_scopeId}> My Professional Journey </h2>`);
          } else {
            return [
              createVNode("h2", { class: "pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-6" }, " My Professional Journey ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        "in-view": "",
        delay: 250
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-v-4ff0d0cc${_scopeId}> Below is an timeline view of some of my experience as a product manager with core technical experience\u2013\xA0Test your assumptions, world... </p>`);
          } else {
            return [
              createVNode("p", { class: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" }, " Below is an timeline view of some of my experience as a product manager with core technical experience\u2013\xA0Test your assumptions, world... ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative max-w-6xl mx-auto" data-v-4ff0d0cc><div class="absolute left-8 sm:left-10 lg:left-14 top-0 bottom-0 w-0.5 z-[1]" data-v-4ff0d0cc><div class="w-full h-full bg-gray-700/20 relative rounded-full" data-v-4ff0d0cc></div><div class="absolute inset-0 w-full origin-top transition-all duration-300 ease-out overflow-hidden rounded-full" style="${ssrRenderStyle({ "transform": "scaleY(0)" })}" data-v-4ff0d0cc><div class="w-full h-full bg-gradient-to-b from-purple-400 via-blue-500 to-cyan-400 relative rounded-full" data-v-4ff0d0cc><div class="absolute inset-0 bg-gradient-to-b from-purple-400/70 via-blue-500/70 to-cyan-400/70 blur-sm rounded-full" data-v-4ff0d0cc></div><div class="absolute w-3 h-3 bg-white rounded-full left-1/2 -translate-x-1/2 shadow-xl border-2 border-purple-300 transition-all duration-300" style="${ssrRenderStyle({ "top": "100%", "transform": "translateX(-50%) translateY(-50%)" })}" data-v-4ff0d0cc><div class="absolute inset-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" data-v-4ff0d0cc></div></div></div></div></div><div class="space-y-12 sm:space-y-16 lg:space-y-20 relative z-[10]" data-v-4ff0d0cc><!--[-->`);
      ssrRenderList(experiences.value, (experience, index) => {
        _push(`<div class="${ssrRenderClass([[
          activeIndex.value >= index ? "opacity-100" : "opacity-40"
        ], "relative transition-all duration-700 ease-out timeline-item-scale"])}" data-v-4ff0d0cc><div class="absolute left-8 sm:left-10 lg:left-14 top-6 flex items-center z-[5]" data-v-4ff0d0cc><div class="${ssrRenderClass([[
          activeIndex.value >= index ? "shadow-lg scale-110" : "scale-100"
        ], "h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-300 dark:border-neutral-700 transition-all duration-500 flex-shrink-0 -translate-x-1/2"])}" data-v-4ff0d0cc><div class="${ssrRenderClass([[
          activeIndex.value >= index ? "bg-neutral-300 dark:bg-neutral-600 border-neutral-400 dark:border-neutral-600" : "bg-neutral-200 dark:bg-neutral-800"
        ], "h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 transition-all duration-500"])}" data-v-4ff0d0cc></div></div><div class="${ssrRenderClass([[
          activeIndex.value >= index ? "scale-105" : "scale-100"
        ], "absolute right-12 sm:right-14 lg:right-16 transition-all duration-500"])}" data-v-4ff0d0cc><span class="${ssrRenderClass([[
          activeIndex.value >= index ? "bg-neutral-700 dark:bg-neutral-700 text-neutral-200 dark:text-neutral-200 border-neutral-600 dark:border-neutral-600" : "bg-neutral-800 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-400"
        ], "inline-block px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm lg:text-base font-bold rounded-full whitespace-nowrap transition-all duration-500 bg-neutral-800 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-300 border border-neutral-700 dark:border-neutral-700"])}" data-v-4ff0d0cc>${ssrInterpolate(experience.year)}</span></div></div><div class="ml-24 sm:ml-28 lg:ml-36 transition-all duration-700 z-[1] relative" data-v-4ff0d0cc><div class="bg-white/5 border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border transition-all duration-500 relative timeline-card-background max-w-3xl lg:max-w-4xl group" style="${ssrRenderStyle({ "background": "rgba(255, 255, 255, 0.08)" })}" data-v-4ff0d0cc><div class="absolute inset-0 rounded-xl sm:rounded-2xl opacity-30 pointer-events-none" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)", "background-size": "20px 20px" })}" data-v-4ff0d0cc></div><div class="mb-3 sm:mb-4 lg:mb-6 text-left" data-v-4ff0d0cc><h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight" data-v-4ff0d0cc>${ssrInterpolate(experience.title)}</h3><p class="text-sm sm:text-base lg:text-lg text-[#E63946] font-semibold" data-v-4ff0d0cc>${ssrInterpolate(experience.company)}</p></div><p class="text-gray-300 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base text-left" data-v-4ff0d0cc>${ssrInterpolate(experience.description)}</p><div class="mb-3 sm:mb-4 lg:mb-6 text-left" data-v-4ff0d0cc><h4 class="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wider" data-v-4ff0d0cc>Skills &amp; Technologies</h4><div class="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2 justify-start" data-v-4ff0d0cc><!--[-->`);
        ssrRenderList(experience.skills, (skill) => {
          _push(`<span class="px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md sm:rounded-lg bg-blue-500/20 text-blue-200 border border-blue-400/30 hover:bg-blue-500/30 transition-colors duration-200" data-v-4ff0d0cc>${ssrInterpolate(skill)}</span>`);
        });
        _push(`<!--]--></div></div><div class="text-left" data-v-4ff0d0cc><h4 class="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 lg:mb-4 uppercase tracking-wider" data-v-4ff0d0cc>Key Achievements</h4><ul class="space-y-1.5 sm:space-y-2 lg:space-y-3" data-v-4ff0d0cc><!--[-->`);
        ssrRenderList(experience.achievements, (achievement) => {
          _push(`<li class="text-xs sm:text-sm text-gray-300 flex items-start text-left" data-v-4ff0d0cc><span class="text-green-400 mt-0.5 sm:mt-1 flex-shrink-0 mr-2" data-v-4ff0d0cc>\u25B8</span><span class="leading-relaxed" data-v-4ff0d0cc>${ssrInterpolate(achievement)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div></div></div>`);
      });
      _push(`<!--]--><div class="relative mt-12 sm:mt-16 lg:mt-20" data-v-4ff0d0cc><div class="absolute left-8 sm:left-10 lg:left-14 top-6 flex items-center z-[5]" data-v-4ff0d0cc><div class="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-300 dark:border-neutral-700 shadow-lg flex-shrink-0 -translate-x-1/2" data-v-4ff0d0cc><div class="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 rounded-full bg-neutral-300 dark:bg-neutral-600 border border-neutral-400 dark:border-neutral-600" data-v-4ff0d0cc></div></div></div><div class="ml-24 sm:ml-28 lg:ml-36" data-v-4ff0d0cc><div class="text-gray-400 text-left" data-v-4ff0d0cc><p class="text-xs sm:text-sm mt-1" data-v-4ff0d0cc>Always learning, always growing- Keep building, fam. (Note to Self)</p></div></div></div></div></div></section></div></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ff0d0cc"]]);

export { _default as default };
//# sourceMappingURL=default-Dzg1iI9p.mjs.map
