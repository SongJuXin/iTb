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
            render.conve()
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
      },
        conve(){
            var conve=document.getElementsByClassName('conve')[0]
            var conveBox=conve.getElementsByClassName('conve-bd-box')[0]
            var conveItems=conve.getElementsByClassName('conve-bd-item')
            var conveHovers=conve.getElementsByClassName('conve-hover')
            var close=document.getElementById('conve-close')
            var tbrPhone=conve.getElementsByClassName('tbr-phone')[0]
            var phoneSum=conve.getElementsByClassName('phone-sum')[0]
            var phoneDenom=conve.getElementsByClassName('tbr-phone-denom')[0]
            ;[].slice.call(conveHovers).forEach(function (item,index) {
                item.onmouseenter=function (e) {
                    conveBox.style.display='block'
                    ;[].slice.call(conveItems).forEach(function (item) {
                        item.style.display='none'
                        var conveTab=item.getElementsByClassName('conve-tabs')[0]
                        if(!conveTab)return
                        var hovers=conveTab.children
                        if(hovers.length>0){
                            ;[].slice.call(hovers).forEach(function (item,index) {
                                item.onmouseover=function () {
                                    animate(tbrPhone,
                                        {
                                          left:-300*index
                                         },
                                        {
                                          duration:500
                                        })
                                }
                            })
                        }

                    })
                    conveItems[index].style.display='block'
                }
            })
            close.onclick=function () {
                conveBox.style.display='none'
            }
            phoneDenom.onclick=function () {
                if(phoneSum.style.display=='inline-block'){
                    phoneSum.style.display='none'
                }
                else{
                    phoneSum.style.display='inline-block'

                }
            }
            document.addEventListener('click',function (e) {
                e=e||event
                if(e.target.id=='phone-input'||e.target.id=='phone-choose'){

                }
                else{
                    phoneSum.style.display='none'
                }
            })
        }
    }
})()
render.init()