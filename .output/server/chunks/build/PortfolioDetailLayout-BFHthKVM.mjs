import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { u as useSanityImageUrl } from './sanityApi-SN5CK_ks.mjs';
import { marked } from 'marked';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

function renderMarkdown(md) {
  return marked.parse(md);
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PdfViewer",
  __ssrInlineRender: true,
  props: {
    pdfUrl: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.pdfUrl) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pdf-viewer-container" }, _attrs))} data-v-f65e9666><div class="pdf-iframe-wrapper" data-v-f65e9666><iframe${ssrRenderAttr("src", _ctx.pdfUrl + "#toolbar=0")} width="100%" height="800px" style="${ssrRenderStyle({ "border": "none" })}" allowfullscreen data-v-f65e9666></iframe><div class="pdf-toolbar-overlay" data-v-f65e9666></div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-f65e9666><p data-v-f65e9666>No PDF available.</p></div>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PdfViewer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PdfViewer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f65e9666"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PortfolioDetailLayout",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    function imageUrl(image) {
      return image && image.asset ? useSanityImageUrl(image) : "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio-detail" }, _attrs))} data-v-7662191e><h1 class="text-3xl font-bold mb-2" data-v-7662191e>${ssrInterpolate(_ctx.item.title)}</h1><p class="text-lg text-gray-500 mb-4" data-v-7662191e>${ssrInterpolate(_ctx.item.description)}</p>`);
      if (_ctx.item.tags && _ctx.item.tags.length) {
        _push(`<div class="mb-4" data-v-7662191e><div class="flex flex-wrap gap-1.5 sm:gap-2" data-v-7662191e><!--[-->`);
        ssrRenderList(_ctx.item.tags.slice(0, 4), (tag, index) => {
          _push(`<span class="inline-flex items-center px-2 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-xs font-medium hover:bg-gray-700/50 hover:border-gray-500 transition-colors duration-200" data-v-7662191e>${ssrInterpolate(tag.title)}</span>`);
        });
        _push(`<!--]-->`);
        if (_ctx.item.tags.length > 4) {
          _push(`<span class="inline-flex items-center px-2 py-1 bg-gray-800/30 text-gray-400 rounded-md text-xs" data-v-7662191e> +${ssrInterpolate(_ctx.item.tags.length - 4)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.item.featuredImage && _ctx.item.featuredImage.asset) {
        _push(`<img${ssrRenderAttr("src", imageUrl(_ctx.item.featuredImage))} class="mb-6 rounded-xl w-full max-h-96 object-cover" data-v-7662191e>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.item.markdown && _ctx.item.markdown.content || _ctx.item.content) {
        _push(`<div data-v-7662191e><div class="prose max-w-none" data-v-7662191e>${(_b = unref(renderMarkdown)(((_a = _ctx.item.markdown) == null ? void 0 : _a.content) || _ctx.item.content)) != null ? _b : ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.item.pdfFile && _ctx.item.pdfFile.asset && (_ctx.item.pdfFile.asset.url || _ctx.item.pdfFile.asset._ref)) {
        _push(ssrRenderComponent(PdfViewer, {
          pdfUrl: _ctx.item.pdfFile.asset.url || _ctx.item.pdfFile.asset._ref
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.item.galleryImages && _ctx.item.galleryImages.length) {
        _push(`<div data-v-7662191e><h2 class="text-xl font-semibold mt-8 mb-2" data-v-7662191e>Gallery</h2><div class="grid grid-cols-2 md:grid-cols-3 gap-4" data-v-7662191e><!--[-->`);
        ssrRenderList(_ctx.item.galleryImages, (img, i) => {
          _push(`<img${ssrRenderAttr("src", imageUrl(img))} class="rounded-lg w-full object-cover" data-v-7662191e>`);
        });
        _push(`<!--]--></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioDetailLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7662191e"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=PortfolioDetailLayout-BFHthKVM.mjs.map
