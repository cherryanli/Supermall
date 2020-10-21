<template>
  <div class="tabbarItem" @click="handleTabbar">
    <div v-if="!isActived"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activedStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    handleTabbar() {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActived() {
      //$route表示活跃路由 indexOf()方法可返回某个指定的字符串值在字符串中首次出现的位置。没检测到返回-1
      return this.$route.path.indexOf(this.path) !== -1
    },
    activedStyle() {
      return this.isActived ? { color: this.activeColor } : {}
    }
  }
}
</script>

<style scoped>
.tabbarItem {
  flex: 1;
  height: 49px;
  font-size: 14px;
  text-align: center;
}
.tabbarItem img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
