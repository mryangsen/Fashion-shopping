<template>
  <div class="logistics-main">
    <div class="header">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title">发表评价</span>
      <span class="icon icon-share"></span>
    </div>
    <div class="star-section">
        <img :src="require('@/assets/imgs/main/order2.png')" alt="" class="img">
        <p class="star">
            商品评分:
            <template v-for="n in 5">
                <img @click="star=n" class="icon-star" v-if="n<=star" :key="n" :src="require('@/assets/imgs/icons/star-active.png')" alt="">
                <img @click="star=n" class="icon-star" v-else  :key="n+'_'" :src="require('@/assets/imgs/icons/star.png')" alt="">
            </template>
        </p>
    </div>
    <textarea class="score-area" placeholder="请输入您的评价信息" cols="30" rows="8"></textarea>
    <button class="submit" @click="$router.go(-1);">提交</button>
  </div>

</template>
<script>
export default {
  name: "logistics",
  data(){
      return {
          star:5
      }
  },
  
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

  .star-section{
      width: 346px;
      margin: 80px auto;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
    
      .img{
          width: 52px;
          height: 52px;
      }
      .star{
          margin-left: 20px;
          font-size: 16px;
          .icon-star{
              width: 18px;
              height: 18px;
             vertical-align: text-bottom;
          }
      }
  }

  .score-area{
      outline: none;
      width: 346px;
      margin: 0 auto;
      background: #F9F9F9;
    border-radius: 4px;
    border: none;
     &::-webkit-input-placeholder{
        color: #999;
        font-size: 14px;
    }
  }

  .submit{
      width: 186px;
      height: 44px;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      line-height: 44px;
      outline: none;
      border: none;
      margin-top: 60px;;
      background: #1C4B47;
  }
  
}
</style>


