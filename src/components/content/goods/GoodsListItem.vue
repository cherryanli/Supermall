<template>
  <div>
    <div>
        <!-- v-for="(item, index) of goodsitem" :key="index" -->
      <div>123132 123 123 456 456 456</div>
      <div>123132 123 123 456 456 456</div>
      <div>123132 123 123 456 456 456</div>
      <div>123132 123 123 456 456 456</div>
      <div>123132 123 123 456 456 456</div>
      <div>123132 123 123 456 456 456</div>
      <div>123132 123 123 456 456 456</div>
      <div>123132 123 123 456 456 456</div>
      <div>123132 123 123 456 456 456</div>
      <div>123132 123 123 456 456 456</div>
      <div>123132 123 123 456 456 456</div>
      <img>
      :src="item.src"
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsitem: Array,
    default() {
      return []
    }
  }
}
</script>

<style scoped></style>
