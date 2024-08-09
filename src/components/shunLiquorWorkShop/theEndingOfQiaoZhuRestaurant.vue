<template>
  <div>
    <h1 class="center">橋珠酒家结局</h1>

    <div class="paragraph">
      <p class="normal">
        据你所知，常午未太爷是在1997年去世的，正是你出生的那一年。你没有来得及见他一面，但是经过今天，你应该对他有了充分的了结。
      </p>
      <p class="normal">
        你拿出了剩余的物品，一个一个的尝试感应过去。已经没有东西会产生出闪回的效果了。就在你以为你的旅程就将在这里终结之时，一个颤颤巍巍的老人走到了你的面前。他穿着一身黑色的道袍，眼睛细长，白色的长须垂到了膝盖，头上扎了一个冲天髻。他精准的走到了你的面前，
      </p>
      <p class="normal">“这次能听清楚我说的话了吧...？” 老人问道。</p>
      <p class="normal">
        他面带微笑，“这块地我买了那么多年，终于等到你了... 没想到一等就是八十年啊......
        你要是能来早一点就好了。不过现在也不迟，这天道已经铺好了。这五行之阵也开启了。去吧，我带你去见见他。”
      </p>
      <p class="normal">他说着</p>
    </div>
    <div class="center subtleFade" style="margin: 26px 8px" @click="handleContinueClick">
      【答案】
    </div>
  </div>
</template>

<script setup>
// import { showDialog } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleContinueClick = () => {
  router.push({ name: 'EndingPage' })
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
