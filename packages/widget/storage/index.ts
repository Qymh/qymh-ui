import Vue from 'vue'
const Storage = Object.create(null)

Storage.install = (Vue: any) => {
  Vue.prototype.$storage = {
    /**
     * 获取缓存
     * @param key 键
     * @param local 是否启用localStorage缓存 默认false
     */
    get(key: string, local: boolean = false): string | null {
      return (
        (local && window.localStorage.getItem(key)) ||
        window.sessionStorage.getItem(key)
      )
    },

    /**
     * 设置缓存
     * @param key 键
     * @param value 值
     * @param local 是否启用localStorage缓存 默认false
     */
    set(key: string, value: string, local: boolean = false) {
      ;(local && window.localStorage.setItem(key, value)) ||
        window.sessionStorage.setItem(key, value)
    },

    /**
     * 删除缓存
     * @param key 键
     * @param local 值
     */
    delete(key: string | string[], local: boolean = false) {
      if (Array.isArray(key)) {
        for (let item of key) {
          ;(local && window.localStorage.setItem(item, '')) ||
            window.sessionStorage.setItem(item, '')
        }
      } else {
        ;(local && window.localStorage.setItem(key, '')) ||
          window.sessionStorage.setItem(key, '')
      }
    }
  }
}

Vue.use(Storage)
