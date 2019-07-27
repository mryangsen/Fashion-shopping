<template>
  <div class="goods-main">
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="(m,index) in imgs" :key="index">
        <img :src="m" alt>
      </swiper-slide>
    </swiper>
    <img style="width:100%;" :src="require('@/assets/imgs/kind/goods/bigImg.png')" alt>
    <transition :duration="400">
      <div v-show="dialog" class="mask">
        <transition name="fade">
          <div class="card" v-show="dialog">
            <span class="close" @click="handleClose"></span>
            <div class="goods-info">
              <img class="goods-img" :src="require('@/assets/imgs/kind/goods/m1.png')" alt>
              <div class="goods-text-info">
                <p class="brand">{{goodsStock.brand}}</p>
                <p class="title">{{goodsStock.title}}</p>
                <p class="price">¥{{goodsStock.price}}</p>
                <p class="sale-count">剩下{{goodsStock.stock}}件</p>
              </div>
            </div>
            <div class="attr-item attr-color">
              <p class="attr-name">颜色</p>
              <div class="attr-list">
                <span class="color1"></span>
                <span class="color2"></span>
              </div>
            </div>
            <div class="attr-item attr-size">
              <p class="attr-name">规格</p>
              <div class="attr-list">
                <span class="size">S</span>
                <span class="size">M</span>
                <span class="size">L</span>
              </div>
            </div>
            <div class="attr-item attr-count">
              <p class="attr-name">数量</p>
              <div class="attr-list">
                <button :disabled="count<=1" class="counter" @click="desCount">-</button>
                <span class="count">{{count}}</span>
                <button :disabled="count>=goodsStock.stock" class="counter" @click="insCount">+</button>
              </div>
            </div>

            <button @click="handleSubmit" class="btn-primary">确定</button>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "GoodsCom",
  props: {
    dialog: Boolean,
    type: Number, // 0  购物车  1  购买
    goodsStock:{
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      count:1,
      swiperOption: {
        slidesPerView: 1.2,
        centeredSlides: true
      },
      imgs: [
        require("@/assets/imgs/kind/goods/m2.png"),
        require("@/assets/imgs/kind/goods/m3.png"),
        require("@/assets/imgs/kind/goods/m4.png")
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    callback() {},
    handleSubmit() {
      // 购物车
      if(this.type == 0){
        // mutations    {...this.goodsStock,count:this.count}  对象拼接
        this.$store.commit('cart/addToBuy',{...this.goodsStock,count:this.count});
      }
      this.handleClose()
    },
    insCount(){
      this.count ++;
    },
    desCount(){
      this.count --;
    },
    handleClose(){
      this.$emit("update:dialog", false);
    }
  }
};
</script>
<style lang="scss" scoped>
.goods-main {
  overflow: auto;
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    .card {
      position: absolute;
      left: 50%;
      bottom: 20px;
      width: 334px;
      padding: 20px;
      margin-left: -167px;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 8px;
      .close{
        position: absolute;
        display: block;
        right: 16px;
        top: 16px;
        width: 20px;
        height: 20px;
        background: url('../../../../assets/imgs/icons/close.png') no-repeat center;
        background-size: 20px 20px;
      }
      .goods-info {
        width: 100%;
        display: flex;
        .goods-img {
          width: 114px;
          height: 114px;
        }
        .goods-text-info {
          padding-left: 24px;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .price {
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
      .attr-item {
        width: 100%;
        margin-top: 20px;
        .attr-name {
          font-size: 14px;
          color: #000;
          line-height: 20px;
          text-align: left;
          margin: 10px auto;
        }
        &.attr-color .attr-list {
          display: flex;
          > span {
            width: 34px;
            height: 34px;
            background: pink;
            margin-right: 20px;
            border-radius: 50%;
          }
          .color1{
            background-color: #EBE7DC;
          }
          .color2{
            background-color: #101010;
          }
        }
        &.attr-size .attr-list {
          display: flex;
          > span {
            width: 34px;
            height: 34px;
            background: #ffffff;
            box-shadow: 0 2px 5px 0 #e9e9e9;
            border-radius: 4px;
            margin-right: 20px;
            font-size: 16px;
            text-align: center;
            line-height: 34px;
          }
        }
        &.attr-count .attr-list {
          display: flex;
          > .counter {
            border: none;
            outline: none;
            font-size: 14px;
            padding: 4px 10px;
            color: #000;
            background: #ffffff;
            box-shadow: 0 2px 5px 0 #e9e9e9;
            border-radius: 1px;
          }
          .count {
            border: none;
            width: 30px;
            margin: 0 6px;
            background: #fff;
            box-shadow: 0 2px 5px 0 #e9e9e9;
            border-radius: 1px;
            line-height: 24px;
            text-align: center;
          }
        }
      }
      .btn-primary {
        border: none;
        outline: none;
        width: 178px;
        height: 40px;
        background: #1c4b47;
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        line-height: 40px;
        margin-top: 50px;
      }
    }
  }
}


.fade-enter-active{
   animation: fadeIn ease .4s;
}

.fade-leave-active{
   animation: fadeOut ease .4s;
}

@keyframes fadeIn{
    0%{
        transform: translateY(100%);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes fadeOut{
    0%{
        transform: translateY(0);
        opacity: 1
    }
    100%{
        transform: translateY(100%);
        opacity: 0;
    }
}
</style>


