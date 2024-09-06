<script setup lang="ts">
import { useRequest } from 'vue-request'
import { fraudApi } from '@/api/fraud'
import { getAppConfig } from '@/api'

defineOptions({
  name: 'ProfilePage',
})
definePage({
  path: '/fraud/profile',
  name: 'ProfilePage',
  meta: {
    layout: 'tab-bar-layout',
    title: '我的',
    icon: 'tab-bar-outline-profile',
    activeIcon: 'tab-bar-fill-profile',
    sort: 3,
  },
})
useTitle('反诈 | 我的')

const router = useRouter()
const { data } = useRequest(fraudApi.getReportClue)
const appConfig = useRequest(getAppConfig)
// eslint-disable-next-line no-console
console.log('%c Line:23 🍷 appConfig', 'color:#ed9ec7', appConfig)

function onGuid() {

}

function toRouter() {
  router.push('/fraud/profile/books')
}
</script>

<template>
  <div class="px-16 pt-16">
    <WithAvatar />

    <div class="pt-16">
      <van-grid :column-num="3">
        <van-grid-item>
          <div>{{ data?.total }}</div>
          <div>指尖举报</div>
        </van-grid-item>
        <van-grid-item>
          <div>{{ data?.clueTotal }}</div>
          <div>线索提供</div>
        </van-grid-item>
        <van-grid-item>
          <div>{{ data?.telTotal }}</div>
          <div>号码标注</div>
        </van-grid-item>
      </van-grid>
    </div>

    <div>
      <van-grid :column-num="2">
        <van-grid-item>
          <div>音频录制</div>
        </van-grid-item>
        <van-grid-item @click="toRouter">
          <div>反炸手册</div>
        </van-grid-item>
      </van-grid>
    </div>

    <div>
      <van-cell-group>
        <van-cell icon="location-o" title="反馈与帮助" is-link to="/fraud/profile/help">
          <template #icon>
            <SvgIcon
              name="cell-icon-help"
              style="width: 24px; height: 24px; margin-right: 8px; color: #f5a623"
            />
          </template>
        </van-cell>
        <van-cell title="联系社区" :value="appConfig.data.value?.data.contact">
          <template #icon>
            <SvgIcon
              name="cell-icon-connect"
              style="width: 24px; height: 24px; margin-right: 8px; color: #7ed321"
            />
          </template>
        </van-cell>
        <van-cell title="社区导航" :value="appConfig.data.value?.data.communityName" is-link @click="onGuid">
          <template #icon>
            <SvgIcon
              name="cell-icon-location"
              style="width: 24px; height: 24px; margin-right: 8px; color: #4a90e2"
            />
          </template>
        </van-cell>
        <!-- <van-cell title="长辈版" is-link>
          <template #icon>
            <SvgIcon
              name="cell-icon-old"
              style="width: 24px; height: 24px; margin-right: 8px; color: #8576da"
            />
          </template>
        </van-cell> -->
      </van-cell-group>
    </div>
  </div>
</template>
