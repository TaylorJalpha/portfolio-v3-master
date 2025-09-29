import { defineComponent, useSSRContext, mergeProps } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue/server-renderer/index.mjs';
import { F as Footer } from './Footer-USNtRbtk.mjs';
import { _ as _sfc_main$1 } from './FloatingNav-upTfWcsn.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './ContactForm-C0UU0jeK.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/axios/index.js';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/moment/moment.js';
import './server.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/h3/dist/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/destr/dist/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/hookable/dist/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/ohash/dist/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/klona/dist/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/scule/dist/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/unctx/dist/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/pathe/dist/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/unhead/dist/server.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/devalue/index.js';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/framesync/dist/es/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/popmotion/dist/es/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/style-value-types/dist/es/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/portal-vue/dist/portal-vue.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "portfolio-detail",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio-detail-layout bg-[#171717] min-h-screen text-white flex flex-col relative overflow-x-hidden" }, _attrs))} data-v-037fa7eb><div class="absolute inset-0 bg-gradient-to-br from-[#171717] via-[#232323] to-[#171717] opacity-50 pointer-events-none" data-v-037fa7eb></div><div class="absolute inset-0 opacity-30 pointer-events-none" data-v-037fa7eb><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)", "background-size": "20px 20px" })}" data-v-037fa7eb></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="h-8 sm:h-12" data-v-037fa7eb></div><main class="max-w-3xl mx-auto py-12 px-4 flex-1 relative z-10 w-full overflow-x-hidden" data-v-037fa7eb>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/portfolio-detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolioDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-037fa7eb"]]);

export { portfolioDetail as default };
//# sourceMappingURL=portfolio-detail-D9WGCerL.mjs.map
