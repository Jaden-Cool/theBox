<template>
  <div style="padding-bottom: 48px" @click="handleMainBoxClick">
    <div class="paragraph">
      <p class="normal">
        眼前出现的是个少年。他刚刚又输了一场执竹，随着一阵嘘声，他笑眯眯的被几个小孩挤开了。执竹，里面的“竹”是指香鸡，香烧完后剩下的小棍子。玩法很简单，所以很受村子里的小孩子欢迎。置“竹”于桌面，向上丢起一块石头或者小橡皮球一类的物件，须在那物件落地前趁机在桌面迅速拾取对应数量的“竹”，最后还要接住物件，失误则换人尝试。
      </p>

      <p>
        <van-image
          fit="contain"
          :src="kidsGames"
          @click="showImagePreview({ images: [kidsGames], showIndex: false })"
        />
      </p>

      <p class="normal">
        日昳其实手极巧，一旦认真玩一定能尽扫桌面的“竹”。他对香鸡有一种莫名其妙的熟悉感。但是为了保证其他孩子能都有一些参与感，他经常故意输掉。
      </p>

      <p class="normal">
        抓竹是他唯一喜欢的游戏。虽然从不挑食，但日昳的身板还是瘦得跟竹竿一样，走起来摇摇晃晃的。特别是吃了糯米以后，甚至会口齿不清个好几天。只要涉及到体能他就完全不行了。因为他体质孱弱，又经常摔倒，被村子里的孩子们取了花名，叫成日跌（粤语中与常日昳发音接近）。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        时代车轮滚滚向前，机械缫丝业难以为继之际，主政广东的陈济棠为振兴经济，兴建了一批现代化糖厂——顺德糖厂便是其中的代表。自此相当长一段时间，机械制糖代替了缫丝，成为了顺德的支柱产业之一，种蔗、砍蔗、榨糖也就成为了顺德人尤其是顺德女性所投身的产业。
      </p>

      <p>
        <van-image
          fit="contain"
          :src="female"
          @click="showImagePreview({ images: [female], showIndex: false })"
        />
      </p>

      <p class="normal">“成日跌，你爹几时回来啊？我都好久没见过常叔叔了。”</p>

      <p class="normal">
        “我啊爹说，你家道中落，让我不要和你走那么近。我也不是很懂，你读得书多，什么叫家道中落啊？”日昳的死党兼邻居<strong>王一平</strong>说道。
      </p>

      <p class="normal">
        “放屁！要是我家是家道中落，你们家就是家道低落！哪一年我爹回来不是一箱一箱的好吃好玩的带回来。别胡说！”
      </p>

      <p class="normal">
        “啧啧啧，我跟你说啊，真的是没见过大蛇屙屎（没见过世面）我阿妈每天做鱼腐给我们吃。天天都在厨房剁鱼肉，里面又放鸡蛋，油炸过以后热辣辣香喷喷。我阿妈今年都给我加长了两次裤子了！你看，我才七岁，都已经比你们俩都高了！”说完日昳挺直了腰板，和两人比了比高度。
      </p>

      <p class="normal">“可我看你阿妈瘦了好多啊，你该不是把她那份也吃掉了吧？”王一平小声的说道。</p>

      <p class="normal">日昳心里顿时咯噔一下。所谓唔见人高，只见裤短......我要回去问问阿妈……</p>
    </div>

    <div class="paragraph">
      <p class="normal">
        常家的桑基鱼塘在没有养蚕以后大规模的荒废了。除了后院一群下蛋的鸡，瀘紹年能负担得起的，只剩下那些鱼塘里热死的鲢鱼。鲢鱼刺多、腥味重，肉质绵烂、口感不佳，为了孩子们吃的健康，瀘紹年细心地把鱼肉刮出，再打成细腻的鱼腐——未曾想到两个孩子都很喜欢。
      </p>

      <p class="normal">
        朴素的日子，倒也过得津津有味——甘蔗的甜蜜多少弥补了难熬日子。在这物价飘忽不定的年代，常家是为数不多供了家中一对男女都去上学的家庭。坚韧的常惜端和勤劳的瀘紹年深知教育的重要性，为了转型生存，也为了谋求更好的机会，常惜端经人介绍去了广州开厂，谁曾想到……
      </p>

      <p>
        <van-image
          fit="contain"
          :src="book"
          @click="showImagePreview({ images: [book], showIndex: false })"
        />
      </p>

      <p class="center">【阅读三世书，按照常惜端信中的农历日期得出三字】</p>
      <div class="center">
        可以使用以下网站作为辅助：
        <!-- <a href="https://wannianrili.bmcx.com" target="_blank">点击这里</a> -->
        <p id="copy" style="margin: 0; color: blue" @click="handleCopyClick">点击这里</p>
      </div>
      <p class="center">请把这个万年历网站用手机浏览器打开并保留，后面还会用到。</p>

      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <div  class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog, showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import kidsGames from '@/assets/images/kidsGames.jpeg'
import book from '@/assets/images/book.png'
import female from '@/assets/images/female.jpeg'
import ClipboardJS from 'clipboard'
const emit = defineEmits(['update:active', 'handleAutoPlay'])

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
      emit('update:active', 5)
      break
    default:
      state.answer = ''
      showToast({
        message: '请再试一次，或看提示',
        icon: 'cross'
      })
      break
  }
}
const handleCopyClick = async () => {
  try {
    var clipboard = new ClipboardJS('#copy', {
      // 点击copy按钮，直按通过text直接返回复印的内容
      text: function () {
        return 'https://wannianrili.bmcx.com'
      }
    })
    clipboard.on('success', () => {
      showToast('已复制跳转所需的URL')
    })
  } catch (err) {
    console.error(err)
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '民国十三年即公历1924年' }).then(() => {})
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
