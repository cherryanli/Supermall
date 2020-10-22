<template>
  <div class="title">
    <div class="tabControl" v-for="(item, index) of title" :key="index" @click="handleTitle(index)">
      <span :class="{actived: index === currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    title: Array,
    default() {
      return []
    }
    },
     data() {
      return{
        currentIndex: 0
      }
  },
  methods: {
    handleTitle(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  text-align: center;
  font-size: 20px;
}
.tabControl {
  flex: 1;
}
.actived {
  color: var(--color-high-text);
  border-bottom: 4px solid var(--color-tint);
  padding-bottom: 6px;
}
</style>
