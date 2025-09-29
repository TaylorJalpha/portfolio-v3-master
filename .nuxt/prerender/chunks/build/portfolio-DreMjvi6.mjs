import { mergeProps, useSSRContext } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue/server-renderer/index.mjs';
import { F as Footer } from './Footer-USNtRbtk.mjs';
import './ContactForm-C0UU0jeK.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/axios/index.js';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/moment/moment.js';

const _sfc_main = {
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#111111] text-white min-h-screen w-full flex flex-col" }, _attrs))}><div class="relative flex-1"><div class="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#171717] to-[#111111] opacity-50"></div><div class="absolute inset-0 opacity-30"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)", "background-size": "20px 20px" })}"></div></div><div class="relative z-10">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio-DreMjvi6.mjs.map
