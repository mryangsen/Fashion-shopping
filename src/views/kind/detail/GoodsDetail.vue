<template>
  <div class="goods-detail-main">
    <div class="header-bar">
      <span class="icon icon-back" @click="$router.go(-1)"></span>
      <p class="title">商品详情</p>
      <span class="icon icon-share"></span>
      <router-link tag="span" :to="{name:'cart'}" class="icon icon-cart"></router-link>
    </div>
    <div class="type-bar">
        <span class="tab-text" :class="{active:tabType==0}">详情</span>
        <span class="tab-text"  :class="{active:tabType==1}">评价</span>
    </div>
    
    <!-- 商品组件 -->
     <!-- ref="buycard" 给组件起名字 -->
    <my-goods :dialog.sync="dialog" class="goods-com" :goodsStock="goodsStock" :type="type" ref="buycard"></my-goods>
    <!-- 评论组件 -->
    <my-comments  class="comments-com"></my-comments>

    <div class="footer-bar">
        <span class="icon icon-like"></span>
        <span class="icon icon-kf"></span>
        <button @click="openDialog(0)" class="btn btn-cart">加入购物车</button>
        <button @click="openDialog(1)" class="btn btn-buy">立即购买</button>
    </div>
  </div>
</template>
<script>
import MyGoods from './components/Goods.vue'
import MyComments from './components/Comments.vue'
import { setTimeout } from 'timers';
import kindApi from '@/api/kind/kind.js';
export default {
    name: 'goodsDetail',
    components:{
        MyGoods,
        MyComments
    },
    data(){
        return {
          type: 0, // 购买类型  0  购物车  1  购买
          dialog: false,
          tabType: 0,
          goodsStock:{}
        }
    },
    created(){
      this.getStockInfoById(this.$route.params.id);
    },
    mounted(){
      // setTimeout(()=>{
      //     console.log(typeof this.$refs.buycard.getStockInfoById);
      // // subkindid  id  为啥 这里只有id
      // this.$refs.buycard.getStockInfoById(this.$route.params.id);
      // },200)
      
    },
    methods:{
      getStockInfoById(id){
        //模拟获取明细的方法
        kindApi.getGoodsStockById(id)
          .then(res=>{
            this.goodsStock = res;
          })
      },
      openDialog(type){
        // 0 购物车
        // 1 直接购买
        this.dialog = true;
        this.type = type;
        if(type==0){
          //根据id获取当前商品的库存明细
        }
      }
    }
};
</script>
<style scoped lang="scss">
.goods-detail-main {
  .header-bar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
    background-color: #fff;
    z-index: 999;
    .title {
      text-align: center;
      line-height: 44px;
      font-size: 18px;
      color: #010e0d;
    }
    .icon {
      position: absolute;
      display: block;
      height: 100%;
      width: 44px;
      background: no-repeat center;
      background-size: 20px 20px;
      &.icon-back {
        left: 16px;
        top: 0;
        background-image: url("../../../assets/imgs/icons/arr-l.png");
      }
      &.icon-share {
        right: 56px;
        top: 0;
        background-image: url("../../../assets/imgs/icons/share.png");
      }
      &.icon-cart {
        right: 16px;
        top: 0;
        background-image: url("../../../assets/imgs/icons/cart.png");
      }
    }
  }
  .type-bar{
      position: fixed;
      width: 100%;
      height: 44px;
      left: 0;
      top: 44px;
      text-align: center;
          z-index: 999;
          background-color: #fff;
      .tab-text{
          display: inline-block;
          font-size: 16px;
          color: #999;
          padding: 0 26px;
              line-height: 44px;
          &.active{
              color: #1C4B47;
          }
      }
  }
  .goods-com,
  .comments-com{
      width: 346px;
      margin: 0 auto;
      margin-top: 100px;
  }
  .footer-bar{
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 44px;
    background-color: #fff;
    z-index: 999;
    align-items: center;
    .icon{
      display: block;
      width: 40px;
      height: 40px;
      background: no-repeat center;
      background-size: 24px 24px;
      &.icon-like{
        background-image: url('../../../assets/imgs/icons/like.png');
      }
      &.icon-kf{
        background-image: url('../../../assets/imgs/icons/kf.png');
        margin-right: 20px;
      }

    }
    .btn{
      border: none;
      outline: none;
      width: 112px;
      height: 40px;
      border-radius: 4px;
      font-size: 15px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      box-sizing: border-box;
      &.btn-cart{
        border: 1px solid #1C4B47;
        color: #1C4B47;
      }
      &.btn-buy{
        background: #1C4B47;
      }
    }
  }
}
</style>


