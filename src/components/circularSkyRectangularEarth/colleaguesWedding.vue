<template>
  <h1 class="center">师妹结婚</h1>

  <div class="paragraph">
    <p class="normal">
      午未，怀着满腔的复仇怒火，毅然决定回顺德找那姓周的算账。受了内伤的刘恭可也没有阻止他这个行为，这给了午未极大的信心。
    </p>
    <p class="normal">
      当午未历经千辛万苦终于回到大良，他迫不及待地四处打听姓周的下落。然而，得到的却是令人绝望的消息。战火纷飞的动荡时局，让姓周的如同惊弓之鸟，早早带着家眷逃离了此地。没有人能确切地说出他们的去向，仿佛他们从人间蒸发了一般。
    </p>
    <p class="normal">
      满心的仇恨在这一刻如汹涌的潮水撞上了无形的堤坝，瞬间无处宣泄。午未只觉得胸口一阵沉闷，仿佛有一块巨石压着，让他喘不过气来。他的眼神变得空洞无神，往日的坚毅和果敢消失不见，取而代之的是深深的无助和迷茫。
    </p>
    <p class="center">————————————</p>
    <p class="normal">
      失魂落魄的午未，像一个被抽走了灵魂的躯壳，机械地迈着沉重的步伐，一步一步地朝着橋珠酒楼走去。
    </p>
    <p class="normal">
      回到橋珠酒楼的时候已经是夜深。午未借助肌肉记忆掏出了钥匙，从后门进入到了...
    </p>
    <p class="center"><strong>*碰！*</strong></p>
    <p class="normal">
      “你个没良心的，让我担心成这样！你说一个月，这都多久了！”阿鸾的泪水如断了线的珠子，不停地洒落，每一拳都带着她满心的焦虑和恐惧。
    </p>
    <p class="normal">午未没有反抗，只是默默地承受着阿鸾的打骂，眼中的空洞逐渐被愧疚和无奈填满。</p>
    <p class="normal">
      阿鸾的哭声在寂静的夜里显得格外凄厉，“你要是有个三长两短，让我怎么办！”她的声音因为哭泣而变得沙哑，双手也因为打得太累而渐渐没了力气。
    </p>
    <p class="normal">
      最终，阿鸾无力地趴在午未身上，放声大哭，午未缓缓抬起手，轻轻抱住了她，两人在这深夜里，沉浸在悲伤与无奈之中。
    </p>
    <p class="normal">
      午未有气无力的躺在地上，轻轻的抚摸着阿鸾乱成一团的头发。天空中的明月映照着两人，午未的思绪在此刻突然无比的清晰。
    </p>
    <p class="normal">
      “救命啊... 谋杀亲夫啦....咳咳咳” 午未有气无力的说道。迎接他的又是一顿拳头和语言上的狂轰滥炸。
    </p>
    <p class="normal">午未从身旁的包袱中掏出了父亲保险库中拿出来的一枚金戒指，挡了在身前。</p>
    <p class="center">————————————</p>
    <p class="center"><strong>“阿鸾，嫁给我吧。”</strong></p>
    <p class="center">————————————</p>
    <p class="center">【前往喜万年年回答以下问题】</p>
    <p class="center">【问题待定】</p>
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
//   import { showToast, showDialog } from 'vant'
import { showDialog } from 'vant'
import { reactive, toRefs, defineEmits, defineProps } from 'vue'
const emit = defineEmits(['update:active'])
const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  emit('update:active', 2)
  // if (!state.answer) {
  //   return
  // }
  // switch (state.answer) {
  //   case '':
  //     showToast({
  //       message: '恭喜，回答正确',
  //       icon: 'success'
  //     })
  //     emit('update:active', 1)
  //     break
  //   case '蔡老板':
  //     showToast({
  //       message: '恭喜，回答正确',
  //       icon: 'success'
  //     })
  //     emit('update:active', 1)
  //     break
  //   default:
  //     state.answer = ''
  //     showToast({
  //       message: '不正确，请再试一次，或者考虑一下看提示哦~',
  //       icon: 'cross'
  //     })
  //     break
  // }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '提示待定' }).then(() => {})
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
