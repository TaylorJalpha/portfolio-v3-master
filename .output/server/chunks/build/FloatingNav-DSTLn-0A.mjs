import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { b as useRouter } from './server.mjs';

const _sfc_main = {
  __name: "FloatingNav",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    ref(true);
    const activeSection = ref("home");
    computed(() => {
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg bg-black/30 shadow-xl rounded-full transition-all duration-300 opacity-95 border border-white/10", [
          "px-3 py-2 sm:px-6 sm:py-2",
          "flex items-center justify-center",
          "gap-2 sm:gap-4",
          "w-auto max-w-[90vw] sm:max-w-none"
        ]]
      }, _attrs))}><button class="${ssrRenderClass([[
        "px-2 py-1.5 sm:px-3 sm:py-2",
        "gap-1 sm:gap-2",
        "text-xs sm:text-sm",
        "hover:bg-white/10 active:scale-95",
        unref(activeSection) === "home" ? "text-[#E63946] bg-white/10 shadow-lg" : "text-gray-300 hover:text-[#F1FAEE]"
      ], "font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"])}"${ssrRenderAttr("aria-label", "Navigate to home section")}${ssrRenderAttr("aria-pressed", unref(activeSection) === "home")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${ssrRenderClass(["w-4 h-4 sm:w-5 sm:h-5", "flex-shrink-0"])}"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M4.5 10.5V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0010.5 19v-4.5h3V19a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019.5 19v-8.5"></path></svg><span class="hidden sm:inline">Home</span></button><div class="w-px h-4 sm:h-6 bg-gray-500/30"></div><button class="${ssrRenderClass([[
        "px-2 py-1.5 sm:px-3 sm:py-2",
        "gap-1 sm:gap-2",
        "text-xs sm:text-sm",
        "hover:bg-white/10 active:scale-95",
        unref(activeSection) === "experience" ? "text-[#E63946] bg-white/10 shadow-lg" : "text-gray-300 hover:text-[#F1FAEE]"
      ], "font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"])}"${ssrRenderAttr("aria-label", "Navigate to experience section")}${ssrRenderAttr("aria-pressed", unref(activeSection) === "experience")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${ssrRenderClass(["w-4 h-4 sm:w-5 sm:h-5", "flex-shrink-0"])}"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.108 48.108 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path></svg><span class="hidden sm:inline">Experience</span></button><div class="w-px h-4 sm:h-6 bg-gray-500/30"></div><button class="${ssrRenderClass([[
        "px-2 py-1.5 sm:px-3 sm:py-2",
        "gap-1 sm:gap-2",
        "text-xs sm:text-sm",
        "text-gray-300 hover:text-[#F1FAEE] hover:bg-white/10 active:scale-95"
      ], "font-semibold flex items-center focus:outline-none transition-all duration-200 rounded-full touch-manipulation"])}"${ssrRenderAttr("aria-label", "Navigate to portfolio page")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${ssrRenderClass(["w-4 h-4 sm:w-5 sm:h-5", "flex-shrink-0"])}"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0-1.125.504-1.125 1.125V11.25a9 9 0 00-9-9z"></path></svg><span class="hidden sm:inline">Portfolio</span></button></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloatingNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FloatingNav-DSTLn-0A.mjs.map
