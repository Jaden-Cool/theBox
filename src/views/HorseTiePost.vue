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
import { reactive, ref, toRefs, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import { debounce } from '@/utils'
// 拴马桩
import horseTiePost from '@/components/horseTiePost/homePage.vue'
// 六六大顺
import luckySixes from '@/components/horseTiePost/luckySixes.vue'
// 入门考核
import entryLevelAssessment from '@/components/horseTiePost/entryLevelAssessment.vue'
// 拜师正式考核
import formalAssessment from '@/components/horseTiePost/formalAssessment.vue'
// 拜师答复
import responseToApprenticeshipRequest from '@/components/horseTiePost/responseToApprenticeshipRequest.vue'
// 橋珠酒家
import qiaozhuRestaurant from '@/components/horseTiePost/qiaozhuRestaurant.vue'
// 橋珠酒家火劫
import qiaoZhuRestaurantWasGuttedInAfire from '@/components/horseTiePost/qiaoZhuRestaurantWasGuttedInAfire.vue'
// 师妹故事
import myYoungerMartialArtsDisciplesStory from '@/components/horseTiePost/myYoungerMartialArtsDisciplesStory.vue'
// 冯满离开
import fengManLeft from '@/components/horseTiePost/fengManLeft.vue'
// 橋珠酒家刘恭可
import liuGongKe from '@/components/horseTiePost/liuGongKe.vue'
// 卖身契1
import indentureContractOne from '@/components/horseTiePost/indentureContractOne.vue'
// 卖身契1
import indentureContractTwo from '@/components/horseTiePost/indentureContractTwo.vue'
// 大罗村
import daluoVillage from '@/components/horseTiePost/daluoVillage.vue'
// 广东银行
import guangDongBank from '@/components/horseTiePost/guangDongBank.vue'
// BGM
import lianbing from '@/assets/audio/0303lianbing.mp3'
import Fire from '@/assets/audio/0107Fire.mp3'

const state = reactive({
  tabs: [
    { id: 0, title: '拴马桩' },
    { id: 1, title: '六六大顺' },
    { id: 2, title: '入门考核' },
    { id: 3, title: '拜师正式考核' },
    { id: 4, title: '拜师答复' },
    { id: 5, title: '橋珠酒家' },
    { id: 6, title: '橋珠酒家火劫' },
    { id: 7, title: '师妹故事' },
    { id: 8, title: '冯满离开' },
    { id: 9, title: '橋珠酒家刘恭可' },
    { id: 10, title: '卖身契1' },
    { id: 11, title: '卖身契2' },
    { id: 12, title: '大罗村' },
    { id: 13, title: '广东银行' }
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
    return horseTiePost
  }
  if (+state.active === 1) {
    return luckySixes
  }
  if (+state.active === 2) {
    return entryLevelAssessment
  }
  if (+state.active === 3) {
    return formalAssessment
  }
  if (+state.active === 4) {
    return responseToApprenticeshipRequest
  }
  if (+state.active === 5) {
    return qiaozhuRestaurant
  }
  if (+state.active === 6) {
    return qiaoZhuRestaurantWasGuttedInAfire
  }
  if (+state.active === 7) {
    return myYoungerMartialArtsDisciplesStory
  }
  if (+state.active === 8) {
    return fengManLeft
  }
  if (+state.active === 9) {
    return liuGongKe
  }
  if (+state.active === 10) {
    return indentureContractOne
  }
  if (+state.active === 11) {
    return indentureContractTwo
  }
  if (+state.active === 12) {
    return daluoVillage
  }
  if (+state.active === 13) {
    return guangDongBank
  }
  return null
})

const handleTabsChange = (name, title) => {
  state.iconName = 'music-o'
  switch (title) {
    case '橋珠酒家':
      state.audioSrc = lianbing
      break
    case '橋珠酒家火劫':
      state.audioSrc = Fire
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
