<script lang='ts' setup>
import { useRequest } from 'vue-request'
import type SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller } from 'swiper/modules'
import sectionTitle from './assets/section-title.png'
import 'swiper/css'
import { ColumnType, dataApi } from '@/api/data'

defineOptions({
  name: 'EStation',
})

const controlSwiper = ref<SwiperClass>()
const controlledSwiper = ref<SwiperClass>()
const { data } = useRequest(dataApi.eStationColumn, {

  defaultParams: [{ typeId: ColumnType.骑士友好驿站 }],
})
const pics = computed(() => {
  return (data.value?.pics || '').split(',')
})
function setControlSwiper(swiper) {
  controlSwiper.value = swiper
}
function setControlledSwiper(swiper) {
  controlledSwiper.value = swiper
}

function onSlideClick(activeIndex) {
  controlledSwiper.value?.slideTo(activeIndex)
}
</script>

<template>
  <div class="knight-station flex flex-col p-10">
    <div class="mb-10 -m-10">
      <img :src="data?.img" alt="">
    </div>
    <div class="section-title w-full rounded-2xl bg-white p-6">
      <img :src="sectionTitle" alt="">
      <div class="pt-10" v-html="data?.content" />
    </div>

    <div class="mt-10 flex flex-col flex-grow">
      <Swiper
        class="w-full rounded-2xl"
        :modules="[Controller]"
        :controller="{ control: controlSwiper }"
        @swiper="setControlledSwiper "
      >
        <SwiperSlide v-for="pic in pics" :key="pic">
          <img class="h-full max-h-none w-full" :src="pic" alt="">
        </SwiperSlide>
      </Swiper>
      <div class="control-swiper">
        <Swiper
          :modules="[Controller]"
          :slides-per-view="4"
          :space-between="8"
          :controller="{ control: controlledSwiper }"
          slide-to-clicked-slide
          centered-slides
          @swiper="setControlSwiper "
        >
          <SwiperSlide v-for="(pic, index) in pics" :key="pic">
            <img class="thumbs-slide w-full" :src="pic" alt="" @click="onSlideClick(index)">
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.knight-station {
  background: #f3f3f3;
  min-height: 100vh;
  position: relative;
}

.section-title {
  padding: 0 16px;
  padding-top: 20px;
  padding-bottom: 16px;

  img {
    width: 180px;
    border-radius: 12px;
    overflow: hidden;
  }
}

.thumbs-slide {
  width: 100px;
  border-radius: 6px;
  border: 2px solid transparent;
  font-size: 0;
}
.swiper-slide-active {
  .thumbs-slide {
    border: 2px solid #fff;
  }
}
.control-swiper {
  z-index: 10;
  background-color: rgba(38, 38, 42, 0.566);
  padding: 6px;
  bottom: calc(10px + env(safe-area-inset-bottom));
  left: 12px;
  right: 12px;
  border-radius: 8px;
  margin-top: 10px;
  .swiper {
    border-radius: 6px;
    font-size: 0;
  }

  :deep(.swiper-wrapper) {
    font-size: 0;
    line-height: 1;
  }
}

:deep(.swiper-wrapper) {
  height: 100%;
}
</style>
