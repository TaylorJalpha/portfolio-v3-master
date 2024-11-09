<template>
<div class="learn-more-container">
    <button class="learn-more-button" @click="openModal()">
        <span class="button-text">Shoot me a message!</span>
    </button>
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal()">
        <div class="modal-content" @click.stop>
            <h3><b>Reach out with any questions or inquiries! 🏌🏼‍♂️</b></h3>
            <form @submit.prevent="submitForm()">
                <div class="form-group">
                    <label for="firstName">Your Name</label>
                    <input type="text" id="firstName" v-model="formData.firstName" required />
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
                    <textarea id="message" v-model="formData.message" required></textarea>
                </div>
                <button type="submit" class="submit-button">Submit</button>
                <button type="button" class="close-button" @click="closeModal()">Close</button>
            </form>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface FormData {
  [key: string]: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const formData = ref<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
});


const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// request interceptor
api.interceptors.request.use((config) => {
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('CSRF-TOKEN='))
    ?.split('=')[1];
    
  if (token) {
    config.headers['X-CSRF-Token'] = decodeURIComponent(token);
  }
  return config;
});

export default defineComponent({
  setup() {
    const isModalOpen = ref<boolean>(false);
    const isLoading = ref<boolean>(false);
    const formData = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });

    const fetchCSRFToken = async () => {
      try {
        const response = await api.get('/csrf-token');
        const csrfToken = response.data.csrfToken;
        document.cookie = `CSRF-TOKEN=${encodeURIComponent(csrfToken)}; path=/`;
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
      }
    };

    const submitForm = async () => {
      isLoading.value = true;
      try {
        const response = await api.post('/admin/contact_form', {
          contact_form: {
            first_name: formData.value.firstName,
            last_name: formData.value.lastName,
            email: formData.value.email,
            phone: formData.value.phone,
            message: formData.value.message,
          }
        });

        if (response.status === 200) {
          alert('Form submitted successfully!');
          closeModal();
          resetForm();
        }
      } catch (error: any) {
        console.error('Error submitting form:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        }
        alert('Failed to submit form. Please try again.');
      } finally {
        isLoading.value = false;
      }
    };

    const resetForm = () => {
  const keys = ['firstName', 'lastName', 'email', 'phone', 'message'] as (keyof typeof formData.value)[];
  keys.forEach(key => formData.value[key] = '');
};
    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
      resetForm();
    };

    onMounted(async () => {
      await fetchCSRFToken();
    });

    return {
      isModalOpen,
      isLoading,
      formData,
      openModal,
      closeModal,
      submitForm,
    };
  },
});
</script>

<style scoped>
.learn-more-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;

}

.learn-more-button {
  position: relative;
  margin-bottom: 0.4rem;
  margin-inline-end: 0.4rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;


}

.button-text {
  position: relative;
  padding: 10px 25px;
  background: #F64E4D;
  border-radius: 0.5rem;
  transition: box-shadow .3s ease-in-out;
  Color: #fff;
  box-shadow: 0 8px 15px 0 rgba(54, 193, 255, .2), 0 8px 15px 0 rgba(54, 193, 255, .2);
  text-decoration: none !important;
}

.learn-more-button:hover .button-text {
  background: #F64E4D;
  border: 2px solid rgb(133, 169, 169);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(77, 69, 83, 0.5);
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
  font-family: 'Inter', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

label {
  font-family: 'Roboto', sans-serif;
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

/* Updated Submit Button */
.submit-button {
  background-color: #3b82f6;
  /* Tailwind's bg-blue-500 */
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  /* Tailwind's py-2 px-4 */
  border: 1px solid #1d4ed8;
  /* Tailwind's border-blue-700 */
  border-radius: 0.25rem;
  /* Tailwind's rounded */
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #1d4ed8;
  /* Tailwind's bg-blue-700 */
}

/* Updated Close Button */
.close-button {
  background-color: #3b82f6;
  /* Tailwind's bg-blue-500 */
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  /* Tailwind's py-2 px-4 */
  border: 1px solid #1d4ed8;
  /* Tailwind's border-blue-700 */
  border-radius: 0.25rem;
  /* Tailwind's rounded */
  margin-left: 10px;
  transition: background-color 0.2s ease;
}

.close-button:hover {
  background-color: #1d4ed8;
  /* Tailwind's bg-blue-700 */
}

</style>
