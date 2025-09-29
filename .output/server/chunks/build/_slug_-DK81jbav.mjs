import { u as useStructuredData, a as useBreadcrumbsLd, _ as __nuxt_component_0 } from './useBreadcrumbsLd-aV_O9Aqs.mjs';
import { defineComponent, withAsyncContext, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useAsyncData, r as resolveMetaDescription, a as usePortfolioApi } from './usePortfolioApi-0VE1fhdz.mjs';
import { u as useCanonicalUrl } from './useCanonicalUrl-Bc6O9XZV.mjs';
import { u as useHead, e as createError } from './server.mjs';
import './useSanityImageUrl-FhHXDlFi.mjs';
import 'marked';
import '@portabletext/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './sanityApi-SBMimRU_.mjs';
import 'axios';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slugParam = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
    const { fetchPortfolioItem } = usePortfolioApi();
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`case-${slugParam}`, async () => {
      try {
        const result = await fetchPortfolioItem(slugParam);
        return result.data;
      } catch (error) {
        console.error("Error fetching case study:", error);
        {
          throw createError({
            statusCode: 404,
            statusMessage: "Case study not found"
          });
        }
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
        title: ((_a = data.value) == null ? void 0 : _a.title) ? `${data.value.title}` : "Case Study",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/case-study/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DK81jbav.mjs.map
