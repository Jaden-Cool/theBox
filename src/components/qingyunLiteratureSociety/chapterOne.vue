<template>
  <p class="center"><strong>你看到，</strong></p>
  <p class="center"><strong>一群少年在后厨努力练习……</strong></p>
  <p class="center"><strong>两名青年将一群孩童从船上抱下……</strong></p>
  <p class="center"><strong>一锅咕嘟咕嘟冒着黑泡和骨头的汤……</strong></p>
  <p class="center"><strong>一群骨瘦如柴的孩子洋溢着笑容……</strong></p>

  <div class="paragraph">
    <p class="normal">
      你缓缓睁开眼睛。这次的记忆不像之前在祖屋看到的那些那么清晰，趁那些图像仍留存在脑海中，你将这些片段转述给奶奶。
    </p>

    <p class="normal">
      老人的神色略微复杂，仿佛在回忆着什么久远的往事，“我和你几个姑婆不愿意卖掉祖屋的一个原因，就是因为阿爹跟我说，若有缘人挖到这个盒子，会来找我。”她倒了杯普洱，娓娓道来：“我知道一点当年的事，可你看到的这些，我却从未听他说起过......”......”
    </p>

    <p class="normal">这真的是太爷藏的盒子吗？你的疑问反而变多了...</p>

    <p class="normal">
      “我觉得... 这藏的应该不是什么坏东西。而且这祖传的筊杯也让你看到了一些事情，可是……”
    </p>

    <p class="normal">
      奶奶顿了顿，褶皱而骨节分明的手慢慢伸过来，像儿时一样摸了摸你的脑袋，一双浑浊但不改慈祥的眼睛看着你，眼中似乎有些波动，可随即又柔和了起来。
    </p>

    <p class="normal">“既然这件事情非你不可，我最后再嘱咐你一句，注意安全，但求问心无愧。”</p>

    <p class="normal"><strong>她终于揭示了这个简单的秘密：“你太爷说，秘密在盒底。”</strong></p>

    <!-- <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      【前往仁信，然后点击此处自动跳转】
    </div> -->
    <p class="center">【根据线索去往该地点】</p>
    <p style="display: flex; align-items: center; justify-content: center" class="center">
      <van-cell-group inset>
        <van-field v-model="answer" />
      </van-cell-group>
      <van-button plain hairline @click="handleConfirmClick">确认</van-button>
    </p>
  </div>

  <div  class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
// const emit = defineEmits(['update:active','handleAutoPlay'])

const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '曲水湾鹊桥底':
      // showToast({
      //   message: '恭喜，回答正确',
      //   icon: 'success'
      // })
      showDialog({
        message: '鹊桥底还有一道桥，寻找隐藏二维码进入下一段剧情'
      })
        .then(() => {})
        .catch(() => {})
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
  showDialog({ message: '翻转铁盒，底部藏有六字' })
    .then(() => {})
    .catch(() => {})
}
</script>
