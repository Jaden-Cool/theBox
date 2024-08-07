<template>
  <div class="paragraph">
    <p class="normal">
      你能看到一个人在写这封信。他一会儿欣喜，一会儿脸上露出些许担忧的神色；桌子上已经有了好几张揉成了一团的草稿，
      看得出十分纠结，以至于慌忙之中墨迹洒在纸上都没发现，便寄了出去。
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
import { reactive, toRefs, defineEmits, defineProps } from 'vue'
const emit = defineEmits(['update:active'])
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
        message: '不正确，请再试一次，或者考虑一下看提示哦~',
        icon: 'cross'
      })
      break
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '一种糖份很多的黑色植物' }).then(() => {})
}
</script>

<!-- <style lang="less" scoped></style> -->
