<template>
    <div class="about-main">
      <TopBar bgc="#fff">关于造物</TopBar>
      <div class="logo">
          <img class="logo-img" :src="require('@/assets/imgs/icons/logo.png')" alt="">
          <p class="version">造物1.1.01</p>
      </div>
      <ul class="list">
          <li class="item">
              <span>隐私声明</span>
              <img class="icon" :src="require('@/assets/imgs/icons/arr-r-1.png')" alt="">
          </li>
          <li class="item">
              <span>官方网站</span>
              <img class="icon" :src="require('@/assets/imgs/icons/arr-r-1.png')" alt="">
          </li>
          <li class="item">
              <span>版本更新</span>
              <img class="icon" :src="require('@/assets/imgs/icons/arr-r-1.png')" alt="">
          </li>
          <li class="item">
              <span>分享App</span>
              <img class="icon" :src="require('@/assets/imgs/icons/arr-r-1.png')" alt="">
          </li>
      </ul>
    </div>
</template>

<script>
import TopBar from "../coms/TopBar";
export default {
  name: "About",
  components: {
    TopBar
  },
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang='scss'>
    body{
        background-color: #F9F9F9;
        height: 0;
    }
</style>

<style lang='scss' scoped>
    .about-main{
        .logo{
            margin: 80px auto;
            text-align: center;
            .logo-img{
                width: 68px;
                height: 68px;
            }
            .version{
                text-align: center;
                font-size: 12px;
                color: #999;
                line-height: 20px;
            }
        }
        .list{
            .item{
                width: 100%;
                height: 42px;
                background-color: #fff;
                border-bottom: 1px solid #e5e5e5;
                display: flex;
                justify-content: space-between;
                padding: 0 20px;
                align-items: center;
                box-sizing: border-box;
                .icon{
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
</style>
