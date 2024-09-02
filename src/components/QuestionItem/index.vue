<script lang='ts' setup>
import dayjs from 'dayjs'
import type { QuestionRecord } from '@/api/question'

interface PropsType {
  record: QuestionRecord
}
defineOptions({
  name: 'QuestionItem',
})
const props = defineProps<PropsType>()
const router = useRouter()
const isDisabled = computed(() => {
  const now = dayjs()

  const startTime = dayjs(props.record.startTime)
  const endTime = dayjs(props.record.endTime)

  return !(now.isAfter(startTime) && now.isBefore(endTime))
})

function onItemClick() {
  if (isDisabled.value)

    return

  router.push({
    path: '/question/render',
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
        <van-text-ellipsis :content="record.name " />
      </div>

      <div>
        <van-tag color="#7232dd" plain>
          {{ record.stateName }}
        </van-tag>
      </div>
    </div>

    <div class="question-time">
      <van-icon name="todo-list-o" />
      {{ record.startTime }} ~ {{ record.endTime }}
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
}
</style>
