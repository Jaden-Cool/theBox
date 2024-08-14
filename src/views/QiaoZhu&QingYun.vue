<template>
  <div>
    <!-- <h1 class="center">橋珠酒家青云文社</h1> -->

    <div class="paragraph">
      <p class="normal">
        橋珠酒家的老板是龙拜丹，从一九一几年开始营业至今。橋珠酒家原意是迎恩桥畔的一颗璀璨明珠，迎来送往的都是达官贵人。在这个年代，可以在橋珠酒家喝茶宴客就是一等一的有面子又有里子的人。就连手头不太阔绰的普通人，也会时不时奢侈一把，去吃上一个鸡球大包。
      </p>
      <p class="normal">
        今年是1938年，日昳算数学得不错，而且字也写的过得去，于是在冯科的安排下负责管账和材料进货。
      </p>
      <p class="normal">
        橋珠酒家是全顺德名厨的摇篮。
        凤城三杰都在这里坐过镇，虽然名义上三位都是主厨，其中日昳最讨厌的就是区财师傅了。区财基本上只会有贵客点名做宴的时候才会出现，大牌得很。而且经常使唤他做一些苦差。
      </p>
    </div>
    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      【前往仁信，然后点击此处自动跳转】
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleContinueClick = () => {
  router.push({ name: 'TheLetterDouble-LayerSteamedMilk' })
}
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
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
