<script lang="ts" setup>
import type { Publicize } from '@/api/fraud/fraud'
import { clearHTMLText } from '@/utils'

interface PropsType {
  item: Publicize
}
defineOptions({
  name: 'CaseCard',
})
const props = defineProps<PropsType>()

const router = useRouter()

function onCLick() {
  router.push({
    path: `/fraud/post/case/${props.item.id}`,
  })
}
</script>

<template>
  <div class="case-card w-full p-12" @click="onCLick">
    <div class="case-card-title mb-8">
      {{ item.title }}
    </div>
    <div class="case-card-content w-full">
      <div class="case-card-body mb-8 w-full flex">
        <div class="case-card-text van-multi-ellipsis--l3 mr-8 flex-grow opacity-75">
          {{ clearHTMLText(item.content) }}
        </div>
        <div class="case-card-cover flex-shrink-0">
          <van-image
            height="100%"
            width="100%"
            :src="item?.img"
            :alt="item.title"
            srcset=""
            class="h-full w-full"
          />
        </div>
      </div>
      <div class="case-card-footer mt-8 opacity-50">
        <span>{{ item.updatedTime }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.case-card-title {
  font-size: 14px;
  font-weight: 800;
}

.case-card-cover {
  display: inline-block;
  width: 100px;
  height: 67px;

  img {
    width: 100%;
  }
}

.case-card {
  overflow: hidden;
  /* stylelint-disable-next-line scale-unlimited/declaration-strict-value */
  background-color: #fff;
  border-radius: 4px;

  & + .case-card {
    margin-top: 2px;
  }
}
</style>
