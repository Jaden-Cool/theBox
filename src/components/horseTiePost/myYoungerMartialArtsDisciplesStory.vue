<template>
  <div>
    <h1 class="center">师妹故事</h1>

    <div class="paragraph">
      <p class="normal">
        大火之后，酒楼的重建如火如荼，所有人都忙得脚不沾地，而阿鸾却像个失了魂的人，神情恍惚。她强颜欢笑，不愿让别人看出她内心的痛楚，但我知道，她心里正承受着无法言说的悲伤。
      </p>
      <p class="normal">
        那晚，我和她一如既往的一起在临时的厨房里备料。她站在一个箱子上，终于忍不住跟我说起了她的小板凳。
      </p>
      <p class="normal">
        “从我记事起，就和阿妈相依为命，”她缓缓地说，“家里穷，阿妈就用这个小马扎陪我玩骑马的游戏。我骑在小马扎上，她会一边拍着我的背，一边笑着叫我‘小马驹’。后来，阿妈也走了，只剩下我一个人，我抱着这个小马扎去了善堂，才好不容易活了下来。”
      </p>
      <p class="normal">
        那把烧毁的小凳子是她母亲留给她的唯一遗物。从她进厨房学艺的第一天起，那把凳子就陪着她，帮她够到高高的灶台，让她觉得她母亲还在。她的眼神黯淡，声音哽咽，却依旧努力挤出一丝笑容，仿佛这样就能让自己好受一些。
      </p>
      <p class="normal">
        我听着她的故事，心中涌起了一股酸涩的感觉。为了让气氛不那么沉重，我勉强笑了笑，试图安慰她：“你看，我们不是都还在这儿吗？只要活下去，一切都会好起来的。”
      </p>
      <p class="normal">阿鸾轻轻点了点头，强颜欢笑：“是啊，无论如何，只要能活下去......”</p>
      <p class="normal">
        我告诉她，我也有一个生死未卜的父亲，还有为了我们姐弟远赴他乡的妈妈。人都是为他人活着的。我们都知道，无论遇到什么困难，都必须坚强下去。
      </p>
      <p class="normal">
        我们共同决定，把这些心愿写在红纸上，钉在楼梯板的夹缝之间。那张红纸上写的，是我们心中最简单、却又最难实现的愿望——希望我们都能好好活下去，无论风雨多大，火焰多烈。
      </p>
      <p class="center">【盒子中取出金钉和红纸一份。留下你自己的心愿。商店中有金笔可以借用。】</p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击此处继续
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  emit('update:active', 8)
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
