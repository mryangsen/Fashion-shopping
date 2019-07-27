<template>
    <div class="goods-main">
        <h1>好物推荐</h1>
        <router-link :to="{name:'findGoodsDetail',params:{id:g.id}}" tag="div"  class="goods-block"  v-for="g in goodsList" :key="g.id">
            <img :src="g.cover" v-lazy alt="">
            <p class="tag-text">
                {{g.tag1}} | {{g.tag2}}
            </p>
            <p class="desc-text">
                {{g.desc}}
            </p>
        </router-link>
    </div>
</template>
<script>
import GoodsApi from '@/api/find/goods'
export default {
    name: 'FindGoods',
    data(){
        return {
            goodsList: []
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            GoodsApi.getGoodsList()
                .then(res=>{
                    this.goodsList = res;
                })
        }
    }
}
</script>
<style scoped lang="scss">
    .goods-main{
        background-color: #fff;
        .goods-block{
            width: 100%;
            margin: 14px auto;
            .tag-text{
                font-size: 16px;
                color: #010E0D;
                line-height: 22px;
                margin-top: 10px;
                text-align: center;
            }
            .desc-text{
                font-size: 12px;
                color: #494949;
                text-align: center;
                line-height: 18px;
            }
        }
    }
</style>

