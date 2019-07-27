<template>
  <div class="account-main">
      <TopBar>账户安全</TopBar>
      <ul class="setting-list">
          <li class="item" v-for="item in list" :key="item">
              <span class="text">
                  {{item.name}}
              </span>
              <span class="arr">
                  <font class="text">{{item.info}}</font>
                  <img class="icon" :src="require('@/assets/imgs/icons/arr-r-1.png')" alt="">
              </span>
          </li>
      </ul>
        <button class="submit" @click="$router.go(-1);">提交</button>

  </div>
</template>

<script>
import TopBar from '../coms/TopBar'
export default {
  name: 'Account.vue',
    components:{
        TopBar
    },
  data () {
    return {
        list:[
            {
                name: '个人资料'
            },
            {
                name: '修改绑定手机',
                info: '123424234'
            },
            {
                name: '设置登陆密码'
            },
            {
                name: '微信账号'
            },
            {
                name: 'QQ账号'
            },
            {
                name: '支付绑定'
            },
        ]
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
    .account-main{
        background-color: #fff;
        .setting-list{
            margin-top: 44px;
            .item{
                border-top: 1px solid #e5e5e5;
                color: #494949;
                font-size: 16px;
                display: flex;
                padding: 0 16px;
                justify-content: space-between;
                align-items: center;
                height: 60px;
                .arr{
                    display: flex;
                    align-items: center;
                    .icon{
                        width: 20px;
                        height: 20px;
                        margin-left: 10px;
                    }
                }
                &:last-child{
                    border-bottom: 1px solid #e5e5e5;
                }
            }
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
</style>
