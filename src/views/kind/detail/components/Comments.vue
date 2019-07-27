<template>
    <div class="comments-main">
        <div class="comment-block" v-for="cmt in comments" :key="cmt.id">
            <img class="avatar" :src="cmt.avatar" alt="">
            <div class="cmt-info">
                <p class="username">{{cmt.username}}</p>
                <p class="date">{{cmt.date}}</p>
                <p class="content">{{cmt.content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import kindApi from '@/api/kind/kind.js'
export default {
    name: 'Comments',
    data(){
        return {
            comments: []
        }
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            kindApi.getComments()
                .then(res=>{
                    console.log(res)
                    this.comments = res
                })
        }
    }
}
</script>
<style lang="scss" scoped>
    .comment-block{
        width: 346px;
        overflow: hidden;
        border-bottom: 1px solid #f5f5f5;
        margin: 20px auto;
        .avatar{
            float: left;
            width: 44px;
            height: 44px;
            border-radius: 50%;
        }
        .cmt-info{
            width: 280px;
            float: left;
            box-sizing: border-box;
            padding: 20px auto;
            text-align: left;
            margin-left: 20px;
            
            .username{
                font-size: 16px;
                line-height: 20px;
            }
            .date{
                font-size: 14px;
                color: #999;
                line-height: 20px;
            }
            .content{
                font-size: 12px;
                color: #999;
                line-height: 20px;
                margin: 10px auto;
                letter-spacing: .2em;
            }
        }
    }
</style>


