import Vue from 'vue'
import { AxiosResponse, AxiosError } from 'axios'
import ax from './ax'

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
        ax.get(api, data)
          .then((res: AxiosResponse) => {
            loading && vm.$notice.removeLoading()
            resolve(res)
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
        ax.post(api, data)
          .then((res: AxiosResponse) => {
            loading && vm.$notice.removeLoading()
            resolve(res)
          })
          .catch((error: AxiosError) => {
            loading && vm.$notice.removeLoading()
            reject(error)
          })
      })
    }
  }
}
