<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
}

:root {
  background-color: #f7f6f9;
}

a {
  text-decoration: none;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;

  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 1.4rem;
}
</style>
