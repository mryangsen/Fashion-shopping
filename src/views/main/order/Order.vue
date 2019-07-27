<template>
  <div class="order-main">
    <div class="header">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title">订单列表</span>
      <span class="icon icon-share"></span>
    </div>
    <div class="filter-bar">
      <div class="filter-item">
        <input class="filter-input" type="radio" value="0" v-model="filterType">
        <span class="text">全部</span>
      </div>
      <div class="filter-item">
        <input class="filter-input" type="radio" value="1" v-model="filterType">
        <span class="text">待付款</span>
      </div>
      <div class="filter-item">
        <input class="filter-input" type="radio" value="2" v-model="filterType">
        <span class="text">已付款</span>
      </div>
      <div class="filter-item">
        <input class="filter-input" type="radio" value="3" v-model="filterType">
        <span class="text">已完成</span>
      </div>
    </div>
    <ul class="order-list">
      <router-link tag="li" :to="{name:'orderDetail',params:{id:order.orderId}}" class="order-item" v-for="order in orderListCom" :key="order.orderId">
          <div class="line1">
              <span class="orderId">
                  订单编号：{{order.orderId}}
              </span>
              <span class="status-text">
                  <template v-if="order.status==1">
                      待付款
                  </template>
                  <template v-else-if="order.status==2">
                      已发货
                  </template>
                  <template v-else-if="order.status==3">
                      已收货
                  </template>
              </span>
          </div>
          <div class="line2">
              <img class="img" :src="order.img" alt="">
              <div class="info">
                  <p class="brand-price">
                      <span class="brand">
                          {{order.brand}}
                      </span>
                      <span class="price">
                          ¥ {{order.price}}
                      </span>
                  </p>
                  <p class="title-count">
                      <span class="title">
                          {{order.title}}
                      </span>
                      <span class="count">
                          X {{order.count}}
                      </span>
                  </p>
              </div>
          </div>
          <div class="line3">
              合计: <font class="total">¥{{order.price*order.count}}</font>
          </div>
          <div class="btns">
              
               <template v-if="order.status==1">
                      <button class="btn btn1">取消订单</button>
                      <button class="btn btn2">付款</button>
                  </template>
                  <template v-else-if="order.status==2">
                      <router-link :to="{name:'logistics',params:{id:order.orderId}}" tag="button" class="btn btn1">查看物流</router-link>
                      <button class="btn btn2">确认收货</button>
                  </template>
                  <template v-else-if="order.status==3">
                      <router-link tag="button" :to="{name:'saleAfter',params:{id:order.orderId}}" class="btn btn2">申请售后</router-link>
                      <router-link tag="button" :to="{name:'score',params:{id:order.orderId}}" class="btn btn2">评价</router-link>
                  </template>
          </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import orderApi from "@/api/order/order.js";
export default {
  name: "Order",
  data() {
    return {
      filterType: 0,
      orderList: []
    };
  },
  created() {
    this.getOrderList();
    this.filterType = this.$route.query.type;
  },
  methods: {
    getOrderList() {
      orderApi.getOrderList({ status: this.filterType }).then(res => {
        this.orderList = res;
      });
    }
  },
  computed:{
      orderListCom(){
          if(this.filterType==0) return this.orderList;
          return this.orderList.filter(item=>item.status==this.filterType)
      }
  }
};
</script>
<style scoped lang="scss">
$baseColor: #034C46;
.order-main {
  background-color: #f4f4f4;
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
        background-image: url("../../../assets/imgs/icons/search.png");
      }
    }
    .header-title {
      font-size: 18px;
      color: #010e0d;
      line-height: 44px;
    }
  }
  .filter-bar {
    position: fixed;
    left: 0;
    top: 44px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    // margin-top: 50px;
    margin-bottom: 10px;
    background-color: #f4f4f4;
    z-index: 999;

    .filter-item {
      position: relative;
      padding: 6px 6px;
      color: #151515;
      font-size: 16px;
      .filter-input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
      .filter-input:checked + .text {
        color: #1c4b47;
        font-weight: 600;
        font-size: 17px;
      }
    }
  }
  .order-list {
      margin-top: 100px;
    .order-item {
      width: 346px;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 10px;
      color: #494949;
      font-size: 14px;
        .line1{
            display: flex;
            justify-content: space-between;
            line-height: 30px;
            .status-text{
                color: #034C46;
            }
        }
        .line2 {
            display: flex;
            .img{
                width: 76px;
                height: 76px;
            }
            .info{
                width: 260px;
                text-align: left;
                margin-left: 10px;
                line-height: 20px;
                .brand-price,
                .title-count{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
        .line3{
            text-align: right;
            .total{
                color: $baseColor;
                font-size: 15px;
                font-weight: 600;
                line-height: 20px;
            }
        }
        .btns{
            text-align: right;
            margin: 10px auto;
            .btn{
                outline: none;
                border: 1px solid #999;
                border-radius: 14px;
                width: 78px;
                height: 28px;
                font-size: 12px;
                color: #494949;
                margin-left: 10px;
                background: #fff;
                &.btn2{
                    color: #034C46;
                    border-color: #034C46;
                }
            }
        }
    }
  }
}
</style>

