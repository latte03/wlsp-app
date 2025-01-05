<script lang='ts' setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller } from 'swiper/modules'
import sectionTitle from './assets/section-title.png'
import 'swiper/css'
import type SwiperClass from 'swiper'

defineOptions({
  name: 'EStation',
})
const { data } = useStationData()
const pics = computed(() => {
  return (data.value?.pics || '').split(',')
})
const controlSwiper = ref<SwiperClass>()
const controlledSwiper = ref<SwiperClass>()
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
  <div class="knight-station p-10">
    <div class="section-title w-full rounded-2xl bg-white p-6">
      <img :src="sectionTitle" alt="">
      <div class="pt-10" v-html="data?.content" />
    </div>

    <div class="mt-10">
      <!-- <div>
        <img src="" alt="">
      </div> -->

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

      <Swiper
        class="w-full rounded-2xl"
        :modules="[Controller]"
        :controller="{ control: controlSwiper }"
        @swiper="setControlledSwiper "
      >
        <SwiperSlide v-for="pic in pics" :key="pic">
          <img class="w-full" :src="pic" alt="">
        </SwiperSlide>
      </Swiper>
      <!--  -->
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
}
.swiper-slide-active {
  .thumbs-slide {
    border: 2px solid #fff;
  }
}
.control-swiper {
  position: fixed;
  z-index: 10;
  background-color: rgba(38, 38, 42, 0.566);
  padding: 6px;
  bottom: calc(10px + env(safe-area-inset-bottom));
  left: 12px;
  right: 12px;
  border-radius: 8px;
  .swiper {
    border-radius: 6px;
  }
}
</style>
