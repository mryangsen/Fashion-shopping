import goodsMock from '@/mock/find/goods'
function getGoodsList(){
    return new Promise((resolve,reject)=>{
        resolve(goodsMock.goodsList())
    })
}
function getGoodsDetailList(){
    return new Promise((resolve,reject)=>{
        resolve(goodsMock.goodsDetailList())
    })
}

export default {
    getGoodsList,
    getGoodsDetailList
    
}