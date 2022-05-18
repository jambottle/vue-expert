<template>
  <li class="post-item">
    <div class="post-item__title">{{ item.title }}</div>
    <div class="post-item__contents">{{ item.contents }}</div>
    <div class="post-item__time">{{ item.createdAt }}</div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
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

    color: #9e9e9e;
    font-size: 14px;
  }
}
</style>
