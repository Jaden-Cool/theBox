<template>
  <div style="padding-bottom: 48px" @click="handleMainBoxClick">
    <!-- <h1 class="center">清鹂梳头</h1> -->

    <div class="paragraph">
      <p class="normal">
        夜色沉静，灯光柔和，瀘紹年轻轻提起招娣留下的梳篦，目光温柔而复杂。这把梳篦改变了她女儿的一生，现在它又要改变另外一个女孩的一生。
      </p>

      <p class="normal">
        出嫁前一晚梳头的这一刻对每一个女孩子都极度重要——没有父母的清鹂需要一位长辈为她完成这出嫁前的重要仪式。而这重任最终还是落到了瀘紹年的手上。
      </p>

      <p class="normal">
        瀘紹年轻轻拢起清鹂的长发，缓缓梳理，仿佛梳过的不仅是她的秀发，还有这些年她所经历的艰辛与无奈。她一边梳，一边轻声呢喃，像是在与清鹂诉说着心中的话。
      </p>

      <p class="normal">
        “阿女，你明天就要出嫁了。”
        瀘紹年的声音低缓而温柔，带着母亲般的关怀。“我看着你在戏班的巷子里长大，看着你的第一次登台和成长。之后我们又一起在香港互为依靠。和你在一起的时间，可能比和午未都多。我待你就像自己的亲女儿。”瀘紹年突然想到了女儿招娣，眼眶湿润。
      </p>

      <p class="normal">清鹂坐在梳妆台前，透过镜子看着瀘紹年，眼中盈满泪水。</p>
    </div>

    <div class="paragraph">
      <p class="center">“一梳梳到髮尾，”</p>

      <p class="normal">梳子从发根滑到发尾，瀘紹年目光温柔，仿佛在为清鹂的未来铺平道路。</p>

      <p class="center">“二梳白髮齊眉，”</p>

      <p class="normal">瀘紹年声音透着一丝期盼，仿佛已经看到了他们白发苍苍时的相伴模样。</p>

      <p class="center">“三梳兒孫滿地，”</p>

      <p class="normal">
        瀘紹年打趣着说。“你尽管生，生个足球队，阿妈帮你养。”清鹂的泪水忍不住滑落，心中满是感动和喜悦。
      </p>

      <p class="center">“四梳永諧連理，”</p>

      <p class="normal">瀘紹年继续梳理着清鹂的长发。</p>

      <p class="center">“五梳和順翁娌，”</p>

      <p class="normal">
        说到这里，瀘紹年想到当年刚入门的时候，面对着常惜端的父母，声音微微坚定而温柔”这一点你不用担心，我这个家婆一定向着你。“
      </p>

      <p class="center">“六梳福臨家地，”</p>

      <p class="normal">清鹂紧紧握住瀘紹年的手，叹了一口气道”希望以后不要打仗了。“</p>

      <p class="center">“七梳吉逢禍避，”</p>

      <p class="normal">瀘紹年的手在发间轻轻滑动，仿佛在安慰清鹂，为她驱散未来风雨。</p>

      <p class="center">“八梳一本萬利，”</p>

      <p class="normal">
        “要是你们想做什么，我都会尽力去帮助。”瀘紹年拍拍她肩膀说。清鹂的心中满是感激，泪光在眼中闪烁。
      </p>

      <p class="center">“九梳樂膳百味，”</p>

      <p class="normal">
        瀘紹年轻轻道“说到乐膳百味，你招娣姑姐的手艺可是一绝。”清鹂突然看出了紹年眼神里有一丝失落，想说点什么。
      </p>

      <p class="center">“十梳百無禁忌。”</p>

      <p class="normal">
        瀘紹年继续梳着清鹂的头发，手指间传递出温暖与力量，她细心地将发髻盘起，用那一支早已准备好的珠花轻轻插入发间。清鹂的发丝在灯光下闪烁着柔光，宛如新娘的光环。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        “乖女，你从小就懂事，可惜受了不少苦。现在也算是苦尽甘来，我们家虾仔定会真心待你好。往后的日子，你们好好过，好好爱自己，也要好好爱他。”
      </p>
      <p class="normal">
        清鹂紧紧握住瀘紹年的手，泪水终于忍不住滑落，她哽咽着说道：“阿妈，这么多年一直照顾我，疼惜我，清鹂永远不会忘记您的恩情。”
      </p>
      <p class="normal">
        瀘紹年轻轻拍了拍清鹂的手背，柔声说道：“傻女，阿妈这里哪有什么恩情，别哭啦，今天你是最美的新娘，要带着笑容走进新生活。”
      </p>
      <p class="normal">两人对视一笑，泪光在眼中闪烁，温情在心中蔓延。</p>
      <p class="normal">
        这个夜晚，瀘紹年用她那双温暖的手，梳理的不仅仅是清鹂的发丝，更是她对自己女儿招娣的思念和不舍。
      </p>
    </div>

    <div class="paragraph">
      <p class="center">【用梳篦在盒内找到两组变形的文字，根据变化规律，猜出两组四字成语】</p>

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
    case '同甘共苦同舟共济':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 2)
      break
    case '同舟共济同甘共苦':
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
  showDialog({ message: '在底盒的内侧有两道白色的花纹...' }).then(() => {})
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
