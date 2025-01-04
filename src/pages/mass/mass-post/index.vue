<script lang='ts' setup>
import type { PickerColumn } from 'vant'
import { useRequest } from 'vue-request'
import { commApi } from '@/api/dict'

interface PropsType { }
defineOptions({
  name: 'MassPost',
})

const props = defineProps<PropsType>()
definePage({
  path: '/mass/mass-post',
  name: 'MassPost',
  meta: {
    layout: 'tab-bar-layout',
    title: '上报',
    icon: 'tab-bar-outline-profile',
    activeIcon: 'tab-bar-fill-profile',
    sort: 1,
  },
})
const formModel = ref({
  eventCategory: '',
  eventDescription: '',
  eventPicUrl: [],
  eventType: '',
  eventVideo: [],
  happenAddress: '',
})

const eventCategory = useRequest(commApi.getDict, {
  defaultParams: ['A23'],
  initialData: [],
})
const eventType = useRequest(commApi.getDict, {
  defaultParams: ['A24'],
  initialData: [],
})

const rules = ref({})

function onSubmit() {
  console.log('%c Line:45 🥃', 'color:#42b983', formModel.value)
  //
}
</script>

<template>
  <div class="mass-post pt-16">
    <van-form
      required="auto"
      validate-first
      scroll-to-error
      error-message-align="right"
      input-align="right"
      @submit="onSubmit"
    >
      <van-cell-group inset>
        <FormFieldPicker
          v-model="formModel.eventCategory"
          name="eventCategory"
          label="事件分组"
          placeholder="请选择"
          :rules="[{ required: true, message: '请选择事件分组' }]"
          :columns="(eventCategory.data.value as PickerColumn)"
        />
        <FormFieldPicker
          v-model="formModel.eventType"
          name="eventType"
          label="事件类型" placeholder="请选择"
          :rules="[{ required: true, message: '请选择事件类型' }]"
          :columns="(eventType.data.value as PickerColumn)"
        />
        <van-field
          v-model="formModel.eventDescription"
          type="textarea"
          rows="3"
          autosize
          name="eventDescription"
          label="事件描述"
          :rules="[{ required: true, message: '请填写事件描述' }]"
          placeholder="请填写事件描述"
        />

        <van-field name="eventPicUrl" label="图片" :rules="[{ required: true, message: '请选择图片' }]">
          <template #input>
            <FormUpload v-model="formModel.eventPicUrl" accept=".png" :max-count="3" />
          </template>
        </van-field>
        <van-field name="eventVideo" label="视频">
          <template #input>
            <FormUpload v-model="formModel.eventVideo" :max-count="3" />
          </template>
        </van-field>

        <van-field
          v-model="formModel.happenAddress"
          name="happenAddress"
          label="事发地址"
          placeholder="请填写事发地址"
          :rules="[{ required: true, message: '请填写事发地址' }]"
        />
        <!--  -->
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang='less' scoped>
.mass-post {
}
</style>
