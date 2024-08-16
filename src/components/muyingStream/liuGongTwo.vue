<template>
  <div style="padding-bottom: 48px">
    <!-- <h1 class="center">刘恭可红荔2</h1> -->

    <div class="paragraph">
      <p class="normal">
        你从信件中抽离出来，心中默默的替午未难过。此时，你突然感受到了一种莫名的牵引。就像是有一个人牵起了你的手一般。你随着这股力量匆匆跑到了牌坊。
      </p>
      <p class="normal">
        一阵仙风从中轴线上吹过，那股力量带着你穿过了牌坊。“错了... 这里有一朵<strong
          >盛开在鼓上的花... 错了</strong
        >... 天道也有出错的时候... 也有例外，你们凡人也应有改命的权力。找到那朵花，然后找到那一位...
        ”
      </p>
    </div>

    <div class="paragraph">
      <p class="center">【他是谁？】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <div  class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
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
    case '张果老':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 5)
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
  showDialog({ message: '观察石鼓，寻找某一朵错误的花，然后观察那朵花下方的暗八仙' }).then(() => {})
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
