<template>
  <van-dropdown-menu v-if="userStore.dropdownMenuList.length > 0">
    <van-dropdown-item :options="userStore.dropdownMenuList" @change="handleDropdownMenuItemChange">
      <template #title>可选章节</template>
    </van-dropdown-item>
  </van-dropdown-menu>

  <RouterView />
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
// import { reactive } from 'vue'
import { useUserStore } from '@/store/userStore'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

const router = useRouter()
const userStore = useUserStore()
// const state = reactive({
// value: 0
// })
// const { value } = toRefs(state)
const handleDropdownMenuItemChange = (value) => {
  router.push({ path: `/${value}` })
}
</script>

<style lang="less">
@import '@/assets/less/base.less';
</style>

<!-- <style lang="less" scoped>
@keyframes subtleFade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.subtleFade {
  animation: subtleFade 1s infinite;
}
</style> -->
