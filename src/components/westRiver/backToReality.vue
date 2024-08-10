<template>
  <div>
    <h1 class="center">回到现实</h1>

    <div class="paragraph">
      <p class="normal">你眼前一黑，胸口传来尖锐的疼痛。我...这就死了？</p>
      <p class="normal">你环顾四周，你仍然在青云研究所，原来回忆已经结束了。</p>
      <p class="normal">
        你再三确认你没事以后，深深呼了一口气，却发现身上莫名充满了力气。而原本在你口袋中，中华食鼎的方形纸片竟然开始飞舞，在空中解体，然后又<strong>重新拼接成了一个小了一圈的正方形</strong>。纸片的背后却形成了一套新的字。你原本就觉得
        “中华食鼎” 四个字有点歪歪扭扭的，看来此时它才是<strong>正确的状态</strong>。
        <strong>一小块多出来的纸片</strong>飘落到了你的脚旁，你都没有发现。
      </p>
      <p class="center">【有两个字改变了，改变前后加起来四个字就是下一个目的地的指引】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
  </div>

  <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs, defineProps } from 'vue'
const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '右行石门':
      showDialog({
        message: '从青云研究所出去后，往右行，寻找石门'
      }).then(() => {})
      break
    case '石门右行':
      showDialog({
        message: '从青云研究所出去后，往右行，寻找石门'
      }).then(() => {})
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
  showDialog({
    message: '拿出中华食鼎的纸片，沿着黑色条纹撕开，重新拼好。背面内容会有所改变'
  }).then(() => {})
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
