<template>
    <div class="monday-goods-main">
        <div class="img-gallery">
            <div class="img-vertical-item" v-for="m in imgsCom" :key="m.url">
                <img class="img-item" :src="m[0].url" alt="">
                <img v-if="m[1]" class="img-item" :src="m[1].url" alt="">
    
            </div>    
        </div>
    </div>
</template>

<script>
import imgsMixin from './data.js'
import { setInterval } from 'timers';
export default {
    name: 'MondayGoods',
    components:{
       
    },
    mixins:[imgsMixin],
    data() {
      return {
        
      }
    },
    methods:{
        callback(){
        }
    },
    computed:{
        imgsCom(){
            return this.imgs.reduce((a,b,index)=>{
                var n = Math.floor(index/2);
                if(!a[n]){
                    a[n] = []
                }
                a[n].push(b);
                return a;
            },[])
        }
    },
    directives:{
        gallery(el,binding){
            var step = -1;
            setInterval(()=>{
                var leader = el.offsetLeft;
                leader += step;
                el.style.left =  leader + 'px';
                if(Math.abs(leader)==el.parentNode.offsetWidth){
                     el.style.left = 0;
                 }
            },17)
        }
    }

}
</script>

<style lang="scss" scoped>
    .monday-goods-main{
        margin-top: 10px;
        position: relative;
        width: 100%;
        .img-gallery{
            white-space:nowrap;
            width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 10px auto;
           .img-vertical-item{
               display: inline-block;
               width: 79px;
               height: 170px;
               margin-right: 10px;
               .img-item{
                   display: block;
                   width: 100%;
                   margin-bottom: 10px;
               }
           }
        }
        
    }
    
</style>
