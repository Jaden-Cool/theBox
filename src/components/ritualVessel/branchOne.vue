<template>
  <div>
    <!-- <h1 class="center">食神之鼎青云</h1> -->

    <div class="paragraph" @click="handleMainBoxClick">
      <p class="normal">日昳：“阿妈，今日中秋节，今晚村口有墟市，家姐问你去不去看灯？”</p>
      <p class="normal">
        “晚点，晚点去。今晚有叔叔阿姨过来吃饭，我在家煮饭。”日昳没发现妈妈脸上的慌乱。
      </p>
      <p class="normal">
        紹年神不守舍的给常昳塞了一枚五仙（分）硬币。“这样，你拿着这个，跟招娣出去逛一逛再回来吃饭吧。”
      </p>
      <p class="normal">月未上枝头，中秋的些许凉意奋力地驱赶着潮湿的夏。</p>
      <p class="normal">
        每个小贩都施展着浑身解数希望在这一晚赚个盆满钵满。有变戏法的，有说龙舟的，最多的当然还是卖各种水果和应节食品的小摊贩。
      </p>
      <p>
        【进入顺德美食博物馆，位于中华食鼎正对面，和姐弟俩一起体验中秋凉意（空调充足），和琳琅满目的美食】
      </p>
      <p class="normal">
        招娣最近几年一直跟着阿妈种甘蔗，难得出来一趟，脚步轻快之余眼中闪烁着各种主意。“哇，好几年没有出来行街啦~
        阿妈叫我看紧你别乱花钱。细佬（弟弟）你想买什么？”
      </p>
      <p class="normal">
        <strong
          >琳琅满目的摊贩招牌非常简单，都只是将标语和特点用粗粗的字体写在木牌上，木牌很小，很多摊贩字又写得太大，都挤在了一起。</strong
        >
      </p>
      <p>
        <van-image
          :src="woodenSign"
          @click="showImagePreview({ images: [woodenSign], showIndex: false })"
        />
      </p>
      <p class="normal">
        日昳突然停下了脚步，目光被一个身上挂满了公仔饼的大叔吸引了。卖饼的大叔乘机推销道，
        “哇！呢位弟弟真得意（可爱）~ 大人食月饼，細路就应该食公仔饼啦~ 弟弟几岁啊？”
      </p>
      <p class="normal">日昳：“我今年七岁啦！”</p>
      <p class="normal">
        小贩：“哦！那就是，属猪！来！给个猪仔饼你！祝弟弟你家肥屋润，猪笼入水啊！”
        说着，卖饼的大叔塞了一个装在了小猪笼里面的猪仔饼给常日昳。
      </p>
      <p class="normal">日昳走了半天，早就馋的口水直流，拿到饼想都没想就一口把猪仔饼的头咬掉了。</p>
      <p class="normal">
        招娣看着隔壁鱼摊<strong>鱼有鱼味</strong>的招牌，闻到了浓重鱼味的她其实已经萌生了离开的想法，因为有些日子吃鱼吃得太多，真的有点看到鱼字都生厌。
      </p>
      <p class="normal">
        小贩看她看着鱼档愁眉不展，猜了个大概：“呢位妹妹一看就是不喜欢吃鱼啦~
        但是那鱼有鱼味旁边，不是还有一句<strong>一鱼百味</strong>嘛，你想不想试试这完全不腥的鱼啊？”
      </p>
      <p class="normal">
        招娣吃惊地瞪大了眼睛，一方面是惊讶于自己的想法被看穿了，一方面是好奇这没鱼味的鱼是什么样子的。
      </p>
      <p class="normal">
        小贩拿出了一个鱼形饼：“这里面是豆馅夹心，包香包甜，保证一点点鱼味都没有~
        看在今天中秋节，两个饼，收你们两个仙怎么样？平常一个饼都要收你两个仙喔。”
      </p>
      <p class="normal">
        看着日昳都吃剩一个猪屁股了，招娣溺爱的锤了日昳一下，便挑选了一个绑着红绳的鱼仔饼。
      </p>
    </div>

    <div class="paragraph">
      <p class="center">【您品尝到的鱼形饼是什么味道的？】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { showToast, showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import woodenSign from '@/assets/images/woodenSign.jpeg'
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
    case '甜':
      emit('update:active', 2)
      break
    case '口味甜':
      emit('update:active', 2)
      break
    default:
      showToast({
        message: '答案错误，提示：五味之一',
        icon: 'cross'
      })
      break
  }
}
const handleMainBoxClick = () => {
  emit('handleAutoPlay')
}
</script>
