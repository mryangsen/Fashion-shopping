import orderMock from '@/mock/order/order.js'
function getOrderList(data){
    return new Promise((resolve,reject)=>{
        resolve(orderMock.orderListByType(data.status))
    })
}



function getOrderDetailById(data){
    return new Promise((resolve,reject)=>{
        resolve(orderMock.getOrderDetailById(data.id))
    })
}
export default {
    getOrderList,
    getOrderDetailById
    
}