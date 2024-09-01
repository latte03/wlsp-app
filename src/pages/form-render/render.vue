<script setup lang="ts">
import { showToast } from 'vant/es'
import { useRequest } from 'vue-request'
import { getQuestion, submitQuestion } from '@/api'

definePage({
  name: 'form-render',
  meta: {
    level: 2,
    title: '问卷详情',
    i18n: 'menus.formRenderView',
  },
})

const route = useRoute()
const router = useRouter()
const id = route.query.id

const formJson = ref()
const formData = ref({})
const vFormRef = ref(null)
const optionData = ref({})

const isDisabled = ref(false)
const submit = useRequest(submitQuestion, {
  manual: true,
})

onMounted(async () => {
  const res = await getQuestion(id)
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
      path: '/form-render',
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
    <vm-form-render v-if="formJson" ref="vFormRef" :form-json="formJson" :form-data="formData" :option-data="optionData" />
    <van-action-bar v-if="!isDisabled">
      <van-action-bar-button :loading="submit.loading.value" type="danger" color="#00573d" text="立即提交" @click="onClickButton" />
    </van-action-bar>
  </div>
</template>
