<template>
  <div>
    <!-- <h1 class="center">广东银行</h1> -->

    <div class="paragraph">
      <p class="normal">
        随着你把数字念出，黄符上一个字一个字的跟着亮了起来。思绪渐渐淡出，回到了当年。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        终于，我们来到了繁华的广州城，来到了广东银行那气派的大门前。广州和我记忆中任何一处都不一样。这里有汽车，有番鬼佬（外国人），大部分人的衣服都没有缝补的痕迹。
      </p>
      <p class="normal">
        望着来来往往的人群，我深吸一口气，转头看向刘天师，他难得的笑了笑，抬了抬下巴，示意我进去。
      </p>
      <p class="normal">
        我在脑海中演练了无数遍这一刻会发生什么事。我在门口的大理石上蹭干净了我的鞋底，拍了拍身上的尘土，迈进了厚重的大门。看着大堂之内的金碧辉煌，我的内心更忐忑了。
      </p>
      <p class="normal">
        我郑重地将遗书与一系列的文件递与了柜员。上面有阿爹的签名和指纹，应该还能证明我与他的关系。柜员接过，脸上挂着甜美的假笑，仔细查验。那一刻，时间仿佛凝固，我内心开始胡思乱想了起来。
      </p>
      <p class="normal">
        柜员在高高在上的柜台后面不停的跑动，我的内心也跟着他一起七上八下。此时，我眼角看到刘天师倚在门框上，拿着那张黄符在上面添了几笔。他总是在写这写那的，这种时候最好不要去打扰他。
      </p>
      <p class="normal">未曾等我反应过来，柜员打开了侧门，引领我走向那隐藏着父亲遗物的保险箱。</p>
    </div>

    <div class="paragraph">
      <p class="normal">
        回忆在打开保险柜之前的一刻中断了。仿佛这厚重的金属铁柜连来自未来的窥探都能挡住。
      </p>
      <p class="normal">
        这平安符上面，除了中间的那一列隐藏的密码，侧面和下方的那个符号... 好像是后加上去的。
      </p>
    </div>

    <div class="paragraph">
      <p class="center">【根据平安符的指引找到下一个地点】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <div  class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs, defineProps } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '天圆地方':
      showDialog({
        message: '去往天圆地方，寻找下一段线索',
        confirmButtonText: '继续故事',
        showCancelButton: true
      }).then(() => {
        router.push({ name: 'CircularSkyRectangularEarth' })
      })
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
  showDialog({ message: '平安符中诗词所描述的地方就在这里附近' })
    .then(() => {})
    .catch(() => {})
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
