<template>
  <div>
    <h1 class="center">六六大顺</h1>

    <div class="paragraph">
      <p class="normal">我坚定的喊道 “六！六双！六六大顺！”</p>
      <p class="normal">
        开门的是一个穿着蓝色马褂和黑色丝制长衫的大叔，一双皮鞋光可招人。他表情柔和，眼睛轻轻眯着，和我见过的所有的大厨的手都不一样。门只打开了足够他走出来的一道缝，他光是站在那里就已经有一种大师的从容。
      </p>
      <p class="normal">
        我虽然已经对我阿爸记忆模糊，但是大概也和这个人有几分相似吧？我深鞠一躬，把手里的推荐信往前一递，一口气把反复背诵好的见面词对发亮的皮鞋一股脑的说了出来：“区财师傅你好，我叫常日昳，久闻先生大名，特此前来拜师！”
      </p>
      <p class="normal">
        我就这样鞠着躬，忐忑的等待着。等了足足一分钟，我偷偷抬头一看，区财师傅不知道什么时候点着了一根香烟。他一只手拿着烟，另外一只手拿着信，扇了两下把烟搅散。“靚仔食不食烟？”
        他把点着了的烟递了给我。我没想到他会问这个问题。
      </p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击这里尝试第一轮面试
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px">点击这里跳过第一轮面试</div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import { showDialog } from 'vant'
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  showDialog({
    message: '即将前往“入门考核”',
    confirmButtonText: '确定',
    showCancelButton: true
  }).then(() => {
    emit('update:active', 2)
  })
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
