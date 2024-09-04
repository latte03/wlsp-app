import { sortBy } from 'lodash-es'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'

import { store } from '@/stores'

export interface IRouteState {
  menus: RouteRecordRaw[]
  routers: RouteRecordRaw[]
  keepAliveComponents: string[]
}

export const useFraudRouteStore = defineStore({
  id: 'fraud-route',
  state: (): IRouteState => ({
    menus: [],
    routers: [],
    keepAliveComponents: [],
  }),
  getters: {
    getMenus(): RouteRecordRaw[] {
      return this.menus
    },
  },
  actions: {
    setRouters(routers: RouteRecordRaw[]) {
      this.routers = routers
    },
    setMenus(menus: RouteRecordRaw[]) {
      this.menus = sortBy(
        menus.filter((item) => {
          return item.meta?.layout === 'tab-bar-layout'
        }),
        'meta.sort',
      )
    },
    setKeepAliveComponents(compNames: string[]) {
      // 设置需要缓存的组件
      this.keepAliveComponents = compNames
    },
  },
})

// Need to be used outside the setup
export function useFraudRouteStoreWidthOut() {
  return useFraudRouteStore(store)
}
