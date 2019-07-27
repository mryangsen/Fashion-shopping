<template>
  <div class="order-detail-main">
    <div class="header">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title">订单详情</span>
      <span class="icon icon-share"></span>
    </div>
    <div class="section">
      <!-- 订货状态========== -->
      <div class="info-item">
        <img class="icon" :src="require('@/assets/imgs/main/status.png')" alt>
        <div class="info-text">
          <span>订货状态: {{statusCom}}</span>
        </div>
      </div>
      <!-- 派件员========== -->
      <div class="info-item">
        <img class="icon" :src="require('@/assets/imgs/main/postman.png')" alt>
        <div class="info-text">
          <span>河南省郑州市北环公司派件员 李明 正在为您派件</span>
          <span>4-28 19:30</span>
        </div>
      </div>
      <!-- 收货信息========== -->
      <div class="info-item">
        <img class="icon" :src="require('@/assets/imgs/main/position.png')" alt>
        <div class="info-text">
          <p>
            <span>收货人：小仙女</span>
            <span>13245687654</span>
          </p>
          <p>收货地址：河南省 郑州市 金水区 东风路街道 丰庆博颂路文雅小区</p>
        </div>
      </div>
      <!-- 卡片========== -->
      <div class="card-item">
        <router-link
          tag="div"
          :to="{name:'goodsDetail',params:{id:order.orderId}}"
          class="order-item"
        >
          <div class="line1">
            <span class="orderId">订单编号：{{order.orderId}}</span>
            <span class="status-text">
              <template v-if="order.status==1">待付款</template>
              <template v-else-if="order.status==2">已发货</template>
              <template v-else-if="order.status==3">已收货</template>
            </span>
          </div>
          <div class="line2">
            <img class="img" :src="order.img" alt>
            <div class="info">
              <p class="brand-price">
                <span class="brand">{{order.brand}}</span>
                <span class="price">¥ {{order.price}}</span>
              </p>
              <p class="title-count">
                <span class="title">{{order.title}}</span>
                <span class="count">X {{order.count}}</span>
              </p>
            </div>
          </div>
          <div class="line3">
            合计:
            <font class="total">¥{{order.price*order.count}}</font>
          </div>
          <div class="btns">
            <template v-if="order.status==1">
              <button @click.stop class="btn btn1">取消订单</button>
              <button @click.stop class="btn btn2">付款</button>
            </template>
            <template v-else-if="order.status==2">
              <button @click.stop class="btn btn1">查看物流</button>
              <button @click.stop class="btn btn2">确认收货</button>
            </template>
            <template v-else-if="order.status==3">
              <button @click.stop class="btn btn1">申请售后</button>
              <button @click.stop class="btn btn2">评价</button>
            </template>
          </div>
        </router-link>
        <div class="cast-list">
          <p class="cast-item">
            <span class="cast-name">运费</span>
            <span class="cast-count">¥ 0.00</span>
          </p>
          <p class="cast-item">
            <span class="cast-name">优惠</span>
            <span class="cast-count">¥ 0.00</span>
          </p>
          <p class="cast-item">
            <span class="cast-name">实付款(含运费)</span>
            <span class="cast-count total">¥ 430.00</span>
          </p>
        </div>
        <div class="cast-time">
          <p class="cast-time-item">订单编号：{{order.orderId}}</p>
          <p class="cast-time-item">下单时间：2018-09-16 19:00:03</p>
          <p class="cast-time-item">发货时间：2018-09-16 19:00:03</p>
        </div>
      </div>
      <div class="contect-item">
        <a href="javascript:;">
          <img class="icon" :src="require('@/assets/imgs/icons/kf.png')" alt>
          <span>联系客服</span>
        </a>
        <a href="javascript:;">
          <img class="icon" :src="require('@/assets/imgs/main/tel.png')" alt>
          <span>拨打电话</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import orderApi from "@/api/order/order";
export default {
  name: "OrderDetail",
  data() {
    return {
      order: {}
    };
  },
  created() {
    console.log(this.$route.params.id);
    orderApi
      .getOrderDetailById({
        id: this.$route.params.id
      })
      .then(res => {
        this.order = res;
      });
  },
  computed: {
    statusCom() {
      switch (this.order.status) {
        case 0:
          return "等待付款";
          break;
        case 1:
          return "待收件";
          break;
        case 2:
          return "已完成";
          break;

        default:
          return "等待付款";
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$baseColor: #1c4b47;
.order-detail-main {
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
  .section {
    margin-top: 44px;
    .info-item {
      display: flex;
      align-items: center;
      color: $baseColor;
      padding: 20px 16px;
      border-bottom: 1px solid #e5e5e5;
      font-size: 16px;
      text-align: left;
      line-height: 1.4;
      .icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      .info-text {
        > p {
          display: flex;
          justify-content: space-between;
          color: #494949;
        }
      }
    }
    .card-item {
      width: 100%;
      box-sizing: border-box;
      .order-item {
        width: 346px;
        margin: 20px auto;
        background-color: #f9f9f9;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 10px;
        color: #494949;
        font-size: 14px;
        .line1 {
          display: flex;
          justify-content: space-between;
          line-height: 30px;
          .status-text {
            color: #034c46;
          }
        }
        .line2 {
          display: flex;
          .img {
            width: 76px;
            height: 76px;
          }
          .info {
            width: 260px;
            text-align: left;
            margin-left: 10px;
            line-height: 20px;
            .brand-price,
            .title-count {
              display: flex;
              justify-content: space-between;
            }
          }
        }
        .line3 {
          text-align: right;
          .total {
            color: $baseColor;
            font-size: 15px;
            font-weight: 600;
            line-height: 20px;
          }
        }
        .btns {
          text-align: right;
          margin: 10px auto;
          .btn {
            outline: none;
            border: 1px solid #999;
            border-radius: 14px;
            width: 78px;
            height: 28px;
            font-size: 12px;
            color: #494949;
            margin-left: 10px;
            background: #f9f9f9;
            &.btn2 {
              color: #034c46;
              border-color: #034c46;
            }
          }
        }
      }

      .cast-list {
        margin: 20px auto;
        font-size: 16px;
        color: #494949;
        line-height: 22px;
        padding: 0 16px;
        .cast-item {
          display: flex;
          justify-content: space-between;
          .cast-count.total {
            font-weight: 600;
            font-size: 15px;
            color: $baseColor;
          }
        }
      }

      .cast-time {
        text-align: left;
        font-size: 16px;
        color: #494949;
        line-height: 22px;
        padding: 20px 16px;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
      }
    }
    .contect-item {
      display: flex;
      border-bottom: 1px solid #e5e5e5;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      > a {
        display: block;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        text-align: center;
        padding: 16px 0;
        color: #494949;
        .icon {
          width: 20px;
          vertical-align: text-bottom;
          margin-right: 4px;
        }
        &:first-child {
          border-right: 1px solid #e5e5e5;
        }
      }
    }
  }
}
</style>


