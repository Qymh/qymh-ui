const SERVERCONFIG = require('./lib/appconfig').SERVERCONFIG
const isDev = process.env.NODE_ENV === 'development'

module.exports={
  // q-image
  qimage: {
    preLoad: 1.3,
    loading: '',
    error: './images/default.png',
    attemp: 1
  },
  // q-scroll
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
    domain: SERVERCONFIG.domain,
    timeout: SERVERCONFIG.timeout,
    requestFn: (config) => {
      let { data } = config
      console.log(`serverApi:${config.baseURL}${config.url}`)
      if (Object.keys(data).length > 0) {
        console.log(`request data ${JSON.stringify(data)}`)
      }
      return config
    },
    responseFn: (response) => {
      let { status, data } = response
      if (status >= 200 && status <= 300) {
        console.log('---response data ---')
        console.log(data)
      } else {
        console.log('--- error ---')
        console.log(data)
        let vm = new Vue()
        vm.$notice.toast(status === 0 ? '网络链接异常' : `网络异常,错误代码:${status}`)
      }
      return response
    }
  }
}
