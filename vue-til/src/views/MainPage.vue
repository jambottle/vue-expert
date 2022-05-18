<template>
  <main class="page">
    <h1 class="page__title">Today I Learned</h1>
    <ul class="post-list">
      <PostItem
        v-for="postItem in postList"
        :key="postItem._id"
        :item="postItem"
      />
    </ul>
  </main>
</template>

<script>
import PostItem from '@/components/posts/PostItem.vue';
import { fetchPosts } from '@/api';

export default {
  components: {
    PostItem,
  },

  data() {
    return {
      postList: [],
    };
  },

  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      this.postList = data.posts;
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

  .post-list {
    display: flex;
    flex-wrap: wrap;

    padding: 0;
    list-style: none;
  }
}
</style>
