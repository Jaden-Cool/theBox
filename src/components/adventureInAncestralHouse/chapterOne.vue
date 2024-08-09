<template>
  <div style="padding-bottom: 48px">
    <h1 class="center">祖屋奇遇</h1>

    <div class="paragraph">
      <p class="center">*乒*</p>

      <p class="normal">
        一声脆响，颤动从你的铲尖传来。铲子刮到了一个金属的东西，还好天气炎热，你并没用很大的力气，
        没直接把里面的东西扎透，直觉告诉你那好像不是什么垃圾杂物，你小心地把附近的土弄松，将它取了出来。
        用身上的擦汗巾擦拭了下，吹了吹灰，才看清这是个锈迹斑斑的铁盒。
      </p>

      <p class="normal">
        周围的蝉鸣，伴随着远处的车鸣声，喧嚣无比，可是略微的中暑和长时间的习惯，你却感觉声音距离你越来越远，
        周围趋于安静。拿着盒子站在那，你的时间仿佛停滞，一个空灵的声音从身后传来：
        “贵……马……，……缘再……， 天官……，……神归……。”
      </p>

      <p class="normal">你转身一看，却空无一物。</p>

      <p class="normal">幻听？难道是中暑了？</p>

      <p class="normal">
        今天是2024年八月十八日。广东的夏天一如既往的潮湿，闷热。虽然今天父亲把祖屋钥匙留给了你，但是其实也不是
        必须今天就过来这里。
      </p>

      <p class="normal">
        “其实可以选一个更凉快的日子的……”你在柚子树下的井里舀起一勺清凉的水，摘去上面的浮叶，给自己的脸降了降温，
        企图摆脱那彷佛对太阳娇羞般的红润。
      </p>

      <p class="normal">井神处的香刚刚燃尽。</p>
    </div>

    <div class="paragraph">
      <p class="normal">
        “啊仁（奶奶）不会怪你的，你是他最疼爱的乖孙，你也不想老窦（爸爸）和啊仁一直这么僵持下去吧？”你父亲摇着你
        的肩膀晃得你有些迷糊：“这半年来，你啊仁已经和我吵了许多次了，为了老人家的身体着想，拖得太久对大家都不好。”
      </p>

      <p class="normal">说完他不摇了，眼睛直直盯着你。</p>

      <p class="normal">
        这件事其实你也清楚。父辈似乎决定要把空置许久的祖屋卖掉。为了这事，两辈人之间已经冷战了半年多。
      </p>

      <p class="normal">祖屋没电没水没信号还没网。除了奶奶和几个姑婆甚少有人会回来住。</p>

      <p class="normal">
        乡下地方蚊虫较多，记忆里面全是蚊香和花露水的味道。没有空调，只有蒲扇的夏天，却一点不像现在一般炎热，
        甚至夜晚有些清凉。回忆起来竟然有些不舍。
      </p>

      <p class="normal">
        但是那是以前的气温，现在的话住这里真的挺难受，你似乎有点理解父辈的决定，还是做不到姑婆那种“心静自然凉”的境界。
      </p>

      <p class="normal">
        既然决定要卖掉，就不得不先把院子里这棵凤眼果树砍倒。你手里攥着爸爸偷偷的给你塞的祖屋钥匙。今天周日，等到明天就没空过来了，那还不如早
        些来处理。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        “贵人禄马到，因缘再续，天官赐福，食神归位。”明明只听了一次，而且还没听清楚，这声音却在你脑海里逐渐越来越清晰。
      </p>

      <p class="center">【输入盒子的三字出处以继续】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field maxlength="3" show-word-limit v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs, defineEmits, defineProps } from 'vue'
const emit = defineEmits(['update:active'])
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
    case '清晖园':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
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
  showDialog({ message: '看盒子右下角' }).then(() => {})
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
