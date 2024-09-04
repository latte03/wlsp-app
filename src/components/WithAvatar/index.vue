<script lang="ts" setup>
import { useAssetsImageURL } from '@/composables/url-composable'
import { useUserStore } from '@/stores/modules/user'

defineOptions({
  name: 'Avatar',
})
const userStore = useUserStore()

const avatarMan = useAssetsImageURL('avatar-man')
const avatarWomen = useAssetsImageURL('avatar-women')

const defaultAvatar = computed(() => {
  return userStore.loginInfo?.sex === '0' ? avatarMan.value : avatarWomen.value
})

const avatar = computed(() => {
  return userStore.loginInfo?.avatar || defaultAvatar.value
})
onMounted(() => {
  if (!userStore.loginInfo) {
    userStore.doLogion()
  }
})
</script>

<template>
  <div class="flex-y-center">
    <van-image round width="80px" height="80px" :src="avatar" />

    <div class="ml-16">
      <div class="mb-4 text-6xl font-600">
        您好，{{ userStore.loginInfo?.nickName }}
      </div>
      <div>点击查看个人信息 ></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Avatar {
}
</style>
