<template>
  <div>
    <h1 class="center">初遇周之贞</h1>

    <div class="paragraph">
      <p class="normal">
        你忍不住伸手去摸三字经的铜牌，不知不觉你已经习惯了这种被吸入闪回的感觉，甚至可以主动的去尝试进入到物品的故事中。
      </p>
      <p class="normal">你手心感觉到了一阵抽痛。我疼得猛地把手抽回。先生这一戒尺可打的真狠啊…</p>
      <p class="normal">
        记得小时候读书的时候因为根本集中不了精神，经常会挨先生戒尺。记得有一天，<strong>周之贞</strong>老师拍醒了早读时熟睡的我，他跟我说：“常，我知道你不喜欢读书，我也不想勉强你。所谓，古语有云，安居不用架高堂，书中自有黄金屋。那我考考你，三字经里面有多少个黄又有多少粒金？你若能都找出来，有奖，若是找不全，那就有罚。”
      </p>
      <p class="center">【三字经里面有多少黄，又有多少金？】</p>
      <p class="center">
        <van-cell-group inset>
          <van-field label="黄：" v-model.number="valueOne" />
          <van-field label="金：" v-model.number="valueTwo" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
  </div>
  <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs, defineProps, defineEmits } from 'vue'
// import morseCode from '@/assets/images/morseCode.png'
const emit = defineEmits(['update:active'])
const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  valueOne: '',
  valueTwo: ''
})
const { valueOne, valueTwo } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.valueOne || !state.valueTwo) {
    return
  }
  if (+state.valueOne === 3 && +state.valueTwo === 7) {
    showToast({
      message: '恭喜，回答正确',
      icon: 'success'
    })
    emit('update:active', 1)
  } else {
    state.answer = ''
    showToast({
      message: '数一下墙上有多少个黄字和金字',
      icon: 'cross'
    })
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '数一下墙上有多少个黄字和金字' }).then(() => {})
}
</script>

<style lang="less" scoped>
.van-cell {
  align-items: center;
}
.van-button {
  margin-top: 26px;
  width: 90%;
}
/deep/.van-field__label {
  text-align: right !important;
}
</style>
