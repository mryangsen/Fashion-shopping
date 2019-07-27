import Mock from 'mockjs'
const Random  = Mock.Random
var list = (function goodsCollList(){
    var list = []
    for(var i = 0 ; i < 10 ; i ++){
        list.push({
            id: Random.guid(),
            img: Random.image('80x80',Random.color()),
            desc: Random.ctitle(15,35),
            saveCount: Random.integer(200,1500),
            price: Random.integer(200,999)
        })
    }
    return list
})()
function getGoodsCollList(){
    return new Promise((resolve,reject)=>{
        resolve(list)
    })
}




export default {
    getGoodsCollList
}