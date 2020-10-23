<template>
  <div class="home">
    <nav-bar class="shopcar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-control class="tab-control" :title="['流行', '新款', '精选']"></tab-control>
  <goods-list ></goods-list>
  <!-- :goods="goods[type].list" -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import FeatureView from './childComps/FeatureView'
import { getHomeUrl, getHomeGoods } from 'network/home'
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    }
  },

  created() {
    //请求多个数据
    this.getHomeUrl()
    this.getHomeGoods('pop')
    this.getHomeGoods('news')
    this.getHomeGoods('sell')
  },
  methods: {
    getHomeUrl() {
      getHomeUrl().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 44px;
}
.shopcar {
  background: var(--color-tint);
  color: white;
  font-size: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
}
</style>
