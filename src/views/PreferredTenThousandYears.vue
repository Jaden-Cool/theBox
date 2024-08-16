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
// 喜万年年
import aFavorite from '@/components/preferredTenThousandYears/homePage.vue'
// 清鹂梳头
import qingLi from '@/components/preferredTenThousandYears/qingLi.vue'
// 虎口符
import tigerMouthToken from '@/components/preferredTenThousandYears/tigerMouthToken.vue'
// 寻根问祖
import traceonesRoots from '@/components/preferredTenThousandYears/traceonesRoots.vue'
// BGM
import hunli from '@/assets/audio/0207hunli.mp3'
import huahaoyueyuan from '@/assets/audio/0208huahaoyueyuan.mp3'

const userStore = useUserStore()
const state = reactive({
  tabs: [
    { id: 0, title: '喜万年年' },
    { id: 1, title: '清鹂梳头' },
    { id: 2, title: '虎口符' },
    { id: 3, title: '寻根问祖' }
  ],
  active: 0,
  iconName: 'music-o',
  audioSrc: hunli ? hunli : ''
})
const { active, tabs, iconName, audioSrc } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  handleTabsChange('', state.tabs[active].title)
  state.active = active
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return aFavorite
  }
  if (+state.active === 1) {
    return qingLi
  }
  if (+state.active === 2) {
    return tigerMouthToken
  }
  if (+state.active === 3) {
    return traceonesRoots
  }
  return null
})

const handleTabsChange = (name, title) => {
  state.iconName = 'music-o'
  if (audio.value) {
    audio.value.pause()
  }
  switch (title) {
    case '喜万年年':
      state.audioSrc = hunli
      break
    case '清鹂梳头':
      state.audioSrc = huahaoyueyuan
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
    { text: '【七、凤城大观】', value: 'MotherPage' },
    { text: '【八、戏台】', value: 'OperaStage' },
    { text: '【九、喜万年年】', value: 'PreferredTenThousandYears' }
  ])
})
</script>

<!-- <style lang="less" scoped></style> -->
