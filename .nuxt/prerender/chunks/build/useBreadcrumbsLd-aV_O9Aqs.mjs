import { computed, defineComponent, mergeProps, unref, h, ref, reactive, watch, useSSRContext } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/vue/server-renderer/index.mjs';
import { u as useSanityImageUrl } from './useSanityImageUrl-FhHXDlFi.mjs';
import { marked } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/marked/lib/marked.esm.js';
import { PortableText } from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/@portabletext/vue/dist/vue-portable-text.mjs';
import { c as useRuntimeConfig, u as useHead, _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useCanonicalUrl } from './useCanonicalUrl-Bc6O9XZV.mjs';
import { r as resolveMetaDescription } from './usePortfolioApi-0VE1fhdz.mjs';

function renderMarkdown(md) {
  return marked.parse(md);
}
const minScale = 0.6;
const maxScale = 3;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PdfViewer",
  __ssrInlineRender: true,
  props: {
    pdfUrl: {}
  },
  setup(__props) {
    const props = __props;
    const isMobile = ref(true);
    computed(() => props.pdfUrl ? `${props.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0` : "");
    const pages = reactive([]);
    const pdfDoc = ref(null);
    const scale = ref(1);
    const baseWidth = ref(null);
    const scrollContainer = ref(null);
    const error = ref(null);
    ref(true);
    let io = null;
    const pageContainers = /* @__PURE__ */ new Map();
    const canvases = /* @__PURE__ */ new Map();
    async function ensurePdfJsLoaded() {
      const pdfjs = await import('file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/pdfjs-dist/build/pdf.mjs');
      return pdfjs;
    }
    async function openPdf() {
      var _a;
      if (!props.pdfUrl) return;
      try {
        const pdfjs = await ensurePdfJsLoaded();
        const loadingTask = pdfjs.getDocument({ url: props.pdfUrl, withCredentials: false, disableWorker: true });
        const doc = await loadingTask.promise;
        pdfDoc.value = doc;
        const first = await doc.getPage(1);
        const viewport1 = first.getViewport({ scale: 1 });
        baseWidth.value = viewport1.width;
        const cw = ((_a = scrollContainer.value) == null ? void 0 : _a.clientWidth) || (false ? (void 0).innerWidth : 360);
        scale.value = Math.max(minScale, Math.min(maxScale, cw / viewport1.width));
        const ratio = viewport1.height / viewport1.width;
        pages.splice(0, pages.length, ...Array.from({ length: doc.numPages }, (_, i) => ({
          num: i + 1,
          rendered: false,
          estHeightPx: cw * ratio
        })));
        setupIntersectionObserver();
      } catch (e) {
        console.error("PDF render error", e);
        error.value = (e == null ? void 0 : e.message) || "Failed to load PDF";
      }
    }
    function setupIntersectionObserver() {
      if (io) io.disconnect();
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const num = Number(el.dataset.page);
            renderPage(num);
          }
        });
      }, { root: scrollContainer.value || null, rootMargin: "200px 0px", threshold: 0.01 });
      pageContainers.forEach((el) => io == null ? void 0 : io.observe(el));
    }
    async function renderPage(pageNum) {
      if (!pdfDoc.value) return;
      const state = pages.find((p) => p.num === pageNum);
      if (!state || state.rendered) return;
      try {
        const page = await pdfDoc.value.getPage(pageNum);
        const viewport = page.getViewport({ scale: scale.value });
        const canvas = canvases.get(pageNum);
        const container = pageContainers.get(pageNum);
        if (!canvas || !container) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        state.estHeightPx = canvas.height;
        await page.render({ canvasContext: ctx, viewport }).promise;
        state.rendered = true;
      } catch (e) {
        console.warn("Failed to render page", pageNum, e);
      }
    }
    function cleanup() {
      if (io) {
        io.disconnect();
        io = null;
      }
      pageContainers.clear();
      canvases.clear();
      pages.splice(0, pages.length);
      if (pdfDoc.value && pdfDoc.value.destroy) pdfDoc.value.destroy();
      pdfDoc.value = null;
    }
    watch(() => props.pdfUrl, (next) => {
      if (!next) return;
      cleanup();
      if (isMobile.value) openPdf();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      if (_ctx.pdfUrl) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pdf-viewer-container" }, _attrs))} data-v-7a01d9e3>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-7a01d9e3><p data-v-7a01d9e3>No PDF available.</p></div>`);
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
const PdfViewer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7a01d9e3"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PortfolioDetailView",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    function imageUrl(image) {
      return image && image.asset ? useSanityImageUrl(image) : "";
    }
    const ptComponents = {
      types: {
        image: ({ value }) => {
          return value && value.asset ? h("img", {
            src: imageUrl(value),
            alt: value.alt || "",
            class: "my-6 rounded-xl w-full max-h-96 object-cover"
          }) : null;
        }
      },
      marks: {
        link: ({ children, value }) => {
          return h(
            "a",
            {
              href: value.href,
              target: "_blank",
              rel: "noopener",
              class: "text-blue-600 underline"
            },
            children
          );
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio-detail overflow-x-hidden" }, _attrs))} data-v-d1534e1e><h1 class="text-3xl font-bold mb-2" data-v-d1534e1e>${ssrInterpolate(_ctx.item.title)}</h1><p class="text-lg text-gray-500 mb-4" data-v-d1534e1e>${ssrInterpolate(_ctx.item.description)}</p>`);
      if (_ctx.item.tags && _ctx.item.tags.length) {
        _push(`<div class="mb-4" data-v-d1534e1e><div class="flex flex-wrap gap-1.5 sm:gap-2" data-v-d1534e1e><!--[-->`);
        ssrRenderList(_ctx.item.tags.slice(0, 4), (tag, index) => {
          _push(`<span class="inline-flex items-center px-2 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-xs font-medium hover:bg-gray-700/50 hover:border-gray-500 transition-colors duration-200" data-v-d1534e1e>${ssrInterpolate(tag.title)}</span>`);
        });
        _push(`<!--]-->`);
        if (_ctx.item.tags.length > 4) {
          _push(`<span class="inline-flex items-center px-2 py-1 bg-gray-800/30 text-gray-400 rounded-md text-xs" data-v-d1534e1e> +${ssrInterpolate(_ctx.item.tags.length - 4)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.item.featuredImage && _ctx.item.featuredImage.asset) {
        _push(`<img${ssrRenderAttr("src", imageUrl(_ctx.item.featuredImage))} class="mb-6 rounded-xl w-full max-w-full max-h-96 object-cover" style="${ssrRenderStyle({ "display": "block" })}" data-v-d1534e1e>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.item.portableText || ((_a = _ctx.item.markdown) == null ? void 0 : _a.content) || _ctx.item.content) {
        _push(`<div data-v-d1534e1e><div class="prose max-w-none" data-v-d1534e1e>`);
        if (_ctx.item.portableText) {
          _push(ssrRenderComponent(unref(PortableText), {
            value: _ctx.item.portableText,
            components: ptComponents
          }, null, _parent));
        } else {
          _push(`<div data-v-d1534e1e>${(_c = unref(renderMarkdown)(((_b = _ctx.item.markdown) == null ? void 0 : _b.content) || _ctx.item.content)) != null ? _c : ""}</div>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.item.pdfFile && _ctx.item.pdfFile.asset && _ctx.item.pdfFile.asset.url) {
        _push(ssrRenderComponent(PdfViewer, {
          pdfUrl: _ctx.item.pdfFile.asset.url
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.item.galleryImages && _ctx.item.galleryImages.length) {
        _push(`<div data-v-d1534e1e><h2 class="text-xl font-semibold mt-8 mb-2" data-v-d1534e1e>Gallery</h2><div class="grid grid-cols-2 md:grid-cols-3 gap-4" data-v-d1534e1e><!--[-->`);
        ssrRenderList(_ctx.item.galleryImages, (img, i) => {
          _push(`<img${ssrRenderAttr("src", imageUrl(img))} class="rounded-lg w-full max-w-full object-cover" style="${ssrRenderStyle({ "display": "block" })}" data-v-d1534e1e>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioDetailView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d1534e1e"]]);
function mapType(rawType) {
  switch (rawType) {
    case "blogPost":
      return "BlogPosting";
    case "caseStudy":
      return "Report";
    case "project":
      return "CreativeWork";
    default:
      return "CreativeWork";
  }
}
function pathForItem(item) {
  const slug = item.slug && (item.slug.current || item.slug) || "";
  const t = item._type || item.content_type;
  if (t === "blogPost") return `/blog/${slug}`;
  if (t === "caseStudy") return `/case-study/${slug}`;
  if (t === "project") return `/project/${slug}`;
  return `/${slug}`;
}
function useStructuredData(itemRef) {
  const config = useRuntimeConfig();
  const jsonLd = computed(() => {
    var _a, _b, _c;
    const item = itemRef.value;
    if (!item) return null;
    const type = mapType(item._type || item.content_type);
    const canonicalFromHook = useCanonicalUrl(pathForItem(item));
    const siteName = ((_a = config.public) == null ? void 0 : _a.siteName) || "Taylor J. Ferguson";
    const description = resolveMetaDescription(item);
    const image = (_c = (_b = item.featuredImage) == null ? void 0 : _b.asset) == null ? void 0 : _c.url;
    const tags = (item.tags || []).map((t) => t.title || t.name).filter(Boolean);
    const base = {
      "@context": "https://schema.org",
      "@type": type,
      name: item.title || item.name,
      headline: item.title || item.name,
      description,
      url: canonicalFromHook,
      ...image ? { image } : {},
      ...tags.length ? { keywords: tags.join(", ") } : {},
      author: {
        "@type": "Person",
        name: "Taylor J. Ferguson"
      },
      publisher: {
        "@type": "Organization",
        name: siteName
      }
    };
    if (type === "BlogPosting") {
      base.articleSection = tags[0];
    }
    const published = item.published_at;
    if (published) base.datePublished = published;
    const updated = item.updated_at || published;
    if (updated) base.dateModified = updated;
    return base;
  });
  useHead(() => {
    if (!jsonLd.value) return {};
    return {
      script: [
        {
          type: "application/ld+json",
          // Nuxt escapes by default; innerHTML is correct here.
          innerHTML: JSON.stringify(jsonLd.value)
        }
      ]
    };
  });
  return { jsonLd };
}
function baseForType(t) {
  if (t === "blogPost") return "/blog";
  if (t === "caseStudy") return "/case-study";
  if (t === "project") return "/project";
  return "";
}
function useBreadcrumbsLd(itemRef) {
  const jsonLd = computed(() => {
    const item = itemRef.value;
    if (!item) return null;
    const slug = item.slug && (item.slug.current || item.slug) || "";
    const name = item.title || item.name || "";
    const base = baseForType(item._type);
    const items = [
      { name: "Home", item: "/" },
      ...base ? [{ name: base.replace("/", "").replace("-", " "), item: base }] : [],
      { name, item: `${base}/${slug}` }
    ];
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: it.name,
        item: it.item
      }))
    };
  });
  useHead(() => {
    if (!jsonLd.value) return {};
    return {
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(jsonLd.value)
        }
      ]
    };
  });
  return { jsonLd };
}

export { __nuxt_component_0 as _, useBreadcrumbsLd as a, useStructuredData as u };
//# sourceMappingURL=useBreadcrumbsLd-aV_O9Aqs.mjs.map
