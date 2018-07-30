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
