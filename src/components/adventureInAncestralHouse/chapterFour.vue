<template>
  <div class="paragraph" @click="handleMainBoxClick">
    <p class="normal">
      你能看到一个人在写这封信。他的表情不断变换着，时而欣喜，时而又露出担忧和焦灼之色。奋笔疾书后，他终于扫开桌上桌上几张揉成一团的草稿，捧着已然沾染了墨迹的信件，匆匆地离开。
    </p>

    <p class="center">【阅读完信件后回答以下问题】</p>
    <p class="center">不小心被覆盖的两个字是什么？</p>
    <p style="display: flex; align-items: center; justify-content: center" class="center">
      <van-cell-group inset>
        <van-field v-model="answer" />
      </van-cell-group>
      <van-button plain hairline @click="handleConfirmClick">确认</van-button>
    </p>
  </div>

  <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
const emit = defineEmits(['update:active','handleAutoPlay'])
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
    case '甘蔗':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
      break
    default:
      state.answer = ''
      showToast({
        message: '请再试一次，或看提示',
        icon: 'cross'
      })
      break
  }
}
const handleMainBoxClick = () => {
  emit('handleAutoPlay')
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '一种糖份很多，表面黄绿色的植物' }).then(() => {})
}
</script>

<!-- <style lang="less" scoped></style> -->
