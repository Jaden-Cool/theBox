<template>
  <div>
    <!-- <h1 class="center">虎口符</h1> -->

    <div class="paragraph">
      <p class="normal">
        在1956年，清鹂诞下了一个女婴，名为常翠莲，名字取自她最钟爱的粤剧《搜书院》中的角色。那时，家中虽然不富裕，但日子过得平静安稳。两年后，常汉卿也呱呱落地，这名字同样源自红荔所喜爱的粤剧《关汉卿》。
      </p>

      <p class="normal">
        然而，随着1965年，一场大饥荒的到来，生活的艰难逐渐显露。常招娣此时已经在香港立足多年，她频频写信劝午未携家人前往香港避难，但长途跋涉和移居的风险令午未犹豫不决，尤其是担心母亲瀘紹年无法承受舟车劳顿。
      </p>
    </div>

    <div class="paragraph">
      <div class="letterPaper">
        <p class="letter">日昳，</p>

        <p class="letter">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内地饥荒严重，我心中忧虑。受老板点拨，我得知广东省委书记陶铸即将下令，五月五日开始撤除岗哨，放开边境，让饥民自由赴港。现香港情况较为稳定，虽非一帆风顺，但比起内地，食物尚算充足。阿妈可能难以经历长途跋涉，但是你，弟妹和两个孩子还有希望。再这样下去我真的不敢想。前来香港暂避是你家最好的机会，无论如何你都不能留在沙头村了。愿你慎重考虑，早日答复。
        </p>

        <p class="letter" style="text-align: right;">常招娣</p>

        <p class="letter" style="text-align: right;">1962年四月十日</p>
      </div>
    </div>

    <div class="paragraph">
      <p class="normal">
        读罢，午未垂下了有些干瘦的双手，看着两个孩子和眼圈深陷的瀘紹年。这可能是他们最后的机会了，但是阿妈怎么办？
      </p>

      <p class="normal">
        难道，这就是刘恭可所说的命中之劫吗？按照刘恭可的指示，刘恭可拿出了那张画了老虎在上面的正方符。
      </p>
    </div>

    <div class="paragraph">
      <p class="center">拿出包含东南西北字样的纸，叠成一只东南西北。</p>

      <p class="center">
        需要辅助的话，可以
        <a href="https://jingyan.baidu.com/article/335530daaeb86119cb41c3a7.html " target="_blank"
          >点击这里 </a
        >观看教程
      </p>
    </div>
    <div class="paragraph" style="padding: 26px 8px">
      <p class="center" style="margin: 0"><strong>饥荒至，食指东</strong></p>
      <p class="center" style="margin: 0"><strong>虎口开，西南分</strong></p>
      <p class="center" style="margin: 0"><strong>虎口拔牙整四颗，生机还需险中求</strong></p>
    </div>

    <div class="paragraph">
      <p class="center">【得出四字】</p>

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
    case '寻根问祖':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 3)
      break
    case '问祖寻根':
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
  showDialog({ message: '把符咒折成一个东南西北，然后把虎牙的位置撕下来' })
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
