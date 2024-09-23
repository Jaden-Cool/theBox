<template>
  <div>
    <van-tabs v-show="false" v-model:active="active" @change="handleTabsChange">
      <van-tab v-for="item of tabs" :key="item.id" :title="item.title" />
    </van-tabs>

    <component :is="currentComponent" @update:active="handleActiveUpdate" @handleAutoPlay="handleAutoPlay" />
  </div>

  <div class="audio-box" v-if="audioSrc">
    <van-icon :name="iconName" size="22" @click="handlePlayAudio" />
    <audio ref="audio" :src="audioSrc" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, computed, onMounted } from 'vue'
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
  if (audio.value) {
    audio.value.pause()
  }
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
  userStore.updateDropdownMenuList([
    { text: '【一、曲水湾鹊桥】', value: 'QuShuiBay' },
    { text: '【二、食神之鼎】', value: 'RitualVessel?active=0' },
    { text: '【三、三块石头】', value: 'TheStoryOfThreeStonesAndAbench' },
    { text: '【四、拴马桩】', value: 'HorseTiePost' },
    { text: '【五、半闲亭】', value: 'HorseTiePost?active=9' },
    { text: '【六、天圆地方】', value: 'CircularSkyRectangularEarth' },
    { text: '【七、顺酒坊】', value: 'ShunLiquorWorkShop' }
  ])
})
</script>

<!-- <style lang="less" scoped></style> -->
