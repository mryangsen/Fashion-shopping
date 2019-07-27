<template>
  <div class="login-main">
      <TopBar>登陆</TopBar>
      <img :src="require('@/assets/imgs/icons/logo.png')" alt="" class="logo">

      <form action="" class="form">
          <div class="item">
              <input type="text" placeholder="请输入账号或手机号">
          </div>
          <div class="item">
              <input type="password" placeholder="请输入密码">
          </div>
          <div class="reg-forget">
            <router-link :to="{name:'register'}">注册账号</router-link>
            <router-link :to="{name:'login'}">忘记密码</router-link>

          </div>
            <button class="submit" type="button">登陆</button>
      </form>

  </div>
</template>

<script>
import TopBar from '../coms/TopBar'
export default {
  name: 'Login.vue',
components:{
    TopBar
},
  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
    .login-main{
      .logo{
        width: 150px;
        height: 150px;
        display: block;
        margin: 100px auto;
        margin-bottom: 70px;
      }
      .form{
        width: 246px;
        margin: 0 auto;
        .item{
          display: flex;
          align-items: center;
          input{
            border: none;
            outline: none;
            width: 100%;
            height: 30px;
            border-bottom: .5px solid #BDBDBD;
            padding: 4px 2px;
          }
          .yan{
            width: 104px;
            outline: none;
            border: none;
            background-color: #1C4B47 ;
            border-radius: 4px;
            color: #fff;
            font-size: 12px;
            padding: 0 auto;
            height: 30px;
          }
        }
        .reg-forget{
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          >a{
            color: #494949;
          }
          
        }
        .submit{
          outline: none;
          border: none;
          width: 240px;
          height: 44px;
          background-color: #1C4B47;
          border-radius: 4px;
          font-size: 16px;
          color: #fff;
          line-height: 44px;
          text-align: center;
          margin-top: 40px;
        }
        
      }
    }
</style>
