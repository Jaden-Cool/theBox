<template>
  <div class="paragraph">
    <p class="normal">
      你眼前出现了一个少年，他刚刚赢下了和朋友们的执竹游戏，随着一阵嘘声，大家都转头跑去玩别的了，
      执竹游戏里的竹，其实不是竹子，而是烧完的香所剩的尾部，大家称之为香鸡，向上丢起一块石头或者小像皮球，
      趁机扭转手腕，在地面拾取对应数量的“竹”， 然后接住石头。
    </p>

    <p class="normal">
      如果失误了，就换下一个人尝试，日昳每次都能一个人独占鳌头，所以别的孩子没什么参与感和惊喜，所以大家反而
      去玩一些别的游戏，有的需要跑，有的需要跳，总之有些需要身体碰撞，日昳不挑食，可是身体还是不那么强壮，而
      且按现在的说法，他有些肢体不协调，玩别的项目，甚至跳格子*跳街砖*这些较为简单的，都会经常摔倒，而且本名
      又叫“常日昳”，免不了被大家取了花名，叫成日跌（粤语中与常日昳较为接近）。
    </p>
  </div>

  <div class="paragraph">
    <p class="normal">
      时代的车轮滚滚向前，机械缫丝业难以为继之际，主政广东的陈济棠为振兴经济兴建了一批现代化糖厂，顺德糖厂便是
      其中的代表。自此的很长一段时间，机械制糖便是顺德的支柱产业之一，种蔗、砍蔗、榨糖也就成为了女性们所投身的
      产业。
    </p>

    <img src="@/assets/images/甘蔗女.jpeg" />

    <p class="normal">“成日跌，你爹几时回来啊？除了我都好久没见过常叔叔了。”</p>

    <p class="normal">
      “我啊爹说，你家什么什么中落，让我不要和你走那么近，我也不是很懂。”日昳的死党说道。
    </p>

    <p class="normal">
      “放屁！要是我家是家道中落，你们家就是家道低落！哪一年我爹回来不是一箱一箱的好吃好玩的带回来。别胡说！”
    </p>

    <p class="normal">
      “上一年可不就没回来吗？ 而且你们是把蚕园都卖掉了，我妈都回去种地了。”死党撑着头问他。
    </p>

    <p class="normal">
      “啧啧啧，我跟你说啊，我看到娘亲做鱼腐，天天在那剁鱼肉，里面又放了鸡蛋，还经油炸过，不知道多香，我娘今年都给
      我加长了两次裤子了！你看，我七岁，招娣额，比我大，反正比你们俩都高。”说完日昳挺直了腰板，和两人比了比高度。
    </p>

    <p class="normal">
      “哇你可吃得比我好多了，我也想长高！”听着有鸡蛋在里面，其中一人口水都已经流了下来了。
    </p>

    <p class="normal">“不对啊，可我看你娘亲，今年瘦了好多啊，那个颧骨都突了出来！”死党回过神来。</p>

    <p class="normal">
      日昳的心里顿时咯噔了一下，他和姐姐都吃饱吃好，确实没留意到这一现象，也许也是每天待在一起变化较慢看不出来的缘故。
    </p>

    <p class="normal">我要回去问问娘亲……他心里下了决定。</p>

    <p class="normal">
      殊不知，每顿都吃鱼腐实属是无奈之举。常家的桑基鱼塘和大部分产业早就变卖了，除了后院的一群能下单的鸡，瀘紹年能负担
      得起卖剩的鲢鱼。鲢鱼刺多、腥味重，肉质绵烂、口感不佳，为了让孩子们吃的健康，瀘紹年细心的把鱼肉起大骨，再打成细腻
      的鱼腐。未曾想到，反而很受两个孩子欢迎。
    </p>

    <p class="normal">
      朴素的日子过得津津有味，甘蔗的甜蜜也多少弥补了这些难熬的日子。在这个物价飘忽不定的年代，常家是为数不多让家中一对男
      女都能上学的家庭。坚韧的常惜端和勤劳的瀘紹年深知教育的重要性。为了转型生存，也为了谋求更好的机会，常惜端后经人介绍
      去了广州开厂，谁曾想到……
    </p>
    <img src="@/assets/images/三世书.png" />
    <p class="center" >【阅读三世书，按照常惜端信中的农历日期得出三字】</p>
    <p class="center" >
      可以使用以下网站作为辅助：
      <a href="https://wannianrili.bmcx.com" target="_blank">https://wannianrili.bmcx.com</a>
    </p>
    <p class="center" >
      请把这个万年历网站用手机浏览器打开并保留，后面还会用到。
    </p>

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
    case '甘蔗甜':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', '常日昳2')
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
  showDialog({ message: '民国十三年是1924年' }).then(() => {})
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
