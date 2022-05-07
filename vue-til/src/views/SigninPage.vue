<template>
  <h1>Sign In Now</h1>
  <SigninForm />
</template>

<script>
import SigninForm from '@/components/SigninForm.vue';

export default {
  components: {
    SigninForm,
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
