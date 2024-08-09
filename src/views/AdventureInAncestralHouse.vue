<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab v-for="item of tabs" :key="item.id" :title="item.title" />
    </van-tabs>

    <component
      :is="currentComponent"
      :isAtBottom="isAtBottom"
      @update:active="handleActiveUpdate"
    />

    <div class="audio-box">
      <van-icon :name="iconName" size="22" @click="handlePlayAudio" />
      <audio ref="audio" :src="audioSrc" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, computed, onMounted, onUnmounted,nextTick } from 'vue'
import { debounce } from '@/utils'
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
// BGM蝉鸣
import theChirpingOfCicadas from '@/assets/audio/theChirpingOfCicadas.mp3'

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
  active: '0',
  isAtBottom: false,
  iconName: 'music-o',
  audioSrc: theChirpingOfCicadas
})
const { active, tabs, isAtBottom, iconName, audioSrc } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  state.active = active
}

const currentComponent = computed(() => {
  handleScroll()
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
