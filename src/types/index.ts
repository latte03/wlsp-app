import type { HeadObject } from '@vueuse/head'
import type { App } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router/auto'

interface AppContext<HasRouter extends boolean = true> {
  app: App<Element>
  router: HasRouter extends true ? Router : undefined
  routes: HasRouter extends true ? RouteRecordRaw[] : undefined
  head?: HeadObject
}

export type UserModule = (ctx: AppContext) => void

export interface Marker {
  id?: string
  title: string
  address?: string
  tel?: string
  category?: string
  type?: number
  location: Location
  _distance?: number
  ad_info?: AdInfo
}

export interface AdInfo {
  adcode: number
  province: string
  city: string
  district: string
}

export interface Location {
  lat: number | string
  lng: number | string
}
