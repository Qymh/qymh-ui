import Vue from 'vue'
import { AxiosResponse, AxiosError } from 'axios'
import ax from './ax'
import jsonp from 'jsonp'

const Axios = Object.create(null)

Axios.install = (Vue: any) => {
  Vue.prototype.$axios = {
    /**
     * get请求
     * @param vm 环境
     * @param api api地址
     * @param data 请求参数
     * @param loading 是否有加载提示
     */
    get(vm: Vue, api: string, data: any, loading: boolean = true) {
      return new Promise((resolve, reject) => {
        loading && vm.$notice.loading()
        data = data ? data : {}
        ax.get(api, { data })
          .then((res: AxiosResponse) => {
            loading && vm.$notice.removeLoading()
            resolve(res.data)
          })
          .catch((error: AxiosError) => {
            loading && vm.$notice.removeLoading()
            reject(error)
          })
      })
    },

    /**
     * post请求
     * @param vm 环境
     * @param api api地址
     * @param data 请求参数
     * @param loading 是否有加载提示
     */
    post(vm: Vue, api: string, data: any, loading: boolean = true) {
      return new Promise((resolve, reject) => {
        loading && vm.$notice.loading()
        data = data ? data : {}
        ax.post(api, { data })
          .then((res: AxiosResponse) => {
            loading && vm.$notice.removeLoading()
            resolve(res.data)
          })
          .catch((error: AxiosError) => {
            loading && vm.$notice.removeLoading()
            reject(error)
          })
      })
    },

    /**
     * jsonp请求
     * @param vm 环境
     * @param api api地址
     * @param data 请求参数
     * @param loading 是否有加载提示
     */
    jsonp(vm: Vue, api: string, data: any, loading: boolean = true) {
      return new Promise((resolve, reject) => {
        loading && vm.$notice.loading()
        let param: string = ''
        for (const i in data) {
          param += `${i}=${data[i]}`
        }
        const baseUrl = ax.defaults.baseURL
        const url: string = `${baseUrl}${api}?${param}`
        jsonp(url, {}, (err: any, doc: any) => {
          loading && vm.$notice.removeLoading()
          if (err) reject(err)
          resolve(doc)
        })
      })
    }
  }
}

Vue.use(Axios)
