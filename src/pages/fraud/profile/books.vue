<script lang='ts' setup>
import { useRequest } from 'vue-request'
import { getAppConfig } from '@/api'

defineOptions({
  name: 'ProfileHelp',
})
const appConfig = useRequest(getAppConfig)

useTitle('反诈手册')
</script>

<template>
  <div class="profile-help p-16">
    <div v-html="appConfig.data.value?.data.manualUrl" />
  </div>
</template>

<style lang='less' scoped>
.profile {
}
</style>
