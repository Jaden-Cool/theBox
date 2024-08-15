<template>
  <!-- <h4 class="center subtleFade" @click="handleCopyClick">url:域名/{{ url }}</h4> -->
  <!-- <van-row>
    <van-col span="5">
      <van-sidebar v-model="sidebarActive" @change="handleSidebarChange">
        <van-sidebar-item v-for="item of sidebarList" :key="item.id" :title="item.title" />
      </van-sidebar>
    </van-col>

    <van-col span="19">
      <RouterView />
    </van-col>
  </van-row> -->
  <van-dropdown-menu v-if="userStore.dropdownMenuList.length > 0">
    <van-dropdown-item v-model="value" :options="userStore.dropdownMenuList">
      <template #title>可选章节</template>
    </van-dropdown-item>
  </van-dropdown-menu>

  <RouterView />
</template>

<script setup>
// import { RouterView, useRouter } from 'vue-router'
import { RouterView } from 'vue-router'
import { reactive, toRefs, onMounted } from 'vue'
import { useUserStore } from '@/store/userStore'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

// const router = useRouter()
const userStore = useUserStore()

const state = reactive({
  value: 0
})
const { value } = toRefs(state)
// const url = computed(() => {
//   return state.sidebarList?.[state.sidebarActive]?.name || ''
// })
// const handleSidebarChange = (index) => {
//   if (index >= 0 && index < state.sidebarList.length) {
//     router.push({ name: state.sidebarList[index].name })
//   } else {
//     console.error('Invalid sidebar index:', index)
//   }
// }
// const handleCopyClick = async () => {
//   try {
//     const textToCopy = `域名/${url.value}`
//     await navigator.clipboard.writeText(textToCopy)
//     showToast('已复制跳转所需的URL')
//   } catch (err) {
//     showToast('已复制跳转所需的URL')
//   }
// }
onMounted(() => {
  // const resArr = router.options.routes.map((item, index) => {
  //   const title = item.meta && item.meta.title ? item.meta.title : ''
  //   return { id: index, title, name: item.name }
  // })
  // state.sidebarList = resArr
})
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
