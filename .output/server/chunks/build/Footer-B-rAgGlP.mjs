import { _ as __nuxt_component_0 } from './ContactForm-BaMb2b7k.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import moment from 'moment';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const isContactFormOpen = ref(false);
    const socialLinks = [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/taylor-jacob-ferguson/",
        icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" />
    </svg>`
      },
      {
        name: "GitHub",
        href: "https://github.com/TaylorJalpha",
        icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
    </svg>`
      },
      {
        name: "Email",
        href: "mailto:taylor@example.com",
        icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>`
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactForm = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative w-full" }, _attrs))} data-v-1d1a3e67><div class="w-full h-px bg-gradient-to-r from-transparent via-neutral-700/50 to-transparent" data-v-1d1a3e67></div><div class="w-full bg-black/50 backdrop-blur-lg border-t border-neutral-700/50" data-v-1d1a3e67><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-v-1d1a3e67><div class="md:flex md:justify-between" data-v-1d1a3e67><div class="mb-12 md:mb-0" data-v-1d1a3e67><div class="flex items-center mb-6" data-v-1d1a3e67><div class="w-8 h-8 bg-gradient-to-br from-[#E63946] to-[#d62839] rounded-full flex items-center justify-center mr-3 flex-shrink-0" data-v-1d1a3e67><svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-v-1d1a3e67><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-1d1a3e67></path></svg></div><h2 class="text-2xl font-bold text-white tracking-tight" data-v-1d1a3e67><span class="inline-flex items-center" data-v-1d1a3e67> Taylor J. Ferguson <span class="relative flex h-3 w-3 ml-2" data-v-1d1a3e67><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" data-v-1d1a3e67></span><span class="relative inline-flex rounded-full h-3 w-3 bg-green-500" data-v-1d1a3e67></span></span></span></h2></div><p class="text-neutral-400 text-sm max-w-sm leading-relaxed ml-11" data-v-1d1a3e67> Product Manager with strong technical knowledge\u2013\xA0Shipping solutions that drive revenue, user engagement and high customer satisfaction. </p></div><div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3" data-v-1d1a3e67><div data-v-1d1a3e67><h3 class="mb-6 text-sm font-semibold text-white uppercase tracking-wider" data-v-1d1a3e67> Let&#39;s Connect! </h3><div class="flex flex-col space-y-4" data-v-1d1a3e67><button class="group inline-flex items-center text-left text-neutral-400 hover:text-[#E63946] transition-all duration-300 bg-transparent border border-neutral-600/50 hover:border-[#E63946]/50 rounded-md px-3 py-1.5 cursor-pointer text-sm font-medium hover:bg-[#E63946]/10" data-v-1d1a3e67><svg class="w-3 h-3 mr-1.5 opacity-70 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24" data-v-1d1a3e67><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" data-v-1d1a3e67></path><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" data-v-1d1a3e67></path></svg> Contact Me </button><a href="https://www.linkedin.com/in/taylor-jacob-ferguson/" target="_blank" class="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium" data-v-1d1a3e67> LinkedIn </a><a href="https://github.com/TaylorJalpha" target="_blank" class="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium mb-2" data-v-1d1a3e67> GitHub </a><a href="https://discord.com/users/884522616105349240" target="_blank" class="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium" title="Message me on Discord: @blockedwu" data-v-1d1a3e67> Discord (@blockedwu) </a></div></div><div data-v-1d1a3e67><h3 class="mb-6 text-sm font-semibold text-white uppercase tracking-wider" data-v-1d1a3e67> Navigation </h3><div class="flex flex-col space-y-4" data-v-1d1a3e67><button class="group text-left text-neutral-400 hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 text-sm font-medium" data-v-1d1a3e67> Home </button><button class="group text-left text-neutral-400 hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 text-sm font-medium" data-v-1d1a3e67> Experience </button><button class="group text-left text-neutral-400 hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 text-sm font-medium" data-v-1d1a3e67> Portfolio </button></div></div><div data-v-1d1a3e67><h3 class="mb-6 text-sm font-semibold text-white uppercase tracking-wider" data-v-1d1a3e67> Core skills </h3><div class="flex flex-col space-y-4" data-v-1d1a3e67><a href="#" class="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium" data-v-1d1a3e67> Product Management </a><a href="#" class="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium" data-v-1d1a3e67> Web &amp; Mobile Development </a><a href="#" class="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium" data-v-1d1a3e67> User Experience Design </a><a href="#" class="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium" data-v-1d1a3e67> Data Analytics </a><a href="#" class="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium" data-v-1d1a3e67> Business Development </a></div></div></div></div><hr class="my-12 border-neutral-800/50" data-v-1d1a3e67><div class="sm:flex sm:items-start sm:justify-between gap-8" data-v-1d1a3e67><div class="mb-4 sm:mb-0 max-w-md" data-v-1d1a3e67><div class="text-xs text-neutral-400 leading-relaxed" data-v-1d1a3e67> Fork of <a href="https://github.com/Ladvace/astro-bento-portfolio" target="_blank" class="text-[#E63946] hover:text-[#d62839] transition-colors duration-300" data-v-1d1a3e67>Ladvace</a> Astro theme by <a href="https://github.com/apdev95/bento-portfolio-nuxt" target="_blank" class="text-[#E63946] hover:text-[#d62839] transition-colors duration-300" data-v-1d1a3e67>apdev95</a>\u2013 Created with <a href="https://nuxt.com/" target="_blank" class="text-[#E63946] hover:text-[#d62839] transition-colors duration-300" data-v-1d1a3e67>Nuxt.</a></div><div class="mt-2" data-v-1d1a3e67><a href="https://www.linkedin.com/in/taylor-jacob-ferguson/" target="_blank" class="text-sm font-medium" style="${ssrRenderStyle({ "background": "-webkit-linear-gradient(\n                    rgb(133, 9, 241),\n                    rgb(209, 6, 205)\n                  )", "background-clip": "text", "-webkit-background-clip": "text", "color": "transparent" })}" data-v-1d1a3e67> Taylor J. Ferguson.\xA9 </a><span class="text-sm text-neutral-400" data-v-1d1a3e67>${ssrInterpolate(unref(moment)().format("Y"))}</span></div></div><div class="flex space-x-6 flex-shrink-0" data-v-1d1a3e67><!--[-->`);
      ssrRenderList(socialLinks, (social) => {
        var _a;
        _push(`<a${ssrRenderAttr("href", social.href)}${ssrRenderAttr("aria-label", social.name)} target="_blank" class="text-neutral-500 hover:text-[#E63946] transition-colors duration-300" data-v-1d1a3e67>${(_a = social.icon) != null ? _a : ""}</a>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      _push(ssrRenderComponent(_component_ContactForm, {
        isOpen: isContactFormOpen.value,
        "onUpdate:isOpen": ($event) => isContactFormOpen.value = $event,
        class: "footer-contact-modal"
      }, null, _parent));
      _push(`</footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d1a3e67"]]);

export { Footer as F };
//# sourceMappingURL=Footer-B-rAgGlP.mjs.map
