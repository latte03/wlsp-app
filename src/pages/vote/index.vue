<script setup lang="ts">
import { toNumber } from 'lodash-es'
import { voteApi } from '@/api'
import type { VoteRecord } from '@/api/vote'

definePage({
  name: 'vote-list',
  meta: {
    level: 2,
    title: '民意征集',
    i18n: 'menus.voteList',
  },
})

useTitle('投票')
const loading = ref(false)
const finished = ref(false)
const listData = ref<VoteRecord[]>([])

const page = ref({
  size: 10,
  current: 1,
})

const total = ref(0)

async function onLoad() {
  loading.value = true
  const res = await voteApi.queryList(page.value)
  total.value = toNumber(res.data?.total)

  listData.value = [...listData.value, ...(res.data?.records || [])]

  if (listData.value.length >= total.value) {
    finished.value = true
  }

  page.value.current++
  loading.value = false
}
</script>

<template>
  <div class="p-16">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <VoteItem v-for="item in listData" :key="item.id" :record="item" />
    </van-list>
  </div>
</template>
