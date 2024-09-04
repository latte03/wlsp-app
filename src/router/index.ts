import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import { createGetRoutes, setupLayouts } from 'virtual:meta-layouts'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import type { App } from 'vue'
import { useFraudRouteStoreWidthOut } from '@/stores/modules/fraudRoute'

NProgress.configure({ showSpinner: true, parent: '#app' })

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  routes,
})

// This will update routes at runtime without reloading the page
if (import.meta.hot) {
  // handleHotUpdate(router)
}
const fraudRouteStore = useFraudRouteStoreWidthOut()
export const getRoutes = createGetRoutes(router as any)
export default router
export function setupRouter(app: App<Element>) {
  app.use(router)
  fraudRouteStore.setMenus(router.getRoutes())
}
