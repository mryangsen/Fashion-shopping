import Mock from 'mockjs'
const Random  = Mock.Random

const orderList = []
orderList.push({
    orderId: Random.guid().substr(0,7),
    img: require('@/assets/imgs/main/order1.png'),
    brand:'ESSENCE',
    title: '女士Cozy圆领吊带性感睡衣',
    price: 219,
    count: 1,
    status: 2
})
orderList.push({
    orderId: Random.guid().substr(0,7),
    img: require('@/assets/imgs/main/order2.png'),
    brand:'LAPERLA',
    title: '女士Bra-top蕾丝美背无钢圈',
    price: 159,
    count: 1,
    status: 1
})
orderList.push({
    orderId: Random.guid().substr(0,7),
    img: require('@/assets/imgs/main/order3.png'),
    brand:'JUDYHUA',
    title: '女士高端网纱无钢圈文胸',
    price: 339,
    count: 1,
    status: 3
})
/**
 * 根据类型获取order列表
 * 0 全部  1 待付款  2 已发货  3已完成
 */
function orderListByType(status){
    if(orderList.langth>3) return orderList;
    for(var i = 0 ; i < 8 ; i++){
        orderList.push({
            brand: Random.title(1),
            title: Random.ctitle(8,12),
            price: Random.integer(100,400),
            count: Random.integer(1,4),
            orderId: Random.guid().substr(0,7),
            status: Random.integer(0,3),
            img: Random.image('76x76',Random.color())
        })
    }
    
    return orderList
   
}

function getOrderDetailById(id){
    return orderList.find(item=>item.orderId==id);
}




export default{
    orderListByType,
    getOrderDetailById
}