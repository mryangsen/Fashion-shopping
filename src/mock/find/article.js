import Mock from 'mockjs'
const Random  = Mock.Random

function articleList(){
    var list = []
    for(var i = 0 ; i <10 ; i ++){
        list.push({
            id: Random.uuid(),
            title: Random.ctitle(),
            author: Random.cname(),
            pubTime: Random.date(),
            summary: Random.cparagraph(1),
            cover: Random.image('375x200',Random.color()),
            // cover: 'https://api.dujin.org/pic/?ts='+Random.integer(),
            zanCount: Random.integer(0,30),
            viewCount: Random.integer(10,100),
            commentCount: Random.integer(0,6)
        })
    }
    return list
}

function article(){
    var list = []
    // 随机生成2个 2选一
    for(var i = 0 ; i < 2 ; i++){
        list.push({
            id: Random.guid(),
            title: Random.ctitle(5,8),
            author: Random.cname(),
            authorImg: Random.image('186x186',Random.color()),
            p1: Random.cparagraph(1,3),
            img1: Random.image('346x160',Random.color()),
            p2: Random.cparagraph(1,3),
            img2: Random.image('346x160',Random.color()),
            p3: Random.cparagraph(),
            tags: [Random.ctitle(2),Random.ctitle(2),Random.ctitle(2)]
        })
    }
    Object.assign(list[0],{
        title: '一起来观看 Wes Anderson的色彩回旋舞',
        author: '李逵松',
        tags: ['对称','色彩','构图'],
        authorImg: require('@/assets/imgs/find/author.png'),
        img1: require('@/assets/imgs/find/homes.png'),
    })
    return list[Random.integer(0,1)];
}

export default{
    articleList,
    article
}