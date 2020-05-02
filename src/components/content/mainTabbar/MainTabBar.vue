<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-img" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/home-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/data">
        <img slot="item-img" src="~assets/img/tabbar/data.svg" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/data-active.svg" alt="">
        <div slot="item-text">数据</div>
      </tab-bar-item>
      <tab-bar-item path="/search">
        <img slot="item-img" src="~assets/img/tabbar/search.svg" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/search-active.svg" alt="">
        <div slot="item-text">搜索</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-img" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/profile-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  
</style>