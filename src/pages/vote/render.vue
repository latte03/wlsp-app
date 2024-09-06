<script setup lang="ts">
import { showToast } from 'vant/es'
import { useRequest } from 'vue-request'
import { voteApi } from '@/api'
import type { VoteInfo } from '@/api/vote'

definePage({
  name: 'vote-render',
  meta: {
    level: 2,
    title: '投票详情',
    i18n: 'menus.voteView',
  },
})
const title = useTitle()
const route = useRoute()
const router = useRouter()
const id = route.query.id || '536861433008837645'

const formModel = ref({})
const data = ref<VoteInfo | undefined>(undefined)
const isDisabled = ref(false)
const submit = useRequest(voteApi.submit, {
  manual: true,
})

onMounted(async () => {
  const res = await voteApi.getDetail(id)
  data.value = res.data
  title.value = `${res.data?.voteName}详情`
})

async function onClickButton() {
  try {
    await submit.runAsync(id, {
      id,
      jsonData: JSON.stringify(formModel),
    })
    router.replace({
      path: '/question',
    })
  }
  catch (error) {
    showToast({
      message: error.response.data.msg,
    })
  }
}

function onVoteButtonClick(action: string) {
  // eslint-disable-next-line no-console
  console.log('%c Line:51 🍣 action', 'color:#3f7cff', action)
}
</script>

<template>
  <div class="p-16">
    <van-tag>  {{ data?.stateName }}</van-tag>
    <div class="question-name mb-16">
      <mark> {{ data?.voteName }}</mark>
    </div>
    <div class="mb-16">
      {{ data?.voteItem }}
    </div>

    <div class="mb-16" v-html="data?.explain " />
    <div class="mb-16">
      {{ data?.voteAllNums }}已参与
    </div>

    <div>
      <div class="flex">
        <div class="vote-button vote-support-button flex-center" @click="onVoteButtonClick('support')">
          支持
        </div>
        <div class="vote-button vote-opposition-button flex-center" @click="onVoteButtonClick('opposition')">
          反对
        </div>
      </div>
      <div class="opacity-50" @click="onVoteButtonClick('waiver')">
        弃权
      </div>
    </div>
    <van-action-bar v-if="!isDisabled">
      <van-action-bar-button :loading="submit.loading.value" type="danger" color="#00573d" text="立即提交" @click="onClickButton" />
    </van-action-bar>
  </div>
</template>

<style lang="less" scoped>
.question-name {
  font-size: 24px;
  font-weight: 700;
  mark {
    padding: 0;
    background-color: #ffe58f;
  }
}

.vote-button {
  height: 40px;
  width: 50%;

  background: linear-gradient(180deg, rgba(255, 148, 102, 1) 0%, rgba(235, 91, 14, 1) 100%);
}

.vote-support-button {
  border-radius: 100px 0px 0px 100px;
  background: linear-gradient(180deg, rgba(255, 148, 102, 1) 0%, rgba(235, 91, 14, 1) 100%);
}

.vote-opposition-button {
  border-radius: 0px 100px 100px 0px;
  background: linear-gradient(180deg, rgba(102, 179, 255, 1) 0%, rgba(14, 91, 235, 1) 99.83%);
}
</style>
