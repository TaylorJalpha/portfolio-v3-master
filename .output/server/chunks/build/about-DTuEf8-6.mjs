import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useCanonicalUrl } from './useCanonicalUrl-Bc6O9XZV.mjs';
import { u as useHead } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'portal-vue';

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
