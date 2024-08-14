<template>
  <div style="padding-bottom: 48px" @click="handleMainBoxClick">
    <!-- <h1 class="center">红荔2</h1> -->

    <div class="paragraph">
      <p class="center">“买——荔——枝————”</p>
      <p class="normal">
        是清鹂！此时的她身穿一袭华丽鲜红的戏服，举手投足间尽显风采。清鹂的嗓音清亮婉转，竟和红线女有八分相似。午未的心猛然一动，仿佛回到了那上千个练声的下午，李清鹂在黄氏大宗祠青石巷里，鬼哭狼嚎般地练声。那个疯丫头的样子逐渐和台上的角儿重叠在了一起。......
      </p>
      <p class="center">
        <van-image
          fit="contain"
          :src="huaDan"
          @click="showImagePreview({ images: [huaDan], showIndex: false })"
        />
      </p>
      <p class="normal">
        午未痴痴的看着台上闪闪发光的李清鹂，嘴角不自觉地上扬。演出结束后，观众意犹未尽，仍未散去。午未挤出人群，急匆匆走向后台。他的心情既激动又忐忑，思绪万千。
      </p>
      <p class="center">“成日跌！”</p>
      <p class="normal">
        午未停下脚步，循声望去，舞台另外一头的出口站着的正是在朝这边挥手的李清鹂。八年的时光并没有抹去她的神采，卸去浓妆的李清鹂反而更灵气逼人了。
      </p>

      <p class="normal">午未看着她，心中一片温柔，挥着手面带笑意回应道：“吗喽精！”</p>

      <p class="normal">
        李清鹂的眼中瞬间盈满泪水，却气鼓鼓大喊“大庭广众别这么叫我你条粉肠（个傻子）！”
        她冲破人群，来到午未面前。此时，适逢所有演员上台谢幕，瞬间拥挤得人群把两人挤到了一起，午未顺势张开双臂把清鹂护在身前，感受着她身体的温度，心中涌起无尽的感动。
      </p>

      <p class="normal">
        “都八年了，我以为你忘了我。你都不给我写信！”李清鹂的声音微微颤抖，眼中却闪烁着喜悦的光芒。两人被人群推搡着，就像风浪里的红船一般。
      </p>

      <p class="normal">
        “我有啊，给阿妈一封，给招娣一封，就一定有给你的一封......
        一定是你的拥趸太多了，我的信被混进去了吧。”
        清鹂的心跳与呼吸如此贴近，午未突然感受到台上几股不善的视线，明白了什么。
      </p>

      <p class="normal">
        不过这一切都不重要了。此刻，时间静止。两人借着人潮相拥，感受着彼此的温暖和存在。八年的分离，未曾动摇他们心中的情谊，反而让他们更加珍惜这来之不易的重逢。
      </p>

      <p class="normal">
        夜色中，戏台上的灯光依旧明亮，映照着他们的身影。两人相拥而立，仿佛时间倒流，回到了那巷子里的日子。这一刻的重逢将永远铭刻在心中，成为他们彼此生命中最温暖的记忆。
      </p>

      <p class="center">【前往蚝壳墙巷内寻找特殊的红色耗壳，总共有多少个？】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog, showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import huaDan from '@/assets/images/huaDan.jpeg'
const emit = defineEmits(['update:active', 'handleAutoPlay'])
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
    case '5':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 2)
      break
    case '五':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 2)
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
  showDialog({ message: '找不全就瞎猜' }).then(() => {})
}
const handleMainBoxClick = () => {
  emit('handleAutoPlay')
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
