<template>
  <h1 class="center">拜师正式考核</h1>

  <div class="paragraph">
    <p class="normal">
      古色古香的院子透着一股宁静与祥和，门口的石狮子像是在默默审视着每一个来访者。区财师傅把门缓缓的推开，把常日昳领了进门。
    </p>
    <p class="normal">
      区财把手上没有抽过的香烟灭掉，示意常日昳跟随他进院。院子内花木扶疏，空气中弥漫着淡淡的花香和泥土的气息。
    </p>
    <p class="normal">
      他们沿着青石板铺就的小道缓缓前行，脚下的石板被岁月磨得光滑而温润。石板两侧是郁郁葱葱的竹林，竹影摇曳，发出沙沙的声响，令人心生宁静。区财师傅并没有放慢脚步，
    </p>
    <p class="normal">
      前方是一座小桥，桥下是一汪清澈的池水，穿过小桥，两人来到了一片开阔的庭院。庭院中央是一棵古老的榕树，树干粗壮，枝叶繁茂，遮天蔽日。树下摆放着几张石桌石凳。在没有树荫的地方，放了几张草席上面隐约能看到一些黑色的东西摊平在上面。有几个和常昳年纪相仿的孩子蹲在蜂窝煤炉子旁边扇着火，看着师傅领着这个陌生人穿过后院。其中一个长相成熟的男孩示意了一眼旁边的草席。
    </p>
    <p class="normal">
      没有过多的停留，两人穿过了后院以后，区财带着常日昳径直走出了后门，常日昳一路仔细观察四周，却不见任何厨房的影子。
    </p>
    <p class="normal">“你可知拜师之道？”区财关上后门后突然问道。</p>
    <p class="normal">常日昳愣了一下，赶忙回答：“尊师重道，勤学苦练。”</p>
    <p class="normal">区财微微点头，“对。那你知道我的考验是什么吗？”</p>
    <p class="normal">常日昳摇了摇头，眼中满是困惑。</p>
    <p class="normal">
      区财继续说道：“真正的厨师不仅要手艺精湛，更要心细如尘。今日我带你走过这屋子，你在后院闻到了什么？”
    </p>
    <p class="normal">
      常日昳心中一惊，迅速回忆起刚才经过的每一个细节。院子虽无明显的厨房设备，但每一处花木，每一缕空气中的香气，似乎都在隐隐传递着什么。
    </p>

    <p class="center">
      【盒子中藏有一些透明的小珠子，拿出一颗用扇子碾碎，闻一闻。常日昳闻到了什么味道？】
    </p>
    <p class="center"><strong>【请勿食用】</strong></p>

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
    case '橘子':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
      break
    case '橘子皮':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
      break
    case '橙子':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
      break
    case '橙子皮':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
      break
    case '柑橘':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 4)
      break
    case '陈皮':
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
  showDialog({ message: '是某种新会特产，会放到地上需要晒的东西' }).then(() => {})
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
