<template>
  <div>
    <h1 class="center">三字经</h1>

    <div class="paragraph">
      <p class="normal center">
        晕？匀？云？青云？青云塔？到底什么意思啊这？
      </p>
      <p class="normal center">
        <strong style="font-size: 26px">当——当——当——</strong>
      </p>
      <p class="normal">
        外面的铜鼎传出了一阵金铁之声，就像一个洪钟一般。随着三声钟鸣声，你隐约听到了一阵读书声。这文章是那么的耳熟，到底是什么呢？
      </p>

      <p class="center">【输入三字答案以继续】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
  </div>
  <div  class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
// import { showToast, showImagePreview, showDialog } from 'vant'
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
// import morseCode from '@/assets/images/morseCode.png'
const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '三字经':
      showDialog({ message: '前往地图③字处，寻找【金色三字经】' }).then(() => {})
      break
    default:
      state.answer = ''
      showToast({
        message: '注意聆听背景音乐的内容',
        icon: 'cross'
      })
      break
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '注意聆听背景音乐的内容' }).then(() => {})
  // showImagePreview({ images: [morseCode], showIndex: false })
}
</script>
