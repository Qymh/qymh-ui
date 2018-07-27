import errorImage from './images/default.png'
const userConfig = process.env.UI_ENV
import {
  deepObjectMerge,
  toParse,
  qcell,
  qheadbar,
  qsearchbar
} from './config'

toParse(userConfig)

const baseConfig = {
  qcell,
  qheadbar,
  qsearchbar,
  // q-image
  qimage: {
    // 懒加载配置
    preLoad: 1.3,
    loading: '',
    error: errorImage,
    attemp: 1
  },
  // qscroll
  qscroll: {
    // 下拉刷新
    down: (vm) => {
      return {
        // 是否启用
        use: true,
        // 是否初次调用
        auto: false,
        // 回调
        callback(mescroll) {
          vm.$emit('refresh')
        }
      }
    },
    // 上拉加载
    up: (vm) => {
      return {
        // 是否启用
        use: true,
        // 是否初次调用
        auto: true,
        // 是否启用滚动条
        scrollbar: {
          use: true
        },
        // 回调
        callback: (page, mescroll) => {
          vm.$emit('load', page)
        },
        // 无数据时的提示
        htmlNodata: '<p class="upwarp-nodata">-- 没有更多的数据 --</p>'
      }
    }
  },
  // $axios
  $axios: {
    // 是否输入日志
    log: true,
    // 超时
    timeout: 20000,
    // 请求拦截器
    requestFn: (config) => {
      return config
    },
    // 响应拦截器
    responseFn: (response) => {
      return response
    }
  }
}

const mergeConfig= deepObjectMerge(baseConfig,userConfig)

export default mergeConfig
