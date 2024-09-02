import useRouteCacheStore from '@/stores/modules/routeCache'
import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'
import { STORAGE_TOKEN_KEY } from '@/stores/mutation-type'
import type { UserModule } from '@/types'
import { QUERY_TOKEN_KEY } from '@/utils/request'

export const install: UserModule = ({ router }) => {
  router.beforeEach((to, from, next) => {
    const routeCacheStore = useRouteCacheStore()
    const routeTransitionNameStore = useRouteTransitionNameStore()

    // Route cache
    routeCacheStore.addRoute(to)
    const token = to.query[QUERY_TOKEN_KEY]

    if (token) {
      localStorage.set(STORAGE_TOKEN_KEY, token)
    }

    if (to.meta.level > from.meta.level)
      routeTransitionNameStore.setName('slide-fadein-left')

    else if (to.meta.level < from.meta.level)
      routeTransitionNameStore.setName('slide-fadein-right')

    else
      routeTransitionNameStore.setName('absolute-layout')

    next()
  })
  router.afterEach(() => {})
}
