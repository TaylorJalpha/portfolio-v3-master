import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue/server-renderer/index.mjs';
import { u as useCanonicalUrl } from './useCanonicalUrl-Bc6O9XZV.mjs';
import { u as useHead } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/framesync/dist/es/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/popmotion/dist/es/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/style-value-types/dist/es/index.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/portal-vue/dist/portal-vue.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const canonical = useCanonicalUrl("/about");
    useHead({
      title: "About",
      link: [{ rel: "canonical", href: canonical }],
      meta: [
        { name: "description", content: "About Taylor J. Ferguson." },
        { property: "og:title", content: "About" },
        { property: "og:description", content: "About Taylor J. Ferguson." },
        { property: "og:url", content: canonical }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-placeholder" }, _attrs))} data-v-c2618478><h1 data-v-c2618478>About Page Coming Soon</h1><p data-v-c2618478>I&#39;m redesigning this page as part of v3.2 of my portfolio. Stay tuned, fam, and keep building!</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c2618478"]]);

export { about as default };
//# sourceMappingURL=about-DTuEf8-6.mjs.map
