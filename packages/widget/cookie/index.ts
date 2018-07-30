import Vue from 'vue'
const Cookie = Object.create(null)
const config = require('../../../src/qymhui.config').default.$notice

Cookie.install = (Vue: any) => {
  Vue.prototype.$cookie = {
    /**
     * 获取cookie
     * @param key 键
     */
    get(key: string): string | number {
      let bool = document.cookie.indexOf(key) > -1
      if (bool) {
        let start: number = document.cookie.indexOf(key) + key.length + 1
        let end: number = document.cookie.indexOf(';', start)
        if (end === -1) {
          end = document.cookie.length
        }
        let value: any = document.cookie.slice(start, end)
        return escape(value)
      }
      return ''
    },

    /**
     * 设置cookie
     * @param key 键
     * @param value 值
     * @param expireDays 保留日期
     */
    set(key: string, value: any, expireDays: number = config.enpireDays) {
      let now = new Date()
      now.setDate(now.getDate() + expireDays)
      document.cookie = `${key}=${escape(value)};expires=${now.toUTCString}`
    },

    /**
     * 删除Cookie
     * @param key 键
     */
    delete(key: string | string[]) {
      let now = new Date()
      now.setDate(now.getDate() - 1)

      if (Array.isArray(key)) {
        for (let i in key) {
          let item: string = key[i]
          let value: any = this.get(item)
          document.cookie = `${item}=${escape(
            value
          )};expires=${now.toUTCString()}`
        }
      } else {
        let value = this.get(key)
        document.cookie = `${key}=${escape(value)};expires=${now.toUTCString()}`
      }
    },

    /**
     * 直接删除所有cookie
     */
    deleteAll() {
      let cookie = document.cookie
      let arr = cookie.split(';')
      let later = ''
      let now = new Date()
      now.setDate(now.getDate() - 1)

      for (let i in arr) {
        let item = arr[i]
        later = item + `;expires=${now.toUTCString()}`
        document.cookie = later
      }
    }
  }
}

Vue.use(Cookie)
