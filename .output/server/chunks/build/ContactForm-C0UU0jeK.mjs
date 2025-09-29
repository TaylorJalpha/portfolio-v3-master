import { defineComponent, mergeProps, ref, watch, useSSRContext } from 'vue';
import axios from 'axios';
import { ssrRenderTeleport, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const api = axios.create({
  baseURL: "https://salty-thicket-78087-c98e1b01d069.herokuapp.com" ,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
api.interceptors.request.use((config) => {
  var _a;
  const token = (_a = (void 0).cookie.split("; ").find((row) => row.startsWith("CSRF-TOKEN="))) == null ? void 0 : _a.split("=")[1];
  if (token) {
    config.headers["X-CSRF-Token"] = decodeURIComponent(token);
  }
  return config;
});
const _sfc_main = defineComponent({
  inheritAttrs: false,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    teleportTarget: {
      type: String,
      default: "body"
    }
  },
  emits: ["close", "update:isOpen"],
  setup(props, { emit }) {
    const isModalOpen = ref(props.isOpen);
    const isLoading = ref(false);
    const formData = ref({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    const submitForm = async () => {
      var _a, _b;
      isLoading.value = true;
      try {
        const response = await api.post("contact_form", {
          contact_form: {
            name: formData.value.name,
            email: formData.value.email,
            phone: formData.value.phone,
            message: formData.value.message
          }
        });
        if (response.status === 201) {
          alert("Form submitted successfully \u{1F64F}");
          closeModal();
          resetForm();
        } else {
          console.error("Error submitting form:", response);
          alert("Failed to submit form. Please try again.");
        }
      } catch (error) {
        const axiosError = error;
        if (axiosError.response) {
          console.error("Error submitting contact form:", (_a = axiosError.response) == null ? void 0 : _a.data);
          const errorData = (_b = axiosError.response) == null ? void 0 : _b.data;
          alert(`Failed to submit contact form: ${errorData.errors.join(", ")}`);
        } else {
          console.error("Error submitting form:", error);
          alert("Failed to submit form. Please try again.");
        }
      } finally {
        isLoading.value = false;
      }
    };
    const resetForm = () => {
      formData.value = {
        name: "",
        email: "",
        phone: "",
        message: ""
      };
    };
    const closeModal = () => {
      isModalOpen.value = false;
      emit("update:isOpen", false);
      emit("close");
      resetForm();
    };
    watch(() => props.isOpen, (newVal) => {
      isModalOpen.value = newVal;
    });
    return {
      isModalOpen,
      isLoading,
      formData,
      closeModal,
      submitForm
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderTeleport(_push, (_push2) => {
    if (_ctx.isModalOpen) {
      _push2(`<div${ssrRenderAttrs(mergeProps({ class: "modal-overlay-pv3" }, _ctx.$attrs))} data-v-b93d432d><div class="modal-content-pv3" data-v-b93d432d><h3 data-v-b93d432d><b data-v-b93d432d>Contact Me \u{1F6B5}</b></h3><p class="contact-form-paragraph" data-v-b93d432d>Have a question or want to collab? I&#39;m always open to new opportunities. I&#39;ll respond within 24 hours. </p><form data-v-b93d432d><div class="form-group-pv3" data-v-b93d432d><label for="name" data-v-b93d432d>Your Name</label><input type="text" id="name"${ssrRenderAttr("value", _ctx.formData.name)} required data-v-b93d432d></div><div class="form-group-pv3" data-v-b93d432d><label for="email" data-v-b93d432d>Email Address</label><input type="email" id="email"${ssrRenderAttr("value", _ctx.formData.email)} required data-v-b93d432d></div><div class="form-group-pv3" data-v-b93d432d><label for="phone" data-v-b93d432d>Phone Number</label><input type="text" id="phone"${ssrRenderAttr("value", _ctx.formData.phone)} required data-v-b93d432d></div><div class="form-group-pv3" data-v-b93d432d><label for="message" data-v-b93d432d>Message or Feedback</label><textarea id="message" required data-v-b93d432d>${ssrInterpolate(_ctx.formData.message)}</textarea></div><button type="submit" class="submit-button-pv3" data-v-b93d432d>Submit</button><button type="button" class="close-button-pv3" data-v-b93d432d> Close </button></form></div></div>`);
    } else {
      _push2(`<!---->`);
    }
  }, _ctx.teleportTarget, false, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b93d432d"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ContactForm-C0UU0jeK.mjs.map
