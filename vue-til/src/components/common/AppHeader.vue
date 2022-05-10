<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/">TIL</router-link>
    </div>
    <nav class="header__menu">
      <!-- (1) 로그인에 성공한 이후 -->
      <template v-if="$store.getters.isSignedIn">
        <span>{{ $store.state.username }}</span>
      </template>
      <!-- (2) 로그인에 성공하기 전 -->
      <template v-else>
        <router-link to="/signin">Sign In</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </template>
    </nav>
  </header>
</template>

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
