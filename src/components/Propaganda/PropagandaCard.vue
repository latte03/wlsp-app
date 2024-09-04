<script lang="ts" setup>
import type { Publicize } from '@/api/fraud/fraud'

interface PropsType {
  item: Publicize
  type: string
}
defineOptions({
  name: 'PropagandaCard',
})
const props = defineProps<PropsType>()
const router = useRouter()

function onPostClick() {
  router.push({
    path: `/fraud/post/${props.type}/${props.item.id}`,
  })
}
</script>

<template>
  <div
    class="van-hairline--bottom propaganda-card flex-y-center justify-between bg-white px-12 py-12"
    @click="onPostClick"
  >
    <div class="mr-8 flex-grow">
      <div class="py-12">
        {{ item.title }}
      </div>
      <div class="opacity-50">
        <span>{{ item.updatedTime }}</span>
      </div>
    </div>

    <div class="h-56px w-100px">
      <van-image height="100%" width="100%" :src="item.img" :alt="item.title" />
    </div>
  </div>
</template>
