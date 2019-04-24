<template>
  <div class="scroll-s">
    <header class="mui-bar mui-bar-nav header">
       <a  class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="gos()"></a>
      <h1 class="mui-title">乐淘云购</h1>
      <router-link  class="mui-icon mui-icon-search mui-pull-right" to="/search"></router-link>
    </header>
    <nav class="mui-bar mui-bar-tab footer">
      <router-link class="mui-tab-item" to="/index">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/category">
        <span class="mui-icon mui-icon-bars"></span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon iconfont icon-daohanggouwuche"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/user">
        <span class="mui-icon mui-icon-person"></span>
        <span class="mui-tab-label">会员中心</span>
      </router-link>
    </nav>
    <div class="mui-content">
     <transition :name='transitionName'>
      <router-view></router-view>
     </transition>
    </div>
  </div>
</template>

<script>
// import HomeHeader from './components/HelloWorld'
export default {
  name: 'Home',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  },
  methods: {
    gos () {
      // this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.scroll-s{
  height: 100%;
}
.mui-title,
a{
  color:#fff;
}
.header,
.footer{
  background-color: #006699;
}
.mui-bar-tab .mui-tab-item{
  color:#fff;
}
.mui-bar-tab .mui-tab-item.mui-active{
  color: #1ce6c4
}
.icon-daohanggouwuche:before {
    content: "\e600";
}
.mui-content{
  overflow-x: hidden;
  height: 100%;
}
/* .v-enter{
  opacity: 0.5;
  transform:translateX(100px);
}
.v-leave-to{
  opacity: 0.7;
  transform:translateX(-100px);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 3s ease;
} */

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active{
  will-change: transform;
  transition: all .5s;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
