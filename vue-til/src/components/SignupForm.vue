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
    <div>
      <label for="nickname">Nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">Sign Up</button>
  </form>

  <!-- log section -->
  <p>{{ logMessage }}</p>
</template>

<script>
import { signupUser } from '@/api';

export default {
  data() {
    return {
      // form data
      username: '',
      password: '',
      nickname: '',
      // log data
      logMessage: '',
    };
  },

  methods: {
    async submitForm() {
      try {
        const formData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };

        const { data } = await signupUser(formData);
        this.logMessage = `Welcome, ${data.username}! 🥳`;
      } catch (error) {
        this.logMessage = `${error.message} (${error.response.statusText}).`;
      } finally {
        this.resetForm();
      }
    },
    resetForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>
