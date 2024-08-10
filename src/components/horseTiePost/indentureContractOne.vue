<template>
  <h1 class="center">卖身契1</h1>

  <div class="paragraph">
    <p class="normal">
      常日昳接过那封信，手指微微颤抖着拆开。信纸鲜血斑斑，字迹却仍旧苍劲有力，仿佛字里行间还留有父亲的气息。他的心跳加快，随着每一行文字的读下去，心中愤怒与悲伤交织而成的情感像是洪水般冲击着他。
    </p>
    <p class="normal">
      常日昳看完信，双拳紧握，眼中燃烧着复仇的怒火。泪水在眼眶中打转，却被他强忍着不肯落下。
    </p>
    <p class="center">“常将有时思无日，莫把无时当有时。”</p>
    <p class="normal">
      今天不知明天事，他心里明白，父亲没有直说常家仇人的名字一定有他的想法。但是这些年所受到的委屈，把他们家庭拆散的原因，必须有个说法！
    </p>
    <p class="normal">
      刘恭可看着常日昳的神情变化，轻轻拍了拍他的肩膀：“常家小子，这条路可不好走，但你并非孤身一人。你父亲还在生的时候，跟我提到过一件事......”
    </p>
    <p class="normal">
      刘恭可随手摘了一片黄皮叶子，在空中比划了几下，然后把叶子放到口中咀嚼了十几秒。随即从他口中发出的声线竟然是刘锡端的，隐约还能听到不知道哪里来的枪火之声。
    </p>
    <p class="normal">
      “我出来以后啊，马上赶了回祖屋，但是孩子们和紹年都早就不在了。问了一圈曾经的邻居，他们也不清楚。我只好留了点东西在我小儿的出生之地以后，期待有一天他们回去能找到。然后我就来加入游击队了。要是你到时候找到了他们，记得叫他们回去一趟。”
    </p>
    <p class="normal">
      时隔多年听到父亲的声音，常日昳深吸一口气，目光坚定地望向刘恭可：“道长，您有办法帮我？”
    </p>
    <p class="normal">刘恭可点点头，“不是我... 是另一个人。”</p>
    <p class="center">——————————</p>
    <p class="normal">
      记忆越来越模糊，仿佛这封信上遗留的法力已经不足以支撑这个幻境一般。你挣扎着退回到了现实。幻觉里，所有的东西都随风而散，唯独那黄衣道人竟然留了下来。
    </p>
    <p class="normal">
      刘恭可继续咀嚼着口中的黄皮叶，一边断断续续的对着你说：“我当年的法力......弱......寻根之术......午未寻......家乡......身契......荷园之中.....九枚钱......”
      说罢就彻底的消失了。
    </p>
    <p class="center"><strong>【根据上面遗留的线索得出一句话】</strong></p>
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
    case '三币围困古龙仙地现':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 11)
      break
    default:
      state.answer = ''
      showToast({
        message: '卖身契上也有诗句作为指引',
        icon: 'cross'
      })
      break
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '蓝色彩色玻璃上寻找九枚钱币，其中钱币会圈出九个字' }).then(() => {})
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
