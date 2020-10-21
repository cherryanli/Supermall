<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <!-- 渲染路径匹配到的视图组件 -->
    <router-view />
  </div>
</template>
<script>
import MainTabbar from 'components/content/mainTabbar/MainTabbar'
export default {
  name: 'app',
  components: {
    MainTabbar
  }
}
</script>
<style>
@import 'assets/css/base.css';
</style>
