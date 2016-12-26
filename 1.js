/*
var reg=/ +/g
var str='睡衣冬 保暖内衣 内裤女 内裤男 长袖睡衣 珊瑚绒睡衣 夹棉睡衣 裤袜 长筒袜 棉袜 情侣睡衣 秋裤 保暖背心 睡袍 男士睡衣 无钢圈文胸 塑身衣 内衣套装 文胸套装 打底裤 连体睡衣 睡裙女冬 聚拢文胸 男士袜子 棉袜女 卡通睡衣'
var b='<a href="">新品</a><a href="">穿搭指南</a><a href="">设计款</a><a href="">线下大牌</a><a href="">品质优选</a><a href="">外套</a><a href="">衬衫</a><a href="">夹克</a><a href="">卫衣</a><a href="">皮衣</a><a href="">T恤</a><a href="">套装</a><a href="">针织衫</a><a href="">毛衣</a><a href="">羽绒服</a><a href="">风衣</a><a href="">棒球服</a><a href="">运动外套</a><a href="">呢大衣</a><a href="">西装</a><a href="">开衫</a><a href="">棉衣</a><a href="">马甲</a><a href="">情侣装</a><a href="">大码</a><a href="">中老年</a><a href="">休闲裤</a><a href="">牛仔裤</a><a href="">运动裤</a><a href="">铅笔裤</a><a href="">阔腿裤</a><a href="">哈伦裤</a><a href="">皮裤</a>'
        var s=str.replace(reg,'</a>\n<a href="">')
console.log(s)*/
var url='bb/aaa/detail/123'
var reg=/detail\/(\d+)/
var result=reg.exec(url)
console.log(result)