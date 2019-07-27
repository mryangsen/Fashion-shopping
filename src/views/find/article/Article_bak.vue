<template>
    <div class="article-main">
        <div v-for="(article,index) in articles" :key="article.id" :style="{transform:'translateY('+(articles.length-index-1)*50+'px) translateZ(-'+index*100+'px)',zIndex:(articles.length-index)}" class="article">
            <h2  @click="changeItem(index)" class="article-title">{{article.title}}</h2>
            <router-link :to="{name:'articleDetail',params:{id:article.id}}">跳转到{{article.id}}</router-link>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'Article',
    data(){
        return{
            articles:[
                {
                    id: 1,
                    title:'文章1'
                },
                {
                    id: 2,
                    title:'文章2'
                },
                {
                    id: 3,
                    title:'文章3'
                },
                {
                    id: 4,
                    title:'文章4'
                },
                {
                    id: 5,
                    title:'文章5'
                },
                {
                    id: 6,
                    title:'文章6'
                },
            ]
        }

    },
    methods:{
        changeItem(n){
            console.log(n);
            // this.articles.unshift(this.articles.splice(n,1)[0]);
            if(n!=0){
                var temp = this.articles[n];
                this.$set(this.articles,n,this.articles[0]);
                this.$set(this.articles,0,temp);
                console.log(this.articles[0])
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .article-main{
        position: relative;
        width: 100%;
        // min-height: 667px;
        height: 100vh;
        perspective: 1000px;
        perspective-origin: center 0;
        background-color: #1C4B47;
        overflow: hidden;
        .article{
            position: absolute;
            left: 50%;
            top: 0;
            width: 360px;
            margin-left: -180px;
            height: 500px;
            background-color: #fff;
            .article-title{
                font-size: 20px;
                text-align: center;
                line-height: 40px;
                background-color: aquamarine;
            }
            margin-bottom: 50px;
        }
    }
   
</style>

