<template>
  <main class="page">
    <h1 class="page__title">Today I Learned</h1>
    <ul class="post-list" v-if="!isLoading">
      <PostItem
        v-for="postItem in postList"
        :key="postItem._id"
        :item="postItem"
      />
    </ul>
    <AppSpinner v-else />
  </main>
</template>

<script>
import AppSpinner from '@/components/common/AppSpinner.vue';
import PostItem from '@/components/posts/PostItem.vue';
import { fetchPosts } from '@/api';

export default {
  components: {
    AppSpinner,
    PostItem,
  },

  data() {
    return {
      isLoading: false,
      postList: [],
    };
  },

  methods: {
    async fetchData() {
      this.isLoading = true;

      const { data } = await fetchPosts();
      this.postList = data.posts;

      this.isLoading = false;
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
