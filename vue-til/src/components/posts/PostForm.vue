<template>
  <section class="form-wrapper">
    <form class="form" @submit.prevent="submitForm">
      <div>
        <label class="form__label" for="title">Title:</label>
        <input class="form__input" id="title" type="text" v-model="title" />
      </div>
      <div>
        <label class="form__label" for="content">Content:</label>
        <textarea
          class="form__input"
          id="content"
          type="text"
          rows="5"
          v-model="content"
        />
        <p class="validation-text" v-if="isContentTooLong">
          Content length is limited to less than 200 characters.
        </p>
      </div>
      <button
        class="form__button"
        type="submit"
        :disabled="!title || isContentTooLong"
      >
        Post Now
      </button>
    </form>

    <p class="log-message">{{ logMessage }}</p>
  </section>
</template>

<script>
import { createPost } from '@/api/posts';

export default {
  data() {
    return {
      // form data
      title: '',
      content: '',
      // log data
      logMessage: '',
    };
  },

  computed: {
    isContentTooLong() {
      return this.content.length > 200;
    },
  },

  methods: {
    async submitForm() {
      try {
        const formData = {
          title: this.title,
          contents: this.content,
        };

        await createPost(formData);
        this.$router.push('/main');
      } catch (error) {
        this.logMessage = `${error.message} (${error.response.data.message}).`;
      }
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

  width: 100%;
  height: 100%;
  margin: 40px auto;
  border-radius: 3px;
  padding: 15px 20px;

  background-color: #ffffff;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);

  .form {
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
