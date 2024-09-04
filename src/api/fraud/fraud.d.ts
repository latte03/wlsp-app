import type { OSSItem } from '../system/oss'

export interface PublicizeType {
  id: string
  name: string
  createTime: Date
  updateTime: Date
}

export interface Publicize {
  updatedTime: any
  id: string
  title: string
  img: string
  image?: OSSItem
  content: string
  views: number
  createdTime: string
  updatedTime: string
  typeId: string
  recommend: number
}
