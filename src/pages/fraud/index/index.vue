<script lang="ts" setup>
import { useRequest } from 'vue-request'
import { useAssetsImageURL } from '@/composables/url-composable'

import { fraudApi } from '@/api/fraud'
// import { useUserStore } from '@/store/modules/user'
// import { isDev } from '@/utils/constant'

// import { sha } from '~build/git'
definePage({
  name: 'IndexPage',
  path: '/fraud/home',
  meta: {
    title: '首页',
    i18n: 'fraud.home',
    layout: 'tab-bar-layout',
    icon: 'tab-bar-outline-home',
    activeIcon: 'tab-bar-fill-home',
    sort: 1,
  },
})

const router = useRouter()
const banner = useAssetsImageURL('banner', { extension: '.png' })
const pt1 = useAssetsImageURL('pt1', { extension: '.png' })
const pt2 = useAssetsImageURL('pt2', { extension: '.png' })
// const userStore = useUserStore()

const { data: list } = useRequest(fraudApi.getCaseList, {
  defaultParams: [{ pageSize: 100 }],
})

const onReportCreate = () => router.push('/fraud/report/create')
</script>

<template>
  <div>
    <!-- <van-button v-if="isDev" @click="userStore.doLogion">
      login
    </van-button> -->

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img :src="banner" alt="" srcset="">
      </van-swipe-item>
    </van-swipe>

    <div class="p-16">
      <div class="alarm flex p-12" :style="{ '--bg-alarm': `url(${pt2})` }">
        <i class="icon" :style="{ '--bg-icon': `url(${pt1})` }" />

        <div class="flex-y-center flex-grow justify-between pl-8">
          <div class="mr-8 flex-grow-1">
            <div class="title">
              指尖举报
            </div>
            <div class="van-ellipsis opacity-75 text-sm-1">
              举报非法可疑诈骗行为
            </div>
          </div>

          <div>
            <van-button round type="default" size="small" @click="onReportCreate">
              我要举报
            </van-button>
          </div>
        </div>
      </div>
    </div>

    <div class="p-16">
      <div class="section-title">
        最新案例
      </div>

      <div>
        <CaseCard v-for="item in list?.records" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.icon {
  display: block;
  width: 40px;
  height: 40px;
  background: var(--bg-icon);
  background-size: 100% 100%;
}

.alarm {
  background: var(--bg-alarm);
  background-size: 100% 100%;
}

.title {
  font-size: 14px;
  font-weight: 800;
}

.section-title {
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 800;
}
</style>
