<template>
  <div class="sub-kind-main">
    <div class="header">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title">内衣</span>
      <div class="cart-share">
        <span class="icon icon-search"></span>
        <span class="icon icon-share"></span>
      </div>
    </div>
    <div class="filter-bar">
      <span class="filter-item new-goods">新品</span>
      <span class="filter-item sale-count" @click="changeFilter('sale')">
        <font>销量</font>
        <img class="filter-arr" :src="saleFilterArr">
      </span>
      <span class="filter-item sale-price" @click="changeFilter('price')">
        <font>价格</font>
        <img class="filter-arr" :src="priceFilterArr">
      </span>
      <span @click="filterMore=!filterMore" class="filter-item filter-more">筛选</span>
    </div>
    <div class="tags">
      <transition name="fade">
        <div class="tag-list" v-show="filterMore">
          <span class="tag-item">无痕</span>
          <span class="tag-item">美背</span>
          <span class="tag-item">运动</span>
          <span class="tag-item">性感</span>
        </div>
      </transition>
    </div>

    <div class="subkind-list">
      <router-link tag="div" :to="{name:'goodsDetail',params:{id:g.id}}" class="goods-block" v-for="g in goodsListCom" :key="g.id">
        <img class="goods-img" :src="g.img" alt>
        <p class="brand">{{g.brand.toUpperCase()}}</p>
        <p class="title">{{g.title}}</p>
        <p class="price">¥{{g.price}}</p>
      </router-link>
    </div>

   
  </div>
</template>
<script>
import kindApi from "@/api/kind/kind.js";
import _ from "lodash";
export default {
  name: "SubKind",
  data() {
    return {
      goodsList: [],
      filterMore: true,
      filterType: {
        type: "",
        rule: 0, // 0 默认顺序 1 降序  2 升序
        imgs: [
          require("@/assets/imgs/icons/filter-arr.png"),
          require("@/assets/imgs/icons/filter-up.png"),
          require("@/assets/imgs/icons/filter-down.png")
        ]
      },
      filterImg: "",
      saleFilterArr: require("@/assets/imgs/icons/filter-arr.png"),
      priceFilterArr: require("@/assets/imgs/icons/filter-arr.png")
    };
  },
  created() {
    this.getSubKindList();
  },
  methods: {
    getSubKindList() {
      kindApi.getSubKindList().then(res => {
        this.goodsList = res;
      });
    },
    changeFilter(type) {
      if (this.filterType.type != type) {
        //点了其他条件 回复状态
        this.saleFilterArr = this.filterType.imgs[0];
        this.priceFilterArr = this.filterType.imgs[0];
        this.filterType.rule = 0;
        //改变类型
        this.filterType.type = type;
      }
      this.filterType.rule = (this.filterType.rule + 1) % 3;

      if (this.filterType.rule == 0) {
        this.filterType.type == "";
      }
      if (type == "sale") {
        this.saleFilterArr = this.filterType.imgs[this.filterType.rule];
      } else if (type == "price") {
        this.priceFilterArr = this.filterType.imgs[this.filterType.rule];
      }
    }
  },
  computed: {
    goodsListCom() {
      switch (this.filterType.type) {
        case "sale":
          if (this.filterType.rule == 1) {
            return _.sortBy(this.goodsList, [item => item.saleCount]);
          } else if (this.filterType.rule == 2) {
            return _.sortBy(this.goodsList, [item => -item.saleCount]);
          } else {
            return this.goodsList;
          }
          break;
        case "price":
          if (this.filterType.rule == 1) {
            return _.sortBy(this.goodsList, [item => item.price]);
          } else if (this.filterType.rule == 2) {
            return _.sortBy(this.goodsList, [item => -item.price]);
          } else {
            return this.goodsList;
          }
          break;

        default:
          return this.goodsList;
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.sub-kind-main {
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
    background-color: #f9f9f9;
    font-size: 18px;
    color: #000;

    .icon {
      display: block;
      height: 20px;
      width: 20px;
      background: no-repeat center;
      background-size: cover;
      &.icon-goback {
        background-image: url("../../../assets/imgs/icons/arr-l.png");
      }
    }
    .cart-share {
      display: flex;

      .icon-search {
        background-image: url("../../../assets/imgs/icons/search.png");
        margin-right: 20px;
      }
      .icon-share {
        background-image: url("../../../assets/imgs/icons/cart.png");
      }
    }
  }
  .filter-bar {
    position: fixed;
    left: 0;
    top: 44px;

    display: flex;
    width: 100%;
    line-height: 44px;
    height: 44px;
    font-size: 14px;
    color: #010e0d;
    justify-content: space-around;
    background: #f9f9f9;
    font-weight: 600;
    .filter-item {
      &.sale-count,
      &.sale-price {
        .filter-arr {
          width: 10px;
          height: 14px;
          margin: 2px;
          vertical-align: text-bottom;
        }
      }
    }
  }
  .tags {
    width: 346px;

    margin: 20px auto;
    margin-top: 108px;
    .tag-list {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      .tag-item {
        padding: 6px 14px;
        background-color: #f9f9f9;
        color: #010e0d;
        font-size: 12px;
      }
    }
  }
  .subkind-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 346px;
    margin: 16px auto;
    .goods-block {
      max-width: 160px;
      margin-bottom: 16px;
      > p {
        font-size: 12px;
        color: #494949;
        text-align: center;
        line-height: 17px;
      }
      .goods-img {
        width: 130px;
        height: 130px;
        display: block;
        margin: 0 auto;
      }

      .price {
        font-size: 13px;
        color: #010e0d;
      }
    }
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
</style>

