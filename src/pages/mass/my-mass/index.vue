<script lang='ts' setup>
defineOptions({
  name: 'MyMass',
})

definePage({
  path: '/mass/my-mass',
  name: 'MyMass',
  meta: {
    layout: 'tab-bar-layout',
    title: '我的上报',
    icon: 'tab-bar-outline-profile',
    activeIcon: 'tab-bar-fill-profile',
    sort: 3,
  },
})
</script>

<template>
  <div class="my-mass">
    MyMass
  </div>
</template>

<style lang='less' scoped>
.my-mass {
}
</style>
