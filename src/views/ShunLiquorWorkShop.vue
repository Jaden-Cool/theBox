<template>
  <div>
    <van-tabs v-show="false" v-model:active="active" @change="handleTabsChange">
      <van-tab v-for="item of tabs" :key="item.id" :title="item.title" />
    </van-tabs>

    <component
      :is="currentComponent"
      :isAtBottom="isAtBottom"
      @update:active="handleActiveUpdate"
      @handleAutoPlay="handleAutoPlay"
    />
  </div>

  <div class="audio-box" v-if="audioSrc">
    <van-icon :name="iconName" size="22" @click="handlePlayAudio" />
    <audio ref="audio" :src="audioSrc" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, computed, onMounted, onUnmounted } from 'vue'
import { debounce } from '@/utils'
import { useRoute } from 'vue-router'
const route = useRoute()
import { useUserStore } from '@/store/userStore'
const userStore = useUserStore()
// 顺酒坊
import shunLiquorWorkShop from '@/components/shunLiquorWorkShop/homePage.vue'
// 口味酸
import sourTastes from '@/components/shunLiquorWorkShop/sourTastes.vue'
// 橋珠酒家结局
import theEndingOfQiaoZhuRestaurant from '@/components/shunLiquorWorkShop/theEndingOfQiaoZhuRestaurant.vue'
// BGM
import gupowu from '@/assets/audio/0201gupowu.mp3'
import xinnian from '@/assets/audio/0304xinnian.mp3'

const state = reactive({
  tabs: [
    { id: 0, title: '顺酒坊' },
    { id: 1, title: '口味酸' },
    { id: 2, title: '橋珠酒家结局' }
  ],
  active: 0,
  isAtBottom: false,
  iconName: 'music-o',
  audioSrc: ''
})
const { active, tabs, isAtBottom, iconName, audioSrc } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  state.active = active
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return shunLiquorWorkShop
  }
  if (+state.active === 1) {
    return sourTastes
  }
  if (+state.active === 2) {
    return theEndingOfQiaoZhuRestaurant
  }
  return null
})

const handleTabsChange = (name, title) => {
  state.iconName = 'music-o'
  switch (title) {
    case '口味酸':
      state.audioSrc = gupowu
      break
    case '橋珠酒家结局':
      state.audioSrc = xinnian
      break
    default:
      state.audioSrc = ''
      break
  }
}
const audio = ref(null)
const handlePlayAudio = () => {
  if (state.iconName === 'music-o' || state.iconName === 'pause-circle-o') {
    audio.value.play()
  } else {
    audio.value.pause()
  }
}
const onPlay = () => {
  state.iconName = 'play-circle-o'
}
const onPause = () => {
  state.iconName = 'pause-circle-o'
}
const handleAutoPlay = () => {
  if (!audio.value) {
    return
  }
  audio.value.play()
}

// 滚动事件处理函数
const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = document.documentElement.scrollHeight

  // 首先检查内容是否足够长以产生滚动条
  if (scrollHeight <= clientHeight) {
    // 如果没有滚动条，直接设置 isAtBottom 为 true
    state.isAtBottom = true
  } else {
    // 如果有滚动条，则根据滚动位置判断
    state.isAtBottom = scrollTop + clientHeight >= scrollHeight - 100 // 假设距离底部100px时认为已到底部
  }

  // 判断是否滚动到底部（这里可以根据需要调整阈值）
  state.isAtBottom = scrollTop + clientHeight >= scrollHeight - 100 // 假设距离底部100px时认为已到底部
}
// 防抖函数
const debouncedHandleScroll = debounce(handleScroll, 500) // 等待时间为500毫秒
// 组件挂载后添加滚动事件监听器
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  if (route.query.active) {
    state.active = +route.query.active
  }
  window.addEventListener('scroll', debouncedHandleScroll)
  userStore.updateDropdownMenuList({ text: '顺酒坊', value: 'ShunLiquorWorkShop' })
})
// 组件卸载前移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
})
</script>

<!-- <style lang="less" scoped></style> -->
