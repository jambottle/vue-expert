<template>
  <h1>Create Your Account</h1>
  <SignupForm />
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
h1 {
  padding: 30px 5px 15px;
  color: #456155;
  font-size: 45px;
  font-weight: 600;
  text-align: center;
}
</style>
