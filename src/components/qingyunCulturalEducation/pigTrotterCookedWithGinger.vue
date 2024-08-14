<template>
  <!-- <h1 class="center">猪脚姜</h1> -->

  <div>
    <div class="paragraph">
      <p class="normal">再出现的画面，便是许久之后了。</p>
      <p class="normal">
        这是个清凉且安静的夜晚，日昳独自地坐在医院病房里，旁边的阅读灯给他提供了足够的灯光。他面前的小桌板上放着你手中的折扇，他喃喃自语，仿佛在和自己说话，又好像在和你说话。
      </p>
      <p class="center">仿佛在等待一个回复，老人停顿了一阵，终于松了一口气。</p>
      <p class="normal">
        “我希望可以把我的一些秘密告诉他人。我没有刘天师那么超然，也做不到我爹那般坚决。我对你有过很多期待，但是临到书写时，我才放下执念。当年生死相交之际，冥冥中我曾悟到些什么，但有生之年怕是难以见到那副模糊的场景。
      </p>
      <p class="normal">
        今天，我第一次看到了你。你就那么两个手掌大，你是我抱过最轻，又最重的东西。我当时就知道了。你一定就是我的有缘人。因为我早已讲过你了小家伙。就在那生死之间。
      </p>
      <p class="normal">
        虽然我身体已经不太能吃太刺激的东西，嘿嘿，原来神仙也会得胃癌啊。但我还是偷偷的让你奶奶给我偷偷地盛了一小煲猪脚姜。”
      </p>
      <p class="normal">
        他的声音温和而坚定，带着对未来的期望和对后代的关爱。你看着他专注的神情，感受着那份沉甸甸的责任和深厚的爱意。
      </p>
      <p class="normal">
        “我这一生，经历了不少很多风风雨雨。见过太多不公平的事情，无论是天灾还是人祸，一路上磕磕碰碰。哎呀，但是吃到这猪脚姜的那一刻，感觉一切都值了。”
      </p>
      <p class="center">【输入此时午未尝到的味道】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
const emit = defineEmits(['update:active', 'handleAutoPlay'])
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
    case '辣':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 6)
      break
    case '辛':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 6)
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
const handleFloatingBtnClick = () => {
  showDialog({ message: '五味之一' }).then(() => {})
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
