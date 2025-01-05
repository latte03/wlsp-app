import { TENANT_ID, agAxios } from '@/utils/request'
import { localStorage } from '@/utils/local-storage'

class DataApi {
  eStation = async (params) => {
    const tenantId = localStorage.get(TENANT_ID)

    if (!tenantId) {
      throw new Error('tenantId is must')
    }
    const res = await agAxios.get<StationData>(`/application/app/post/station/query`, { ...params, tenantId })

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
}
