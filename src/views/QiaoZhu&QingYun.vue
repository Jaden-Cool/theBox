<template>
  <div>
    <h1 class="center">橋珠酒家青云文社</h1>

    <div class="paragraph">
      <p class="normal">
        橋珠酒家是全顺德名厨的摇篮。
        区财师傅在这里坐镇，虽然名义上是主厨，但是区财基本上只会有贵客点名做宴的时候才会出现。日昳进来的头几个月，就马上被安排去了“追猫”。
      </p>
      <p class="normal">
        这是所有新弟子工作的戏称，意指他们需要在酒家里四处奔走上菜。这段日子虽然苦，但是的总是嘴馋的日昳倒是异常的享受。传菜期间偷吃一两口而不被发现是他每天最乐意琢磨的事情。
      </p>
      <p class="normal">
        橋珠酒家的老板是龙拜丹，从一九一几年开始营业至今。橋珠酒家原意是迎恩桥畔的一颗璀璨明珠，迎来送往的都是达官贵人。在这个年代，可以在橋珠酒家喝茶宴客就是一等一的有面子又有里子的人。就连手头不太阔绰的普通人，也会时不时奢侈一把，去吃上一个鸡球大包。
      </p>
      <p class="normal">今年是1936年。橋珠酒家里，日昳结识了几个与他年龄相仿的师兄妹。</p>
      <p class="normal">
        首先就是大师兄冯满，一丝不苟，总是穿着干净整洁的衣服，手上从不沾半点油污。他拥有非常精确的味觉。
      </p>
      <p class="normal">
        馮沃，性格开朗，爱开玩笑，经常让大家捧腹大笑。冯沃和冯满是远房亲戚，相比于其他人冯沃和他舅舅——掌柜的冯科最像，脑子又非常灵活，时不时会把耿直的日昳耍得叫苦连连。
      </p>
      <p class="normal">
        最后当然少不了还有师妹阿鸞（鸾luán），年纪虽然和日昳相仿，但是因为入门晚所有人都叫她“鸞师妹”。她性格坚韧，不怕苦累，常日昳对她心中充满了敬佩。区财也称得上是个奇人，当时没有女子做厨师的先例，但是鵉师妹在点心方面实在是天赋异秉。他不顾流言蜚语，留了阿鸾在身边，虽然导致后来也发生了许多事情，但也开创了先河，让后世厨艺界也有女性发光发热的机会。
      </p>
      <p class="normal">
        酒家包吃住，等其他人都下班以后，日昳也乐于继续待在厨房里面。准备第二天的食材之时，顺便用菜头菜尾和炉灶的余温，总能做出一些精致小点来。和他一起准备第二天点心食材的还有师妹阿鸞，
        而龙拜丹老爷的狼狗阿财也经常挎着菜篮子过来买宵夜。
      </p>

      <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
        前往仁信，然后点击此处自动跳转
      </div>
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
