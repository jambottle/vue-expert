<template>
  <!-- form section -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button type="submit" :disabled="!isUsernameValid || !password">
      Sign In
    </button>
  </form>

  <!-- log section -->
  <p>{{ logMessage }}</p>
</template>

<script>
import { signinUser } from '@/api';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form data
      username: '',
      password: '',
      // log data
      logMessage: '',
    };
  },

  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },

  methods: {
    async submitForm() {
      try {
        const formData = {
          username: this.username,
          password: this.password,
        };

        const { data } = await signinUser(formData);
        this.logMessage = `Hello, ${data.user.username}! 👋`;
      } catch (error) {
        this.logMessage = `${error.message} (${error.response.statusText}).`;
      } finally {
        this.resetForm();
      }
    },
    resetForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>
