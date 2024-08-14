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

    <div class="audio-box" v-if="audioSrc">
      <van-icon :name="iconName" size="22" @click="handlePlayAudio" />
      <audio ref="audio" :src="audioSrc" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { debounce } from '@/utils'
// 母亲回归
import mother from '@/components/mother/homePage.vue'
// 红荔2
import hongLiBrand from '@/components/mother/hongLiBrand.vue'
// 耗壳巷
import haokeAlley from '@/components/mother/haokeAlley.vue'
// BGM
import lizhisong from '@/assets/audio/0205lizhisong.mp3'

const state = reactive({
  tabs: [
    { id: 0, title: '母亲回归' },
    { id: 1, title: '红荔2' },
    { id: 2, title: '耗壳巷' }
  ],
  active: 0,
  isAtBottom: false,
  iconName: 'music-o',
  audioSrc: ''
})
const { active, tabs, isAtBottom, iconName, audioSrc  } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  state.active = active
}

const currentComponent = computed(() => {
  handleScroll()
  if (+state.active === 0) {
    return mother
  }
  if (+state.active === 1) {
    return hongLiBrand
  }
  if (+state.active === 2) {
    return haokeAlley
  }
  return null
})

const handleTabsChange = (name, title) => {
  state.iconName = 'music-o'
  switch (title) {
    case '红荔2':
      state.audioSrc = lizhisong
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
  nextTick(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
    const clientHeight = document.documentElement.clientHeight // 元素内部可视区域的高度
    const scrollHeight = document.documentElement.scrollHeight //元素内部所有内容
    state.isAtBottom =
      scrollHeight <= clientHeight || scrollTop + clientHeight >= scrollHeight - 100
  })
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
