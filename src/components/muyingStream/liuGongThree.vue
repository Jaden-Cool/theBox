<template>
  <div>
    <!-- <h1 class="center">刘恭可红荔3</h1> -->

    <div class="paragraph" @click="handleMainBoxClick">
      <p class="normal">
        随着你触碰到牌坊上的渔鼓，身边所有路人都停止了脚步，这天地间仿佛都停了下来。
      </p>
      <p class="center">“咚咚咚”</p>
      <p class="normal">
        渔鼓声的从你身后响了起来，一个老人倒骑着毛驴从石柱子背后走出，仿佛他一直都在那里。敦仁那一门后面是你前面见到过的那女人，现在想来应该是何仙姑了。
      </p>
      <p class="normal">
        张果老单手拍打着渔鼓，那石鼓轻轻的转动着。他用苍老的声音说道：“哼哼..
        这刘恭可借着天道，三世都与此地的天命灶君换了身份。强取豪夺！这是逆天而为！逆天而为！你，你能看到我了对吧？你正是原本那仙君的后人。这一世，这灶君本应轮到你才是！只要你愿意，我这就...”
      </p>
      <p>
        <van-image
          fit="contain"
          :src="zhangGuoLa"
          @click="showImagePreview({ images: [zhangGuoLa], showIndex: false })"
        />
      </p>
      <p class="normal">
        何仙姑叹着气抚摸着那头毛驴：“诶，张老...
        你稍安勿躁。我认为刘恭可仅仅只是取了点巧，毕竟造成这一切的原本也并不是他。那真正调动这天地的，是瀘紹年这奇女子。
      </p>
      <p class="normal">
        当年正是瀘紹年的诚，仅凭一副筊杯摔裂了那因果。这份情感的厚重，通了天地鬼神，才有了那改天换地之威能。这轮回都断了我们再续上就是了，这一切都还在天道之中。
      </p>
      <p class="normal">
        况且，在这一世，常招娣得以成就自己，难道这不也是一种顺其自然吗？这三世中，这一世在刘天师的指引下，正是日昳灾祸最少的一世，难道这不足以说明刘恭可也是顺天而为吗？”
      </p>
      <p class="normal">
        神仙一个接着一个的出现，讨论越演越烈，震得你头昏眼花。只听你身后传来一阵男人的声音。你转身一看，这不就是你触及到信以后看到的那个道士吗。他此时身穿一身黑袍，胸前挂着一个小鼓和小锣，右手拿着一个小碗和木棍。
      </p>
      <p class="normal">
        刘恭可：“众仙家莫要再为我争辩。我这仙位是否正当也不再重要。三生三世的我都已经功德圆满，而此地的风水阵早在几年前就已经设好。我们今天来这里是帮这位贵人完成最后几件事，把这裂缝给补上。事不宜迟，这位贵人，你也该出发了。”
      </p>
      <p class="center">咚咚咚，哒哒哒，咚</p>
      <p class="normal">
        所有行人恢复了行动，天地一切恢复了热闹。刚刚还在你面前的神仙都已经所有消失不见了。
      </p>
      <p class="normal">
        你刹那间福至心灵，明白了这一切，原来如此！什么叫贵人绿马，还有为什么这是再续前缘。如果三世书里面所说的一切都是真实的，你太爷...就是灶君！
      </p>
      <p class="normal">你努力的消化着面前的一切。</p>
    </div>
    <div class="center subtleFade" style="margin-bottom: 26px">
      【沿着曲水湾往东，寻找一块石雕以继续】
    </div>
  </div>
</template>

<script setup>
import { showImagePreview } from 'vant'
import zhangGuoLa from '@/assets/images/zhangGuoLa.jpeg'
const emit = defineEmits(['handleAutoPlay'])
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
