<template>
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
</template>

<script>
import { signupUser } from '@/api';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    };
  },

  methods: {
    async submitForm() {
      console.log('Submission has started.');

      const formData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      await signupUser(formData);

      console.log('Submission is complete.');
    },
  },
};
</script>
