<script lang='ts' setup>
import { useRequest } from 'vue-request'
import { ColumnType, dataApi } from '@/api/data'

defineOptions({
  name: 'KnightCell',
})
const { data } = useRequest(dataApi.eStationColumn, {

  defaultParams: [{ typeId: ColumnType.骑士友好小区 }],
})
</script>

<template>
  <div class="knight-station">
    <img :src="data?.img" class="w-full" alt="">
    <div class="p-10">
      <div class="station-section-title w-full rounded-2xl bg-white p-6">
        <StationSectionTitle class="">
          骑士友好小区介绍
        </StationSectionTitle>
        <div class="pt-10" v-html="data?.content" />

        <PicSwiper v-if="data" :data="data" />
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
