<template>
  <div>
    <van-tabs v-model:active="active" @change="handleTabsChange">
      <van-tab v-for="item of tabs" :key="item.id" :title="item.title" />
    </van-tabs>

    <component
      :is="currentComponent"
      :isAtBottom="isAtBottom"
      @update:active="handleActiveUpdate"
      @handleAutoPlay="handleAutoPlay"
    />

    <div class="audio-box" v-if="audioSrc">
      <van-icon :name="iconName" size="22" @click="handlePlayAudio" />
      <audio ref="audio" :src="audioSrc" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref,toRefs, computed, onMounted, onUnmounted } from 'vue'
import { debounce } from '@/utils'
// 拴马桩
import circularSkyRectangularEarth from '@/components/circularSkyRectangularEarth/homePage.vue'
// 师妹结婚
import colleaguesWedding from '@/components/circularSkyRectangularEarth/colleaguesWedding.vue'
// 凤城食堂
import fengChengRestaurant from '@/components/circularSkyRectangularEarth/fengChengRestaurant.vue'
// wg时期
import theWGEra from '@/components/circularSkyRectangularEarth/theWGEra.vue'
// BGM
import hunter from '@/assets/audio/0109hunter.mp3'

const state = reactive({
  tabs: [
    { id: 0, title: '天圆地方' },
    { id: 1, title: '师妹结婚' },
    { id: 2, title: '凤城食堂' },
    { id: 3, title: 'wg时期' },
  ],
  active: 0,
  isAtBottom: false,
  iconName: 'music-o',
  audioSrc: ''
})
const { active, tabs, isAtBottom , iconName, audioSrc} = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  state.active = active
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return circularSkyRectangularEarth
  }
  if (+state.active === 1) {
    return colleaguesWedding
  }
  if (+state.active === 2) {
    return fengChengRestaurant
  }
  if (+state.active === 3) {
    return theWGEra
  }
  return null
})

const handleTabsChange = (name, title) => {
  state.iconName = 'music-o'
  switch (title) {
    case 'wg时期':
      state.audioSrc = hunter
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
  window.addEventListener('scroll', debouncedHandleScroll)
})
// 组件卸载前移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
})
</script>

<!-- <style lang="less" scoped></style> -->
