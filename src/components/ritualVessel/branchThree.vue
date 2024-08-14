<template>
  <div>
    <!-- <h1 class="center">食神之鼎红荔</h1> -->

    <div class="paragraph" @click="handleMainBoxClick">
      <p class="normal">日昳：“阿妈，今日中秋节，今晚村口有墟市，家姐问你去不去看灯？”</p>
      <p class="normal">
        “晚点，晚点去。今晚有叔叔阿姨过来吃饭，我在家煮饭。”日昳没发现妈妈脸上的慌乱。
      </p>
      <p class="normal">以前和瀘紹年同在缫丝厂工作、关系较好的姑婆阿兰也被请来做客。</p>
      <p class="normal">
        紹年给了阿兰一枚五仙（分）硬币，让她带着孩子们去逛一逛，平日便喜欢这两个孩子的阿兰想都没想就答应了下来。
      </p>
      <p class="normal">月未上枝头，中秋的些许凉意奋力地驱赶着潮湿的夏。</p>
      <p class="normal">
        每个小贩都施展着浑身解数，希望在这一晚赚个盆满钵满。有变戏法的，有唱龙舟的，最多的当然还是卖各种水果和应节食品的小摊贩。
      </p>
      <p>
        【进入顺德美食博物馆，位于中华食鼎正对面，和姐弟俩一起体验中秋凉意（空调充足），和琳琅满目的美食】
      </p>
      <p class="normal">
        招娣最近几年一直跟着阿妈种甘蔗，难得出来一趟，还不忘叮嘱弟弟：“哇，好几年没有出来行街啦~
        阿妈叫我看紧你别乱花钱，不然兰姨又贴钱买给你。”
      </p>
      <p class="center"><strong>咚咚咚，哒哒哒，咚</strong></p>
      <p class="normal">
        一阵欢快的声音打断了他们的思绪。此时只见不远处有个大叔，穿着一套白净的长衫，手执木雕小舟，胸前挂小锣、小鼓，边唱边敲。节奏欢快，
      </p>
      <p class="normal">
        招娣隔着人群看不太清楚，兰姨把她抱上自己的脖子，招娣看着她梳起的发髻，感觉很特别，周围似乎没什么人有这个发型，竟然让她有种很亲切的感觉，她搂紧了兰姨。
      </p>
      <p class="normal">
        能看清之后，她才知道这人讲的是<strong>《八仙贺寿》</strong>的故事。只听他一个人分饰八角，每个都入木三分，各种法宝如数家珍。表情夸张，语气幽默风趣。
      </p>
      <p class="normal">
        三人驻足观看了许久，直到整曲唱罢。招娣看了看兰姨，想打赏一下，但是想了一会儿还是没说出口。直到人群散去，才发现天色已经不早了。
      </p>
      <p class="normal">
        那个龙舟说唱的白衣艺人把碗中众人打赏的钱币收了，对还在原地观看不愿离开的两个孩童说道，“三位过来一下。”
      </p>
      <p class="normal">
        日昳害羞的躲到了兰姨身后，招娣见一个陌生人突然唤自己，也不敢动。只有兰姨大胆走上前。
      </p>
      <p class="normal">
        “不用担心，我不是要你们钱。而且还有一物要赠与两位。”只见他左手往破碗上一盖，一翻，碗里竟然多了一个小盘子。又一盖，再翻，竟然变出了一个罗盘模样的东西出来。
      </p>
      <p class="normal">
        “这个小东西啊~
        跟两位小童颇有关系。”说着，那人把这小盘子放到了日昳手里。“这样，我考考你们刚刚有没有认真的听我讲故事。要是答对了的话，这个小物我就送给你了，常日昳。那芭蕉扇是谁的东西呢？”
      </p>

      <p class="center">【拿出[日晷]，其中的芭蕉扇代表了哪位八仙？】</p>
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
    case '汉钟离':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 8)
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
  showDialog({ message: '这位八仙肚子很大' }).then(() => {})
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
