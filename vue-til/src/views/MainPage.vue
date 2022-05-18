<template>
  <main class="page">
    <h1 class="page__title">Today I Learned</h1>
    <ul>
      <li v-for="postItem in postItems" :key="postItem._id">
        {{ postItem.title }}
      </li>
    </ul>
  </main>
</template>

<script>
import { fetchPosts } from '@/api';

export default {
  data() {
    return {
      postItems: [],
    };
  },

  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      this.postItems = data.posts;
    },
  },

  created() {
    this.fetchData();
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

  ul {
    display: flex;
    flex-wrap: wrap;

    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    flex-grow: 1;

    width: 320px;
    height: 250px;
    margin: 7px;
    border-radius: 3px;
    padding: 10px 20px;

    background-color: #ffffff;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
    -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  }
}
</style>
