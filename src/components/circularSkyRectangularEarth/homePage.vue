<template>
  <!-- <h1 class="center">天圆地方</h1> -->

  <div class="paragraph">
    <p class="normal">
      父亲的银行存款并不多，大部分东西都存放在了这保险箱之中。其中除了一些珠宝以外，稍微值点钱的就是那几张地契了。但是我对这些东西不感兴趣，我过来是为了找到害得我们全家鸡毛鸭血（满地狼藉）的凶手的。这里面一定有什么！
    </p>
    <p class="normal">
      旁边的柜台有些疲惫的看着我把东西都摊开来乱翻。要不是刚刚给过了小费，估计我们早就被赶出去了。
    </p>
    <p class="normal">
      我找到了一本泛黄的账本。账本上密密麻麻地记录着工厂的各项收支和交易明细。此时我后悔自己没有去上学，现在账本里面东西完全看不懂。此外，还有一叠信件。信件的内容多是与生意伙伴的往来沟通，但其中有几封上面的人名我认得。
    </p>
    <p class="normal">
      继续深挖，我在一个陈旧的木盒中发现了一份父亲手写的备忘录。上面记录着他在生意场上遇到的种种蹊跷之事，其中着重提到了一次与大良糖厂合作的经历。那次合作中，原本谈妥的优质甘蔗在水路运到之时竟然都被虫蛀穿了。而负责这次采购的人员在事后也突然失踪，再也联系不上。
    </p>
    <p class="normal">
      刘天师走到我身边，看了一桌面乱糟糟的各种文件，选了一张旧寨以东的地契收入了囊中。就在我生气的要抢回来之际，他用眼神阻止了我，说了一句，“我应得的。”
    </p>
    <p class="normal">这是他这个月以来头一次说话。</p>
    <p class="normal">
      我也被他这反常的行为所吓到了。只见他眼中隐隐冒出一丝金光，仿佛不受控制的对着空中一处说道
      “我会在此地作出一套五行八仙之阵，引导你来此，替我续缘。待你替午未聚拢那三世五味之日，届时我亦会登上天道，庇佑你后人。”
    </p>
    <p class="normal">
      说完，他竟然喷出了一口鲜血，染红了所有面前的文件！我和柜台都惊呆了，一时不知道该如何是好。
    </p>
    <p class="normal">只见他一刻不停伸手在血泊中写写画画了起来。</p>
    <p class="center">竟然是他！</p>
    <p>
      <van-image
        fit="contain"
        :src="blood"
        @click="showImagePreview({ images: [blood], showIndex: false })"
      />
    </p>
    <p class="center">【陷害父亲的凶手是谁？】</p>
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
import { showToast, showDialog, showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import blood from '@/assets/images/blood.png'
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
    case '蔡祖兼':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
      break
    case '蔡老板':
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
  showDialog({ message: '在【拴马桩】章节内有提及此人' }).then(() => {})
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
