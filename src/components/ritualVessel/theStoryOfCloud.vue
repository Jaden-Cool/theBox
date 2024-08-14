<template>
  <div>
    <!-- <h1 class="center">云</h1> -->

    <div class="paragraph">
      <p>
        <van-image
          fit="contain"
          :src="woodenSign"
          @click="showImagePreview({ images: [woodenSign], showIndex: false })"
        />
      </p>
      <p class="normal">
        闪回戛然而止，那些档口的招牌此时变成了一列一列的介绍宣传语。这时，你却发现一处与平常不一样的地方，似乎有人刻意提醒你什么，你通过解开密码，得到了下一个地方的提示。可这个加密方式，是现代的某种加密方式，难道……现代有什么人，在观察和指引我？
      </p>

      <p class="center">【输入三个字母进入下一段剧情】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { showToast, showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import woodenSign from '@/assets/images/woodenSign.jpeg'
import morseCode from '@/assets/images/morseCode.png'

const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case 'YUN':
      showImagePreview({ images: [morseCode], showIndex: false })
      break
    case 'yun':
      showImagePreview({ images: [morseCode], showIndex: false })
      break
    default:
      state.answer = ''
      showToast({
        message: '这个标点符号怎么看着那么怪...',
        icon: 'cross'
      })
      break
  }
}
</script>
