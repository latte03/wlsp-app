<script lang='ts' setup>
defineOptions({
  name: 'KnightCell',
})
const { data } = useStationData()
</script>

<template>
  <div class="knight-station">
    <img :src="data?.community_img" class="w-full" alt="">
  </div>
</template>

<style lang='less' scoped>
.knight-station {
  background: #f3f3f3;
  min-height: 100vh;
}
</style>
