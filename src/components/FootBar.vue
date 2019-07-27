<template>
    <div class="foot-bar-main">
        <router-link class="foot-bar-link home" to="/home">
            <span class="text">首页</span></router-link>
        <router-link class="foot-bar-link kind" to="/kind">
            <span class="text">分类</span></router-link>
        <router-link class="foot-bar-link find" to="/find">
            <span class="text">发现</span></router-link>
        <router-link class="foot-bar-link main" to="/main">
            <span class="text">我的</span></router-link>
    </div>
</template>
<script>
export default {
    name: 'FootBar',
    data(){
        return{
            
        }
    }


}
</script>
<style lang="scss" scoped>

    .foot-bar-main{
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 83px;
        background: #fff;
        z-index: 999;
        flex-flow: row nowrap;
        // box-shadow: 0 -2px 4px 0 rgba(0,0,0,.5);
        .foot-bar-link{
            height: 100%;
            flex-grow: 1;
            background-repeat: no-repeat;
            background-size: 30px 30px;
            background-position: center 12px;
            text-decoration: none;
            .text{
                display: block;
                margin-top: 50px;
                color: #999;
            }
            &.router-link-active .text{
                color: #1C4B47;
            }
            &.home{
                background-image: url('../assets/imgs/icons/home.png');
            }
            &.router-link-active.home{
                background-image: url('../assets/imgs/icons/home-active.png');
            } 
            &.kind{
                background-image: url('../assets/imgs/icons/kind.png');
            }
            &.router-link-active.kind{
                background-image: url('../assets/imgs/icons/kind-active.png');
            } 
            &.find{
                background-image: url('../assets/imgs/icons/find.png');
            }
            &.router-link-active.find{
                background-image: url('../assets/imgs/icons/find-active.png');
            } 
            &.main{
                background-image: url('../assets/imgs/icons/main.png');
            }
            &.router-link-active.main{
                background-image: url('../assets/imgs/icons/main-active.png');
            } 
        }

    }
    
</style>

