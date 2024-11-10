<template>
  <portal to="modals">
    <div v-if="isOpen" class="modal-overlay" @click="closeModal()">
      <div class="modal-content" @click.stop>
        <h3><b>Reach out with any questions or inquiries! 🏌🏼‍♂️</b></h3>
        <form @submit.prevent="submitForm()">
          <div class="form-group">
            <label for="Name">Your Name</label>
            <input type="text" id="Name" v-model="formData.Name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="text" id="phone" v-model="formData.phone" required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              id="message"
              v-model="formData.message"
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-button">Submit</button>
          <button type="button" class="close-button" @click="closeModal()">
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
  Name: string;
  email: string;
  phone: string;
  message: string;
}

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// request interceptor
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
      Name: "",
      email: "",
      phone: "",
      message: "",
    });

    const fetchCSRFToken = async () => {
      try {
        const response: AxiosResponse = await api.get("/csrf-token");
        const csrfToken = response.data.csrfToken;
        document.cookie = `CSRF-TOKEN=${encodeURIComponent(csrfToken)}; path=/`;
      } catch (error: AxiosError) {
        console.error("Failed to fetch CSRF token:", error);
      }
    };

    const submitForm = async () => {
      isLoading.value = true;
      try {
        const response: AxiosResponse = await api.post("/admin/contact_form", {
          contact_form: {
            Name: formData.value.Name,
            email: formData.value.email,
            phone: formData.value.phone,
            message: formData.value.message,
          },
        });

        if (response.status === 200) {
          alert("Form submitted successfully!");
          closeModal();
          resetForm();
        } else {
          console.error("Error submitting form:", response);
          alert("Failed to submit form. Please try again.");
        }
      } catch (error: AxiosError) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again.");
      } finally {
        isLoading.value = false;
      }
    };

    const resetForm = () => {
      const keys = ["Name", "email", "phone", "message"] as (keyof FormData)[];
      keys.forEach((key) => (formData.value[key] = ""));
    };

    const closeModal = () => {
      isModalOpen.value = false;
      emit("close");
      resetForm();
    };

    onMounted(async () => {
      await fetchCSRFToken();
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #333333;
  padding: 20px;
  border-radius: 15px;
  width: 80%;
  max-width: 500px;
  z-index: 1000;
}

.modal-content {
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

.form-group {
  margin-bottom: 15px;
  color: rgb(255, 255, 255);
  padding-top: -1rem;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: rgb(255, 255, 255);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  color: rgb(9, 9, 9);
  border-radius: 5px;
}

.submit-button {
  background-color: #3b82f6;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 1px solid #1d4ed8;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #1d4ed8;
}

.close-button {
  background-color: #3b82f6;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 1px solid #1d4ed8;
  border-radius: 0.25rem;
  margin-left: 10px;
  transition: background-color 0.2s ease;
}

.close-button:hover {
  background-color: #1d4ed8;
}
</style>
