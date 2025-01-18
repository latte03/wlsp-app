<script lang='ts' setup>
import { useRequest } from 'vue-request'
import { ColumnType, dataApi } from '@/api/data'

defineOptions({
  name: 'KnightClass',
})
const { data } = useRequest(dataApi.eStationColumn, {

  defaultParams: [{ typeId: ColumnType.骑士友好课堂 }],
})
const router = useRouter()

function onRegClick() {
  router.push({
    path: '/e-station/knight-class-register',
  })
}
</script>

<template>
  <div class="knight-station" style="padding-bottom:calc(var(--vueuse-safe-area-bottom) + 68px)">
    <img :src="data?.img" class="w-full" alt="">
    <div class="p-10">
      <div class="station-section-title w-full rounded-2xl bg-white p-6">
        <StationSectionTitle class="">
          骑士友好课堂介绍
        </StationSectionTitle>
        <div class="pt-10" v-html="data?.content" />

        <PicSwiper v-if="data" :data="data" />
      </div>
    </div>

    <div class="fixed bottom-0 z-10 w-screen bg-white" style="padding-bottom:var(--vueuse-safe-area-bottom);">
      <div class="p-10">
        <van-button type="primary" block color="rgb(21 93 69)" @click="onRegClick">
          我要报名
        </van-button>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.knight-station {
  background: #f3f3f3;
  min-height: 100vh;
}
</style>
