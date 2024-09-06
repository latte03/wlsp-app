<script lang='ts' setup>
import { useRequest } from 'vue-request'
import { getAppConfig } from '@/api'

defineOptions({
  name: 'ProfileHelp',
})
const appConfig = useRequest(getAppConfig)

useTitle('帮助与反馈')
</script>

<template>
  <div class="profile-help p-16">
    <div v-html="appConfig.data.value?.data.helpContent" />
  </div>
</template>

<style lang='less' scoped>
.profile {
}
</style>
