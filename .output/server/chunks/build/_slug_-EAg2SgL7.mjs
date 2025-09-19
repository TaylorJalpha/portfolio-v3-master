import { _ as __nuxt_component_0 } from './PortfolioDetailLayout-BFHthKVM.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import './sanityApi-SN5CK_ks.mjs';
import 'axios';
import 'marked';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const portfolioItem = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioDetailLayout = __nuxt_component_0;
      if (portfolioItem.value) {
        _push(ssrRenderComponent(_component_PortfolioDetailLayout, mergeProps({
          item: portfolioItem.value.data
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-EAg2SgL7.mjs.map
