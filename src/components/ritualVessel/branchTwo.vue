<template>
  <div>
    <!-- <h1 class="center">食神之鼎酒家</h1> -->

    <div class="paragraph" @click="handleMainBoxClick">
      <p class="normal">
        六岁的常日跌站在门廊中，看着瀘紹年坐在八仙桌前手里攥着一对木头正在出神。常昳走进屋内，牵起了紹年的手，拿起了这双木头“玩具”。
      </p>
      <p class="normal">日昳：“阿妈，今日中秋节，今晚村口有墟市，家姐问你去不去看灯？”</p>
      <p class="normal">
        “晚点，晚点去。今晚有叔叔阿姨过来吃饭，我在家煮饭。”，此时只有你能看到瀘紹年脸上的彷徨。
      </p>
      <p class="normal">
        紹年神不守舍地给常昳塞了一枚五仙硬币。 “这样，你拿着这个，跟招娣出去逛一逛再回来吃饭吧。”
      </p>
      <p class="center">__________</p>
      <p class="normal">月未上枝头，中秋的些许凉意，奋力地驱赶着潮湿的夏。</p>
      <p class="normal">
        每个小贩都施展着浑身解数希望在这一晚赚个盆满钵满。有变戏法的，有唱龙舟的，最多的当然还是卖各种水果和应节食品的小摊贩。
      </p>
      <p class="normal">
        【进入顺德美食博物馆，位于中华食鼎正对面，和姐弟俩一起体验中秋凉意（空调充足），和琳琅满目的美食】
      </p>
      <p class="normal">
        招娣最近几年一直跟着阿妈种甘蔗，难得出来一趟，脚步轻快之余眼中闪烁着各种主意。“哇，好几年没有出来行街啦~
        阿妈叫我看紧你别乱花钱。细佬你想买什么？”
      </p>
      <p class="normal">
        只见常昳突然停下了脚步，目光被一个身上挂满了公仔饼的大叔吸引了。卖饼的大叔乘机推销道，
        “哇！呢位弟弟真有学识啦~ 大人食月饼，細路就应该食公仔饼啦~ 弟弟几岁啊？”
      </p>
      <p class="normal">日昳：“我今年七岁啦！”</p>
      <p class="normal">
        小贩：“哦！那就是，属猪！来！给个猪仔饼你！祝弟弟你家肥屋润，猪笼入水啊！”
        说着，卖饼的大叔塞了一个装在了小猪笼里面的猪仔饼给常日昳。
      </p>
      <p class="normal">日昳走了半天，早就馋的口水直流，拿到饼想都没想就一口把猪仔饼的头咬掉了。</p>
      <p class="normal">
        看着常日昳已经吃上了，小贩乘胜追击道：“呢位妹妹一看就是聪明伶俐~
        今日中秋佳节，我今天半卖半送，卖完收工，两个饼收你们两个仙怎么样？平常一个饼都要收你两个仙喔。”
      </p>
      <p class="normal">
        看着日昳都吃剩一个猪屁股了，招娣溺爱的锤了日昳一下，也挑选了一个绑着红绳的鱼形饼。
      </p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      回答正确后跳转【母亲离开】
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:active', 'handleAutoPlay'])
const handleContinueClick = () => {
  emit('update:active', 5)
}
const handleMainBoxClick = () => {
  emit('handleAutoPlay')
}
</script>

<style lang="less" scoped>
@keyframes subtleFade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.subtleFade {
  animation: subtleFade 1s infinite;
}
</style>
