<template>
  <h4 class="center subtleFade" @click="handleCopyClick">url:域名/{{ url }}</h4>
  <van-row>
    <van-col span="5">
      <van-sidebar v-model="sidebarActive" @change="handleSidebarChange">
        <van-sidebar-item v-for="item of sidebarList" :key="item.id" :title="item.title" />
      </van-sidebar>
    </van-col>

    <van-col span="19">
      <RouterView />
    </van-col>
  </van-row>
  <!-- <RouterView /> -->
</template>

<script setup>
// import { RouterView, useRouter } from 'vue-router'
import { RouterView, useRouter } from 'vue-router'
import { reactive, toRefs, onMounted, computed } from 'vue'
import { showToast } from 'vant'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
const router = useRouter()
const state = reactive({
  sidebarActive: 0,
  sidebarList: []
})
const { sidebarActive, sidebarList } = toRefs(state)
const url = computed(() => {
  return state.sidebarList?.[state.sidebarActive]?.name || ''
})
const handleSidebarChange = (index) => {
  if (index >= 0 && index < state.sidebarList.length) {
    router.push({ name: state.sidebarList[index].name })
  } else {
    console.error('Invalid sidebar index:', index)
  }
}
const handleCopyClick = () => {
  showToast('已复制跳转所需的URL')
  navigator.clipboard.writeText(`域名/${url.value}`)
}
onMounted(() => {
  const resArr = router.options.routes.map((item, index) => {
    const title = item.meta && item.meta.title ? item.meta.title : ''
    return { id: index, title, name: item.name }
  })
  state.sidebarList = resArr
})
</script>

<style lang="less">
@import '@/assets/less/base.less';
</style>

<style lang="less" scoped>
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
</style>
