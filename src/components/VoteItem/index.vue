<script lang='ts' setup>
import dayjs from 'dayjs'
import type { VoteRecord } from '@/api/vote'

interface PropsType {
  record: VoteRecord
}
defineOptions({
  name: 'VoteItem',
})
const props = defineProps<PropsType>()
const router = useRouter()
const isDisabled = computed(() => {
  const now = dayjs()

  const startTime = dayjs(props.record.voteStartTime)
  const endTime = dayjs(props.record.voteEndTime)

  return !(now.isAfter(startTime) && now.isBefore(endTime))
})

function onItemClick() {
  if (isDisabled.value)

    return

  router.push({
    path: '/vote/render',
    query: {
      id: props.record.id,
    },
  })
}
</script>

<template>
  <div
    class="question-item mb-12 bg-white p-12" :class="{
      disabled: isDisabled,
    }" @click="onItemClick"
  >
    <div class="flex items-center justify-between">
      <div>
        <van-text-ellipsis :content="record.voteName" />
      </div>

      <div>
        <van-tag color="#7232dd" plain>
          {{ record.stateName }}
        </van-tag>
      </div>
    </div>

    <div class="mt-8 text-5xl opacity-50">
      <van-text-ellipsis :content="record.explain" />
    </div>

    <div class="question-time">
      <van-icon name="todo-list-o" />
      {{ record.voteStartTime }} ~ {{ record.voteEndTime }}
    </div>
    <div class="question-time">
      <van-icon name="location-o" />
      {{ record.voteAddress }}
    </div>
  </div>
</template>

<style lang='less' scoped>
.question-item {
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(221, 221, 221, 0.5);
  &.disabled {
    opacity: 0.5;
  }
}

.question-time {
  opacity: 0.5;
  margin-top: 12px;
  font-size: 13px;
  &:last-child {
    margin-top: 4px;
  }
}
</style>
