import dayjs from 'dayjs'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { STORAGE_TOKEN_KEY } from '../mutation-type'
import { localStorage } from '@/utils/local-storage'

import { userApi } from '@/api/user'
// import type { LoginParams } from '@/api/user'
import type { UserInfo } from '@/api/user/type'
import { store } from '@/stores'

export const useUserStore = defineStore(
  'user-store',
  () => {
    const token = ref('')
    const loginInfo = ref<UserInfo | undefined>(undefined)

    const tokenSetTime = ref('')

    async function doLogion() {
      const $token = localStorage.get(STORAGE_TOKEN_KEY)
      token.value = $token

      const res = await userApi.getUserInfo()
      setTokenInfo({ info: res, token: token.value })
      return Promise.resolve({ success: true })
    }

    function clearLoginInfo() {
      token.value = ''
      loginInfo.value = undefined
    }

    function setTokenInfo(res: { info: UserInfo, token: string }) {
      loginInfo.value = { ...loginInfo.value, ...res.info }
      token.value = res.token
      tokenSetTime.value = dayjs().toJSON()
    }

    return {
      token,
      loginInfo,
      tokenSetTime,
      setTokenInfo,
      doLogion,
      clearLoginInfo,
    }
  },
  {
    persist: true,
  },
)

export function useUserStoreWithout() {
  return useUserStore(store)
}
