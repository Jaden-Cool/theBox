<template>
  <div style="padding-bottom: 48px">
    <h1 class="center">灰雕</h1>

    <div class="paragraph">
      <p class="normal">
        “金眼风”的作坊堆满了各种奇形怪状的木材和半完成品。十多个已经入门徒弟都在有条不紊的对木材进行着各种加工。
      </p>

      <p class="normal">
        和想象的不一样，这里并不单纯的做木雕，更多的还是各种定制的生活用品。从筷子笼到凸雕食盒，从锄头把子到通雕屏风，最日常和最奢华的各种东西都无分贵贱的摆放在了一起。
      </p>
      <p class="normal">墙上多余的空间还挂着各种水墨，山水画，西洋画，甚至还有一些小人书的剪片。</p>
      <p class="normal">
        金眼风还没有正式收常日昳为徒，却默许了徒弟们自发地教授这位小子一些基本功。貌似所有进门的弟子都会受到同一套教导。
      </p>
      <p class="normal">
        黄朔风的徒弟们看着面前这个年仅七岁的孩子，眼中闪烁着好奇和关爱。他们决定从最基础的观察力训练开始，帮助常日昳逐步掌握斗木技艺。
      </p>
      <p class="normal">
        “日昳，斗木的技艺不仅仅在于动手，也要动脑和动眼。”其中一位年长的徒弟说道，他叫刘大成，是黄朔风的大徒弟。他带着日昳来到门外，走到了旁边黄师傅的大宅前，“你仔细看看，能告诉我这个门廊上的灰雕有什么特别之处吗？”
      </p>
      <p>
        <van-image
          fit="contain"
          :src="reliefSculpture"
          @click="showImagePreview({ images: [reliefSculpture], showIndex: false })"
        />
      </p>
      <p class="normal">日昳哪懂那么多啊，胡乱的编了一个答案出来。</p>
      <p class="normal">“师傅信风水，也信命格，他自家宅院的装饰自然也暗合天道和命理。师傅是水命，所以我们每个徒弟都要会水。日昳，你记住，眼尖如针，心细如尘，人直如尺。要先从观察生活中最普通日常开始。懂了天道，你自然也会到万物最美的一面。</p>
      <p class="normal">你面前的这六幅灰雕也是出自师傅之手，我来给你讲解讲解。”</p>

      <p class="center">【找出那藏了暗八仙的特殊灰雕，输入几朵大花从左到右的三个颜色】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
      <van-popup v-model:show="show">
        <img src="@/assets/images/ironCrutchLi.jpeg" alt="" />
      </van-popup>
    </div>
    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog,showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import reliefSculpture from '@/assets/images/reliefSculpture.png'
const emit = defineEmits(['update:active'])
const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  answer: '',
  show: false
})
const { answer, show } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '蓝红黄':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      setTimeout(() => {
        state.show = true
      }, 3000)
      setTimeout(() => {
        emit('update:active', 13)
      }, 10000)
      break
    default:
      state.answer = ''
      showToast({
        message: '不正确，请再试一次，或者考虑一下看提示哦~',
        icon: 'cross'
      })
      break
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '寻找带有葫芦的那一块灰雕' }).then(() => {})
}
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
