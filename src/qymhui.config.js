import errorImage from './images/default.png'

// q-image配置
export const IMAGECONFIG={
  // 懒加载配置
  lazyLoad:{
    preLoad:1.3,
    loading:'',
    error:errorImage,
    attemp:1
  }
}
// axios配置
export const AXIOSCONFIG={
  // 域名
  domain:'http://p.3.cn',
  // 是否输入日志
  log:true,
  // 超时
  timeout:20000,
  // 请求拦截器
  requestFn(config){
    return config
  },
  // 响应拦截器
  responseFn(response){
    return response
  }
}