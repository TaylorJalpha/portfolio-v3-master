import { defineComponent, ref, watch, unref, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderSlot } from 'vue/server-renderer';
import { c as cn } from './utils-BqCExaFN.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Meteors",
  __ssrInlineRender: true,
  props: {
    number: { default: 20 }
  },
  setup(__props) {
    const props = __props;
    const meteorStyles = ref([]);
    const generateMeteorStyles = () => {
      const containerWidth = 1200;
      const styles = Array.from({ length: props.number }).map(() => ({
        top: `${Math.random() * -100}px`,
        left: `${Math.floor(Math.random() * (containerWidth + 400))}px`,
        animationDelay: `${Math.random() * 1 + 0.2}s`,
        animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`
      }));
      meteorStyles.value = styles;
    };
    watch(() => props.number, () => {
      generateMeteorStyles();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(meteorStyles.value, (style, index) => {
        _push(`<div><span class="${ssrRenderClass(unref(cn)(
          "pointer-events-none absolute size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
        ))}" style="${ssrRenderStyle(style)}"><div class="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent"></div></span></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Meteors.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlurFade",
  __ssrInlineRender: true,
  props: {
    class: {},
    variant: {},
    duration: { default: 0.4 },
    delay: { default: 500 },
    yOffset: { default: 6 },
    inView: { type: Boolean, default: false },
    blur: { default: "6px" },
    inViewMargin: { default: "-50px" }
  },
  setup(__props) {
    const props = __props;
    const defaultVariants = {
      hidden: { y: props.yOffset, opacity: 0, filter: `blur(${props.blur})` },
      visible: {
        y: -props.yOffset,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          delay: 0.04 + props.delay,
          duration: 500,
          ease: "easeIn"
        }
      },
      enter: {
        y: -props.yOffset,
        opacity: 1,
        transition: {
          delay: 0.04 + props.delay,
          duration: 500,
          ease: "easeIn"
        },
        filter: "blur(0px)"
      }
    };
    const combinedVariants = props.variant || defaultVariants;
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        initial: unref(combinedVariants).hidden,
        visible: props.inView ? unref(combinedVariants).visible : void 0,
        enter: !props.inView ? unref(combinedVariants).enter : void 0,
        class: props.class
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion)))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlurFade.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=BlurFade-CHHK8cfH.mjs.map
