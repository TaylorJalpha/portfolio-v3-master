import { defineComponent, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { F as Footer } from './Footer-USNtRbtk.mjs';
import { _ as _sfc_main$1 } from './FloatingNav-upTfWcsn.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './ContactForm-C0UU0jeK.mjs';
import 'axios';
import 'vue-router';
import 'moment';
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
import 'unhead/utils';
import 'unhead/plugins';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'portal-vue';

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
