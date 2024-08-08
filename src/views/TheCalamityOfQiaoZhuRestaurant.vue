<template>
  <div>
    <h1 class="center">橋珠酒家的劫难</h1>

    <div class="paragraph">
      <p class="normal">你伸手触碰了这块烧焦的木板，一阵炙热的回忆涌入脑内。</p>
      <p class="normal">
        1938年，九月初二，霜降。日寇入侵顺德，整个城镇笼罩在战火的阴霾中。橋珠酒家也未能幸免。
      </p>
      <p class="normal">
        龙拜丹仍在刚才的侥幸之中没回过神，就在刚才，他将家中那只通人性的狼狗阿财送给了日军的领队，试图以此换取酒家的平安。还将柜台里的现金全数交出，尽量表现出顺从和恭敬。日军领队冷冷地接过现金以后离开了。
      </p>
      <p class="normal">
        日军当晚竟然下令放火焚烧橋珠酒家！熊熊火蛇迅速地吞噬了酒家里的一切。不到一炷香的时间，整个酒家已化作一片火海。
      </p>
      <p class="normal">
        龙拜丹看着酒家化为灰烬，心如刀割。橋珠酒家不仅是他的生计，更是他的心血所在。更让他崩溃的是，酒家内其实还藏有一个只有他和冯科知道的保险箱，。里面存放着他多年积攒的积蓄，也在火海中付之一炬。
      </p>
      <p class="normal">
        在大火烧完后，冯科第一个冲进了废墟中寻找那个保险箱，可惜当他打开了箱子时，里面曾经价值百万的各种纸张证明都已化为灰烬。
      </p>
      <p class="normal">
        失去了一切的龙拜丹从此一蹶不振，整日郁郁寡欢，精神也逐渐萎靡。眼看橋珠酒家就要在历史的长河中湮没，管账的冯科站了出来。冯科是一个精明干练的人，在酒家里管账多年，对酒家的情况了如指掌。
      </p>
      <p class="normal">
        眼看龙拜丹无力自救，他便决定组织工人们合资经营，重建橋珠酒家。他召集了所有赶到的员工，连夜策划着重建的计划。
      </p>

      <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
        【点击此处自动跳转】
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleContinueClick = () => {
  router.push({ name: 'ReconstructionOfQiaoZhuRestaurant' })
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
