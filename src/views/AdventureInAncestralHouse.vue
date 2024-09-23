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
// 祖屋奇遇
import adventureInAncestralHouseChapterOne from '@/components/adventureInAncestralHouse/chapterOne.vue'
import adventureInAncestralHouseChapterTwo from '@/components/adventureInAncestralHouse/chapterTwo.vue'
import adventureInAncestralHouseChapterThree from '@/components/adventureInAncestralHouse/chapterThree.vue'
import adventureInAncestralHouseChapterFour from '@/components/adventureInAncestralHouse/chapterFour.vue'
// 常日昳
import juvenileChapterOne from '@/components/juvenile/chapterOne.vue'
import juvenileChapterTwo from '@/components/juvenile/chapterTwo.vue'
// 常家后人
import changDescendantsChapterOne from '@/components/changDescendants/chapterOne.vue'
// 青云文社pv
import qingyunLiteratureSociety from '@/components/qingyunLiteratureSociety/chapterOne.vue'
// 橋珠酒家pv
import qiaozhuRestaurant from '@/components/qiaozhuRestaurant/chapterOne.vue'
// 红荔pv
import HONGLI from '@/components/HONGLI/chapterOne.vue'
// BGM
import chanming from '@/assets/audio/0101chanming.mp3'
import yueguangguang from '@/assets/audio/0102yueguangguang.mp3'
import jigongzai from '@/assets/audio/0103jigongzai.mp3'

const state = reactive({
  tabs: [
    { id: 0, title: '祖屋奇遇1' },
    { id: 1, title: '祖屋奇遇2' },
    { id: 2, title: '祖屋奇遇3' },
    { id: 3, title: '祖屋奇遇4' },
    { id: 4, title: '常日昳1' },
    { id: 5, title: '常日昳2' },
    { id: 6, title: '常家后人' },
    { id: 7, title: '青云文社pv' },
    { id: 8, title: '橋珠酒家pv' },
    { id: 9, title: '红荔pv' }
  ],
  active: 0,
  iconName: 'music-o',
  audioSrc: chanming ? chanming : ''
})
const { active, tabs, iconName, audioSrc } = toRefs(state)

const handleActiveUpdate = (active) => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, 500)
  state.active = active
  handleTabsChange()
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return adventureInAncestralHouseChapterOne
  }
  if (+state.active === 1) {
    return adventureInAncestralHouseChapterTwo
  }
  if (+state.active === 2) {
    return adventureInAncestralHouseChapterThree
  }
  if (+state.active === 3) {
    return adventureInAncestralHouseChapterFour
  }
  if (+state.active === 4) {
    return juvenileChapterOne
  }
  if (+state.active === 5) {
    return juvenileChapterTwo
  }
  if (+state.active === 6) {
    return changDescendantsChapterOne
  }
  if (+state.active === 7) {
    return qingyunLiteratureSociety
  }
  if (+state.active === 8) {
    return qiaozhuRestaurant
  }
  if (+state.active === 9) {
    return HONGLI
  }
  return null
})

const handleTabsChange = (name, title) => {
  state.iconName = 'music-o'
  if (audio.value) {
    audio.value.pause()
  }
  switch (title) {
    case '祖屋奇遇1':
      state.audioSrc = chanming
      break
    case '祖屋奇遇2':
      state.audioSrc = yueguangguang
      break
    case '祖屋奇遇3':
      state.audioSrc = chanming
      break
    case '常日昳1':
      state.audioSrc = jigongzai
      break
    case '常日昳2':
      state.audioSrc = chanming
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
})
</script>

<!-- <style lang="less" scoped></style> -->
