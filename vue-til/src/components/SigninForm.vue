<template>
  <section class="form-wrapper">
    <!-- form section -->
    <form class="form" @submit.prevent="submitForm">
      <div>
        <label class="form__label" for="username">ID: </label>
        <input
          class="form__input"
          id="username"
          type="text"
          v-model="username"
        />
        <p class="validation-text" v-if="!isUsernameValid && username">
          Please enter a valid email address.
        </p>
      </div>
      <div>
        <label class="form__label" for="password">PW: </label>
        <input
          class="form__input"
          id="password"
          type="text"
          v-model="password"
        />
      </div>
      <button
        class="form__button"
        type="submit"
        :disabled="!isUsernameValid || !password"
      >
        Sign In
      </button>
    </form>

    <!-- log section -->
    <p class="log-message">{{ logMessage }}</p>
  </section>
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

        this.$store.commit('setUsername', data.user.username);
        this.$router.push('/main');
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

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 40px auto;
  border-radius: 3px;
  padding: 15px 20px;

  background-color: #ffffff;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);

  .form {
    max-width: 460px;
    width: 100%;
    height: 100%;

    &__label {
      display: block;
      width: 100%;
      margin-bottom: 0.5rem;
      color: #364f6b;
      font-size: 90%;
    }

    &__input {
      width: 100%;
      margin-bottom: 1rem;
      border: 1px solid #dae1e7;
      padding: 0.5rem 0.75rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-family: inherit;
      font-size: 100%;
    }

    .validation-text {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-top: -0.5rem;
      margin-bottom: 0.5rem;
      color: #ff4057;
      font-size: 1rem;
    }

    &__button {
      border: 0 solid #dae1e7;
      border-radius: 0.25rem;
      padding: 0.5rem 1.5rem;
      background-color: #fe9616;
      color: #ffffff;
      font-weight: 700;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .log-message {
    margin-top: 1.5rem;
    color: #ff4057;
    font-size: 1rem;
    text-align: center;
  }
}
</style>
