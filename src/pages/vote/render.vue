<script setup lang="ts">
import { showToast } from 'vant/es'
import { useRequest } from 'vue-request'
import { voteApi } from '@/api'
import type { VoteInfo } from '@/api/vote'

enum ActionEnum {
  waiver,
  support,
  opposition,
}

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

const voteType = computed(() => {
  return data.value?.communityVoteUser.voteType
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

async function onVoteButtonClick(action: string) {
  if (data?.value?.communityVoteUser)
    return
  await voteApi.submit(id, {
    voteType: ActionEnum[action],
  })

  router.replace('/vote')
}
</script>

<template>
  <div class="p-16">
    <van-tag type="primary">
      {{ data?.stateName }}
    </van-tag>
    <div class="question-name mb-16">
      <mark> {{ data?.voteName }}</mark>
    </div>
    <div class="mb-16 opacity-75">
      {{ data?.voteItem }}
    </div>

    <div class="mb-16 text-14px opacity-50" v-html="data?.explain " />
    <div class="mb-8 text-14px opacity-50">
      <van-icon name="friends-o" class="text-16px!" /> {{ data?.voteAllNums }}已参与
    </div>

    <div class="mb-8 text-14px opacity-50">
      <van-icon name="underway-o" class="text-16px!" /> {{ data?.voteStartTime }} ~
      {{ data?.voteEndTime }}
    </div>

    <div class="voted-buttons" :class="{ 'is-voted': data?.communityVoteUser }">
      <div class="flex gap-4">
        <div :class="{ 'is-checked': voteType === ActionEnum.support }" class="vote-text vote-button vote-support-button flex-center" @click="onVoteButtonClick('support')">
          支持
        </div>
        <div :class="{ 'is-checked': voteType === ActionEnum.opposition }" class="vote-text vote-button vote-opposition-button flex-center" @click="onVoteButtonClick('opposition')">
          反对
        </div>
      </div>
      <div :class="{ 'is-checked': voteType === ActionEnum.waiver }" class="vote-text mt-8 pt-16 text-center opacity-50" @click="onVoteButtonClick('waiver')">
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
  font-size: 26px;
  font-weight: 700;
  mark {
    padding: 0;
    background-color: #ffeeb6;
  }
}

.vote-button {
  height: 56px;
  width: 50%;
  color: #fff;
  background: linear-gradient(180deg, rgba(255, 148, 102, 1) 0%, rgba(235, 91, 14, 1) 100%);
}

.vote-support-button {
  border-radius: 100px 16px 16px 100px;
  background: linear-gradient(180deg, rgb(255, 120, 61) 0%, rgba(235, 91, 14, 1) 100%);
  box-shadow: 0 4px 12px rgba(235, 91, 14, 0.3);
}

.vote-opposition-button {
  border-radius: 16px 100px 100px 16px;
  background: linear-gradient(180deg, rgb(71, 163, 255) 0%, rgba(14, 91, 235, 1) 99.83%);
  box-shadow: 0 4px 12px rgba(14, 91, 235, 0.3);
}

.voted-buttons.is-voted {
  opacity: 0.5;

  .vote-text {
    width: 0;
    display: none;
  }
  .is-checked {
    flex: 1;
    border-radius: 100px;
    display: flex;
  }
}
</style>
