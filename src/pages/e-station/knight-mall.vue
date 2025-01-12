<script lang='ts' setup>
import { useRequest } from 'vue-request'
import type SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Zoom } from 'swiper/modules'
import { ColumnType, dataApi } from '@/api/data'
import 'swiper/css'

defineOptions({
  name: 'KnightMall',
})

const controlledSwiper = ref<SwiperClass>()
const { data } = useRequest(dataApi.eStationColumn, {

  defaultParams: [{ typeId: ColumnType.骑士友好商家 }],
})

const state = useStationData()

const center = computed(() => {
  return { lat: state.data.value?.latitude, lng: state.data.value?.longitude }
})
const map = ref(null)
const zoom = ref(10)

const control = {
  scale: false,
  zoom: false,
}

function onClick(e: Event) {
  console.log(e)
}
function setControlledSwiper(swiper: SwiperClass) {
  controlledSwiper.value = swiper
  swiper.zoom.in(1.8)
}
</script>

<template>
  <div class="knight-station">
    <Swiper
      class="w-full rounded-2xl"
      zoom
      :modules="[Zoom]"
      @swiper="setControlledSwiper"
    >
      <SwiperSlide zoom>
        <div class="map-image-wrap">
          <img :src="data?.img" class="map-image w-full" alt="">
        </div>
        <!-- <img :src="data?.img" class="w-full" alt=""> -->
      </SwiperSlide>
    </Swiper>

    <div class="p-10">
      <div class="station-section-title w-full rounded-2xl bg-white p-6">
        <StationSectionTitle class="">
          骑士友好商家介绍
        </StationSectionTitle>
        <div class="pt-10" v-html="data?.content" />

        <div class="map-wrap">
          <tlbs-map

            ref="map"
            class="h-full"
            api-key="ZFLBZ-AM43N-O6UFU-SGYFC-MIJ63-K6FTL"
            :center="center"
            :zoom="zoom"
            :control="control"
            @click="onClick"
          />
        </div>

        <PicSwiper v-if="data && data.pics" :data="data" />
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.knight-station {
  background: #f3f3f3;
  min-height: 100vh;
}

.map-image-wrap {
  padding: 45px 24px;
  font-size: 0;
  line-height: 1;
}

.map-wrap {
  height: 50vh;
}
</style>

<style lang="less">
.map-wrap {
  .logo-text {
    display: none !important;
  }
}

a[href="http://map.qq.com?ref=jsapi_v3"][target="_blank"]
{
  display: none !important;
}

.rotate-circle {
  display: none;
}
</style>
