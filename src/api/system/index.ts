import type { OSSItem } from './oss'
import { agAxios } from '@/utils/request'

export const systemApi = {
  getOSS<T = OSSItem[]>(ids: any) {
    return agAxios.get<T>(`/system/oss/listByIds/${ids}`)
  },
}
