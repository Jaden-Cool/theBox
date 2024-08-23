<template>
  <div @click="handleMainBoxClick">
    <!-- <h1 class="center">离开文教所</h1> -->

    <div class="paragraph">
      <p class="normal">1944某天午饭过后，高年级的孩子们在台上表演赖子英老师写的话剧，旁边围着五六十个十一二岁的学生们正兴高采烈的围坐在一起观看。</p>

      <p class="normal">不知不觉已经一年了。 常日昳交代好了自己的工作，准备离开。他最后与赵百则打了声招呼，背起行囊，准备悄悄离开。尽管不舍，他知道自己已经完成了使命，是时候前往新的旅程了。</p>

      <p class="normal">就在常日昳走到校门口，准备离开的时候，台上的高年级学生们忽然站成一排，齐声喊道：“常师傅，再见！”</p>

      <p class="normal">常日昳内心五味杂陈，他们前不久都还是一些任性难哄的纨绔子弟，现在却无比懂事。常日昳感受着手中军用水壶的温热和情谊。他深吸一口气，双手放在嘴边扯着喉咙喊道：</p>

      <p class="center">“孩子们，在这个最黑暗的年代里面，你们要成为最亮也是最旺的一团火！你们一定会照亮更多人的人生，而那些人也会照亮更多的人。你们要诚实，要勇敢，要顽强，要抗争 ！这青云之魂势必会成为那燎原之火！”</p>

      <p class="center">说罢，日昳转头藏起泪水，踏上了归家之路。</p>
    </div>

    <div class="paragraph">
      <p class="normal">1944年，常日昳告别了青云文教所，返乡要回到大良。一路上，他心中既有对未来的期待，也有对未知的担忧。走到西江封锁区的边缘，天色渐暗，四周寂静无声，常日昳感到一阵不安。</p>
      <p class="normal">就在此时，一个身着黄衣道袍的中年男子突然出现在他的面前。男子面容清癯，眼神深邃，似乎早已在此等待多时。</p>
      <p class="normal">“常日昳，”男子开口说道，“你父亲常惜端，与我有着过命的交情。我受你父亲常惜端所托，特地来找你。我在这里等你三天了。”</p>

      <p class="normal">“父亲？”</p>
      <p class="normal">常日昳愣住了，心中百感交集。在他心目中，父亲常惜端早就抛下他们远走高飞了。这个失踪了整整十多年，没想到竟会在这样的情况下收到父亲的消息。</p>
      <p class="normal">黄衣道人从怀中取出一封信，递给常日昳。信封上是熟悉的字迹，但是却染了血迹。常日昳接过信，小心翼翼地打开。</p>
    </div>

    <div class="paragraph">
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
import { reactive, toRefs } from 'vue'
import { showToast, showDialog } from 'vant'
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
    case '寸':
      showToast({
        message: '在那个艰难的年代，每一条生命都无比脆弱',
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
// const handleContinueClick = () => {
//   showDialog({
//     message: '在那个艰难的年代，每一条生命都无比脆弱',
//     confirmButtonText: '继续故事',
//     showCancelButton: true
//   }).then(() => {
//     emit('update:active', 3)
//   })
// }
const handleMainBoxClick = () => {
  emit('handleAutoPlay')
}
</script>

<style lang="less" scoped>
@keyframes subtleFade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.subtleFade {
  animation: subtleFade 1s infinite;
}
</style>
