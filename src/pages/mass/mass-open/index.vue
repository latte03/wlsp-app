<script lang='ts' setup>
interface PropsType {}
defineOptions({
  name: 'MassOpen',
})
const props = defineProps<PropsType>()

definePage({
  path: '/mass/mass-open',
  name: 'MassOpen',
  meta: {
    layout: 'tab-bar-layout',
    title: '曝光台',
    icon: 'tab-bar-outline-profile',
    activeIcon: 'tab-bar-fill-profile',
    sort: 2,
  },
})
</script>

<template>
  <div class="mass-open">
    MassOpen
  </div>
</template>

<style lang='less' scoped>
.mass-open {
}
</style>
