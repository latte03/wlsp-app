<script lang="ts" setup>
import TabBarLayout from '@/layouts/tab-bar-layout.vue'
// import { useUserStore } from '@/store/modules/user'
// import { isDev } from '@/utils/constant'

// import { sha } from '~build/git'
definePage({
  name: 'IndexPage',
  path: '/fraud',

})
</script>

<template>
  <TabBarLayout class="layout" />
</template>

<style lang="less" scoped>
.icon {
  display: block;
  width: 40px;
  height: 40px;
  background: var(--bg-icon);
  background-size: 100% 100%;
}

.alarm {
  background: var(--bg-alarm);
  background-size: 100% 100%;
}

.title {
  font-size: 14px;
  font-weight: 800;
}

.section-title {
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 800;
}
</style>
