<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/">
        TIL
        <span v-if="$store.getters.isUserSignedIn">
          by {{ $store.state.username }}
        </span>
      </router-link>
    </div>
    <nav class="header__menu">
      <!-- (1) 로그인에 성공한 이후 -->
      <template v-if="$store.getters.isUserSignedIn">
        <a href="javascript:;" @click="signoutUser">Sign Out</a>
      </template>
      <!-- (2) 로그인에 성공하기 전 -->
      <template v-else>
        <router-link to="/signin">Sign In</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </template>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    signoutUser() {
      this.$store.commit('resetUsername');
      this.$router.push('/signin');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 10px 20px;
  background-color: #927dfc;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);

  &__logo a {
    color: #ffffff;
    font-size: 30px;
    font-weight: 900;

    span {
      font-size: 16px;
      font-weight: 500;
    }
  }

  &__menu a {
    margin-left: 10px;
    color: #dedede;
    font-size: 18px;

    &.router-link-exact-active {
      color: #ffffff;
      font-weight: 700;
    }
  }
}
</style>
