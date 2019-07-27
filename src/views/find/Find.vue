<template>
  <div class="find-main">
    <div class="header-bar">
      <router-link to="/find/article">精选文章</router-link>
      <router-link to="/find/goods">好物推荐</router-link>
    </div>

    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Find",
  components: {}
};
</script>
<style scoped lang="scss">
.find-main {
  background: #f5f5f5;
  .header-bar {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    justify-content: space-around;
    height: 40px;
    width: 100%;
    background-color: #fdfdfd;
    a {
      font-size: 18px;
      color: #999999;
      line-height: 40px;
      &.router-link-exact-active{
          color: #010E0D;
      }
    }
  }
}
</style>

