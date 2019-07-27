<template>
    <div class="article-detail-main">
        <div class="header">
            <span class="icon icon-goback" @click="$router.go(-1);">

            </span>
            <span class="header-title">精选文章</span>
            <span class="icon icon-share">
            </span>
        </div>
        <div class="article">
            <p class="article-title">
                {{article.title}}
            </p>
            <p class="tags">
                {{article.tags.join(' | ')}}
            </p>
            <img v-lazy class="author-img" :src="article.authorImg" alt="">
            <p class="author">auth: {{article.author}}</p>
            <!-- 模拟富文本 -->
            <p class="article-p">
                {{article.p1}}
            </p>
            <img v-lazy :src="article.img1" alt="">
            <p class="article-p">
                {{article.p2}}
            </p>
            <img v-lazy :src="article.img2" alt="">
            <p class="article-p">
                {{article.p1}}
            </p>
        </div>
    </div>
</template>
<script>
import articleApi from '@/api/find/article'
export default {
    name: 'ArticleDetail',
    data(){
        return {
            id:'',
            article: {
                tags:[]
            }
        }
    },
    created(){
        //获取传递的id
        this.id = this.$route.params.id;
        this.getArticle()
    },
    methods:{
        getArticle(){
            articleApi.getArticle({id:this.id})
                .then(res=>{
                    this.article = res
                })
        }
    }
}
</script>
<style lang="scss" scoped>
    .article-detail-main{
        .header{
            position: fixed;
            left: 0;
            top: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 44px;
            padding: 0 16px;
            box-sizing: border-box;
            background-color: #fff;
            .icon{
                display: block;
                height: 20px;
                width: 20px;
                background: no-repeat center;
                background-size: cover;
                &.icon-goback{
                    background-image: url('../../../assets/imgs/icons/arr-l.png');
                }
                &.icon-share{
                    background-image: url('../../../assets/imgs/icons/share.png');
                }
            }
            .header-title{
                font-size: 18px;
                color: #010E0D;
                line-height: 44px;
            }
        }
        .article{
            margin-top: 60px;
            .article-title{
                font-size: 18px;
                color: #010E0D;
                text-align: center;
                line-height: 26px;
                letter-spacing: 0.3px;
                margin-top: 20px;
            }
            .author-img{
                width: 186px;
                height: 186px;
                margin-top: 14px;
            }
            .author{
                font-size: 12px;
                color: #999;
                line-height: 20px;
                text-align: center;
                text-indent: 100px;
                margin-top: 10px;
            }
            .tags{
                font-size: 12px;
                color: #999999;
                line-height: 18px;
            }
            .article-p{
                font-size: 16px;
                color: #555;
                line-height: 20px;
                margin: 10px;
            }
        }
    }
</style>


