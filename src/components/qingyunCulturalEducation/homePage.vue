<template>
  <div>
    <h1 class="center">青云文教所</h1>

    <div class="paragraph">
      <p class="normal">
        在接下来的日子里，常日昳按照周之贞所托留在了佛仔圩给孩子们做一阵子的厨师。他知道，这二百多个孩子都经历了同样的磨难。
      </p>
      <p class="normal">
        他们需要的不仅是关爱和温暖，更需要的是食物。他用心烹饪每一餐，用自己的方式为孩子们带来一丝慰藉。现在大家称呼这里为“青云文教所”。
        平时完全不需要为做饭苦恼的日昳，现在却变成他每天最头疼的问题。
      </p>
      <p class="normal">
        以前食材种类繁多，大鱼大肉海陆空俱全，本该苦恼如何搭配，自己却灵感不断，才思泉涌，从未被食谱所困；而现在，食材种类根本不需要他苦恼，只有白豆和未脱米衣的稻米。每顿饭，一个孩子只能分到一打——即为12颗白豆作为佐餐配菜，主食的粗米饭也限量供应。但孩子们还在长身体，胃口还是出奇地大，并研究出“一满二下三锥”的抢饭方法。
      </p>
      <p>
        <van-image
          fit="contain"
          :src="oldTime"
          @click="showImagePreview({ images: [oldTime], showIndex: false })"
        />
      </p>
      <p class="normal">
        当时一共有两箩的粗米饭以供大家添加。孩子们要吃完第一碗才能加第二碗，所以第一碗他们都会装满，并且吃得很快，这样很快就能去加饭；而第二碗加得少些，这样也能很快吃下去，以防吃晚了没能添上第三碗饭挨饿；而第三碗，就要垒得高高的，加了就可以慢慢吃，这样吃的总饭量就会非常大。
      </p>
      <p class="normal">
        吃三碗好像是非常大的饭量，但是其实因为这种粗米饭补充的营养有限，有些孩子还是营养不良，无法消化，被饥饿和急性肠胃炎带走了性命。那时候没有什么药品，大家都不敢生病，一生病，等来的几乎只有致命的结局。
      </p>
      <p class="normal">
        当时很多孩子夜盲症，因为缺乏维生素A，大家想了办法，从偏方中发现锅底沾着的草木灰富含维生素A，可以对症治疗这种现象。
      </p>
      <p class="normal">
        没想到这成了当时很多孩子的噩梦，日昳把锅底的黑灰和屠宰场剩下的牛骨一起煲汤，其实牛骨汤应该是很好喝的，但是加了这些锅灰之后，又苦又涩，难以入口。夜盲的孩子一个个被抓着去灌牛骨汤。
      </p>
      <p class="normal">但是神奇的是，喝完了夜盲症真的便好了。</p>
      <p class="center">【此时你品尝到的是什么味道？】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
  </div>
  <!-- <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div> -->
</template>

<script setup>
// import { showToast, showDialog, showImagePreview } from 'vant'
import { showToast, showImagePreview } from 'vant'
// import { reactive, toRefs, defineEmits, defineProps } from 'vue'
import { reactive, toRefs, defineEmits } from 'vue'
import oldTime from '@/assets/images/oldTime.jpeg'
const emit = defineEmits(['update:active'])
// const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '苦':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
      break
    default:
      state.answer = ''
      showToast({
        message: '不正确，请再试一次',
        icon: 'cross'
      })
      break
  }
}
// const handleFloatingBtnClick = () => {
//   showDialog({ message: '留意地上砖石有文字，时刻不忘抬头也寻找' }).then(() => {})
// }
</script>

<style lang="less" scoped>
.van-cell {
  padding: 8.1px;
}
/deep/.van-cell__value {
  display: flex;
  align-items: center;
}
</style>
