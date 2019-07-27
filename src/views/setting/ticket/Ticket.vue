<template>
  <div class="ticket-main">
    <TopBar bgc="#fff">我的优惠券</TopBar>
    <div class="section">
        <p class="msg">您没有可用的优惠券</p>
    </div>
  </div>
</template>

<script>
import TopBar from '../coms/TopBar'
export default {
  name: 'Ticket',
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
    .ticket-main{
        .msg{
            margin-top: 120px;
            text-align: center;
        }
    }
</style>
