<template>
  <div style="padding-bottom: 48px">
    <h1 class="center">喜万年年</h1>

    <div class="paragraph">
      <p class="normal">
        1954年，随着新时代的到来，白驹班声名日隆，班主白驹荣决定带戏班回香港发展，不再回来。而已然成为台柱之一的红荔自然也在其中，这让午未心急如焚。
      </p>

      <p class="normal">
        眼看离别在即，常午未终于意识到红荔的去留并不由他决定。他下定决心带着聘书去戏班求亲，并赎回红荔的卖身契。
      </p>

      <p class="normal">
        然而，白驹荣和靓少凤对他的提亲提出苛刻条件：要在橋珠酒家设宴五十桌，宴请全顺德所有戏班，还要求常午未亲手制作两百斤喜饼。
      </p>

      <p class="normal">
        距离红船离开仅剩四天，常午未四处寻找帮助。黄师傅也发派徒弟到处替午未借钱。此时大良资源并不富裕，就算勉强备齐了猪油和面粉等原料，仅剩四天的时间根本做不出那么多喜饼。
      </p>

      <p class="normal">
        经打听，他们得知勒流东方饭店的何林师傅家中有个私家炉子。自从公私合营以后再也少了开火。常午未前往求助，何林师傅被他的真情打动，动员全家一起帮他这个大忙。
      </p>

      <p class="normal">
        在昏黄灯光下，他们忙碌着，揉面、上酥、包馅，烘烤，每一步都认真仔细。“金眼风“所有师兄弟也挤在小房间里一起给何林师傅打下手。
      </p>

      <p class="center">——————————</p>

      <p class="normal">
        婚宴当天，橋珠酒家一片喜气洋洋。常午未和李清鹂的爱情故事早已传遍大良，吸引了众多宾客前来观礼。白驹荣的女儿白雪仙也从香港赶来，场面更显热闹。
        靓少凤对这场婚礼本就戒备重重，婚宴的规模和热度更增添了他的压力。
      </p>

      <p class="normal">
        宾客们翘首以盼，等待常午未兑现承诺。终于，在七点半，常午未和兄弟们挑着喜饼，浩浩荡荡现身婚宴门口。常午未坦诚地对靓少凤说：“饼没做够，我只好准备了一些饼券，既然我答应了你请所有宾客吃喜饼，我一定能做到。”
      </p>

      <p class="normal">
        尽管喜饼未如数制作，白驹荣看到常午未的诚意和众宾客的期待，心终于软了。他笑着拍了拍常午未的肩膀，宣布：“饼券就饼券吧，只要红荔幸福，我就放心了。”
      </p>

      <p class="normal">
        白驹荣在台上高声宣布：“这桩婚事！这批礼饼！我白驹荣在各位见证下收货，开席！”随着红荔的卖身契化成纸片，婚礼正式开始。
      </p>

      <p class="normal">这场婚礼开始得像一场闹剧，但最终成为了粤剧界的一段佳话。</p>

      <p class="center">【在广东，结婚的礼数有十三个步骤。送喜饼上新娘家是哪一个步骤？】</p>

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
    case '过大礼':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      setTimeout(() => {
        showDialog({
          message: '用【饼劵】在喜万年年饼家前台兑换喜饼一个粘粘喜气吧！',
          confirmButtonText: '继续故事',
          showCancelButton: true
        }).then(() => {
          emit('update:active', 1)
        })
      }, 3000)
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
  showDialog({ message: '在店内可以找到答案' }).then(() => {})
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
