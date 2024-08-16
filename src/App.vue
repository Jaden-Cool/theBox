<template>
  <van-dropdown-menu v-if="userStore.dropdownMenuList.length > 0">
    <van-dropdown-item :options="userStore.dropdownMenuList" @change="handleDropdownMenuItemChange">
      <template #title>已解锁章节</template>
    </van-dropdown-item>
  </van-dropdown-menu>

  <RouterView />
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

const router = useRouter()
const userStore = useUserStore()
const handleDropdownMenuItemChange = (value, active) => {
  router.push({ path: `/${value}`, query: { active } })
}
</script>

<style lang="less">
@import '@/assets/less/base.less';
</style>
