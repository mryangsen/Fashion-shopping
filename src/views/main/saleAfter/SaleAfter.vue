<template>
  <div class="sale-after-main">
      <div class="header">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title">申请售后</span>
      <span class="icon icon-share"></span>
    </div>
    <div class="s1 section">
      <p class="title">服务类型</p>
      <div class="types">
        <button class="btn">换货</button>
        <button class="btn">退货</button>
        <button class="btn">仅退款</button>
      </div>
    </div>
    <div class="s2 section">
      <img class="img" :src="require('@/assets/imgs/main/order3.png')" alt>
      <div class="info">
        <p>ESSENCE</p>
        <p>女士Cozy吊带性感睡衣</p>
        <p>价格：¥219 数量：x1</p>
      </div>
    </div>
    <div class="s3 section">
      <p class="title">问题描述</p>
      <textarea class="score-area" placeholder="请输入您的评价信息" cols="30" rows="8"></textarea>
    </div>
    <button class="submit" @click="$router.go(-1);">提交</button>
  </div>
</template>

<script>
export default {
  name: "SaleAfter",

  data() {
    return {};
  },

  methods: {}
};
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

.sale-after-main {
  .section {
    width: 100%;
    padding: 20px 16px;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    p{
        text-align: left;
    }
    .title {
      font-size: 16px;
      color: #010e0d;
      line-height: 22px;
      margin-bottom: 20px;
    }
    &.s1 {
        margin-top: 44px;
      .types {
        display: flex;
        .btn {
          outline: none;
          border: 1px solid #e5e5e5;
          font-size: 14px;
          padding: 3px 18px;
          border-radius: 4px;
          color: #494949;
          background-color: #fff;
          margin-right: 30px;
        }
      }
    }
    &.s2 {
      display: flex;
      align-items: center;
      .img {
        width: 66px;
        height: 66px;
      }
      .info {
        margin-left: 20px;
        flex-direction: column;
        justify-content: space-around;
        > p {
          font-size: 14px;
          color: #494949;
          line-height: 28px;
        }
      }
    }
    &.s3 {
      .score-area {
        outline: none;
        width: 346px;
        margin: 0 auto;
        background: #f9f9f9;
        border-radius: 4px;
        border: none;
        &::-webkit-input-placeholder {
          color: #999;
          font-size: 14px;
        }
      }
    }
  }
  .submit {
    width: 186px;
    height: 44px;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 44px;
    outline: none;
    border: none;
    margin-top: 60px;
    background: #1c4b47;
  }
}
</style>
