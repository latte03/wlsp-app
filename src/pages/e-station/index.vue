<script lang='ts' setup>
defineOptions({
  name: 'EStation',
})

const modules = import.meta.glob<true, any>('./assets/*.png', {
  eager: true,
})
const imgMap = Object.entries(modules).reduce((map, item) => {
  const [key, value] = item
  map[key.replaceAll('./assets/', '').replaceAll('.png', '')] = value.default || value
  return map
}, {} as Record<string, any>)

const { data } = useStationData()

const router = useRouter()
function onTpClick(action) {
  router.push({
    path: `/e-station/${action}`,
  })
}
</script>

<template>
  <div class="e-station h-screen">
    <div>
      <img :src="data?.top_img" alt="" srcset="">
    </div>

    <div class="flex gap-11 p-12">
      <div class="flex flex-col gap-11">
        <div class="tp tp-0" @click="onTpClick('knight-station')">
          <img :src="imgMap.tp0" :srcset="`${imgMap.tp0}, ${imgMap['tp0@2x']} 2x`" alt="">
        </div>

        <div class="tp tp-0" @click="onTpClick('knight-mall')">
          <img :src="imgMap.tp3" :srcset="`${imgMap.tp3}, ${imgMap['tp3@2x']} 2x`" alt="">
        </div>
      </div>

      <div class="flex flex-col gap-11">
        <div class="tp tp-1" @click="onTpClick('knight-cell')">
          <img :src="imgMap.tp2" :srcset="`${imgMap.tp2}, ${imgMap['tp2@2x']} 2x`" alt="">
        </div>
        <div class="tp tp-1" @click="onTpClick('knight-class')">
          <img :src="imgMap.tp1" :srcset="`${imgMap.tp1}, ${imgMap['tp1@2x']} 2x`" alt="">
        </div>

        <div class="tp tp-1" @click="onTpClick('knight-project')">
          <img :src="imgMap.tp4" :srcset="`${imgMap.tp4}, ${imgMap['tp4@2x']} 2x`" alt="">
        </div>
      </div>
    </div>

    <div>
      <img :src="data?.end_img" alt="" srcset="">
    </div>
  </div>
</template>

<style lang='less' scoped>
.e-station {
}
</style>
