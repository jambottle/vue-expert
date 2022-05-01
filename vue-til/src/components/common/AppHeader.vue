<template>
  <header>
    <div>
      <router-link class="home" to="/">TIL</router-link>
    </div>
    <nav>
      <router-link class="menu" to="/signin">Sign In</router-link>
      <router-link class="menu" to="/signup">Sign Up</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - 40px);
  padding: 10px 20px;
  background-color: #927dfc;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);

  a {
    text-decoration: none;

    &.home {
      color: #ffffff;
      font-size: 30px;
      font-weight: 900;
    }

    &.menu {
      margin-left: 10px;
      color: #dedede;
      font-size: 18px;

      &.router-link-exact-active {
        color: #ffffff;
        font-weight: 700;
      }
    }
  }
}
</style>
