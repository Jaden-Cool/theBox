<template>
  <div>
    <!-- <h1 class="center">三块石头板凳故事1</h1> -->
    <div class="paragraph">
      <p class="normal">你根据地图上的孔洞来到了地点附近。你远远的看到这里的三块巨石摆成了一个三才之阵，还没接近你就能感受到一种金铁之气扑面而来。</p>
      <p class="normal">一段遥远的记忆突然涌现。</p>
    </div>

    <div class="paragraph">
      <p class="normal">“师兄，你有没有看到我啪嗒仔？”一个小女孩急急忙忙头发乱糟糟地冲了进来。</p>
      <p class="normal">什么啪嗒仔？你没反应过来。</p>
      <p class="normal">“就是那个！”师妹手放在脚下比划来比划去，你突然懂了：“噢！那个小凳子。”</p>
      <p class="normal">“什么凳子！那是我的啪嗒仔！”</p>
      <p class="normal">你大概知道为什么叫啪嗒仔，是因为那张矮凳放在地面上会啪嗒一声。鸾师妹长得不高，但是力气倒是很大，作为师父第一个招收的女弟子，平常总是需要更加小心翼翼。</p>
      <p class="normal">没有人知道她为什么对这张板凳那么情有独钟。但是没有这张板凳她根本就够不着案板。所以她在哪里板凳就会到哪里。这次小板凳失窃，恐怕又是一场莫须有的恶作剧。作为师父第一个招收的女弟子，所有人都不看好她。平常总是有些有心之人想把她用各种方法踢走。</p>
      <p class="normal">她在厨房做点心的时候，根本够不到灶台，便随身携带一张小凳子，宽大的裙摆刚好罩着凳子，使她看起来硬生生高大了一些。这次小板凳失窃，恐怕又是一场莫须有的恶作剧。</p>
      <p class="normal">“我睡醒起来之后就找不到了，会不会，就，师傅就不要我啦——”师妹几乎快哭出来了。</p>
      <p class="normal">你心里做好了最坏的打算，嘴里却说着“别急别急，还没开市，我和你去找。对了，冯沃师兄，他总是翻墙钻洞的，可能没问你就借去了也说不定。”你摸了摸师妹的乱头：“别哭了，不然你这阿鸾都要变成阿乱了。”</p>
      <p class="normal">“你才乱，这不是急得没空梳头。”鸾师妹擦了擦眼泪，一拳把日昳揍飞了两米远。</p>
    </div>

    <div class="paragraph" @click="handleAutoPlay">
      <p class="normal">这段回忆一闪而过。这里面说的到底是谁？你有些乱。此刻的你站在三块石头中间，一阵干净而清冽的感觉充满了你身体。你感觉耳朵处突然有什么通了。就像是坐飞机的时候气压变化一般。身边所有的声音一瞬间被放大了好几倍。</p>
      <p class="normal">你难过的捂着耳朵，但是却无补于事。声音仿佛是一样穿透了手掌一样。这个低频的声音怎么那么... 熟悉? 到底是哪里传来的....</p>
      <p class="normal">你放弃了抵抗，任由声音进入你的脑海。逐渐的，你在那宏大的鸣叫中听到了一段话。</p>
      <p class="center"><strong>沿路东下顺峰街，彩色鱼鳞蔽日光，</strong></p>
      <p class="center"><strong>碧波绿道地下沉，满地石碑通石门，</strong></p>
      <p class="center"><strong>海棠大鱼天上游，灵猴身后玄机奉。</strong></p>
    </div>

    <div class="center" style="margin: 26px 8px">
      <p class="center subtleFade" style="margin: 0; font-size: 16px">【根据提示找到这个地方】</p>
    </div>
    <div class="floating-btn" @click="handleFloatingBtnClick">提示</div>

    <div class="audio-box" v-if="audioSrc">
      <van-icon :name="iconName" size="22" @click="handlePlayAudio" />
      <audio ref="audio" :src="audioSrc" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
    </div>
  </div>
</template>

<script setup>
import { showDialog } from 'vant'
import { reactive, ref, toRefs, onMounted } from 'vue'
import { useUserStore } from '@/store/userStore'
import jingyu from '@/assets/audio/0302jingyu.mp3' // BGM

const userStore = useUserStore()
const state = reactive({
  iconName: 'music-o',
  audioSrc: jingyu ? jingyu : '' // BGM的Src
})
const { iconName, audioSrc } = toRefs(state)
const handleFloatingBtnClick = () => {
  showDialog({ message: '其中一只猴子后面隐藏了二维码' }).then(() => {})
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
    { text: '【二、食神之鼎】', value: 'RitualVessel?active=0' }
  ])
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
