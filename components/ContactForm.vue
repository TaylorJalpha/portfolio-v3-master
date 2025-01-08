<template>
  <portal to="modals">
    <div v-if="isOpen" class="modal-overlay-pv3" @click="closeModal()">
      <div class="modal-content-pv3" @click.stop>
        <h3><b>Reach out with any questions or inquiries! 🏌🏼‍♂️</b></h3>
        <form @submit.prevent="submitForm()">
          <div class="form-group-pv3">
            <label for="name">Your Name</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group-pv3">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group-pv3">
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" v-model="formData.phone" required />
          </div>
          <div class="form-group-pv3">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-button-pv3">Submit</button>
          <button type="button" class="close-button-pv3" @click="closeModal()">
            Close
          </button>
        </form>
      </div>
    </div>
  </portal>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import { Portal } from "portal-vue";

interface FormData {
  [key: string]: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? "https://salty-thicket-78087-c98e1b01d069.herokuapp.com"
    : process.env.NODE_ENV === 'staging'
    ? "https://fierce-cliffs-40135-8a4277dc65fb.herokuapp.com/"
    : "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("CSRF-TOKEN="))
    ?.split("=")[1];

  if (token) {
    config.headers["X-CSRF-Token"] = decodeURIComponent(token);
  }
  return config;
});

export default defineComponent({
  components: {
    Portal,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const isModalOpen = ref<boolean>(props.isOpen);
    const isLoading = ref<boolean>(false);
    const formData = ref<FormData>({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const fetchCSRFToken = async () => {
      try {
        const response: AxiosResponse = await api.get("/csrf-token");
        const csrfToken = response.data.csrfToken;
        document.cookie = `CSRF-TOKEN=${encodeURIComponent(csrfToken)}; path=/`;
      } catch (error) {
        console.error("Failed to fetch CSRF token:", error);
      }
    };

    const submitForm = async () => {
      isLoading.value = true;
      try {
        const response: AxiosResponse = await api.post("contact_form", {
          contact_form: {
            name: formData.value.name,
            email: formData.value.email,
            phone: formData.value.phone,
            message: formData.value.message,
           
          },
        });

        if (response.status === 201) {
          alert("Form submitted successfully 🙏");
          closeModal();
          resetForm();
        } else {
          console.error("Error submitting form:", response);
          alert("Failed to submit form. Please try again.");
        }
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          console.error("Error submitting contact form:", axiosError.response?.data);
          const errorData = axiosError.response?.data as { errors: string[] };
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
        message: "",
      };
    };

    const closeModal = () => {
      isModalOpen.value = false;
      emit("close");
      resetForm();
    };

    onMounted(async () => {
      await fetchCSRFToken();
    });

    watch(() => props.isOpen, (newVal) => {
      isModalOpen.value = newVal;
    });

    return {
      isModalOpen,
      isLoading,
      formData,
      closeModal,
      submitForm,
    };
  },
});
</script>

<style scoped>
.modal-overlay-pv3 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(96, 91, 121, 0.5), rgba(0, 0, 0, 0.5)); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content-pv3 {
  background: #333333;
  padding: 20px;
  border-radius: 15px;
  width: 80%;
  max-width: 500px;
  z-index: 1000;
  border-width: 1px;
  border-color: #2e2c2c;
}

.modal-content-pv3 {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h3 {
  font-family: "Inter", sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

label {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #333;
}

.form-group-pv3 {
  margin-bottom: 15px;
  color: rgb(255, 255, 255);
  padding-top: -1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.form-group-pv3 label {
  display: block;
  margin-bottom: 5px;
  color: rgb(255, 255, 255);
}

.form-group-pv3 input,
.form-group-pv3 textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  color: rgb(9, 9, 9);
  border-radius: 5px;
}

.submit-button-pv3 {
  background-color: #25272a;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 1px solid #7c8086;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease;
}

.submit-button-pv3:hover {
  background-color: #ef4444;
}

.close-button-pv3 {
  background-color: #25272a;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 1px solid #7c8086;
  border-radius: 0.25rem;
  margin-left: 10px;
  transition: background-color 0.2s ease;
}

.close-button-pv3:hover {
  background-color: #ef4444;
}
</style>
