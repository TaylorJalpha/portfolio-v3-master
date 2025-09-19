import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { F as Footer } from './Footer-B-rAgGlP.mjs';
import './ContactForm-BaMb2b7k.mjs';
import 'axios';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-router';
import 'moment';

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
//# sourceMappingURL=portfolio-Bckb-axs.mjs.map
