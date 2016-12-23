var render=(function () {
    var service=document.getElementsByClassName('service')[0]
    var serviceItem=document.getElementsByClassName('service_item')[0]
    var serviceShow=document.getElementById('service_show')
    var aServiceShow=serviceShow.getElementsByTagName('li')
    var sub_inner=document.getElementsByClassName('sub_inner')[0]
    var sub=document.getElementsByClassName('sub')[0]
    var tips=sub.getElementsByTagName('li')
    var slide_btn=sub.getElementsByTagName('a')
    var tm_bd_inner=document.getElementsByClassName('tm_bd_inner')[0]
    var tm_bd=document.getElementsByClassName('tm_bd')[0]
    var tm_btn=tm_bd.getElementsByTagName('a')
    var tm_tips=tm_bd.getElementsByTagName('li')
    console.log(tm_bd_inner)
    return {
        init(){
            //移入show移出hide
            render.services_toggle()
            //淘宝banner
            render.slide({
                outter:sub,
                inner:sub_inner,
                btn:slide_btn,
                tips:tips
            })
            //天猫banner
            render.slide({
                outter:tm_bd,
                inner:tm_bd_inner,
                btn:tm_btn,
                tips:tm_tips,
                cb:function (n) {
                    var changeSpan=document.getElementsByClassName('red')[0]
                    if(n>=6)n=0
                    changeSpan.innerHTML=n+1
                }
            })
        },
        services_toggle(){
            [].slice.call(aServiceShow).forEach(function (item) {
                item.onmouseenter=function () {
                    serviceItem.style.display='block'
                }
                item.onmouseleave=function () {
                    serviceItem.style.display='none'
                }
            })
            serviceItem.onmouseenter=function (e) {
                serviceItem.style.display='block'
            }
            serviceItem.onmouseleave=function () {
                serviceItem.style.display='none'
            }

     },
      slide(obj){
          var outter=obj.outter,
              inner=obj.inner,
              btn=obj.btn,
              tips=obj.tips,
              num=tips.length,
              cb=obj.cb
          var n=0
          var auto_move=function() {
              ;[].slice.call(tips).forEach(function (item,index) {
                  item.className=index==n
                      ?'active'
                      :''
              })

              if(n==num)tips[0].className='active'
              animate(inner,{left:-520*n},{
                  duration:1000,
                  effect:0,
                  callback:function () {
                      cb&&cb(n)
                  }
              })
          }
          var sub_event=function () {
              outter.onmouseover=function () {
                  clearInterval(timer)
              }
              outter.onmouseout=function () {
                  timer=setInterval(function () {
                      n++
                      if(n>num){
                          n=1
                          utils.css(inner,{left:0})
                      }
                      auto_move()
                  },2000)
              }
              btn[0].onclick=function () {
                  n--
                  if(n<0){
                      n=num-1
                      utils.css(inner,{left:-520*(n+1)})
                  }
                  auto_move()
              }
              btn[1].onclick=function () {
                  n++
                  if(n>num){
                      n=1
                      utils.css(inner,{left:0})
                  }
                  auto_move()
              }
              ;[].slice.call(tips).forEach(function (item,index) {
                  item.onclick=function () {
                      n=index
                      if(n==0)n=num
                      auto_move()
                  }

              })

          }
          var timer=setInterval(function () {
              n++
              if(n>num){
                  n=1
                  utils.css(inner,{left:0})
              }
              auto_move()
          },2000)
          sub_event()
      }
    }
})()
render.init()