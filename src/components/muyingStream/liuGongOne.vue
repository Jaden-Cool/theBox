<template>
  <div style="padding-bottom: 48px">
    <!-- <h1 class="center">刘恭可红荔1</h1> -->

    <div class="paragraph">
      <p class="normal">
        透过梳篦的侧面，你看到了招娣离开的船影逐渐朦胧，你看到了假装坚强的常日昳在空旷的房间内失魂落魄。你又看到了日昳为了逃避回家，没日没夜的来回于戏班和木坊之间。他的臂膀越来越粗壮，内心的空旷却和失收的稻田一样。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        随着1937年，抗日战争打响。白驹班的班主白驹荣，不忍心红船回内陆，因而让戏班的所有人都暂居香港。阿妈和家姐就这样暂时留在了香港。她们每个月都有寄钱回来。知道她们应该很安全，我心里也淡定了不少。
      </p>

      <p class="normal">
        即使在战争时期，端午节扒龙舟这一传统也从未中断。龙舟比赛不仅是力量和技巧的比拼，更是我们村精神的象征，也是我唯一的精神寄托。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        1943年夏至，抗日战争已经进入到了第六个年头。广州沦陷，顺德大良也紧随其后。没有战略价值的村子反而成了比较安全的地区。
      </p>

      <p class="normal">
        又是一年端午节结束，今年也没有赢得比赛。常日昳和几个落败的兄弟一起埋龙船，这是通常保存龙船的方法。此时，常日昳抬头看到了一个陌生的穿着鹅黄色道袍的道士。日昳记忆中并不认识什么道士，除了师傅会一些道术以外，心中不免疑惑：“这位道长，请问有何贵干？”
      </p>

      <p class="normal">
        道士手中拿着一个八卦罗盘，腰间别着一把佩剑。就算是在这种战争年代，这样的打扮也还是显得有些怪异。站在塘边有些居高临下的微微鞠躬，遥遥问道：“常日昳，是你吗？”
      </p>

      <p class="normal">常日昳点了点头：“是我，你是？”</p>

      <p class="normal">
        日昳总觉得这个道士长得有些面善，可惜一时间想不起来。道士从怀中掏出了一个布包，缓缓说道：“你父亲……
        是我的战友，他托我带一些东西给你，你来接收一下。”
      </p>

      <p class="normal">
        常日昳听闻竟然是父亲的消息，先是心中一震，顾不上手上泥污，三步两步从泥塘里跳了出来，一把抓过了布袋。已经快十年没见过的父亲，竟然在这个时候……
      </p>
    </div>

    <div class="paragraph">
      <p class="center">找到盒子内的秘密，阅读一封原本不在物品列表中的信件，回答以下问题</p>
      <p class="center">【日昳的新名字属性是五行中哪两种？】</p>
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
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
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
    case '土火':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
      break
    case '火土':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
      break
    case '土和火':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
      break
    case '火和土':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
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
  showDialog({ message: '盒子中有一块盖板' }).then(() => {})
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
