var render=(function () {
    var service=document.getElementsByClassName('service')[0]
    var serviceItem=document.getElementsByClassName('service_item')[0]
    var serviceShow=document.getElementById('service_show')

    var aServiceShow=serviceShow.getElementsByTagName('li')
    return {
        init(){
            render.services_toggle()
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

     }
    }
})()
render.init()