import articeMock from '@/mock/find/article'
function getArticleList(){
    return new Promise((resolve,reject)=>{
        resolve(articeMock.articleList())
    })
}
function getArticle(){
    return new Promise((resolve,reject)=>{
        resolve(articeMock.article())
    })
}
function getGoodsDetailList(){
    return new Promise((resolve,reject)=>{
        resolve(articeMock.goodsDetailList())
    })
}

export default {
    getArticleList,
    getArticle,
    getGoodsDetailList
}