<script lang='ts' setup>
defineOptions({
  name: 'KnightMall',
})
const { data } = useStationData()
</script>

<template>
  <div class="knight-station">
    <img :src="data?.class_img" class="w-full" alt="">
  </div>
</template>

<style lang='less' scoped>
.knight-station {
  background: #f3f3f3;
  min-height: 100vh;
}
</style>
