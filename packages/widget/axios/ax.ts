import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import CONFIG from '../../../src/qymhui.config'

const ax: AxiosInstance = axios.create({
  baseURL: CONFIG.$axios.domain,
  timeout: CONFIG.$axios.timeout
})

// 请求拦截器
ax.interceptors.request.use((config: AxiosRequestConfig) => {
  return CONFIG.$axios.requestFn(config)
})

// 响应拦截器
ax.interceptors.response.use((response: AxiosResponse) => {
  return CONFIG.$axios.responseFn(response)
})

export default ax
