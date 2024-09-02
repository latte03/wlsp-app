import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import type { UserModule } from '@/types'

NProgress.configure({ showSpinner: true, parent: '#app' })

export const install: UserModule = ({ router }) => {
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
