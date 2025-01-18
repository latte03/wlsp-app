<script lang='ts' setup>
import { useRequest } from 'vue-request'
import { type ConfigProviderThemeVars, showLoadingToast, showToast } from 'vant'
import { dataApi } from '@/api/data'

defineOptions({
  name: 'KnightClassList',
})
definePage({
  meta: {
    title: '课程报名',
  },
})
const themeVars = reactive<ConfigProviderThemeVars >({

  buttonPrimaryBackground: 'rgb(21 93 69)',
  pickerConfirmActionColor: 'rgb(21 93 69)',
  pickerCancelActionColor: 'rgb(21 93 69)',
})

const { data } = useRequest(dataApi.getClassList)

const formModel = ref({
  classId: '',
  linkName: '',
  linkPhone: '',
})

const showPicker = ref(false)
const currentClassName = ref('')

const pattern = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
const router = useRouter()

async function onSubmit() {
  const toast = showLoadingToast('报名中...')
  await dataApi.classRegister(formModel.value).finally(() => toast.close())

  showToast({
    message: '报名成功',
    type: 'success',
  })

  router.replace({
    path: '/e-station/knight-class',
  })
}

function onConfirm({ selectedValues, selectedOptions }) {
  formModel.value.classId = selectedValues[0]
  showPicker.value = false

  currentClassName.value = selectedOptions[0].name
}
</script>

<template>
  <div class="knight-class-list pt-10">
    <van-config-provider :theme-vars="themeVars">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="formModel.linkName"
            name="linkName"
            label="联系人	"
            placeholder="联系人	"
            :rules="[{ required: true, message: '请填写联系人' }]"
          />
          <van-field
            v-model="formModel.linkPhone"
            type="tel"
            name="linkPhone"
            label="联系电话	"
            placeholder="联系电话	"
            :rules="[{ required: true, message: '请填写联系电话' },
                     { pattern, message: '请输入正确内容' },
            ]"
          />
          <van-field
            v-model="currentClassName"
            is-link
            readonly
            label="课程"
            placeholder="选择课程"
            :rules="[{ required: true, message: '请选择选择课程	' }]"
            @click="showPicker = true"
          />
          <van-popup v-model:show="showPicker" destroy-on-close round position="bottom">
            <van-picker
              :model-value="[formModel.classId]"
              option-height="60px"
              :columns="data"
              :columns-field-names="{ text: 'name', value: 'id', children: 'children' }"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            >
              <template #option="option">
                <div class="flex flex-col items-center">
                  <div>  {{ option.name }}</div>
                  <span class="opacity-50 text-sm-1">{{ option.dt }}</span>
                </div>
              </template>
            </van-picker>
          </van-popup>
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </van-config-provider>
  </div>
</template>

<style lang='less' scoped>
.knight-station {
  background: #f3f3f3;
  min-height: 100vh;
}
</style>
