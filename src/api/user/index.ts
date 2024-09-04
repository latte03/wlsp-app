import type { UserInfo } from './type'
import { agAxios } from '@/utils/request'

// import type { UserInfo } from './type'

const userApi = {

  getUserInfo() {
    return agAxios.get<UserInfo>(
      '/application/app/wechat/current/user',

    )
  },
}

export { userApi }
