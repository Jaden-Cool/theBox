<template>
  <div style="padding-bottom: 48px">
    <h1 class="center">沐英涧</h1>

    <div class="paragraph">
      <p class="normal">
        你来到了沐英涧，走进这巷子的一瞬，一阵穿堂风刮起。一阵美妙的音乐声的不知道从哪里传来。目光穿过了面前的三重门，在尽头，你看到了一个人在吹奏笛子，背后是一家宗祠……
      </p>
    </div>

    <div class="paragraph">
      <p class="center">“千斤黄金万担谷，夜夜笙歌镬耳屋”</p>
      <p class="normal">
        黄氏大宗祠是一间很有历史的镬耳屋。里面各种金镶玉裹的砖雕、价值连城的木雕，错落有致。相比华贵的装饰，鲜为人知的是，屋子里面还有许多不通往外面的小巷子，作为风水的用途。也不知道为什么，我总觉得这些地方特别安静，令人舒心
      </p>
      <p class="normal">
        李清鹂也很喜欢这种安静的地方。她长得很漂亮，可惜村子里的人都说她是扫把星，说她克死了自己的爹妈。她便不爱热闹，时常躲藏在巷子里面练声。
      </p>
      <p class="normal">
        刘大成师兄对日昳说，<strong>入门之前一定要多看靓的东西，眼界和审美是一定要拓宽的</strong>。当时的日昳不知师兄这句话的真正含义，<strong>只知遇到清鹂之后，便觉得她最为靓丽，便每天来偷看她练声</strong>。终于，有一次被发现以后便挨了一顿拳脚。
      </p>
      <p class="normal">
        日昳第二天依旧路过巷子，心想她应该已经换了地方练习，谁知她还在原处。她看到日昳来反而好像还有些高兴，拉着他陪练，好在没有耽误日昳的“眼功”，但日昳总觉得内心有点奇怪：怎么倒变成我陪她练声了？
      </p>
      <p class="center"><strong>倒霉。</strong></p>
    </div>

    <div class="paragraph">
      <p class="center">【李清鹂找你练声，飙不过某个高音你可走不了】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
      <van-popup v-model:show="show">
        <img src="@/assets/images/aManBlowingAxiao.jpeg" alt="" />
      </van-popup>
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
  answer: '',
  show: false
})
const { answer, show } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '暂定':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      setTimeout(() => {
        state.show = true
      }, 3000)
      setTimeout(() => {
        emit('update:active', 1)
      }, 10000)
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
  showDialog({ message: '可以用别的发出高音的方式' }).then(() => {})
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
