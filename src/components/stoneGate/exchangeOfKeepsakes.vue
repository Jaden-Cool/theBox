<template>
  <!-- <h1 class="center">更迭信物</h1> -->

  <div>
    <div class="paragraph">
      <p class="normal">
        他，终于显现出具体的形象，说是具体，但是其实也并不准确——他身上的黝黑的道袍整洁而宽大，整个人较为消瘦，你刚想看清他的样貌，发现他的面容竟在随时变化，一会儿是孩童的脸，一会儿是耄耋老人，一会儿是英俊少年，一会儿是富态龙钟。你认出了刚刚其中一张脸，竟然就是那个卖猪仔饼那卖饼人。
      </p>
      <p class="normal">
        “刘恭可，幻象中的人，可是我太爷？” 你隐隐已经有些猜测，为了确认，此时忍不住先发问了。
      </p>
      <p class="normal">
        刘恭可深深的朝你鞠了一躬："四方贵人，猜得没错，此人正是你常家先人，常日昳是也。"
      </p>
      <p class="normal">
        老道继续说道：“我出身正一，乃修道之人，关于我来这的原因，你继续往后跟着你太爷遗物的指引便知。现今，你只需着手解决面前之事即可，那就是救你太爷一命。”
      </p>
      <p class="normal">你愣了愣：“我？我怎么救，太爷不是死了吗？”</p>
      <p class="normal">
        “贫道有法可作，但是需要贵人，你的相助。 事不宜迟，你太爷的情况刻不容缓。”
      </p>
      <p class="normal">刘恭可双手摆成了一个奇怪的姿势，袋子中的【访客地图】再一次飞了出来。</p>
      <p class="center">“先不要打开，等我做法。”</p>
      <div class="center">
        循环往复为
        <p style="display: inline-block; margin: 0; color: #bf5950">赤圆</p>
        ，旁寻
        <p style="display: inline-block; margin: 0; color: #73a2d5">镬耳屋</p>
        之眼。
      </div>
      <div class="center">
        <p style="display: inline-block; margin: 0; color: #da9f36">金针</p>
        穿过
        <p style="display: inline-block; margin: 0; color: red">柒</p>
        缘殿，寻窗为口入隔间。
      </div>
      <p class="center"><strong>信</strong>物成于危难前，紫瑞聚顶生机现。</p>
    </div>
    <div class="paragraph">
      <p class="center">【前往提示之处，取出相应信物，解开天机，输入四个数字以继续】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <!-- <div  class="floating-btn" @click="handleFloatingBtnClick">提示</div> -->
    <van-popover
      v-model:show="showPopover"
      :actions="actions"
      placement="top-start"
      :offset="[24, 10]"
      @select="onSelect"
    >
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
const { answer, showPopover, actions } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '1944':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 2)
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
// const handleFloatingBtnClick = () => {
//   showDialog({
//     message:
//       '拿出未打开好的访客地图，按照诗词的内容操作，会到达一个比较高的建筑物。在那里拿出曾经用过的某样信物'
//   }).then(() => {})
// }
const onSelect = (action, index) => {
  if (index === 0) {
    showDialog({
      message: '提示1：【访客地图】在关闭的状态下，按照诗词的内容操作，注意颜色，最终会引导你到达一个比较高的建筑物。在那里拿出曾经用过的某样信物。'
    }).then(() => {})
  } else {
    showDialog({
      message: '提示2：拿出口信，在紫光灯的照耀下看到“生死”两个字。圈出所有生死，结合原本带口的字，形成一个新的数字。'
    }).then(() => {})
  }
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
