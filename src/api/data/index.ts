import { TENANT_ID, agAxios } from '@/utils/request'
import { localStorage } from '@/utils/local-storage'

export enum ColumnType {
  empty,
  骑士友好驿站,
  骑士友好小区,
  骑士友好课堂,
  骑士友好商家,
  骑士友好项目,
  活动风采展示,

}
class DataApi {
  eStation = async (params) => {
    const tenantId = localStorage.get(TENANT_ID)

    if (!tenantId) {
      throw new Error('tenantId is must')
    }
    const res = await agAxios.get<StationData>(`/application/app/post/station/query`, { ...params, tenantId })

    return res
  }

  eStationColumn = async (params: { typeId: ColumnType }) => {
    const tenantId = localStorage.get(TENANT_ID)
    // 1.骑士友好驿站 2.骑士友好小区 3.骑士友好课堂 4.骑士友好商家 5.骑士友好项目 6.活动风采展示
    if (!tenantId) {
      throw new Error('tenantId is must')
    }
    const res = await agAxios.get<ColumnData>(`/application/app/post/station/column/query`, { ...params, tenantId })

    return res
  }

  getClassList = async (params: any) => {
    const tenantId = localStorage.get(TENANT_ID)
    if (!tenantId) {
      throw new Error('tenantId is must')
    }
    const res = await agAxios.get('/application/app/post/station/class/query', { ...params, tenantId })
    return res
  }

  classRegister = async (params: any) => {
    const tenantId = localStorage.get(TENANT_ID)
    if (!tenantId) {
      throw new Error('tenantId is must')
    }
    const res = await agAxios.post('/application/app/post/station/class/register', params, { params: { tenantId } })
    return res
  }

  queryServiceList = async (params?: any) => {
    const tenantId = localStorage.get(TENANT_ID)
    if (!tenantId) {
      throw new Error('tenantId is must')
    }
    const res = await agAxios.get<Service[]>('/application/app/post/station/service/query', { ...params, tenantId })
    return res
  }
}

export const dataApi = new DataApi()

export interface StationData {
  created_time: Date
  updated_time: Date
  project_img: string
  synced_status: number
  end_img: string
  latitude: string
  merchant_img: string
  top_img: string
  class_img: string
  content: string
  synced_success: number
  sts: string
  community_img: string
  name: string
  id: string
  pics: string
  longitude: string
}

export interface ColumnData {
  created_time: string
  updated_time: string
  synced_success: number
  img: string
  sts: string
  synced_status: number
  updated_by: string
  id: string
  type: string
  pics: string
  created_by: string
  content: string
}

export interface Service {
  shop_tag: string
  created_time: Date
  updated_time: Date
  synced_success: number
  lnglat: string
  address: string
  sts: string
  synced_status: number
  name: string
  id: string
  content: string
  status: number
}
