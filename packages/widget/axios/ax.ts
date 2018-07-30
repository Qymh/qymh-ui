import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
const CONFIG = require('../../../src/qymhui.config').default.$axios

const ax: AxiosInstance = axios.create({
  baseURL: CONFIG.domain,
  timeout: CONFIG.timeout
})

// 请求拦截器
ax.interceptors.request.use((config: AxiosRequestConfig) => {
  return CONFIG.requestFn(config)
})

// 响应拦截器
ax.interceptors.response.use((response: AxiosResponse) => {
  return CONFIG.responseFn(response)
})

export default ax
