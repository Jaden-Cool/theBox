<template>
  <div>
    <!-- <h1 class="center">橋珠酒家火劫</h1> -->

    <div class="paragraph" @click="handleMainBoxClick">
      <p class="normal">好景不长，民国二十七年，九月初二，霜降当天。温度跌至冰点，早上的白蜡石上都是白色的霜。广州失守，日寇入侵顺德，整个城镇笼罩在战火的阴霾中。橋珠酒家也未能幸免。</p>

      <p class="normal">那天傍晚，日军闯入橋珠酒家，气势汹汹地要求老板龙拜丹交出所有的现金。龙拜丹早有准备，他提前将家中那只通人性的狼狗阿财送给了日军的领队，试图以此换取酒家的平安。他也将柜台里的现金全数交出，日军领队冷冷地接过现金以后离开了。尽量表现出顺从和恭敬。但事情并未如他所愿的了结。</p>
    </div>

    <div class="paragraph">
      <p class="center">
        <van-image fit="contain" :src="fire" @click="showImagePreview({ images: [fire], showIndex: false })" />
        <strong style="color: red;font-size: 28px;">火！！</strong>
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">那天晚上，我本该和阿鸾一起在厨房备料，但白天忙了一整天，我忍不住偷了个懒，早早回了宿舍。正当我迷迷糊糊快要入睡时，突然闻到了一股刺鼻的焦糊味。我猛然坐起身来，透过窗子看到外面火光映红了半边天。</p>

      <p class="normal">“糟了！着火了！”我心里一紧，立刻冲出宿舍。一路狂奔到酒楼门口，火势已经铺天盖地，热浪直扑面门。我心里一下子就悬了起来——阿鸾还在厨房里！</p>

      <p class="normal">没多想，我抓起挂在墙边的蓑衣，快速泼了几桶水，把它湿透后披在身上，心中只有一个念头：</p>

      <p class="center"><strong>救人！</strong></p>

      <p class="center">我一头扎进了火海。</p>

      <p class="normal">烟雾呛得我直咳嗽，眼睛也被熏得睁不开。厨房的门已经被火焰吞噬，我踢开残破的门板，冲了进去。透过浓烟，我看到阿鸾倒在灶台旁，手还紧紧抓着一个木勺。我心头一沉，赶紧上前把她抱了起来。</p>

      <p class="normal">她昏迷不醒，身体软软的，脸上满是烟灰。我轻轻拍了拍她的脸，“阿鸾，醒醒！”她却毫无反应。我来不及多想，赶紧把她背在肩上，冲向出口。</p>

      <p class="normal">火焰在我身旁跳跃，热浪一波接一波地袭来，灼烧着我的皮肤。我知道时间不多了，每一步都像是在刀尖上行走，但我不能停下来，阿鸾的命就在我手里。</p>

      <p class="normal">当我终于冲出火场，凉风迎面扑来，我才意识到身上的蓑衣早就烧没了，自己全身都已经湿透，不知是汗水还是水渍。把阿鸾放在地上，我急忙检查她的呼吸，虽然微弱，但还在。我心里一松，紧绷的神经这才稍稍放下。</p>

      <p class="normal">忽然，我想到阿鸾最珍爱的啪嗒仔还留在里面——那个她视若珍宝的小木凳。可我已经没有力气再回去找了。火势越来越大，酒楼的木梁在火焰中噼啪作响，似乎随时都会坍塌。</p>

      <p class="normal">师兄和师傅们听到动静都赶了过来，忙着扑灭火势。可我只觉得一阵虚弱，身体像是被掏空了般，坐倒在地上，头顶的夜空显得如此遥远而寂静。</p>

      <p class="normal">那一夜，火光和恐惧深深地烙在我的心中。桥珠酒楼，那个承载着我们无数记忆的地方，就这样在火焰中化为灰烬。</p>

      <p class="normal">那一夜，火光和恐惧深深地烙在我的心中。桥珠酒楼，那个承载着我们无数记忆的地方，就这样在火焰中化为灰烬。</p>
    </div>

    <div class="paragraph">
      <p class="center">【三世书中，今日是哪三个字】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <div class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog,showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import fire from '@/assets/images/fire.png'
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
    case '人心齐':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 7)
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
  showDialog({ message: '戊寅年 【虎年】 壬戌月 己丑日' }).then(() => {})
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
