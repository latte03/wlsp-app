<script setup lang="ts">
// import { isDev } from '@/utils/constant'

// const currentRoute = useRoute()

// const routeShowHeader = computed(() => currentRoute.query.showHeader === 'true')

// const getShowHeader = computed(
//   () => isDev || (!currentRoute.meta.hiddenHeader && routeShowHeader.value),
// )
</script>

<template>
  <main class="h-screen flex-col">
    <routerView class="flex-1 overflow-x-hidden" />

    <slot />
  </main>
</template>
