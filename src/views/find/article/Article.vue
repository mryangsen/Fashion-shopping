<template>
  <div class="article-main">
    <router-link tag="div" :to="{name:'articleDetail',params:{id:art.id}}" class="article-block" v-for="art in articles" :key="art.id">
      <p class="title">{{art.title}}</p>
      <p class="author-pubTime">{{art.pubTime}} </p>
      <div class="summar">{{art.summary}}</div>
      <img v-lazy class="cover" :src="art.cover" alt>
      <div class="some-count">
          <span class="view-count">
              <img class="icon icon-view" :src="require('@/assets/imgs/icons/view-count.png')" alt="">{{art.viewCount}}</span>
          <div class="zan-comment-count">
              <span class="zan-count">
                  <img class="icon icon-zan" :src="require('@/assets/imgs/icons/zan-count.png')" alt="">{{art.zanCount}}
              </span>
              <span class="comment-count">
                  <img class="icon icon-comment" :src="require('@/assets/imgs/icons/comment-count.png')" alt="">
                  {{art.commentCount}}
              </span>
          </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import ArticleApi from "@/api/find/article";
export default {
  name: "Article",
  data() {
    return {
      articles: []
    };
  },
  created() {
    ArticleApi.getArticleList().then(res => {
      this.articles = res;
    });
  },
  methods: {},
  directives:{
      // lazy(el,binding){
      //     var img = new Image();
      //     img.src = el.src;
      //     var imgBg = require('@/assets/imgs/icons/img-bg.png');
      //     el.src = imgBg;
      //     img.onload = function(){
      //         el.src = this.src;
      //     }
      //     // console.log(el)
      // }
  }
};
</script>
<style scoped lang="scss">
.article-main {
    margin-top: 50px;
  .article-block {
    margin: 20px auto;
    padding-top: 20px;
    width: 342px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
    .title {
      font-size: 18px;
      line-height: 20px;
       text-align: left;
       font-weight: 600;
    }
    .author-pubTime {
      font-size: 16px;
      line-height: 30px;
      color: #666;
      text-align: left;
    }
    .summar{
        font-size: 16px;
        text-align: left;
        line-height: 30px;
    }
    .cover {
      width: 100%;
      height: 200px;
      margin: 10px auto;
    }
    .some-count{
        display: flex;
        justify-content: space-between;
        .icon{
            width: 16px;
            vertical-align: text-bottom;
            margin-right: 6px;
            &.view-count{
                vertical-align: middle;
            }
        }
        span{
            margin-right: 10px;
        }
    }
  }
}
</style>

