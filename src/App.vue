<template>
  <div id="app">
    <!-- 所有的router-view都会被缓存 首页可以被缓存 或者某些页面可以被缓存  -->
    <!-- 组件名称 -->
    <keep-alive include="Home,Kind,Find,Main">
      <transition :name="transitionName" mode="out-in">
       <router-view class="router-view"></router-view>
      </transition>
    </keep-alive>
   
    <foot-bar v-show="$route.meta.footShow"></foot-bar>
  </div>
</template>
<script>
import FootBar from '@components/FootBar.vue'
export default {
  data(){
    return {
    transitionName:'slide-left'
  }
  },
  components:{
    FootBar
  },
  watch: {
  '$route' (to, from) {
    const tabPath = ['/home','/kind','/find/article','/find/goods','/main'];
    if(tabPath.some(item=>item==to.path)&&tabPath.some(item=>item==from.path)){
      this.transitionName = 'fade'
    }else{
      // console.log('to.path',to.path)
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
}
</script>
<style lang="scss">
body{
  // min-height: 100vh;
}
a{
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-view{
  margin-bottom: 100px;
  overflow-x: hidden;
}
.slide-left-enter-active{
  animation: slideLeft .4s;
}
.slide-right-enter-active{
  animation: slideRight .4s;
}
.fade-enter-active{
  transition: all ease .2s;
}
.fade-enter{
  opacity: 0;
}
@keyframes slideLeft{
  0%{
    opacity: 0;
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideRight{
  0%{
    opacity: 0;
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
