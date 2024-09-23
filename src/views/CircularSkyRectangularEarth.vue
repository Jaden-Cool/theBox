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
import { useUserStore } from '@/store/userStore'

// 天圆地方
import circularSkyRectangularEarth from '@/components/circularSkyRectangularEarth/homePage.vue'
// 师妹结婚
import colleaguesWedding from '@/components/circularSkyRectangularEarth/colleaguesWedding.vue'
// 凤城食堂
import fengChengRestaurant from '@/components/circularSkyRectangularEarth/fengChengRestaurant.vue'
// wg时期
import theWGEra from '@/components/circularSkyRectangularEarth/theWGEra.vue'
// BGM
import hunter from '@/assets/audio/0109hunter.mp3'

const userStore = useUserStore()
const state = reactive({
  tabs: [
    { id: 0, title: '天圆地方' },
    { id: 1, title: '师妹结婚' },
    { id: 2, title: '凤城食堂' },
    { id: 3, title: 'wg时期' }
  ],
  active: 0,
  iconName: 'music-o',
  audioSrc: ''
})
const { active, tabs, iconName, audioSrc } = toRefs(state)

const handleActiveUpdate = (active) => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, 500)
  handleTabsChange('', state.tabs[active].title)
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
  if (audio.value) {
    audio.value.pause()
  }
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
  if (state.iconName === 'pause-circle-o') {
    return
  }
  audio.value.play()
}

// 组件挂载后添加滚动事件监听器
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  userStore.updateDropdownMenuList([
    { text: '【一、曲水湾鹊桥】', value: 'QuShuiBay' },
    { text: '【二、食神之鼎】', value: 'RitualVessel?active=0' },
    { text: '【三、三块石头】', value: 'TheStoryOfThreeStonesAndAbench' },
    { text: '【四、拴马桩】', value: 'HorseTiePost' },
    { text: '【五、半闲亭】', value: 'HorseTiePost?active=9' },
    { text: '【六、天圆地方】', value: 'CircularSkyRectangularEarth' }
  ])
})
</script>

<!-- <style lang="less" scoped></style> -->
