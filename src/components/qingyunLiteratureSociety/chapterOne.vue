<template>
  <p class="center"><strong>你看到，</strong></p>
  <p class="center"><strong>一群少年在后厨努力练习……</strong></p>
  <p class="center"><strong>两个青年将一群孩童从船上抱下……</strong></p>
  <p class="center"><strong>一锅咕嘟咕嘟冒着黑泡的奇怪汤叶……</strong></p>
  <p class="center"><strong>一群骨瘦如柴的孩子洋溢着笑容……</strong></p>

  <div class="paragraph">
    <p class="normal">
      你缓缓地睁开了眼睛，这次的记忆不像之前那么清晰，你赶紧趁忘记之前，将一些碎片告诉了奶奶。
    </p>

    <p class="normal">
      奶奶神色略微复杂，仿佛在回忆着什么久远的往事，“我和你几个姑婆不愿意卖掉祖屋的其中一个原因，就是因为阿爹跟我说，若有缘人挖到这个盒子的话，会来找我。”她倒了杯普洱，继续说道：“我多少知道一些当年的事，可你看到的这些，我却从未听他说起过......”
    </p>

    <p class="normal">这真的是太爷藏的盒子吗？你的疑问好像反而变多了。</p>

    <p class="normal">
      “我认为... 这应该藏的不是什么坏东西。而且，这祖传的圣杯筊杯也让你看到了一些事情，可是……”
    </p>

    <p class="normal">
      奶奶顿了顿，缓缓抚摸了你的头发，握了握手，眼睛看着你，眼中有些兴奋，有些忧虑，可随即又柔和了起来。
    </p>

    <p class="normal">
      “不知不觉你都长那么大了，既然这件事情非你不可，我最后再嘱咐你一句，注意安全，但求问心无愧。”
    </p>

    <p class="normal">最后，她终于告诉了你下一步的去向：“你太爷说，秘密在盒底。”</p>

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

  <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
// const emit = defineEmits(['update:active'])
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
    case '曲水湾鹊桥底':
      // showToast({
      //   message: '恭喜，回答正确',
      //   icon: 'success'
      // })
      showDialog({
        message: '鹊桥底下还有一道桥，那边有一个隐藏的二维码可以进入下一段剧情'
      }).then(() => {})
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
  showDialog({ message: '把铁盒翻转过来，底部藏有六字' }).then(() => {})
}
</script>
