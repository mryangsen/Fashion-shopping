<template>
  <div class="cart-main">
    <div class="header">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title">购物车</span>
      <span class="icon icon-share"></span>
    </div>
    <ul class="goods-list">
      <li class="goods-item" v-for="goods in goodsList" :key="goods.id">
        <div class="check-box">
          <input type="checkbox" v-model="goods.checked">
        </div>
        <router-link :to="{name:'goodsDetail',id:goods.id}">
          <img class="img" :src="goods.img" alt>
        </router-link>
        <div class="info">
          <p class="brand">{{goods.brand}}</p>
          <p class="title">{{goods.title}}</p>
          <div class="price">
            <span class="price-text">¥ {{goods.price}}</span>
            <div class="counter">
              <span @click="des(goods.id)" class="icon icon-reduce"></span>
              <span class="count">{{goods.count}}</span>
              <span @click="ins(goods.id)" class="icon icon-plus"></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="section-likes">
        <p class="title">你可能还会喜欢</p>
        <ul class="like-goods-list">
           <router-link class="like-item" tag="li" :to="{name:'goodsDetail',id:'123'}">
               <img class="img" :src="require('@/assets/imgs/cart/goods1.png')" alt="">
               <p class="brand">TRIUMPU</p>
               <p class="goods-title">文胸内裤套装</p>
            </router-link> 
            <router-link class="like-item" tag="li" :to="{name:'goodsDetail',id:'123'}">
               <img class="img" :src="require('@/assets/imgs/cart/goods2.png')" alt="">
               <p class="brand">ESSENCE</p>
               <p class="goods-title">女士Cozy圆领吊带性感</p>
            </router-link> 
        </ul>
    </div>
    <div class="footer-bar">
        <div class="toggle-all">
            
            <label><input @change="handleToggleAll" class="checkbox" type="checkbox" v-model="toggleAll">全选</label>
        </div>
        <div class="total-info">
            <span class="total-text">
                总计: <font class="price">¥ {{sumPrice}}</font>
            </span>
            <button class="submit" @click="$router.go(-1);">立即购买</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",

  data() {
    return {
      // goodsList: [
      //   {
      //     id: 1,
      //     brand: "CRYSTALS",
      //     title: "零敏洛丽无钢圈内衣",
      //     price: 399,
      //     count: 1,
      //     img: require("@/assets/imgs/cart/1.png"),
      //     checked:false
      //   },
      //   {
      //     id: 2,
      //     brand: "JUDYHUA",
      //     title: "女士高端网纱交叠无钢圈内衣",
      //     price: 349,
      //     count: 1,
      //     img: require("@/assets/imgs/cart/2.png"),
      //     checked:false
      //   },
      //   {
      //     id: 3,
      //     brand: "NEIWAI",
      //     title: "Cozy女士家居服莫代尔棉",
      //     price: 200,
      //     count: 1,
      //     img: require("@/assets/imgs/cart/3.png"),
      //     checked:false
      //   }
      // ],
      //  goodsList:[],
      checkList: [],
      toggleAll: false
    };
  },

  methods: {
      ins(id){
          this.$store.commit('cart/insCount',id);

      },
      des(id){
         this.$store.commit('cart/desCount',id);
          // this.goodsList.map(item=>{
          //     if(item.id==id){
          //         if(item.count >0)
          //         item.count --;
          //     }
          //     return item;
          // })
      },
      handleToggleAll(){
        //   if(this.toggleAll)
          this.goodsList.map(item=>{
              item.checked=this.toggleAll;
              return item;
          });
      }
  },
  computed:{
      sumPrice(){
          return this.goodsList.reduce((sum,item)=>{
              if(item.checked){
                  sum += item.count*item.price
              }
              return sum
          },0)
      },
      goodsList(){
        return this.$store.state.cart.buy;
      }
  }
};
</script>

<style lang='scss' scoped>
.cart-main {
  background-color: #f4f4f4;
}
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
      background-image: url("../../assets/imgs/icons/arr-l.png");
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
  width: 100%;
  margin: 54px auto;
  .goods-item {
    height: 114px;
    background-color: #fff;
    margin: 20px 16px;
    display: flex;
    padding: 16px;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    border-radius: 4px;
    .img {
      margin: 0 20px;
      width: 76px;
      height: 76px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      width: 180px;
      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .counter {
          display: flex;
          align-items: center;
          .icon {
            display: block;
            width: 30px;
            height: 30px;
            background: url("../../assets/imgs/cart/plus.png") no-repeat center;
            background-size: 28px;
            &.icon-reduce {
              background-image: url("../../assets/imgs/cart/reduce.png");
            }
          }
          .count{
              margin: auto 10px;
          }
        }

        .price-text {
          color: #1c4b47;
          font-size: 16px;
        }
      }
    }
  }
}
.section-likes{
    .title{
        font-size: 14px;
        margin: 20px  auto ;
    }
    .like-goods-list{
        display: flex;
        justify-content: space-around;
        >p{
            color: #494949;
            font-size: 12px;
            line-height: 22px;
            margin: 0 auto;
        }
    }
    margin-bottom: 100px;

}
.footer-bar{
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 44px;
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
    justify-content: space-between;
    .checkbox{
        vertical-align: baseline;
    }
    .total-info{
        font-size: 14px;
        color: #1C4B47;
        .price{
            margin: 0 20px 0 10px;
        }
        .submit{
            width: 112px;
            height: 40px;
            border-radius: 4px;
            font-size: 13px;
            color: #fff;
            text-align: center;
            line-height: 40px;
            outline: none;
            border: none;
            background: #1C4B47;
        }
    }

}
</style>
