<script lang='ts' setup>
import { jsonp } from 'vue-jsonp'
import { useRequest } from 'vue-request'
import type SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Zoom } from 'swiper/modules'
import { ColumnType, dataApi } from '@/api/data'
import 'swiper/css'
import type { Marker } from '@/types'

defineOptions({
  name: 'KnightMall',
})

const MAP_KEY = 'ZFLBZ-AM43N-O6UFU-SGYFC-MIJ63-K6FTL'
const controlledSwiper = ref<SwiperClass>()
const { data } = useRequest(dataApi.eStationColumn, {
  defaultParams: [{ typeId: ColumnType.骑士友好商家 }],
})

const serviceList = useRequest(dataApi.queryServiceList, {
  manual: true,
})
const state = useStationData()

const center = computed(() => {
  return { lat: state.data.value?.latitude, lng: state.data.value?.longitude }
})

const map = ref(null)
const zoom = ref(16)
const styles = {
  marker: {
    width: 26, // 宽度
    height: 35,
    anchor: { x: 17, y: 16 },
    src: 'https://mapapi.qq.com/web/lbs/visualizationApi/demo/img/small.png',
    color: '#333', // 标注点文本颜色
    size: 14, // 标注点文本文字大小
    direction: 'bottom', // 标注点文本文字相对于标注点图片的方位
    offset: { x: 0, y: 4 }, // 标注点文本文字基于direction方位的偏移属性
    strokeColor: '#fff', // 标注点文本描边颜色
    strokeWidth: 2, // 标注点文本描边宽度
  },

}
const options = {
  minZoom: 5,
  maxZoom: 20,
}
const control = {
  scale: false,
  zoom: false,
}

const marker = ref<Marker[]>([])

const geometries = computed(() => {
  return marker.value.map((item) => {
    return {
      styleId: 'marker',
      position: item.location,
      content: item.title,
    }
  })
})

watch(center, async () => {
  if (!center.value.lat)
    return
  const params = {
    key: MAP_KEY,
    keyword: encodeURIComponent('美食'),
    boundary: `nearby(${center.value.lat},${center.value.lng},500)`,
    page_size: 10,
    page_index: 1,
    output: 'jsonp',
  }

  const services = await serviceList.runAsync()
  if (services.length > 0) {
    marker.value = services.map((i) => {
      const l = i.lnglat.split(',')
      return { title: i.name, location: { lat: l[1], lng: l[0] } }
    })

    return
  }
  const res = await jsonp<any>('https://apis.map.qq.com/ws/place/v1/search', params)

  marker.value = res.data
}, {
  immediate: true,
})

function setControlledSwiper(swiper: SwiperClass) {
  controlledSwiper.value = swiper
  swiper.zoom.in(1.8)
}
</script>

<template>
  <div class="knight-station">
    <Swiper class="w-full rounded-2xl" zoom :modules="[Zoom]" @swiper="setControlledSwiper">
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
          <tlbs-map ref="map" class="h-full" :api-key="MAP_KEY" :center="center" :zoom="zoom" :control="control">
            <tlbs-multi-marker enable-collision :geometries="geometries" :styles="styles" :options="options" />
          </tlbs-map>
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
