import Mock from 'mockjs'
const Random  = Mock.Random



function goodsList(){
    var list = []
    for(var i = 0 ; i <10 ; i ++){
        list.push({
            id: Random.uuid(),
            tag1: Random.title(2),
            tag2: Random.ctitle(5,7),
            desc: Random.ctitle(10,20),
            cover: Random.image('364x160',Random.color()),
        })
    }
    Object.assign(list[0],{
        tag1: 'NEIWAI2019秋冬',
        tag2: '针织新品优惠',
        desc: '和Jennifer领略NEIWAI，感受自潮不熄',
        cover: require('@/assets/imgs/find/good1.png')
    })
    Object.assign(list[1],{
        tag1: 'Paola Paronetto',
        tag2: '手作摆件艺术',
        desc: '这个开启丹麦设计新时代的品牌值得Pick',
        cover: require('@/assets/imgs/find/good2.png')
    })
    Object.assign(list[2],{
        tag1: 'hot wind',
        tag2: '热风',
        desc: '新时代的弄潮儿',
        cover: require('@/assets/imgs/find/good3.png')
    })

    return list
}

function goodsDetailList(){
    var list = [];
    for(var i = 0 ;i < 10 ; i ++){
        list.push({
            id: Random.guid(),
            title: Random.ctitle(15,20),
            desc: Random.cparagraph(),
            img: Random.image('346x258',Random.color()),
            price: Random.integer(200,1000),
            like: Random.integer(200,1000)
        })
    }
    list[0].img = require('@/assets/imgs/find/item2.png');
    list[0].title = 'Foundation无缝吊带＆In Bed睡裤与睡袍';
    list[0].desc = '一套舒适的家居服，是我们缓解疲劳与想家情绪的最佳良品。直筒罗纹睡裤，蓬松柔软，搭配同色系的无';
    return list;
}

export default{
    goodsList,
    goodsDetailList
}