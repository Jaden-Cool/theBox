<template>
  <h1 class="center">更迭信物</h1>

  <div class="paragraph">
    <p class="normal">
      刘恭可终于显现出具体的形象，说是具体，但是其实也并不准确——他身上的黝黑的道袍整洁而宽大，整个人较为消瘦，你刚想看清他的样貌，发现他的面容竟在随时变化，一会儿是孩童的脸，一会儿是耄耋老人，一会儿是英俊少年，一会儿是富态龙钟。你认出了刚刚其中一张脸，竟然就是那个卖猪仔饼那饼家。
    </p>
    <p class="normal">“幻象中的人，可是我太爷？”你隐隐中有些猜测，为了确认，此时忍不住先发问了。</p>
    <p class="normal">刘恭可深深的朝你鞠了一躬："贵人，猜得没错，此人正是你常家先人。"</p>
    <p class="normal">
      老道继续说道：“我出身正一，乃修道之人，关于我来这的原因，你继续往后跟着你太爷遗物的指引便知。你此时只需知道一件事情即可，那就是救你太爷一命。”
    </p>
    <p class="normal">你愣了愣：“我？我怎么救，太爷不是死了吗？”</p>
    <p class="normal">
      “这便先需要到正确的阴阳交界之地，并找到因果交替的信物，我来做法，你可有什么显现地形的图纸？”
    </p>
    <p class="normal">你看了看身上刚好拿了的一份欢乐海岸访客地图，递给了刘恭可。</p>
    <p class="center"><strong>“先不要打开，等我做法。”</strong></p>
    <p class="center"><strong>循环往复为赤圆，旁寻镬耳屋之眼。</strong></p>
    <p class="center"><strong>金针穿过机缘现。寻窗为口入隔间。</strong></p>
    <p class="center"><strong>信物成于危难前，紫瑞聚顶生机现。</strong></p>

    <p class="center">【前往提示之处，取出相应信物，解开天机，输入四个数字以继续】</p>
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
    case '1944':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
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
    message:
      '拿出未打开好的访客地图，按照诗词的内容操作，会到达一个比较高的建筑物。在那里拿出曾经用过的某样信物'
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
