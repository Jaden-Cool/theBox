<template>
  <!-- <h1 class="center">命运分岔</h1> -->

  <div @click="handleMainBoxClick">
    <div class="paragraph">
      <p class="normal">1944年，常日昳告别了青云文教所，返乡要回到大良。一路上，他心中既有对未来的期待，也有对未知的担忧。走到西江封锁区的边缘，天色渐暗，四周寂静无声，常日昳感到一阵不安。</p>
      <p class="normal">就在此时，一个身着黄衣道袍的中年男子突然出现在他的面前。男子面容清癯，眼神深邃，似乎早已在此等待多时。</p>
      <p class="normal">“常日昳，”男子开口说道，“你父亲常惜端，与我有着过命的交情。我受你父亲常惜端所托，特地来找你。我在这里等你三天了。”</p>

      <p class="normal">“父亲？”</p>
      <p class="normal">常日昳愣住了，心中百感交集。在他心目中，父亲常惜端早就抛下他们远走高飞了。这个失踪了整整十多年，没想到竟会在这样的情况下收到父亲的消息。</p>
      <p class="normal">黄衣道人从怀中取出一封信，递给常日昳。信封上是熟悉的字迹，但是却染了血迹。常日昳接过信，小心翼翼地打开。</p>

      <p class="center">【从盒子中找出一封染血的信，从家训中求出一个字输入以继续】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <van-popover v-model:show="showPopover" :actions="actions" placement="top-start" :offset="[24, 10]" @select="onSelect">
      <template #reference>
        <div class="floating-btn">提示</div>
      </template>
    </van-popover>
  </div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
const emit = defineEmits(['update:active', 'handleAutoPlay'])

const state = reactive({
  answer: '',
  showPopover: false,
  actions: [{ text: '提示1' }, { text: '提示2' }]
})
const { answer, showPopover,actions } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '寸':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
      break
    default:
      state.answer = ''
      showToast({
        message: '答案是一个字',
        icon: 'cross'
      })
      break
  }
}
const onSelect = (action, index) => {
  if (index === 0) {
    showDialog({
      message: '提示1：难道，奶奶说的盒子底，有别的意思？'
    }).then(() => {})
  } else {
    showDialog({
      message: '提示2：其注意加粗的五个字'
    }).then(() => {})
  }
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
