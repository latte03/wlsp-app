<script lang="ts" setup>
import { type ToastWrapperInstance, showLoadingToast } from 'vant'
import { useRequest } from 'vue-request'

import { fraudApi } from '@/api/fraud'

defineOptions({
  name: 'PostPage',
})
definePage({
  name: 'PostTypePage',
  meta: {
    layout: 'default-layout',
  },
})

const route = useRoute()

const { type, id } = route.params as Record<string, any>
const loadingToastRef = shallowRef<ToastWrapperInstance | null>(null)

const { data } = useRequest(fraudApi.getPostDetail, {
  defaultParams: [{ type, id }],
  onSuccess() {
    loadingToastRef.value?.close()
  },
})

onMounted(() => {
  loadingToastRef.value = showLoadingToast({
    duration: 0,
    message: '加载中..',
  })
})
</script>

<template>
  <div class="post-page">
    <van-image width="100%" height="56vw" :src="data?.img" />
    <div class="title-wrap absolute px-12">
      <div class="title-body rounded-3xl p-16 py-12">
        <div class="post-title text-7xl">
          {{ data?.title }}
        </div>
        <div class="post-time mt-8 opacity-50 text-sm-1">
          {{ data?.updatedTime }}
        </div>
      </div>
    </div>
    <div class="post-content px-20 pt-50">
      <div v-html="data?.content" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.title-wrap {
  z-index: 9;
  width: 100vw;
  transform: translateY(-50%);
}

.title-body {
  background-color: rgb(255 255 255);
  box-shadow: 0 3px 12px rgb(30 19 19 / 10%);
}
</style>
