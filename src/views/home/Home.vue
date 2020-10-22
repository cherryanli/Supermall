<template>
  <div class="home">
    <nav-bar class="shopcar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-control class="tab-control" :title="['流行','新款','精选']"></tab-control>
    <div>1*10</div>
    <div>2*10</div>
    <div>3*10</div>
    <div>4*10</div>
    <div>5*10</div>
    <div>6*10</div>
    <div>7*10</div>
    <div>8*10</div>
    <div>9*10</div>
    <div>10*10</div>
       <div>1*10</div>
    <div>2*10</div>
    <div>3*10</div>
    <div>4*10</div>
    <div>5*10</div>
    <div>6*10</div>
    <div>7*10</div>
    <div>8*10</div>
    <div>9*10</div>
    <div>10*10</div>
       <div>1*10</div>
    <div>2*10</div>
    <div>3*10</div>
    <div>4*10</div>
    <div>5*10</div>
    <div>6*10</div>
    <div>7*10</div>
    <div>8*10</div>
    <div>9*10</div>
    <div>10*10</div>
       <div>1*10</div>
    <div>2*10</div>
    <div>3*10</div>
    <div>4*10</div>
    <div>5*10</div>
    <div>6*10</div>
    <div>7*10</div>
    <div>8*10</div>
    <div>9*10</div>
    <div>10*10</div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import FeatureView from './childComps/FeatureView'
import { getHomeUrl } from 'network/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },

  created() {
    //请求多个数据
    getHomeUrl().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home{
 padding-top: 44px;
}
.shopcar {
  background: var(--color-tint);
  color: white;
  font-size: 20px;
   position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  background: #fff;
}
</style>
