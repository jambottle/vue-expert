<template>
  <main class="page">
    <h1 class="page__title">Create Your Account</h1>
    <SignupForm />
  </main>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: {
    SignupForm,
  },
};
</script>

<style lang="scss" scoped>
.page {
  max-width: 1020px;
  width: 100%;
  margin: 60px auto;

  &__title {
    padding: 30px 5px 15px;
    color: #456155;
    font-size: 45px;
    font-weight: 600;
    text-align: center;
  }
}
</style>
