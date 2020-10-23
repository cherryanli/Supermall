<template>
  <div>
    <goods-list-item>
      <!-- v-for="(item,index) of goods" :key="index" :goodsitem="item" -->
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      goods: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped></style>
