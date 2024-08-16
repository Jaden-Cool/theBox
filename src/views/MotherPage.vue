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
// 母亲回归
import mother from '@/components/mother/homePage.vue'
// 红荔2
import hongLiBrand from '@/components/mother/hongLiBrand.vue'
// 耗壳巷
import haokeAlley from '@/components/mother/haokeAlley.vue'
// BGM
import lizhisong from '@/assets/audio/0205lizhisong.mp3'

const userStore = useUserStore()
const state = reactive({
  tabs: [
    { id: 0, title: '母亲回归' },
    { id: 1, title: '红荔2' },
    { id: 2, title: '耗壳巷' }
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
  if (audio.value) {
    audio.value.pause()
  }
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
    { text: '【三、姑婆屋】', value: 'RitualVessel?active=10' },
    { text: '【四、适适轩】', value: 'RitualVessel?active=11' },
    { text: '【五、沐英涧】', value: 'MuyingStream' },
    { text: '【六、石船】', value: 'MuyingStream?active=2' },
    { text: '【七、凤城大观】', value: 'MotherPage' }
  ])
})
</script>

<!-- <style lang="less" scoped></style> -->
