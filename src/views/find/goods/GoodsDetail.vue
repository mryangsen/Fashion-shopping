<template>
  <div class="goods-detail-main">
    <div class="header">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title">好物推荐</span>
      <span class="icon icon-share"></span>
    </div>
    <div class="goods-list" v-for="g in goodsDetailList" :key="g.id">
      <div class="goods-block">
        <p class="title">{{g.title}}</p>
        <p class="desc">{{g.desc}}</p>
        <img class="img" v-lazy :src="g.img" alt>
        <div class="other">
          <span class="price">{{g.price}}.00</span>
          <div class="like-link">
            <span class="like">{{g.like}}人喜欢</span>
            <router-link tag="span" :to="{name:'goodsDetail',params:{id:g.id}}" class="link">检查详情</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import goodsApi from "@/api/find/goods";
export default {
  name: "goodsDetail",
  data() {
    return {
      id: "",
      goodsDetailList: {}
    };
  },
  created() {
    //获取传递的id
    this.id = this.$route.params.id;
    this.getgoods();
  },
  methods: {
    getgoods() {
      goodsApi.getGoodsDetailList({ id: this.id }).then(res => {
        this.goodsDetailList = res;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.goods-detail-main {
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
    background-color: #fff;
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
        background-image: url("../../../assets/imgs/icons/share.png");
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
    margin: 60px auto;
    .goods-block {
      width: 100%;
      .title {
        font-size: 14px;
        color: #010e0d;
        line-height: 20px;
        margin: 14px auto;
        font-weight: 600;
      }
      .desc {
        font-size: 14px;
        color: #1f1f1f;
        line-height: 20px;
      }

      .img {
        width: 100%;
        height: 258px;
        margin: 14px auto;
      }
      .other{
          display: flex;
          justify-content: space-between;
          .price{
              background: url('../../../assets/imgs/icons/money.png') no-repeat 0 5px;
              background-size: 12px 12px;
              text-indent: 14px;
              line-height: 22px;
          }
          .like-link{
              display: flex;
              .like{
                  background: url('../../../assets/imgs/icons/like.png') no-repeat 0 5px;
                    background-size: 12px 12px;
                    text-indent: 14px;
                    margin-right: 20px;
                    line-height: 22px;
              }
              .link{
                  display: block;
                  border: 1px solid #979797;
                    border-radius: 8px;
                    padding: 4px;
              }
          }
      }
    }
  }
}
</style>


