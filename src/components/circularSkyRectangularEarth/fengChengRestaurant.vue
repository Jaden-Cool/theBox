<template>
  <!-- <h1 class="center">凤城食堂</h1> -->

  <div>
    <div class="paragraph">
      <p class="normal">
        时间过得飞快，午未和阿鸾在橋珠酒家成了婚。大婚之日，虽然两人都没有父辈在场，但是酒楼的众人早就成为了他们家人一般亲近，两人很快就有了爱情的结晶，常日驰。
      </p>
      <p class="normal">
        1945年，龙拜丹去世，橋珠酒家再次被员工集资经营，然后被龙四珠接手。在这段变迁的过程中，冯沃决定分出去开一家面馆，把他的经营理念发扬光大，后来改名叫冯不记。期间区财师傅回来过一次，但是最终还是选择了迁往澳门定居。酒家几经易主，地位在顺德人心目中依然高高在上。对经营没有兴趣的两个人有了第二个孩子，女儿常碧霞。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        直到1959年，人民公社正式创立，橋珠酒家也迎来了命运的转折点。橋珠酒家从此改名叫“凤城第一人民食堂”，不再是昔日那个承载无数美好回忆的宴会场所，而成为了一个提供大锅饭的公共食堂。随着大锅饭的普及，橋珠的辉煌岁月渐渐远去。
      </p>
      <p class="normal">
        即使条件变得艰难，午未夫妇也还是不愿意离开这个他们奉献了半辈子的地方。最终，他决定和阿鸾留下来做食堂的大厨。继承了常惜端的钱财以后，两人基本上已经吃喝不愁。赚够工分以后足够他们养活两个孩子。
      </p>
      <p class="normal">
        1962年五月，全国的饥荒达到了历史的最高点，饥饿的阴霾笼罩在每一个角落。午未和阿鸾在“凤城第一人民食堂”每天辛苦工作，但即使他身为厨师，也难逃食物短缺的困境。
      </p>
      <p class="center">饿，是每一天的主旋律。</p>
    </div>

    <div class="paragraph">
      <p class="center" style="margin: 26px 0 0 0;"><strong>金铁伞骨辨方向，</strong></p>
      <p class="center" style="margin: 0;"><strong>伞面阴影系宗祠。</strong></p>
      <p class="center" style="margin: 0;"><strong>饥火烧肠属难渡，</strong></p>
      <p class="center" style="margin: 0;"><strong>解困三字梨园指。</strong></p>
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
import { reactive, toRefs } from 'vue'
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
    case '顺酒坊':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 3)
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
      '在天圆地方的八卦伞中，找到和【粤剧】相关的那一篇。朝着那个方向走，就会看到一家有三个红字牌匾的店'
  })
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
