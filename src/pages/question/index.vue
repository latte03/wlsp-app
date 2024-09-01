<script setup lang="ts">
import { toNumber } from 'lodash-es'
import { queryQuestionList } from '@/api'
import type { QuestionRecord } from '@/api/question'

definePage({
  name: 'form-render-list',
  meta: {
    level: 2,
    title: '问卷列表',
    i18n: 'menus.formRenderList',
  },
})

const loading = ref(false)
const finished = ref(false)
const listData = ref<QuestionRecord[]>([])

const page = ref({
  size: 10,
  current: 1,
})

const total = ref(0)

async function onLoad() {
  loading.value = true
  const res = await queryQuestionList(page.value)
  total.value = toNumber(res.data.total)

  listData.value = [...listData.value, ...res.data.records]

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
      <QuestionItem v-for="item in listData" :key="item.id" :record="item" />
    </van-list>
  </div>
</template>
