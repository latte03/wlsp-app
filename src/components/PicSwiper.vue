<script lang='ts' setup>
import type SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller } from 'swiper/modules'
import type { ColumnData } from '@/api/data'
import 'swiper/css'

interface PropsType {
  data: ColumnData
}
defineOptions({
  name: 'PicSwiper',
})
const props = defineProps<PropsType>()

const { data } = toRefs(props)
const controlSwiper = ref<SwiperClass>()
const controlledSwiper = ref<SwiperClass>()

const pics = computed(() => {
  return (data.value?.pics || '').split(',').filter(i => !!i)
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
  <div v-if="pics.length > 0" class="mt-10 flex flex-col flex-grow">
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
</template>

<style lang='less' scoped>
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
