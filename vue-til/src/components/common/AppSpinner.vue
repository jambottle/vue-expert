<template>
  <aside class="spinner-wrapper">
    <div class="spinner" />
  </aside>
</template>

<style lang="scss" scoped>
.spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
}

.spinner {
  position: relative;
  width: 50px;
  height: 50px;
  border: 5px solid #e0e0e0;
  border-bottom: 5px solid #fe9616;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
