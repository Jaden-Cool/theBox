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
      <van-icon :name="iconName" :color="color" size="22" @click="handlePlayAudio" />
      <audio ref="audio" :src="audioSrc" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { debounce } from '@/utils'
// 渡西江
import crossTheWestRiver from '@/components/westRiver/crossTheWestRiver.vue'
// 西江阳
import theWestRiverYang from '@/components/westRiver/theWestRiverYang.vue'
// 回到现实
import backToReality from '@/components/westRiver/backToReality.vue'
// 西江阴
import backToRealityYin from '@/components/westRiver/backToRealityYin.vue'
// 暗号
import codeName from '@/components/westRiver/codeName.vue'
// BGM
import hunter from '@/assets/audio/0109hunter.mp3'

const route = useRoute()
const state = reactive({
  tabs: [
    { id: 0, title: '渡西江' },
    { id: 1, title: '西江阳' },
    { id: 2, title: '回到现实' },
    { id: 3, title: '西江阴' },
    { id: 4, title: '暗号' }
  ],
  active: 0,
  isAtBottom: false,
  iconName: 'music-o',
  audioSrc: hunter ? hunter : '',
  color: 'black'
})
const { active, tabs, isAtBottom, iconName, audioSrc, color } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  handleTabsChange('', state.tabs[active].title)
  state.active = active
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return crossTheWestRiver
  }
  if (+state.active === 1) {
    return theWestRiverYang
  }
  if (+state.active === 2) {
    return backToReality
  }
  if (+state.active === 3) {
    return backToRealityYin
  }
  if (+state.active === 4) {
    return codeName
  }
  return null
})

const handleTabsChange = (name, title) => {
  state.iconName = 'music-o'
  switch (title) {
    case '渡西江':
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
  if (route.query.active) {
    state.active = +route.query.active
  }
  window.addEventListener('scroll', debouncedHandleScroll)
})

// 组件卸载前移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
})
</script>

<!-- <style lang="less" scoped></style> -->
