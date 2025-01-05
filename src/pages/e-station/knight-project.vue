<script lang='ts' setup>
defineOptions({
  name: 'KnightProject',
})
const { data } = useStationData()
</script>

<template>
  <div class="knight-station">
    <img :src="data?.project_img" class="w-full" alt="">
  </div>
</template>

<style lang='less' scoped>
.knight-station {
  background: #f3f3f3;
  min-height: 100vh;
}
</style>
