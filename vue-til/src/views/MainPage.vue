<template>
  <main class="page">
    <h1 class="page__title">Today I Learned</h1>
    <ul class="post-list" v-if="!isLoading">
      <PostItem
        v-for="postItem in postList"
        :key="postItem._id"
        :item="postItem"
        @refresh="fetchData"
      />
    </ul>
    <AppSpinner v-else />

    <router-link to="/create" class="create-button">
      <i class="icon ion-md-add" />
    </router-link>
  </main>
</template>

<script>
import AppSpinner from '@/components/common/AppSpinner.vue';
import PostItem from '@/components/posts/PostItem.vue';
import { fetchPosts } from '@/api/posts';

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

  .create-button {
    position: fixed;
    bottom: 70px;
    right: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;
    border: 3px solid #ffffff;
    border-radius: 50%;

    background-color: #fe9616;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    color: #ffffff;
  }
}
</style>
