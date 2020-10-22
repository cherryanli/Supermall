<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) of recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0px 25px 0px;
  border-bottom: 16px solid #eee;
}
.recommend-item {
    flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
