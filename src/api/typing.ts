export interface ResponseBody<T = any> {
  msg?: string
  code?: number
  data?: T
  isSuccess: boolean
}

/** 统一返回结构体 */

export interface PageResult<T = any> {

  records: T[]
  total: string
  size: string
  current: string
  orders: any[]
  optimizeCountSql: boolean
  searchCount: boolean
  maxLimit: null
  countId: null
  pages: string
}
