<template>
  <div class="paragraph" @click="handleMainBoxClick">
    <p class="normal">放下信件，你能感到自己额上的冷汗，和胸腔内剧烈跳动的心脏。你尽力平静下来，低头看向手里的三世书和常惜端的回信，内心的种种疑惑如潮水般涌来。你并不认识一位叫“常日昳“的长辈，若此人还活着，如今该已超过一百岁了。像是冥冥中自有定数，让你今天挖出这盒子。你尝试把自己今天的时间也代进三世书……</p>

    <p class="center">【今天是新历2024 八月十七 农历 甲辰年 【龙年】 壬申月 癸丑日 在三世书中，今天指示的三个字是什么？】</p>

    <p style="display: flex; align-items: center; justify-content: center" class="center">
      <van-cell-group inset>
        <van-field v-model="answer" />
      </van-cell-group>
      <van-button plain hairline @click="handleConfirmClick">确认</van-button>
    </p>
  </div>

  <div class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
const emit = defineEmits(['update:active', 'handleAutoPlay'])

const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '前缘续':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 6)
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
    message: '前人会以天干地支对应年月日，如此处甲辰年即第一行第五列'
  }).then(() => {})
}
const handleMainBoxClick = () => {
  emit('handleAutoPlay')
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
