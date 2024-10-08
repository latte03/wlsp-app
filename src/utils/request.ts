import type { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { showFailToast, showNotify } from 'vant'
import { localStorage } from '@/utils/local-storage'
import { STORAGE_TOKEN_KEY } from '@/stores/mutation-type'

// 这里是用于设定请求后端时，所用的 Token KEY
// 可以根据自己的需要修改，常见的如 Access-Token，Authorization
// 需要注意的是，请尽量保证使用中横线`-` 来作为分隔符，
// 避免被 nginx 等负载均衡器丢弃了自定义的请求头
export const REQUEST_TOKEN_KEY = 'Token'
export const QUERY_TOKEN_KEY = 'Token'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 6000, // 请求超时时间
})

export type RequestError = AxiosError<{
  message?: string
  result?: any
  errorMessage?: string
}>

// 异常拦截处理器
function errorHandler(error: RequestError): Promise<any> {
  if (error.response) {
    const { data = {} as any, status, statusText } = error.response
    if (status === 400) {
      showNotify({
        type: 'danger',
        message: (data && data.msg) || statusText,
      })
    }
    // 403 无权限
    if (status === 403) {
      showNotify({
        type: 'danger',
        message: (data && data.msg) || statusText,
      })
    }
    // 401 未登录/未授权
    if (status === 401 && data.result && data.result.isLogin) {
      showNotify({
        type: 'danger',
        message: 'Authorization verification failed',
      })
      // 如果你需要直接跳转登录页面
      // location.replace(loginRoutePath)
    }
  }
  return Promise.reject(error)
}

// 请求拦截器
function requestHandler(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
  const savedToken = localStorage.get(STORAGE_TOKEN_KEY)
  // 如果 token 存在
  // 让每个请求携带自定义 token, 请根据实际情况修改
  // config.headers[REQUEST_TOKEN_KEY] = 'eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJDdXJyZW50Q29tcGFueUlkIjoiIiwiQ3VycmVudERlcHRJZCI6IiIsIlRlbmFudElkIjoiNTA0ODgwMjAwMjg0Njk0NzU5IiwiVXVpZCI6ImMxMzcxZTRkNWE4NGU2M2MzYTdjYjc3Y2JjM2U2NmFkIiwiQWNjb3VudElkIjoiIiwiVXNlcklkIjoiNTIxMzYxNDExNDMzNjI4ODgzIiwiQ3VycmVudFRvcENvbXBhbnlJZCI6IiIsIkNsaWVudElkIjoiN29rbGxsMGIyZTAyY2h3OXd0bjFucmtqIiwiR3JhbnRUeXBlIjoiV0VDSEFUX01JTkkiLCJFbXBsb3llZUlkIjoiIiwiQWNjb3VudE5hbWUiOiIiLCJpYXQiOjE3MjUxNzUzNDQsIm5iZiI6MTcyNTE3NTM0NCwiZXhwIjoxNzI1MTgyNTQ0fQ.2FTwik7aCGU7LtAvpOAMrGxcjjAQ6w585GR00Hi5Njc'
  if (savedToken) {
    config.headers[REQUEST_TOKEN_KEY] = savedToken
  }

  return config
}

// Add a request interceptor
request.interceptors.request.use(requestHandler, errorHandler)

// 响应拦截器
function responseHandler(response: { data: any }) {
  if ([500, -1].includes (response.data.code)) {
    showFailToast(response.data.msg || '系统错误')
    return Promise.reject(new Error('系统错误'))
  }
  return response.data
}

// Add a response interceptor
request.interceptors.response.use(responseHandler, errorHandler)

export interface AgResponse {
  code: number | string
  msg: string
}
export interface AgResponseError extends AgResponse {
  data: null
  success: false
}
export interface AgResponseSuccess<T> extends AgResponse {
  data: T
  records: T
  size: string
  total: string
  success: true
}
class AgAxios {
  post = async <T>(url: string, params: any, config?: AxiosRequestConfig<any> | undefined) => {
    const res = await request.post<AgResponseSuccess<T>>(url, params, config)
    if (res.data.code === 200) {
      return res.data?.data
    }
    else {
      showFailToast(res.data.msg)
      return Promise.reject(res.data)
    }
  }

  getList = async <T = any>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig<any> | undefined,
  ) => {
    const res = await request.get<AgResponseSuccess<T>>(url, { params, ...config })
    return res.data
  }

  get = async <T = any>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig<any> | undefined,
  ) => {
    const res = await request.get<T>(url, { params, ...config })
    return res.data || res.data
  }
}
const agAxios = new AgAxios()

export { agAxios }

export default request
