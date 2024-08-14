<template>
  <div>
    <van-tabs v-model:active="active" @change="handleTabsChange">
      <van-tab v-for="item of tabs" :key="item.id" :title="item.title" />
    </van-tabs>

    <component
      :is="currentComponent"
      :isAtBottom="isAtBottom"
      @update:active="handleActiveUpdate"
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
// 食神之鼎
import home from '@/components/ritualVessel/homePage.vue'
// 食神之鼎青云
import branchOne from '@/components/ritualVessel/branchOne.vue'
// 口味甜
import sweetTaste from '@/components/ritualVessel/sweetTaste.vue'
// 云
import theStoryOfCloud from '@/components/ritualVessel/theStoryOfCloud.vue'
// 食神之鼎酒家
import branchTwo from '@/components/ritualVessel/branchTwo.vue'
// 母亲离开
import myMotherHasLeft from '@/components/ritualVessel/myMotherHasLeft.vue'
// 三块石头1
import threeRocks from '@/components/ritualVessel/threeRocks.vue'
// 食神之鼎红荔
import branchThree from '@/components/ritualVessel/branchThree.vue'
// 搬家
import moveHouse from '@/components/ritualVessel/moveHouse.vue'
// 沙头村1
import shatouVillage from '@/components/ritualVessel/shatouVillage.vue'
// 姑婆屋
import auntiesHouse from '@/components/ritualVessel/auntiesHouse.vue'
// 扒龙船1
import loongBoatRacing from '@/components/ritualVessel/loongBoatRacing.vue'
// 灰雕
import greyCarving from '@/components/ritualVessel/greyCarving.vue'
// 红荔1
import hongLiBrand from '@/components/ritualVessel/hongLiBrand.vue'
// BGM
import caiyunzhuiyue from '@/assets/audio/0105caiyunzhuiyue.mp3'
import gupowu from '@/assets/audio/0201gupowu.mp3'

const state = reactive({
  tabs: [
    { id: 0, title: '食神之鼎' },
    { id: 1, title: '食神之鼎青云' },
    { id: 2, title: '口味甜' },
    { id: 3, title: '云' },
    { id: 4, title: '食神之鼎酒家' },
    { id: 5, title: '母亲离开' },
    { id: 6, title: '三块石头1' },
    { id: 7, title: '食神之鼎红荔' },
    { id: 8, title: '搬家' },
    { id: 9, title: '沙头村1' },
    { id: 10, title: '姑婆屋' },
    { id: 11, title: '扒龙船1' },
    { id: 12, title: '灰雕' },
    { id: 13, title: '红荔1' }
  ],
  active: 0,
  isAtBottom: false,
  iconName: 'music-o',
  audioSrc: caiyunzhuiyue ? caiyunzhuiyue : ''
})
const { active, tabs, isAtBottom, iconName, audioSrc } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  state.active = active
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return home
  }
  if (+state.active === 1) {
    return branchOne
  }
  if (+state.active === 2) {
    return sweetTaste
  }
  if (+state.active === 3) {
    return theStoryOfCloud
  }
  if (+state.active === 4) {
    return branchTwo
  }
  if (+state.active === 5) {
    return myMotherHasLeft
  }
  if (+state.active === 6) {
    return threeRocks
  }
  if (+state.active === 7) {
    return branchThree
  }
  if (+state.active === 8) {
    return moveHouse
  }
  if (+state.active === 9) {
    return shatouVillage
  }
  if (+state.active === 10) {
    return auntiesHouse
  }
  if (+state.active === 11) {
    return loongBoatRacing
  }
  if (+state.active === 12) {
    return greyCarving
  }
  if (+state.active === 13) {
    return hongLiBrand
  }
  // if (+state.active === 4) {
  //   return threeWordPrimer
  // }
  return null
})
const handleTabsChange = (name, title) => {
  state.iconName = 'music-o'
  switch (title) {
    case '食神之鼎':
      state.audioSrc = caiyunzhuiyue
      break
    case '食神之鼎青云':
      state.audioSrc = caiyunzhuiyue
      break
    case '食神之鼎酒家':
      state.audioSrc = caiyunzhuiyue
      break
    case '食神之鼎红荔':
      state.audioSrc = caiyunzhuiyue
      break
    case '姑婆屋':
      state.audioSrc = gupowu
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
