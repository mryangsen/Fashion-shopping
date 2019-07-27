<template>
    <div class="home-main">
        <div class="header-bar">
            <router-link :to="{name:'search'}" class="search">

            </router-link>
            <p class="title">
                ZAOWU 造物
            </p>
            <a @click="handleKf" href="javascript:;" class="chat">

            </a>
            <router-link :to="{name:'cart'}" class="cart">
                
            </router-link>
        </div>
        <div class="swiper-section">
            <div class="swiper-title">
                <a @click="handleChangeImgs(imgs1,'title1')"  href="javascript:;" class="swiper-title-link" :class="{active:titlesActive=='title1'}">推荐</a>
                <a @click="handleChangeImgs(imgs2,'title2')" href="javascript:;" class="swiper-title-link" :class="{active:titlesActive=='title2'}">活动</a>
                <a href="javascript:;" class="swiper-title-link">品牌</a>
                <a href="javascript:;" class="swiper-title-link">定制</a>
            </div>
            <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <!-- slides -->
                <swiper-slide v-for="(m,index) in imgs" :key="index">
                    <img :src="m.url" alt="">
                </swiper-slide>
            </swiper>
        </div>

        <div class="section">
            <div class="section-common-title">
                <p class="etitle">TUE 9.20</p>
                <p class="ctitle">周二品质生活专题</p>
            </div>
            <a class="img-link1" href="javascript:;">
                <img :src="require('@assets/imgs/home/bg1.png')" alt="">
            </a>
            <div class="goods-list">
                <a class="goods-item" href="javascript:;" v-for="g in goodsList" :key="g.name">
                    <img class="goods-img" :src="g.url" alt="">
                    <p class="goods-name">{{g.name}}</p>
                    <p class="goods-price">¥ {{g.price}}</p>
                </a>
            </div>
        </div>
         <div class="section">
            <div class="section-common-title">
                <p class="etitle">MON 9.20</p>
                <p class="ctitle">周一品质生活专题</p>
            </div>
            <monday-goods style="monday-goods"></monday-goods>
        </div>
        <p v-show="sorryShow" class="sorry">
      <img class="icon" :src="require('@/assets/imgs/icons/sorry.png')" alt>
      <span>暂未开通客服!</span>
    </p>
    </div>
    
</template>
<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MondayGoods from './components/MondayGoods'
export default {
    name: 'Home',
    components:{
        swiper,
        swiperSlide,
        MondayGoods
    },
    data() {
      return {
           sorryShow:false,
          titlesActive:'title1',
          imgs:[
              {
                  url:require('@assets/imgs/home/swiper-1.png')
              },
              {
                  url:require('@/assets/imgs/home/swiper-2.png')
              },
              {
                  url:require('@/assets/imgs/home/swiper-3.png')
              }

          ],
          imgs1:[
              {
                  url:require('@/assets/imgs/home/swiper-1.png')
              },
              {
                  url:require('@/assets/imgs/home/swiper-2.png')
              },
              {
                  url:require('@/assets/imgs/home/swiper-3.png')
              }

          ],
          imgs2:[
              
              {
                  url:require('@/assets/imgs/home/swiper-3.png')
              }

          ],
          goodsList:[
              {
                  url:require('@/assets/imgs/home/goods1.png'),
                  name: '精油香氛',
                  price: 344
              },
              {
                  url:require('@/assets/imgs/home/goods2.png'),
                  name: '山居猎奇',
                  price: 344
              },
              {
                  url:require('@/assets/imgs/home/goods3.png'),
                  name: '北欧国度',
                  price: 344
              },
              {
                  url:require('@/assets/imgs/home/goods4.png'),
                  name: '卡洛卡陶瓷碗盘',
                  price: 344
              },

          ],
            swiperOption: {
                slidesPerView: 1.2,
                centeredSlides: true,
            }
      }
    },
    methods:{
        callback(){
        },
        handleChangeImgs(imgs,title){
            this.imgs = imgs;
            this.titlesActive = title;
        },
        handleKf(){
          this.sorryShow = true;
          setTimeout(()=>{
              this.sorryShow = false;
          },2000)
      }
    }


}
</script>
<style lang="scss" scoped>
    .header-bar{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        background-color: #f5f5f5;
        z-index: 999;
        .search,.chat,.cart{
            position: absolute;
            left: 16px;
            top: 10px;
            width: 20px;
            height: 20px;
            background: url(../../assets/imgs/icons/search.png) no-repeat center;
            background-size: cover;
        }
        .title{
            font-size: 20px;
            color: #000;
            line-height: 40px;
            text-align: center;
            margin: 0 auto;
        }
        .chat{
            left: auto;
            right: 60px;
            background-image: url(../../assets/imgs/icons/chat.png);
        }
        .cart{
            left: auto;
            right: 20px;
            background-image: url(../../assets/imgs/icons/cart.png);
        }
    }
    .swiper-section{
        margin-top: 40px;
        width: 100%;
        height: 390px;
        overflow: hidden;
        .swiper-title{
            width: 100%;
            font-size: 15px;
            .swiper-title-link{
                color: #010E0D;
                text-decoration: none;
                padding: 0 16px;
                border-right: 1px solid #f5f5f5;
                &:last-child{
                    border-right: none;
                }
                &.active {
                    color: #3a817b;
                }
            }
            margin: 20px auto;
        }
        .swiper{
            width: 100%;
            height: 100%;
        }
    }
    .section {
        width: 342px;
        margin: 0 auto;
        padding-top: 18px;
        .section-common-title{
            width: 100%;
            color: #010E0D;
            .etitle{
                font-size: 20px;
                line-height: 28px;
            }
            .ctitle{
                font-size: 12px;
                line-height: 20px;
                color: #494949;
            }
        }
        .img-link1{
            display: block;
            width: 342px;
            margin: 10px auto;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        .goods-list{
            display: flex;
            justify-content: space-between;
            .goods-item{
                
                p{
                    font-size: 12px;
                    color: #494949;
                    line-height: 14px;
                }
            }
        }
       
    }
    .monday-goods{
        width: 100%;
        height: 500px;
        margin-top: 200px;
        background-color: pink;
    }
    .sorry{
      display: flex;
      width: 140px;
      background-color: #e5e5e5;
      border:1px solid #e9e9e9;
      border-radius: 6px;
      position: fixed;
      left: 50%;
      margin-left: -70px;
      top: 300px;
      align-items: center;
      justify-content: center;
      .icon{
          width: 36px;
          height: 36px;
      }
      z-index: 1000;
  }
</style>


