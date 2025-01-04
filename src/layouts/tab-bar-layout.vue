<script lang="ts" setup>
import DefaultLayout from './default.vue'
import { useFraudRouteStore } from '@/stores/modules/fraudRoute'

import type { SvgName } from '~virtual/svg-component'

defineOptions({
  name: 'TabBarLayout',
})

const props = defineProps<{
  type: 'fraud' | 'mass'
}>()

const routeStore = useFraudRouteStore()
const route = useRoute()

const menus = computed(() => {
  return routeStore.menus.filter(m => m.path.includes(props.type))
})
// 菜单
</script>

<template>
  <DefaultLayout class="TabBarLayout">
    <van-tabbar v-if="route.meta.layout === 'tab-bar-layout'" route class="tabbar">
      <van-tabbar-item v-for="menu in menus" :key="menu.name" replace :to="menu.path">
        <template #icon="{ active }">
          <SvgIcon :name="((active ? menu.meta?.activeIcon : menu.meta?.icon) as SvgName)" />
        </template>
        {{ menu.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </DefaultLayout>
</template>

<style lang="less" scoped>
.tabbar {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
