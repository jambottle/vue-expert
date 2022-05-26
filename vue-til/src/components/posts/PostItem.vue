<template>
  <li class="post-item">
    <div class="post-item__title">{{ item.title }}</div>
    <div class="post-item__contents">{{ item.contents }}</div>

    <div class="post-item__time">
      {{ item.createdAt }}
      <i class="icon ion-md-create" />
      <i class="icon ion-md-trash" @click="deleteItem" />
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async deleteItem() {
      await deletePost(this.item._id);
      this.$emit('refresh');
    },
  },
};
</script>

<style lang="scss" scoped>
.post-item {
  position: relative;
  flex-grow: 1;

  width: 320px;
  height: 250px;
  margin: 7px;
  border-radius: 3px;
  padding: 15px 20px;

  background-color: #ffffff;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);

  &__title {
    margin-bottom: 0.5rem;
    font-size: 24px;
    font-weight: 600;
  }

  &__contents {
    height: 160px;
    font-size: 18px;
    overflow-y: auto;
  }

  &__time {
    position: absolute;
    bottom: 4px;
    right: 5px;

    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    color: #9e9e9e;
    font-size: 14px;

    .icon {
      color: #364f6b;
      font-size: 1.3rem;
      cursor: pointer;

      &.ion-md-trash {
        padding-right: 0.4rem;
      }

      &:hover {
        color: #3fc1c9;
      }

      &:active {
        color: #fc5185;
      }
    }
  }
}
</style>
