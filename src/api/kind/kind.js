import mock from 'mockjs'
import kindMock from '@/mock/kind/kind'
const Random  = mock.Random;

function getSubKindList(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(kindMock.subKindList())
        },200)
    })
}
function getComments(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(kindMock.comments())
        },200)

    })
}
//api  根据商品id 获取商品库存明细
function getGoodsStockById(id){
    var stock = {
        id,
        brand: Random.title(1),
        title: Random.ctitle(5),
        price: Random.integer(60,200),
        stock: Random.integer(5,20),
        img: Random.image('80x80',Random.color())
    }

    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(stock)
        },200)
    })
}

export default {
    getSubKindList,
    getComments,
    getGoodsStockById
    
}