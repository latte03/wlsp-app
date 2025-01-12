<script lang='ts' setup>
defineOptions({
  name: 'StationSectionTitle',
})
</script>

<template>
  <div class="station-section-title">
    <div class="relative z-2">
      <slot />
    </div>
  </div>
</template>

<style lang='less' scoped>
.station-section-title {
  font-size: 24px;
  font-weight: 800;
  position: relative;
  display: inline-block;
  z-index: 12;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 12px;
    background: #aace24;
    position: absolute;
    bottom: 3px;
    border-radius: 4px;
    z-index: 0;
  }
}
</style>
