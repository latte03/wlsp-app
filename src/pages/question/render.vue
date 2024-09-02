<script setup lang="ts">
import { showToast } from 'vant/es'
import { useRequest } from 'vue-request'
import { getQuestion, submitQuestion } from '@/api'
import type { QuestionRecord } from '@/api/question'

definePage({
  name: 'form-render',
  meta: {
    level: 2,
    title: '问卷详情',
    i18n: 'menus.questionView',
  },
})
const title = useTitle()
const route = useRoute()
const router = useRouter()
const id = route.query.id || '536861433008837645'

const formJson = ref()
const formData = ref({})
const vFormRef = ref(null)
const optionData = ref({})
const data = ref<QuestionRecord | undefined>(undefined)
const isDisabled = ref(false)
const submit = useRequest(submitQuestion, {
  manual: true,
})

onMounted(async () => {
  const res = await getQuestion(id)
  data.value = res.data
  title.value = `${res.data.name}详情`
  if (!res.data.jsonConfig) {
    return
  }

  formJson.value = JSON.parse(res.data.jsonConfig)
  if (res.data.communityQuestionUser) {
    formData.value = JSON.parse(res.data.communityQuestionUser.jsonData)
    isDisabled.value = true
  }
})

watch(
  [isDisabled, vFormRef],
  ([disabled, formRef]) => {
    if (!formRef)
      return

    if (disabled) {
      formRef.disableForm()
    }
  },

)

function onClickButton() {
  vFormRef.value?.getFormData().then(async (formData) => {
    // Form Validation OK

    await submit.runAsync(id, {
      id,
      jsonData: JSON.stringify(formData),
    })
    router.replace({
      path: '/question',
    })
  }).catch((error) => {
    // Form Validation failed
    showToast({
      message: error.response.data.msg,
    })
  })
}
</script>

<template>
  <div class="p-16">
    <div class="question-name mb-16">
      {{ data?.name }}
    </div>
    <div class="mb-16" v-html="data?.content " />
    <vm-form-render v-if="formJson" ref="vFormRef" :form-json="formJson" :form-data="formData" :option-data="optionData" />
    <van-action-bar v-if="!isDisabled">
      <van-action-bar-button :loading="submit.loading.value" type="danger" color="#00573d" text="立即提交" @click="onClickButton" />
    </van-action-bar>
  </div>
</template>

<style lang="less" scoped>
.question-name {
  font-size: 16px;
}
</style>
