<script lang="ts" setup>
import { usePagination, useRequest } from 'vue-request'

import { toNumber } from 'lodash-es'
import type { fraudApi } from '@/api/fraud'

interface PropsType {
  type: string
  typeRequest: typeof fraudApi.getCaseTypeType | typeof fraudApi.getPublicizeType
  listRequest: (params: any) => Promise<any>
}
defineOptions({
  name: 'PropagandaList',
})
const props = defineProps<PropsType>()

const { data: typeList } = useRequest(props.typeRequest)
const {
  data: list,
  runAsync,
  loading,
  total,
  current,
} = usePagination(props.listRequest, {
  manual: true,
  pagination: {
    currentKey: 'current',
    pageSizeKey: 'size',
    totalKey: 'total',
  },
})

const active = ref(0)
const typeListComputed = computed(() => {
  return [
    {
      name: '推荐',
      id: 'recommend',
    },
    ...(typeList.value || []),
  ]
})
const finished = computed(() => {
  return toNumber(total.value) === list.value?.records?.length
})

watch(typeList, async () => {
  if (typeList.value) {
    await runAsync({
      current: 1,
      size: 10,
      // typeId: typeList.value?.[0].id,
      // 1 推荐 2 置顶
      recommend: 1,
    })
  }
})

watch(active, async () => {
  const id = typeListComputed.value?.[active.value].id
  const params = id === 'recommend' ? { recommend: 1 } : { typeId: id }
  await runAsync({
    current: 1,
    size: 10,
    ...params,
  })
})

function onLoad() {
  current.value++
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  // setTimeout(() => {
  //   for (let i = 0; i < 10; i++) {
  //     list.value.push(list.value.length + 1)
  //   }
  //   // 加载状态结束
  //   loading.value = false
  //   // 数据全部加载完成
  //   if (list.value.length >= 40) {
  //     finished.value = true
  //   }
  // }, 1000)
}
</script>

<template>
  <div class="PropagandaList">
    <van-tabs v-model:active="active" type="card" class="mt-16">
      <van-tab v-for="_type in typeListComputed" :key="_type.id" :title="_type.name" />
    </van-tabs>
    <div>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <PropagandaCard v-for="item in list?.records" :key="item" :type="type" :item="item" />
      </van-list>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* stylelint-disable-next-line selector-class-pattern */
:deep(.van-tabs__nav) {
  /* stylelint-disable-next-line selector-class-pattern */
  &.van-tabs__nav--card {
    gap: 12px;
    background: transparent;
    border: none;
  }
}

/* stylelint-disable-next-line selector-class-pattern */
:deep(.van-tab--card) {
  border: var(--van-border-width) solid var(--van-tabs-default-color);
}
</style>
