import axios,{AxiosInstance,AxiosRequestConfig,AxiosResponse} from 'axios'
import {AXIOSCONFIG} from '../../../src/qymhui.config'

const ax:AxiosInstance=axios.create({
  baseURL:AXIOSCONFIG.domain,
  timeout:AXIOSCONFIG.timeout
})

// 请求拦截器
ax.interceptors.request.use(
  (config:AxiosRequestConfig)=>{
    return AXIOSCONFIG.requestFn(config)
  }
)

// 响应拦截器
ax.interceptors.response.use(
  (response:AxiosResponse)=>{
    return AXIOSCONFIG.responseFn(response)
  }
)

export default ax

