import Vue from 'vue'
const Notice = Object.create(null)
const config = require('../../../src/qymhui.config').default.$notice

function ce(tag: string): HTMLElement {
  return document.createElement(tag)
}

function remove(elm: Element): void {
  if (elm.parentNode) {
    elm.parentNode.removeChild(elm)
  }
}

function parseHtml(html: string): any {
  let outerDom = document.createElement('div')
  outerDom.innerHTML = html

  let children = Array.from(outerDom.children)
  return children[0]
}

let index: number = 0

Notice.install = (Vue: any) => {
  Vue.prototype.$notice = {
    /**
     * 吐丝提醒
     * @param message 消息
     * @param position 位置
     * @param timeout 时间
     */
    toast(
      message: string,
      position: string = config.toast.position,
      timeout: number = config.toast.timeout
    ) {
      let libHtml = ce('div')
      let innerIndex = index
      let beforeIndex = index - 1
      libHtml.classList.add(
        'notice',
        'notice_toast',
        'fadeIn',
        `count_${index}`
      )
      libHtml.classList.add(position)
      libHtml.innerText = message

      index++

      let $body = document.body
      $body.appendChild(libHtml)

      let $noticeToastNow = document.getElementsByClassName(`count_${beforeIndex}`)[0]
      $noticeToastNow && remove($noticeToastNow)

      let timer: any = setTimeout(() => {
        let $noticeToast = document.getElementsByClassName(
          `count_${innerIndex}`
        )[0]
        if ($noticeToast) {
          $noticeToast.classList.remove('fadeIn')
          $noticeToast.classList.add('fadeOut')
          let innerTimer: any = setTimeout(() => {
            remove($noticeToast)
            innerTimer = null
            timer = null
          }, 300)
        }
      }, timeout)
    },

    /**
     * 长时间的吐丝提醒
     * @param {String} message 内容
     */
    longToast(message: string) {
      let libHtml = ce('div')
      libHtml.classList.add('notice', 'notice_longToast', 'fadeIn', 'bottom')
      libHtml.innerText = message

      let $body = document.body
      $body.appendChild(libHtml)
    },

    /**
     * 去掉长时间吐丝提醒
     */
    removeLongToast() {
      let $noticeToast = document.getElementsByClassName('notice_longToast')[0]
      $noticeToast.classList.remove('fadeIn')
      $noticeToast.classList.add('fadeOut')
      let timer: any = setTimeout(() => {
        remove($noticeToast)
        timer = null
      }, 300)
    },

    /**
     * 加载loading
     */
    loading() {
      let bkHtml = ce('div')
      bkHtml.classList.add('notice_background')
      let loadingHtmlString = `
      <div class="notice_loading">
        <div class="lds-css ng-scope">
          <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        <div>
      </div>`
      let loadingHtml = parseHtml(loadingHtmlString)
      let $body = document.body

      $body.appendChild(bkHtml)
      $body.appendChild(loadingHtml)
    },

    /**
     * 去掉loading
     */
    removeLoading() {
      let $noticeBk = document.getElementsByClassName('notice_background')[0]
      let $noticeLoading = document.getElementsByClassName('notice_loading')[0]
      let $body = document.body

      remove($noticeBk)
      remove($noticeLoading)
    },

    /**
     * 确认框
     * @param {String} text 文字
     * @param {String} btnLeft 左侧文字
     * @param {String} btnRight 右侧文字
     */
    confirm(
      text: string = config.confirm.text,
      btnLeft: string = config.confirm.btnLeft,
      btnRight: string = config.confirm.btnRight
    ) {
      return new Promise(resolve => {
        let libHtml = ce('div')
        let textHtml = ce('div')
        let btnHtml = ce('div')
        let btnLeftHtml = ce('div')
        let btnRightHtml = ce('div')
        let bkHtml = ce('div')
        let $body = document.body

        libHtml.classList.add('notice', 'notice_confirm', 'pulse')
        textHtml.classList.add('notice_confirm_text')
        btnHtml.classList.add('notice_confirm_btn')
        btnLeftHtml.classList.add('notice_confirm_btn_left')
        btnRightHtml.classList.add('notice_confirm_btn_right')
        bkHtml.classList.add('notice_blackBackground')

        textHtml.innerText = text
        btnLeftHtml.innerText = '取消'
        btnRightHtml.innerText = '确认'

        btnHtml.appendChild(btnLeftHtml)
        btnHtml.appendChild(btnRightHtml)
        libHtml.appendChild(textHtml)
        libHtml.appendChild(btnHtml)
        $body.appendChild(libHtml)
        $body.appendChild(bkHtml)

        let $leftBtn = document.getElementsByClassName(
          'notice_confirm_btn_left'
        )[0]
        let $rightBtn = document.getElementsByClassName(
          'notice_confirm_btn_right'
        )[0]

        $leftBtn.addEventListener('click', () => {
          let vm = new Vue()
          vm.$notice.removeConfirm()
        })

        $rightBtn.addEventListener('click', () => {
          let vm = new Vue()
          vm.$notice.removeConfirm()
          resolve()
        })
      })
    },

    /**
     * 去掉确认框
     */
    removeConfirm() {
      let $noticeConfirm = document.getElementsByClassName('notice_confirm')[0]
      let $bk = document.getElementsByClassName('notice_blackBackground')[0]
      $noticeConfirm.classList.remove('pulse')
      $noticeConfirm.classList.add('fadeOut')

      remove($bk)
      let timer: any = setTimeout(() => {
        remove($noticeConfirm)
        timer = null
      }, 300)
    }
  }
}

Vue.use(Notice)
