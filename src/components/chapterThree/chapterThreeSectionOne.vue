<template>
  <div class="paragraph">
    <p class="normal">
      恐怕这世界上，也只有奶奶能够续上这一段前缘了。你的疑惑和直觉已经让你寻到了这里——因为奶奶也
      姓常。当你从暑气中回过神来，已经来到了奶奶居住的老人院。
    </p>

    <p class="normal">你简单讲述了事情的大概。奶奶取出了一双珍藏多年的的一对月牙形木块。</p>

    <p class="normal">
      “你这样拿着，对，一会儿闭上眼睛，然后诚心的把这圣杯扔出去。记得，要心静。”你看着银色发丝慈祥
      的奶奶，跟着她示意一样，缓缓闭上了眼睛。
    </p>

    <p class="normal">
      老人院坐落在城市边缘，环境清幽，四周种满了各种花草树木，此时，你方才感觉到，空气中弥漫着淡淡的花香。
    </p>

    <p class="normal">
      于是开始按照奶奶的指示，开始使用手上这对称为“圣杯”的问卜之物，将它们合在一起，并抛出。
    </p>

    <img src="@/assets/images/圣杯.png" />

    <p>
      （内测第二场暂时没有选择，正式版里面是三个照片，点击其中一个以后会跳转。我后面内容默认是选择了同意以后的结果）
    </p>
  </div>

  <div class="paragraph">
    <p class="center">
      你看到，
      <br />
      一群小孩在一个土操场上奔跑……
      <br />
      两个老师模样的人在桌子前画地图……
      <br />
      一锅咕嘟咕嘟冒着黑泡的奇怪液体……
      <br />
      一艘满载的渔船拼命的划向你……
    </p>
  </div>

  <div class="paragraph">
    <p class="normal">
      你缓缓地睁开了眼睛，这次的记忆不像之前那么清晰，你赶紧趁忘记之前，将一些碎片告诉了奶奶。
    </p>

    <p class="normal">
      奶奶神色略微复杂，仿佛在回忆着什么久远的往事，“我和你几个姑婆不愿意卖掉祖屋的其中一个原因，
      就是因为阿爹跟我说，若有缘人挖到这个盒子的话，会来找我。”她倒了杯普洱，继续说道：“我多少知
      道一些当年的事，可你看到的这些，我却从未听他说起过......”
    </p>

    <p class="normal">这真的是太爷藏的盒子吗？你的疑问好像反而变多了。</p>

    <p class="normal">
      “我认为... 这应该藏的不是什么坏东西。而且，这祖传的圣杯也让你看到了一些事情，可是……”
    </p>

    <p class="normal">
      奶奶顿了顿，缓缓抚摸了你的头发，握了握手，眼睛看着你，眼中有些兴奋，有些忧虑，可随即又柔和了起来。
    </p>

    <p class="normal">
      “不知不觉你都长那么大了，既然这件事情非你不可，我最后再嘱咐你一句，注意安全，但求问心无愧。”
    </p>

    <p class="normal">最后，她终于告诉了你下一步的去向：“你太爷说，秘密在盒底。”</p>

    <p class="center" style="font-size: 23px">【根据线索去往该地点】</p>

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
import { reactive, toRefs, defineProps } from 'vue'
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
      showToast({
        message: '鹊桥底下还有一道桥那边有一个隐藏的二维码，扫描后进入下一段剧情',
        icon: 'success'
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
  showDialog({ message: '把铁盒翻转过来，底部藏有六字' }).then(() => {})
}
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
