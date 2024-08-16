<template>
  <div>
    <div class="paragraph">
      <p class="normal">
        搜索“曲水湾鹊桥底”，你惊讶地发现，这个位置是顺德华侨城旗下一个旅游区内。告别奶奶，你驱车来到欢乐海岸PLUS。
      </p>

      <p class="normal">
        跟随着手机的定位来到曲水湾鹊桥下，清凉的风刮起阵阵涟漪，黑天鹅正在引吭高歌。正值盛夏，你却感到一丝秋天的气息。
      </p>
    </div>

    <div class="paragraph">
      <p class="center">涟漪荡起，水波幻化，水上出现了一行字。</p>
      <p class="center">
        <strong>祸源所载，遇水方现。</strong>
      </p>
    </div>

    <p class="center subtleFade" style="margin: 0;">取出【白色硬质方卡】操作，</p>
    <p class="center subtleFade" style="margin: 0 0 26px 0;">出现的四字即为下一个地点。</p>


    <div class="floating-btn" @click="handleFloatingBtnClick">提示</div>

    <div class="audio-box" v-if="audioSrc">
      <van-icon :name="iconName" size="22" @click="handlePlayAudio" />
      <audio ref="audio" :src="tiane" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
    </div>
  </div>
</template>

<script setup>
import { showDialog } from 'vant'
import { reactive, toRefs, ref, onMounted } from 'vue'
import { useUserStore } from '@/store/userStore'
// BGM
import tiane from '@/assets/audio/0104tiane.mp3'

const userStore = useUserStore()
const state = reactive({
  iconName: 'music-o',
  audioSrc: tiane ? tiane : ''
})
const { iconName, audioSrc } = toRefs(state)

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

const handleFloatingBtnClick = () => {
  showDialog({
    message:
      '将写有提示的方卡浸入水中（请注意安全），背后便会出现四个字。前往指示之地。【用完以后，卡不要丢掉哦】'
  }).then(() => {})
}

onMounted(() => {
  userStore.updateDropdownMenuList({ text: '曲水湾鹊桥', value: 'QuShuiBay' })
})
</script>

<style lang="less" scoped>
@keyframes subtleFade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.subtleFade {
  animation: subtleFade 1s infinite;
}
</style>
