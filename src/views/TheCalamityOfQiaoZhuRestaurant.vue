<template>
  <div>
    <!-- <h1 class="center">橋珠酒家的劫难</h1> -->

    <div class="paragraph" @click="handleAutoPlay(1)">
      <p class="normal">你伸手触碰了这块烧焦的木板，一阵炙热的回忆涌入脑内。</p>
      <p class="normal">1938年，九月初二，霜降。日寇入侵顺德，整个城镇笼罩在战火的阴霾中。橋珠酒家也未能幸免。</p>
      <p class="normal">龙拜丹仍在刚才的侥幸之中没回过神，就在刚才，他将家中那只通人性的狼狗阿财送给了日军的领队，试图以此换取酒家的平安。还将柜台里的现金全数交出，尽量表现出顺从和恭敬。日军领队冷冷地接过现金以后离开了。</p>
      <p class="normal">日军当晚竟然下令放火焚烧橋珠酒家！熊熊火蛇迅速地吞噬了酒家里的一切。不到一炷香的时间，整个酒家已化作一片火海。</p>
      <p class="normal">龙拜丹看着酒家化为灰烬，心如刀割。橋珠酒家不仅是他的生计，更是他的心血所在。更让他崩溃的是，酒家内其实还藏有一个只有他和冯科知道的保险箱，。里面存放着他多年积攒的积蓄，也在火海中付之一炬。</p>
      <p class="normal">在大火烧完后，冯科第一个冲进了废墟中寻找那个保险箱，可惜当他打开了箱子时，里面曾经价值百万的各种纸张证明都已化为灰烬。</p>
    </div>

    <div class="paragraph" @click="handleAutoPlay(2)">
      <p class="normal">当火被完全扑灭的时候，天已经大亮了。常日昳原本的生活是平淡的，他没有什么远大的志向，也不想参与那些复杂的江湖争斗。他只想着每天在橋珠酒家跑跑腿，算算账，偶尔偷吃些糕点，日子虽不富贵，却也安稳。他原打算就这样舒舒服服地过一生，娶一个普普通通的姑娘，过点简单而温馨的小日子。</p>
      <p class="normal">但橋珠酒家的这场大火，彻底撕碎了他心中的那份安宁。亲眼看着火焰吞噬了一切，常日昳意识到，自己再也无法回到过去的那种安逸中去了。他曾幻想的美好生活，在那场火中化为了灰烬。仇恨和愤怒像藤蔓一样缠绕在他的心头。</p>
      <p>瓦砾中满脸黝黑的冯科骂骂咧咧地朝着四顾茫然的其他师傅喊道 “天跌落来当被冚（盖），那些@#￥@都还没死绝，我们哀嚎什么？天无绝人之路！”</p>
      <p class="normal">“顺德一定得！” 日昳带头站在残垣断壁里朝着天空大喊。</p>
      <p class="normal">“顺德！” 冯科带头也呼喝道</p>
      <p class="normal">“一定得！” 所有人挥拳回应道。</p>
      <p class="center"><strong>顺德 一定得</strong></p>
    </div>

    <div class="paragraph">
      <p class="center">【当年顺德最著名的三大酒楼一夜之间被烧成了平地，堪称顺德餐饮业的忌日。像橋珠酒家那样后来东山再起的屈指可数。现实这并没有把这些顽强的人打败，这就是顺德精神。取出一颗金钉和一张红纸，在此留下你自己对于未来的心愿吧】</p>
      <p class="center">【顺德眼的出口商店有金笔可以借用 】</p>

      <p class="center" style="margin: 0"><strong>十二月，</strong></p>
      <p class="center" style="margin: 0"><strong>无人会，</strong></p>
      <p class="center" style="margin: 0"><strong>失交臂，</strong></p>
      <p class="center" style="margin: 0 0 26px 0"><strong>视不见，人坐下</strong></p>
    </div>

    <div class="paragraph">
      <p class="center">【组成四个字】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <!-- <div v-show="isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div> -->

    <van-popover v-model:show="showPopover" :actions="actions" placement="top-start" :offset="[24, 10]" @select="onSelect">
      <template #reference>
        <!--  -->
        <div class="floating-btn">提示</div>
      </template>
    </van-popover>

    <div class="audio-box" v-if="audioSrc">
      <van-icon :name="iconName" size="22" @click="handlePlayAudio" />
      <audio ref="audio" :src="audioSrc" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
    </div>
  </div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, ref, toRefs, onMounted } from 'vue'
import { useUserStore } from '@/store/userStore'
const userStore = useUserStore()
// BGM
import fire from '@/assets/audio/0107Fire.mp3'
import zhongguoren from '@/assets/audio/0108zhongguoren.mp3'

const state = reactive({
  answer: '',
  iconName: 'music-o',
  audioSrc: fire ? fire : '',
  showPopover: false,
  actions: [{ text: '提示1' }, { text: '提示2' }]
})
const { answer, iconName, audioSrc, showPopover, actions } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '青云文社':
      showDialog({
        message: '前往③内的青云研究所'
      })
      break
    default:
      showToast({
        message: '不正确，请再试一次，或者考虑一下看提示哦~',
        icon: 'cross'
      })
      break
  }
}
// const handleFloatingBtnClick = () => {
//   showDialog({ message: '每三个字为一个字谜，最后六个字是一个字的两个部分' }).then(() => {})
// }
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
const handleAutoPlay = (flag) => {
  if (!audio.value) {
    return
  }
  if (+flag === 1) {
    state.audioSrc = fire
  } else {
    state.audioSrc = zhongguoren
  }
  audio.value.play()
}

const onSelect = (action, index) => {
  if (index === 0) {
    showDialog({
      message: '提示1：每三个字为一个字谜，最后六个字是一个字的两个部分'
    }).then(() => {})
  } else {
    showDialog({
      message: '提示2：十二加月写作青，交字失去双臂是文'
    }).then(() => {})
  }
}

// 组件挂载后添加滚动事件监听器
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })

  userStore.updateDropdownMenuList([
    { text: '【一、曲水湾鹊桥】', value: 'QuShuiBay' },
    { text: '【二、食神之鼎】', value: 'RitualVessel?active=0' },
    { text: '【三、三字经】', value: 'ThreeWordPrimer' },
    { text: '【四、烧焦木板】', value: 'TheCalamityOfQiaoZhuRestaurant' }
  ])
})
</script>

<style lang="less" scoped>
.van-cell {
  padding: 8.1px;
}
:deep(.van-cell__value) {
  display: flex;
  align-items: center;
}
</style>
