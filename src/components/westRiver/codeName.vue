<template>
  <div class="main-box">
    <!-- <h1 class="center">暗号</h1> -->

    <div class="paragraph">
      <p class="normal">
        “好。装恶人可太难为我了”
        这高大的男人长出一口气，然后把刀子入了鞘。“你们迟了足足半个小时你知道吗？我们以后就是同事了。我叫赵百则，一百则书的百，一百则书的则。我都以为你们遇难了哈哈哈，吓死我了。你好，你叫什么？”
      </p>
      <p class="normal">
        赵百则滔滔不绝的说着，手上一刻不停的招呼着两人走向了窦口圩。日昳还是第一次见到说话那么快的人，紧张感顿消。蔡尓洪也看他有趣，跟着叽叽喳喳的说个不停。
      </p>
      <p class="normal">
        天终于大亮，他们重新与已经出发了的一群孩子汇合。他们的目的地是远在四会的陸村。
      </p>
      <p class="normal">
        接下来的几天，他们走村串巷，依靠当地村民的接应和帮助，才得以顺利前行。每到一个村庄，村民们总是热情地招待他们，为孩子们提供食物和温暖的住所。
      </p>
      <p class="normal">
        今天接应他们的是三个年迈的村代表，三位老农热情地为他们准备了一锅绵软的番薯粥和油角。这粥里面有重新捣碎的油饼（也就是榨油剩下的大豆渣滓）。看着身边这些曾经养尊处优的孩子们狼吞虎咽地吃着，常日昳却在一旁默默地出神了。曾几何时他们家也是几天才能勉强吃上一碗能立筷的粥，他突然很想念阿妈的鱼腐。他已经很久没有这么饿过了，但是多日的强行军让他一点胃口都没有。
      </p>
      <p class="normal">
        老农叹了口气，拍了拍他的肩膀，“小伙子，吃吧，今日年初二，村子里啊，开油锅啦，村子里都在吃煎堆呢。难得有点油水进肚子，以后你们进山里可就更难啦...
        趁着现在，就算吃不进去也塞一点。”
      </p>
      <p class="normal">
        常日昳有些迟疑地点了点头。拿起一碗粥就吸溜了一口。一股陈旧的油抑味直冲天庭，吃惯了橋珠酒家伙食的日昳差一点把口中的粥重新吐了出来。日昳马上知道了老农在骗他。油饼是榨油剩下的残渣，从这个味道吃起来已经至少有几年了。要是真的有那油去炸煎堆，这油饼不应该是这个味道。如此说......
        这里可能就是村子里最后的余粮了。
      </p>
      <p class="normal">
        日昳用舌头卷着粥，努力避开着自己的味蕾，强忍着恶心，一口一口把这油饼粥往肚子里吞。战乱期间，法币当道，物价乱涨，，一担子米可以换两条人命。
      </p>
      <p class="center">
        接下来的日子还要在深山老林里面养活两百多个人，日昳此刻才体会到周之贞院长身上的重担。。
      </p>
    </div>

    <div class="paragraph">
      <div style="display: flex; align-items: center; margin: 28px 0 0 28px">
        <p style="margin: 0 16px 0 36px">2-081</p>
        <p style="margin: 0">&nbsp;陈显良&nbsp;</p>
        <p style="margin: 0 6px">=</p>
        <p style="margin: 0">豆皮大</p>
      </div>
      <div style="display: flex; align-items: center; margin-left: 28px">
        <p style="margin: 0 16px 0 36px">2-112</p>
        <p style="margin: 0">&nbsp;&nbsp;&nbsp;海贼&nbsp;&nbsp;&nbsp;</p>
        <p style="margin: 0 6px">=</p>
        <p style="margin: 0">李快仔</p>
      </div>
      <div style="display: flex; align-items: center; margin-left: 28px">
        <p style="margin: 0 16px 0 36px">4-157</p>
        <p style="margin: 0 0 0 -8px">青云甘蔗</p>
        <p style="margin: 0 6px">=</p>
        <p style="margin: 0">&nbsp;？？？</p>
      </div>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field maxlength="3" show-word-limit v-model="answer" />
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
import { useRouter } from 'vue-router'
const router = useRouter()
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
    case '玉米杆':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      router.push({ name: 'QingyunCulturalEducation', query: { active: 1 } })
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
  showDialog({ message: '隐没的青云文社中，章节-书页' }).then(() => {})
}
</script>

<style lang="less" scoped>
.main-box {
  padding-bottom: 64px;
}
.van-cell {
  padding: 8.1px;
}
:deep(.van-cell__value) {
  display: flex;
  align-items: center;
}
</style>
