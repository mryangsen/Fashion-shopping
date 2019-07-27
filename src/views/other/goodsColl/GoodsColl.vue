<template>
  <div class="goods-coll-main">
    <div class="header">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title">发表评价</span>
      <span class="icon icon-share"></span>
    </div>
    <ul class="goods-list">
      <router-link :to="{name:'goodsDetail',id:goods.id}" class="goods-item" v-for="goods in goodsList" :key="goods.id">
        <img class="img" v-lazy :src="goods.img" alt>
        <div class="info">
          <p class="desc">{{goods.desc}}</p>
          <p class="text">
            <span class="text-save-count">{{goods.saveCount}}收藏</span>
            <span class="text-price">¥ {{goods.price}}</span>
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import GoodsColl from "@/api/other/index.js";
export default {
  name: "GoodsColl",

  data() {
    return {
      goodsList: []
    };
  },
  created() {
    this.getGoodsCollList();
  },
  methods: {
    getGoodsCollList() {
      GoodsColl.getGoodsCollList().then(res => {
        this.goodsList = res;
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.goods-coll-main{
    background: #fff;
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
.goods-list {
  width: 346px;
  margin: 20px auto;
  margin-top: 64px;
  .goods-item {
      display: flex;
      margin: 20px auto;
      p{
          text-align: left;
      }
    .img {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      margin-right: 20px;
    }
    .info {
        display: flex;
        flex-direction: column;
        width: 246px;
      justify-content: space-around;
      font-size: 12px;
      color: #494949;
      line-height: 18px;
      .text {
          display: flex;
        justify-content: space-between;
        .text-price {
          font-size: 16px;
          color: #1c4b47;
          font-weight: 600;
        }
      }
    }
  }
}
}

</style>
