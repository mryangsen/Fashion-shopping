<template>
    <div class="kind-block">
        <img @click="toggleSubKind" class="kind-img-block" :src="kind.img" alt="">
        <transition name="slide">
        <ul v-show="active == id" class="sub-kinds">
            <router-link class="kind-item"   tag="li" :to="{name:'subKind',params:{subKindId:sk.id}}" v-for="sk in kind.subKinds" :key="sk.id">
                <span>{{sk.cname}}</span>
                <!-- <span hidden>{{sk.id}}</span> -->
                <span>></span>
            </router-link>
        </ul>
        </transition>
        
    </div>
</template>
<script>
export default {
    props:{
        kind:Object,
        active:Number,
        id:Number
    },
    methods:{
        toggleSubKind(){
            if(this.active == this.id){
                this.$emit('update:active',-1)
            }else{
                this.$emit('update:active',this.id)
            }
                
            
            
        }
    }
}
</script>
<style scoped lang="scss">
    .kind-block{
        position: relative;
        padding: 20px;
        border-radius: 4px;
        box-sizing: border-box;
        .kind-img-block{
            height: 120px;
            width: 100%;
            background-color: #F4F4F4;
        }
        .sub-kinds{
            width: 100%;
            .kind-item{
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: 36px;
                border-bottom: 1px solid #e5e5e5;
                font-size: 16px;
                >span{
                    line-height: 36px;
                }
            }
        }
    }
    .slide-enter-active,
    .slide-leave-active{
        transition: all ease .4s;
    }
    .slide-enter,
    .slide-leave-to{
        opacity: 0;
    }

</style>


