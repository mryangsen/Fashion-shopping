<template>
  <div class="top-bar-main">
      <div class="header" :style="{backgroundColor: bgc}">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title"><slot></slot></span>
      <span class="icon icon-share"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
    props:{
        bgc:{
            type:String,
            default: '#f4f4f4'
        }
    },
  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
    .header {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  z-index: 999;
  .icon {
    display: block;
    height: 20px;
    width: 20px;
    background: no-repeat center;
    background-size: cover;
    &.icon-goback {
      background-image: url("../../../assets/imgs/icons/arr-l.png");
    }
    &.icon-share {
      visibility: hidden;
    }
  }
  .header-title {
    font-size: 18px;
    color: #010e0d;
    line-height: 44px;
  }
}
</style>
