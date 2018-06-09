import Vue from 'vue'

const Notice=Object.create(null)

function ce(tag:string):HTMLElement{
  return document.createElement(tag)
}

function remove(elm:Element):void{
  if(elm.parentNode){
    elm.parentNode.removeChild(elm)
  }
}

let isToast:boolean=false

Notice.install=(Vue:any)=>{
  Vue.prototype.$notice={
    /**
     * 吐丝提醒
     * @param message 消息
     * @param timeout 时间
     * @param position 位置
     */
    toast(message:string,timeout:number=1500,position:string='bottom'){
      // 正在吐丝直接退出
      if(isToast){
        return
      }
      isToast=true
      let libHtml=ce('div')
      let pos:string=position==='center'?'center':'bottom'
      libHtml.classList.add('notice','notice_toast','fadeIn')
      libHtml.classList.add(pos)

      libHtml.innerText=message

      let $body:HTMLElement=document.body
      $body.appendChild(libHtml)

      let timer:any=setTimeout(() => {
        let $noticeToast=document.getElementsByClassName('notice_toast')[0]
        $noticeToast.classList.remove('fadeIn')
        $noticeToast.classList.add('fadeOut')
        let innerTimer:any=setTimeout(() => {
          remove($noticeToast)
          innerTimer=null
          timer=null
          isToast=false
        }, 400)
      }, timeout)
    }
  }
}

Vue.use(Notice)