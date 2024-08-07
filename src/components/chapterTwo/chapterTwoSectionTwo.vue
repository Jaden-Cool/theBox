<template>
  <div class="paragraph">
    <p class="normal">
      放下信件，你感受到自己额头上有些冷汗，心脏还在剧烈跳动。你尽力让自己平静下来，低头看向手里的三世书和
      常惜端的回信，内心的问题接踵而来。
    </p>

    <p class="normal">
      你并不认识一个叫常日昳的长辈，这个人若还活着，今年已该超过一百岁了。你感觉冥冥中有什么注定，让你今天挖
      出这个盒子，你尝试把自己今天的时间也代进三世书……
    </p>

    <p class="center">
      【今天是新历2024 八月十八 农历 甲辰年 【龙年】 壬申月 癸丑日
      在三世书中今天指示的三个字是什么？】
    </p>

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
    case '前缘续':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', '常家后人')
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
  showDialog({ message: '以前的人会用天干地支来对应年月日，例如这里甲辰年就是第一行，第五列' }).then(() => {})
}
</script>

<style lang="less" scoped>
.van-cell {
  padding: 8.1px;
}
/deep/.van-cell__value {
  display: flex;
  align-items: center;
}
</style>
