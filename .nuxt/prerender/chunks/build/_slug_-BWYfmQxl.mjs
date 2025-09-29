import { u as useStructuredData, a as useBreadcrumbsLd, _ as __nuxt_component_0 } from './useBreadcrumbsLd-aV_O9Aqs.mjs';
import { defineComponent, withAsyncContext, computed, unref, mergeProps, useSSRContext } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useAsyncData, r as resolveMetaDescription, a as usePortfolioApi } from './usePortfolioApi-0VE1fhdz.mjs';
import { u as useCanonicalUrl } from './useCanonicalUrl-Bc6O9XZV.mjs';
import { u as useHead } from './server.mjs';
import './useSanityImageUrl-FhHXDlFi.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/marked/lib/marked.esm.js';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/@portabletext/vue/dist/vue-portable-text.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs';
import './sanityApi-SBMimRU_.mjs';
import 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/axios/index.js';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slugParam = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
    const { fetchPortfolioItem } = usePortfolioApi();
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`blog-${slugParam}`, async () => {
      try {
        const result = await fetchPortfolioItem(slugParam);
        return result.data;
      } catch (error) {
        console.error("Error fetching blog post:", error);
        return null;
      }
    })), __temp = await __temp, __restore(), __temp);
    const metaDescription = computed(() => resolveMetaDescription(data.value));
    const canonical = useCanonicalUrl();
    const ogImage = computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = data.value) == null ? void 0 : _a.featuredImage) == null ? void 0 : _b.asset) == null ? void 0 : _c.url) || "";
    });
    useHead(() => {
      var _a, _b;
      return {
        title: ((_a = data.value) == null ? void 0 : _a.title) ? `${data.value.title}` : "Blog Post",
        link: [{ rel: "canonical", href: canonical }],
        meta: [
          { name: "description", content: metaDescription.value },
          { property: "og:title", content: ((_b = data.value) == null ? void 0 : _b.title) || "" },
          { property: "og:description", content: metaDescription.value },
          { property: "og:url", content: canonical },
          ogImage.value ? { property: "og:image", content: ogImage.value } : {},
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          ogImage.value ? { name: "twitter:image", content: ogImage.value } : {}
        ].filter(Boolean)
      };
    });
    useStructuredData(data);
    useBreadcrumbsLd(data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioDetailView = __nuxt_component_0;
      if (unref(data)) {
        _push(ssrRenderComponent(_component_PortfolioDetailView, mergeProps({ item: unref(data) }, _attrs), null, _parent));
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
//# sourceMappingURL=_slug_-BWYfmQxl.mjs.map
