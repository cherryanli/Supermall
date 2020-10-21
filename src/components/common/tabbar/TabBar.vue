<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
.tabbar {
  display: flex;
  background-color: #f1f1f1;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
