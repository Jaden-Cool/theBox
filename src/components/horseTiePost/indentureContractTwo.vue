<template>
  <h1 class="center">卖身契2</h1>

  <div class="paragraph">
    <p class="normal">
      “三币，围困，古龙，仙地，现？三币围，困古龙，仙地现？”
      你在排列组合着这九个字，从中得出的内容都稍微有些不一样。既然是要寻根，那么就是要寻找一个地方。但是没有地图的话怎么办呢？
    </p>
    <p class="normal">
      就在你准备放弃之际，你突然发现不止是这栋小楼有彩色的窗口，旁边的小屋也有。你带着这卖身契走进了青云研究所，一幅顺德县地图就静静的挂在墙上，仿佛在等待你的到来一般。
    </p>
    <p class="center">——————————</p>

    <p class="center"><strong>【用卖身契上的九字诗词，找到一个两个字的地点】</strong></p>
    <p style="display: flex; align-items: center; justify-content: center" class="center">
      <van-cell-group inset>
        <van-field v-model="answer" />
      </van-cell-group>
      <van-button plain hairline @click="handleConfirmClick">确认</van-button>
    </p>
  </div>

  <!-- <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div> -->
</template>

<script setup>
// import { showToast, showDialog } from 'vant'
import { showToast } from 'vant'
// import { reactive, toRefs, defineEmits, defineProps } from 'vue'
import { reactive, toRefs, defineEmits } from 'vue'
const emit = defineEmits(['update:active'])
// const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '大罗':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 12)
      break
    case '大罗村':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 12)
      break
    default:
      state.answer = ''
      showToast({
        message: '卖身契上也有诗句作为指引',
        icon: 'cross'
      })
      break
  }
}
// const handleFloatingBtnClick = () => {
//   showDialog({ message: '蓝色彩色玻璃上寻找九枚钱币，其中钱币会圈出九个字' }).then(() => {})
// }
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
