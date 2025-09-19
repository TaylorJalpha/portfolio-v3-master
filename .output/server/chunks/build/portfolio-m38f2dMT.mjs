import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, createTextVNode, computed, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderTeleport, ssrGetDirectiveProps } from 'vue/server-renderer';
import { useSpring } from 'vue-use-spring';
import { _ as __nuxt_component_0 } from './nuxt-link-DU4glTL4.mjs';
import { f as fetchSanityContent, u as useSanityImageUrl } from './sanityApi-SN5CK_ks.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$6 } from './BlurFade-CHHK8cfH.mjs';
import { b as useRouter } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'axios';
import './utils-BqCExaFN.mjs';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Globe",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(0);
    ref(0);
    useSpring(
      { r: 0 },
      {
        mass: 1,
        tension: 280,
        friction: 40,
        precision: 1e-3
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px] top-44" }, _attrs))}><canvas class="w-[500px] h-[500px] cursor-grab opacity-0 transition-opacity duration-500 [contain:layout_paint_size]" width="1000" height="1000"></canvas></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Globe.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioCard",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    function imageUrl(image) {
      return image && image.asset ? useSanityImageUrl(image) : "";
    }
    function mapType(type) {
      if (type === "caseStudy") return "case-study";
      if (type === "blogPost") return "blog";
      return "project";
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative bg-[#171717] rounded-xl shadow-xl border border-gray-600 overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:border-gray-500 transition-all duration-300 h-full flex flex-col min-h-[420px] sm:min-h-[450px] lg:min-h-[440px]" }, _attrs))} data-v-91b2b4f8><div class="relative overflow-hidden bg-gray-800" data-v-91b2b4f8><img${ssrRenderAttr("src", imageUrl(_ctx.item.featuredImage))}${ssrRenderAttr("alt", `${_ctx.item.title} preview image`)} class="w-full h-48 sm:h-52 lg:h-48 xl:h-44 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-v-91b2b4f8><div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-91b2b4f8></div></div><div class="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between" data-v-91b2b4f8><div class="flex-1" data-v-91b2b4f8><h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white line-clamp-2 group-hover:text-[#E63946] transition-colors duration-200" data-v-91b2b4f8>${ssrInterpolate(_ctx.item.title)}</h3><p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3 flex-1" data-v-91b2b4f8>${ssrInterpolate(_ctx.item.description)}</p></div>`);
      if (_ctx.item.tags && _ctx.item.tags.length) {
        _push(`<div class="mb-4" data-v-91b2b4f8><div class="flex flex-wrap gap-1.5 sm:gap-2" data-v-91b2b4f8><!--[-->`);
        ssrRenderList(_ctx.item.tags.slice(0, 4), (tag, index) => {
          _push(`<span class="inline-flex items-center px-2 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-xs font-medium hover:bg-gray-700/50 hover:border-gray-500 transition-colors duration-200" data-v-91b2b4f8>${ssrInterpolate(tag.title)}</span>`);
        });
        _push(`<!--]-->`);
        if (_ctx.item.tags.length > 4) {
          _push(`<span class="inline-flex items-center px-2 py-1 bg-gray-800/30 text-gray-400 rounded-md text-xs" data-v-91b2b4f8> +${ssrInterpolate(_ctx.item.tags.length - 4)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${mapType(_ctx.item.content_type)}/${((_a = _ctx.item.slug) == null ? void 0 : _a.current) || _ctx.item.slug}`,
        class: "w-full px-4 py-2.5 bg-[#E63946] text-white rounded-lg font-semibold shadow-lg hover:bg-[#d62839] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2 focus:ring-offset-[#171717] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Learn More `);
          } else {
            return [
              createTextVNode(" Learn More ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="absolute inset-0 bg-gradient-to-br from-[#E63946]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" data-v-91b2b4f8></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-91b2b4f8"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioModal",
  __ssrInlineRender: true,
  props: {
    item: {},
    open: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    function renderMarkdown(content) {
      if (!content) return "";
      return content.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-100">$1</h3>').replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-100">$1</h2>').replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-5 text-white">$1</h1>').replace(/\*\*(.*)\*\*/gim, '<strong class="text-white">$1</strong>').replace(/\*(.*)\*/gim, '<em class="text-gray-200">$1</em>').replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2" class="text-blue-400 underline hover:text-blue-300" target="_blank">$1</a>').replace(/\n\n/gim, '</p><p class="mb-4 text-gray-200 leading-relaxed">').replace(/\n/gim, "<br>").replace(/`([^`]+)`/gim, '<code class="bg-gray-800 text-gray-200 px-2 py-1 rounded text-sm">$1</code>').replace(/^(.*)$/gim, '<p class="mb-4 text-gray-200 leading-relaxed">$1</p>');
    }
    const featuredImageUrl = computed(() => {
      var _a, _b;
      return ((_a = props.item) == null ? void 0 : _a.featured_image_url) || ((_b = props.item) == null ? void 0 : _b.image);
    });
    computed(() => {
      var _a, _b;
      return ((_a = props.item) == null ? void 0 : _a.gallery_images) || ((_b = props.item) == null ? void 0 : _b.screenshots) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      ssrRenderTeleport(_push, (_push2) => {
        var _a, _b, _c, _d, _e;
        if (_ctx.open) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" data-v-78c69a00><div${ssrRenderAttrs(mergeProps({
            class: [
              "rounded-xl shadow-2xl relative",
              _ctx.item.content_type === "blog_post" ? "bg-gray-900 text-white max-w-4xl w-full h-[90vh] flex flex-col" : "bg-white max-w-2xl w-full"
            ]
          }, ssrGetDirectiveProps(_ctx, _directive_motion, {
            initial: { scale: 0.8, opacity: 0 },
            enter: { scale: 1, opacity: 1 },
            leave: { scale: 0.8, opacity: 0 }
          })))} data-v-78c69a00><button class="${ssrRenderClass([
            "absolute top-4 right-4 text-2xl font-bold z-10",
            _ctx.item.content_type === "blog_post" ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-700"
          ])}" data-v-78c69a00> \xD7 </button>`);
          if (_ctx.item.content_type === "blog_post") {
            _push2(`<div class="h-full flex flex-col p-6" data-v-78c69a00><h2 class="text-3xl font-bold mb-4 text-white" data-v-78c69a00>${ssrInterpolate(_ctx.item.title)}</h2><div class="flex-1 overflow-y-auto prose prose-invert max-w-none" data-v-78c69a00><div data-v-78c69a00>${(_a = renderMarkdown(_ctx.item.content)) != null ? _a : ""}</div></div></div>`);
          } else {
            _push2(`<div class="p-6" data-v-78c69a00><h2 class="text-2xl font-bold mb-2" data-v-78c69a00>${ssrInterpolate(_ctx.item.title)}</h2>`);
            if (_ctx.item.description) {
              _push2(`<div class="mb-4" data-v-78c69a00><p class="text-gray-700" data-v-78c69a00>${ssrInterpolate(_ctx.item.description)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.pdf_url && _ctx.item.content_type === "case_study") {
              _push2(`<div class="mb-4" data-v-78c69a00><div class="bg-gray-50 p-4 rounded-lg" data-v-78c69a00><h3 class="text-lg font-semibold mb-2" data-v-78c69a00>Case Study Document</h3><p class="text-sm text-gray-600 mb-3" data-v-78c69a00>View the complete case study in PDF format</p><iframe${ssrRenderAttr("src", `${_ctx.item.pdf_url}#toolbar=0&navpanes=0&scrollbar=0`)} class="w-full h-96 border border-gray-300 rounded" title="Case Study PDF" data-v-78c69a00></iframe><p class="text-xs text-gray-500 mt-2" data-v-78c69a00> Note: PDF viewing and downloading is disabled for security purposes </p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (featuredImageUrl.value) {
              _push2(`<div class="mb-4 flex justify-center" data-v-78c69a00><img${ssrRenderAttr("src", featuredImageUrl.value)} alt="Project image" class="rounded-lg max-h-48 object-contain" data-v-78c69a00></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.details) {
              _push2(`<div class="mb-4" data-v-78c69a00><p data-v-78c69a00>${ssrInterpolate(_ctx.item.details)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_b = _ctx.item.techUsed) == null ? void 0 : _b.length) {
              _push2(`<div class="mb-4 flex flex-wrap gap-2 items-center" data-v-78c69a00><!--[-->`);
              ssrRenderList(_ctx.item.techUsed, (tech) => {
                _push2(`<span class="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-sm" data-v-78c69a00>`);
                if (tech.icon) {
                  _push2(`<img${ssrRenderAttr("src", tech.icon)}${ssrRenderAttr("alt", tech.name)} class="w-5 h-5 mr-1" data-v-78c69a00>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(tech.name)}</span>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_c = _ctx.item.achievements) == null ? void 0 : _c.length) {
              _push2(`<div class="mb-4" data-v-78c69a00><h3 class="text-lg font-semibold mb-2" data-v-78c69a00>Key Achievements</h3><ul class="list-disc pl-5" data-v-78c69a00><!--[-->`);
              ssrRenderList(_ctx.item.achievements, (ach) => {
                _push2(`<li data-v-78c69a00>${ssrInterpolate(ach)}</li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.blog_embed_html) {
              _push2(`<div class="mb-4" data-v-78c69a00><div data-v-78c69a00>${(_d = _ctx.item.blog_embed_html) != null ? _d : ""}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_e = _ctx.item.screenshots) == null ? void 0 : _e.length) {
              _push2(`<div class="mb-4 grid grid-cols-2 gap-2" data-v-78c69a00><!--[-->`);
              ssrRenderList(_ctx.item.screenshots, (src) => {
                _push2(`<img${ssrRenderAttr("src", src)} class="rounded-lg w-full h-32 object-cover" data-v-78c69a00>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-78c69a00"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioCardSkeleton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#171717] rounded-xl shadow-xl border border-gray-600 overflow-hidden h-full flex flex-col min-h-[420px] sm:min-h-[450px] lg:min-h-[440px] animate-pulse" }, _attrs))}><div class="w-full h-48 sm:h-52 lg:h-48 xl:h-44 bg-gray-700"></div><div class="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between"><div class="flex-1"><div class="h-6 bg-gray-700 rounded-md mb-3"></div><div class="h-4 bg-gray-700 rounded-md w-3/4 mb-3"></div><div class="space-y-2 mb-4"><div class="h-4 bg-gray-700 rounded-md"></div><div class="h-4 bg-gray-700 rounded-md"></div><div class="h-4 bg-gray-700 rounded-md w-5/6"></div></div></div><div class="mb-4"><div class="flex flex-wrap gap-2"><div class="h-6 w-16 bg-gray-700 rounded-md"></div><div class="h-6 w-20 bg-gray-700 rounded-md"></div><div class="h-6 w-14 bg-gray-700 rounded-md"></div></div></div><div class="h-10 bg-gray-700 rounded-lg"></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioCardSkeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PortfolioNav",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg bg-black/30 shadow-xl rounded-full transition-all duration-300 opacity-95 border border-white/10", [
          "px-3 py-2 sm:px-6 sm:py-2",
          "flex items-center justify-center",
          "gap-2 sm:gap-4",
          "w-auto max-w-[90vw] sm:max-w-none"
        ]]
      }, _attrs))}><button class="${ssrRenderClass([[
        "px-2 py-1.5 sm:px-3 sm:py-2",
        "gap-1 sm:gap-2",
        "text-xs sm:text-sm",
        "text-[#E63946] bg-white/10 shadow-lg hover:text-[#F1FAEE] hover:bg-white/15 active:scale-95"
      ], "font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"])}"${ssrRenderAttr("aria-label", "Navigate to home page")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${ssrRenderClass(["w-4 h-4 sm:w-5 sm:h-5", "flex-shrink-0"])}"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M4.5 10.5V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0010.5 19v-4.5h3V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019.5 19v-8.5"></path></svg><span class="hidden sm:inline">Home</span></button><div class="w-px h-4 sm:h-6 bg-gray-500/30"></div><button class="${ssrRenderClass([[
        "px-2 py-1.5 sm:px-3 sm:py-2",
        "gap-1 sm:gap-2",
        "text-xs sm:text-sm",
        "text-gray-300 hover:text-[#F1FAEE] hover:bg-white/10 active:scale-95"
      ], "font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"])}"${ssrRenderAttr("aria-label", "Navigate to experience section")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${ssrRenderClass(["w-4 h-4 sm:w-5 sm:h-5", "flex-shrink-0"])}"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.108 48.108 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path></svg><span class="hidden sm:inline">Experience</span></button><div class="w-px h-4 sm:h-6 bg-gray-500/30"></div><button class="${ssrRenderClass([[
        "px-2 py-1.5 sm:px-3 sm:py-2",
        "gap-1 sm:gap-2",
        "text-xs sm:text-sm",
        "text-gray-300 hover:text-[#F1FAEE] hover:bg-white/10 active:scale-95"
      ], "font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"])}"${ssrRenderAttr("aria-label", "Navigate to portfolio top")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${ssrRenderClass(["w-4 h-4 sm:w-5 sm:h-5", "flex-shrink-0"])}"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0-1.125.504-1.125 1.125V11.25a9 9 0 00-9-9z"></path></svg><span class="hidden sm:inline">Portfolio</span></button></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const perPage = 12;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    function buildPortfolioItemsQuery(params) {
      let filter = "";
      if (params.content_type) filter += ` && _type == "${params.content_type}"`;
      if (params.tag) filter += ` && "${params.tag}" in tags[].name`;
      const start = ((params.page || 1) - 1) * (params.per_page || 12);
      const end = start + (params.per_page || 12);
      return `*[_type in ["project", "caseStudy", "blogPost"]${filter}] | order(published_at desc) [${start}...${end}] { _id, title, description, slug, _type, featuredImage{ asset->{_id, url} }, tags[]->{ _id, title }, published_at, external_url }`;
    }
    const items = ref([]);
    const loading = ref(false);
    const hasMore = ref(false);
    const modalOpen = ref(false);
    const selectedItem = ref(null);
    const currentPage = ref(1);
    const selectedFilter = ref("");
    const selectedTag = ref("");
    function mappedTypeLabel(type, plural = false) {
      if (type === "caseStudy") return plural ? "Case Studies" : "Case Study";
      if (type === "blogPost") return plural ? "Blog Posts" : "Blog Post";
      if (type === "project") return plural ? "Projects" : "Project";
      return plural ? "Projects" : "Project";
    }
    async function loadPortfolioItems(reset = false) {
      if (loading.value) return;
      loading.value = true;
      try {
        if (reset) {
          currentPage.value = 1;
          items.value = [];
        }
        const params = {
          page: currentPage.value,
          per_page: perPage,
          ...selectedFilter.value && { content_type: selectedFilter.value },
          ...selectedTag.value && { tag: selectedTag.value }
        };
        const query = buildPortfolioItemsQuery(params);
        const response = await fetchSanityContent(query);
        console.log("Portfolio fetchSanityContent response:", response);
        if (reset) {
          items.value = response;
        } else {
          items.value.push(...response);
        }
        hasMore.value = response.length === perPage;
        currentPage.value++;
      } catch (error) {
        console.error("Failed to load portfolio items:", error);
        if (items.value.length === 0) {
          items.value = [
            {
              id: 1,
              title: "Project Alpha",
              description: "A web app for managing tasks and productivity.",
              featured_image_url: "/assets/css/mdrg.jpg",
              tags: [{ name: "Vue" }, { name: "Nuxt" }, { name: "Productivity" }]
            },
            {
              id: 2,
              title: "Case Study: Rails Migration",
              description: "Migrated legacy systems to Ruby on Rails.",
              featured_image_url: "/assets/css/rails-svgrepo-com.svg",
              tags: [{ name: "Ruby on Rails" }, { name: "Migration" }]
            }
          ];
        }
      } finally {
        loading.value = false;
      }
    }
    function filterByType(type) {
      selectedFilter.value = selectedFilter.value === type ? "" : type;
      loadPortfolioItems(true);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Globe = _sfc_main$5;
      const _component_PortfolioCard = __nuxt_component_1;
      const _component_PortfolioModal = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "w-full min-h-screen"
      }, _attrs))}><div class="flex flex-col items-center pt-4 pb-12"><div class="relative flex h-[400px] w-[500px] max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border px-40 pb-40 pt-8 md:pb-48 mt-12"><div class="absolute inset-0">`);
      _push(ssrRenderComponent(_sfc_main$1$1, { number: 30 }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        "in-view": "",
        delay: 250
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"${_scopeId}>Portfolio</h1>`);
          } else {
            return [
              createVNode("h1", { class: "pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10" }, "Portfolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Globe, null, null, _parent));
      _push(`<div class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]"></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        "in-view": "",
        delay: 250
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-lg mb-8 mt-2 pt-2 text-center max-w-2xl px-4"${_scopeId}> A collection of my work, case studies, projects, and blog posts from over the years - showcasing my skills and expertise as a Technical Product Manager and Business Leader </p>`);
          } else {
            return [
              createVNode("p", { class: "text-lg mb-8 mt-2 pt-2 text-center max-w-2xl px-4" }, " A collection of my work, case studies, projects, and blog posts from over the years - showcasing my skills and expertise as a Technical Product Manager and Business Leader ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        "in-view": "",
        delay: 300
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 px-4"${_scopeId}><button class="${ssrRenderClass([
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              unref(selectedFilter) === "" ? "bg-[#E63946] text-white shadow-lg" : "bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500"
            ])}"${_scopeId}> All Projects </button><button class="${ssrRenderClass([
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              unref(selectedFilter) === "project" ? "bg-[#E63946] text-white shadow-lg" : "bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500"
            ])}"${_scopeId}> Projects </button><button class="${ssrRenderClass([
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              unref(selectedFilter) === "caseStudy" ? "bg-[#E63946] text-white shadow-lg" : "bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500"
            ])}"${_scopeId}> Case Studies </button><button class="${ssrRenderClass([
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              unref(selectedFilter) === "blogPost" ? "bg-[#E63946] text-white shadow-lg" : "bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500"
            ])}"${_scopeId}> Blog Posts </button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 px-4" }, [
                createVNode("button", {
                  onClick: ($event) => filterByType(""),
                  class: [
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    unref(selectedFilter) === "" ? "bg-[#E63946] text-white shadow-lg" : "bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500"
                  ]
                }, " All Projects ", 10, ["onClick"]),
                createVNode("button", {
                  onClick: ($event) => filterByType("project"),
                  class: [
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    unref(selectedFilter) === "project" ? "bg-[#E63946] text-white shadow-lg" : "bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500"
                  ]
                }, " Projects ", 10, ["onClick"]),
                createVNode("button", {
                  onClick: ($event) => filterByType("caseStudy"),
                  class: [
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    unref(selectedFilter) === "caseStudy" ? "bg-[#E63946] text-white shadow-lg" : "bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500"
                  ]
                }, " Case Studies ", 10, ["onClick"]),
                createVNode("button", {
                  onClick: ($event) => filterByType("blogPost"),
                  class: [
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    unref(selectedFilter) === "blogPost" ? "bg-[#E63946] text-white shadow-lg" : "bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500"
                  ]
                }, " Blog Posts ", 10, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">`);
      if (!unref(loading) || unref(items).length > 0) {
        _push(`<div class="flex justify-between items-center mb-6"><p class="text-gray-400 text-sm">${ssrInterpolate(unref(items).length)} ${ssrInterpolate(unref(items).length === 1 ? mappedTypeLabel(unref(selectedFilter)) : mappedTypeLabel(unref(selectedFilter), true))} ${ssrInterpolate(unref(selectedFilter) ? `in ${mappedTypeLabel(unref(selectedFilter), true)}` : "total")}</p>`);
        if (unref(hasMore)) {
          _push(`<div class="text-gray-500 text-sm"> More available... </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="portfolio-grid auto-rows-fr"><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(ssrRenderComponent(_component_PortfolioCard, {
          key: item._id || item.id,
          item: { ...item, content_type: item._type },
          class: "portfolio-card"
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(loading) && unref(items).length === 0) {
        _push(`<!--[-->`);
        ssrRenderList(6, (n) => {
          _push(ssrRenderComponent(_sfc_main$2, {
            key: `skeleton-${n}`
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(loading) && unref(items).length === 0) {
        _push(`<div class="text-center py-16"><div class="max-w-md mx-auto"><div class="mb-6"><svg class="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></div><h3 class="text-xl font-semibold text-gray-300 mb-2">No projects found</h3><p class="text-gray-500 mb-6">${ssrInterpolate(unref(selectedFilter) ? "Try adjusting your filter or" : "")} Check back later for new projects and updates. </p>`);
        if (unref(selectedFilter)) {
          _push(`<button class="px-6 py-2 bg-[#E63946] text-white rounded-lg font-semibold hover:bg-[#d62839] transition-colors"> Show All Projects </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center mt-12 space-y-4">`);
      if (unref(loading)) {
        _push(`<div class="text-center py-4"><div class="inline-flex items-center gap-2"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Loading more projects... </div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(hasMore) && !unref(loading)) {
        _push(`<button class="px-8 py-3 bg-[#E63946] text-white rounded-lg font-semibold shadow-lg hover:bg-[#d62839] hover:shadow-xl transition-all duration-200 transform hover:scale-105"> Load More Projects </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(modalOpen)) {
        _push(ssrRenderComponent(_component_PortfolioModal, {
          item: unref(selectedItem),
          open: unref(modalOpen),
          onClose: ($event) => modalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio-m38f2dMT.mjs.map
