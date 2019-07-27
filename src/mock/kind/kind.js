import Mock from 'mockjs'
const Random  = Mock.Random


function subKindList(){
    var list = []
    for(var i = 0 ; i <12 ; i ++){
        list.push({
            id: Random.uuid(),
            brand: Random.title(1),
            title: Random.ctitle(),
            price:  Random.integer(100,999),
            saleCount: Random.integer(100,999),
            img: Random.image('130x130',Random.color()),
        })
    }

    var nowData = [
        {
            img: require('@/assets/imgs/kind/detail1.png'),
            barnd: 'NEIWAI',
            title: 'Cozy女士家居服莫代尔'
        },
        {
            img: require('@/assets/imgs/kind/detail2.png'),
            barnd: 'TRIUMPU',
            title: '文胸内裤套装'
        },
        {
            img: require('@/assets/imgs/kind/detail3.png'),
            barnd: 'ESSENCE',
            title: '女士Cozy圆领吊带性感'
        },
        {
            img: require('@/assets/imgs/kind/detail4.png'),
            barnd: 'LAPERLA',
            title: '女士Bra-top蕾丝美背无'
        },
        {
            img: require('@/assets/imgs/kind/detail5.png'),
            barnd: 'CRYSTALS',
            title: '零敏洛丽无钢圈内衣'
        },
        {
            img: require('@/assets/imgs/kind/detail6.png'),
            barnd: 'JUDYHUA',
            title: '女士高端网纱交叠无钢'
        }
    ]
    for(var i = 0 ;i < nowData.length ; i ++){
        Object.assign(list[i],nowData[i]);
    }
    return list
}

function comments(){
    var list = []
    for(var i = 0 ;i < 10 ; i ++){
        list.push({
            id: Random.guid(),
            username: Random.name(),
            date: Random.date(),
            content: Random.cparagraph(),
            avatar: Random.image('40x40',Random.color(),Random.cfirst())
        })
    }
    return list
}

function goodsSKU(){
    var goods = {};
    
}
export default{
    subKindList,
    comments
}