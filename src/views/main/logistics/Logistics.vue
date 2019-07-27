<template>
  <div class="logistics-main">
    <div class="header">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title">物流详情</span>
      <span class="icon icon-share"></span>
    </div>
    <div class="top-card">
        <img class="img" :src="require('@/assets/imgs/main/order3.png')" alt="">
      <p class="title">订单正在为您派送中</p>
      <div class="inner-card">
        <span class="line"></span>
        <p class="post-id">圆通速递：12336799788938937</p>
      </div>
    </div>

    <div class="post-his-info">
        <!-- https://justineo.github.io/vue-awesome/demo/ -->
        <p v-show="hisInfo" ><v-icon name="sync" spin></v-icon>正在获取物流信息...</p>
        <p v-show="!hisInfo">获取物流信息失败!</p>
    </div>
  </div>

</template>
<script>
import { setTimeout } from 'timers';
export default {
  name: "logistics",
  data(){
      return {
          hisInfo: true
      }
  },
  created(){
      setTimeout(()=>{
          this.hisInfo = false;
      },4000)
  }
};
</script>

<style lang="scss" scoped>
.logistics-main {
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
  .top-card {
    position: relative;
    width: 346px;
    height: 140px;
    margin: 80px auto;
    background-color: rgba(232,232,232,.3);
    box-shadow: 0 1px 8px 0 rgba(232, 232, 232, 0.5);
    border-radius: 4px;
    .title{
          font-size: 16px;
          line-height: 30px;
      }
    .img{
        position: absolute;
        left: 20px;
        top: -26px;
        width: 64px;
        height: 64px;
        z-index: 3;
    }
    .inner-card {
      position: absolute;
      left: 8px;
      bottom: 4px;
      width: 332px;
      height: 105px;
      text-align: left;
      background: #fff;
      border-radius: 4px;
      .line {
          display: block;
        margin: 20px auto;
        
        width: 302px;
        height: 6px;
        background-image: linear-gradient(
          -90deg,
          #43b4aa 0%,
          #2f928a 60%,
          #1c4b47 100%
        );
        border-radius: 4px;
      }
      .post-id{
          margin: 35px 16px;
      }
    }
  }
}
</style>


