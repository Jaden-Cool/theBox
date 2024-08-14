<template>
  <div>
    <!-- <h1 class="center">橋珠酒家重建</h1> -->

    <div class="paragraph">
      <p class="normal">
        “我们不能让橋珠酒家就这样倒下！”冯科坚定地说，“我们酒家是我们的衣食父母，更是顺德的精神象征。我们有责任把它重新建起来！”
      </p>
      <p class="normal">
        冯满皱着眉头，沉思片刻后冷静的说道：“这周的菜还没有全部送过来，接下来几天，会有交过货款的食材送回来。锅和炉都还在，而且天那么冷，肉还能保得住。能行。”
      </p>
      <p class="normal">
        冯沃笑道：“日本仔不止放火烧了我们这里，附近受到牵连的其他酒家估计也不会那么快开张，我去联系他们看看要不要一起自救。”
      </p>
      <p class="normal">
        阿鸾则提议：“仓库里和有很多面粉都还没有被烧，糖也还有剩。我可以批量蒸一些量大管饱的早点来卖。”
      </p>
      <p class="normal">
        看到大家纷纷出谋划策，常日昳也受到了鼓舞：“别的我不擅长，但是说到用边角料做菜我可就当仁不让了。”
      </p>
      <p class="normal">
        瓦砾中满脸黝黑的冯科朝着四顾茫然的其他师傅喊道
        “喂！论资排辈，最年轻的那几个都能出一份力，你们剩下这些师傅是不是应该挺身而出？天跌落来当被冚（盖），天无绝人之路！”
      </p>
      <p class="center">“顺德一定得！” 日昳带着头喊了一声。</p>
      <p class="center">“顺德！” 冯科再次大喊</p>
      <p class="center">“一定得！” 所有人挥拳回应道。</p>
      <p class="center">
        <strong>顺德 一定得</strong>
      </p>
      <p>
        【当年顺德最著名的三大酒楼一夜之间被烧成了平地，堪称顺德餐饮业的忌日。像橋珠酒家那样东山再起的屈指可数。现实这并没有把这些顽强的人打败，这就是顺德精神。把盒子内的一颗金钉和一张红纸取出，也在此留下你自己的心愿吧。顺德眼的出口商店有金笔可以借用
        】
      </p>
      <div class="center subtleFade" style="margin-bottom: 26px">
        <p style="margin: 0">许过愿后，前往③</p>
        <p style="margin: 0">在青云研究所内</p>
        <p style="margin: 0">找到二维码扫描继续</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
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
