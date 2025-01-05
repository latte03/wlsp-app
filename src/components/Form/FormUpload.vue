<script lang='ts' setup>
import { isArray } from 'lodash-es'
import type { UploaderFileListItem } from 'vant'
import { commApi } from '@/api/dict'

// import type { UploaderBeforeRead } from 'vant'

interface PropsType {
  accept?: string
  maxCount?: number
}
defineOptions({
  name: 'FormUpload',
})
defineProps<PropsType>()
const modelValue = defineModel<string[]>('modelValue')

const value = computed(() => {
  return modelValue.value?.map((i) => {
    return {
      url: i,
    }
  })
})

async function afterRead(items: UploaderFileListItem | UploaderFileListItem[]) {
  if (isArray(items)) {
    //
    return
  }
  const res = await commApi.uploadAsBase64(items.content)
  modelValue.value = [
    ...(modelValue.value || []),
    res.url,
  ]
}
</script>

<template>
  <van-uploader :accept="accept" :model-value="value" :max-count="maxCount" :after-read="afterRead" />
</template>

<style lang='less' scoped>
.Form {
}
</style>
