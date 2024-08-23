<template>
  <div>
    <van-tabs v-show="false" v-model:active="active" @change="handleTabsChange">
      <van-tab v-for="item of tabs" :key="item.id" :title="item.title" />
    </van-tabs>

    <component :is="currentComponent" @update:active="handleActiveUpdate" @handleAutoPlay="handleAutoPlay" />

    <div class="audio-box" v-if="audioSrc">
      <van-icon :name="iconName" size="22" @click="handlePlayAudio" />
      <audio ref="audio" :src="audioSrc" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// 青云文教所
import home from '@/components/qingyunCulturalEducation/homePage.vue'
// 口味苦
import bitterTaste from '@/components/qingyunCulturalEducation/bitterTaste.vue'
// 离开文教所
import exitTheCulturalInstitute from '@/components/qingyunCulturalEducation/exitTheCulturalInstitute.vue'
// 命运分岔
// import aBifurcationOfFate from '@/components/qingyunCulturalEducation/aBifurcationOfFate.vue'
// 读信毕
import afterReadingTheLetter from '@/components/qingyunCulturalEducation/afterReadingTheLetter.vue'
// 猪脚姜
import pigTrotterCookedWithGinger from '@/components/qingyunCulturalEducation/pigTrotterCookedWithGinger.vue'
// 口味辛
import spicyTaste from '@/components/qingyunCulturalEducation/spicyTaste.vue'
// 扇子
// import fanPage from '@/components/qingyunCulturalEducation/fanPage.vue'
// BGM
import songbie from '@/assets/audio/songbie.mp3'
import tianhuayin from '@/assets/audio/0204tianhuayin.mp3'

const state = reactive({
  tabs: [
    { id: 0, title: '青云文教所' },
    { id: 1, title: '口味苦' },
    { id: 2, title: '离开文教所' },
    // { id: 3, title: '命运分岔' },
    { id: 4, title: '读信毕' },
    { id: 5, title: '猪脚姜' },
    { id: 6, title: '口味辛' }
    // { id: 7, title: '扇子' }
  ],
  active: 0,
  iconName: 'music-o',
  audioSrc: ''
})
const { active, tabs, iconName, audioSrc } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  handleTabsChange('', state.tabs[active].title)
  state.active = active
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return home
  }
  if (+state.active === 1) {
    return bitterTaste
  }
  if (+state.active === 2) {
    return exitTheCulturalInstitute
  }
  // if (+state.active === 3) {
  //   return aBifurcationOfFate
  // }
  if (+state.active === 4) {
    return afterReadingTheLetter
  }
  if (+state.active === 5) {
    return pigTrotterCookedWithGinger
  }
  if (+state.active === 6) {
    return spicyTaste
  }
  // if (+state.active === 7) {
  //   return fanPage
  // }
  return null
})
const audio = ref(null)
const handleTabsChange = (name, title) => {
  state.iconName = 'music-o'
  if (audio.value) {
    audio.value.pause()
  }
  if (audio.value) {
    audio.value.pause()
  }
  switch (title) {
    case '离开文教所':
      state.audioSrc = songbie
      break
    // case '命运分岔':
    //   state.audioSrc = tianhuayin
    //   break
    case '读信毕':
      state.audioSrc = tianhuayin
      break
    default:
      state.audioSrc = ''
      break
  }
}
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
  if (state.iconName === 'pause-circle-o') {
    return
  }
  audio.value.play()
}

// 组件挂载后添加滚动事件监听器
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  if (route.query.active) {
    state.active = +route.query.active
  }
})
</script>

<!-- <style lang="less" scoped></style> -->
