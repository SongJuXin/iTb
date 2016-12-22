var render=(function () {
    var service=document.getElementsByClassName('service')[0]
    var serviceItem=document.getElementsByClassName('service_item')[0]
    var serviceShow=document.getElementById('service_show')
    var aServiceShow=serviceShow.getElementsByTagName('li')
    var sub_inner=document.getElementsByClassName('sub_inner')[0]
    var sub=document.getElementsByClassName('sub')[0]
    var tips=sub.getElementsByTagName('li')
    var slide_btn=sub.getElementsByTagName('a')
    return {
        init(){
            render.services_toggle()
            render.slide()
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
      slide(){
          var n=0
          var timer=setInterval(function () {
              n++
              if(n>4){
                  n=1
                  utils.css(sub_inner,{left:0})
              }
              auto_move()
          },1200)
          sub_event()

          function auto_move() {
              ;[].slice.call(tips).forEach(function (item,index) {
                  item.className=index==n
                      ?'active'
                      :''
              })
              console.log(n)
              if(n==4)tips[0].className='active'
              animate(sub_inner,{left:-520*n},{
                  duration:800,
                  effect:0
              })
          }
          function sub_event() {
              sub.onmouseover=function () {
                  clearInterval(timer)
              }
              sub.onmouseout=function () {
                  timer=setInterval(function () {
                      n++
                      if(n>4){
                          n=1
                          utils.css(sub_inner,{left:0})
                      }
                      auto_move()
                  },1200)
              }
              slide_btn[0].onclick=function () {
                  n--
                  if(n<0){
                      n=3
                      utils.css(sub_inner,{left:-520*(n+1)})
                  }
                  auto_move()
              }
              slide_btn[1].onclick=function () {
                  n++
                  if(n>4){
                      n=1
                      utils.css(sub_inner,{left:0})
                  }
                  auto_move()
              }
              ;[].slice.call(tips).forEach(function (item,index) {
                  item.onclick=function () {
                      n=index
                      auto_move()
                  }

              })

          }
      }
    }
})()
render.init()