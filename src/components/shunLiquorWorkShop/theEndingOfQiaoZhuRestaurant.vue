<template>
  <div>
    <h1 class="center">橋珠酒家结局</h1>

    <div class="paragraph">
      <p class="normal">
        据你所知，常午未太爷是在1997年去世的，正是你出生的那一年。你没有来得及见他一面，但是经过今天，你却和他亲近了不少。
      </p>
      <p class="normal">
        你拿出了剩余的物品，一个一个的尝试感应过去。已经没有东西会产生出闪回的效果了。就在你以为你的旅程就将在这里终结之时，一个颤颤巍巍的老人走到了你的面前。他眼睛细长，白色的长须垂到了膝盖，头上扎了一个冲天髻，穿着一身黑色的道袍，边缘上隐隐鎏金闪过。
      </p>
      <p class="normal">他精准的走到了你的面前，“这次能听清楚我说的话了吧...？” 老人问道。</p>
      <p class="normal">
        他面带微笑，“这块地我买了那么多年，终于等到你了... 没想到一等就是八十年啊......
        你要是能来早一点就好了。不过现在也不迟，这天道已经铺好了。这五行之阵也开启了。去吧，我带你去见见他。”
      </p>
      <p class="center">他说着化成了一碰金沙，散落一地：</p>

      <p class="center">三才之阵开天眼，二页天书图展全</p>
      <p class="center">金钉透过火劫出，穿越时间成晷针，</p>
      <p class="center">日晷归为四象齐，昳字减日剩其真。</p>
    </div>

    <div class="center subtleFade" style="margin: 26px 8px">
      【到达指示场景处，寻找午未二字，将午未放上去】
    </div>

    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showDialog } from 'vant'
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const handleContinueClick = () => {
//   router.push({ name: 'EndingPage' })
// }
const props = defineProps({ isAtBottom: Boolean })

const handleFloatingBtnClick = () => {
  showDialog({
    message: `
    【提示1：最后一次使用地图，金钉和日晷，根据诗词操作】
    【提示2：把地图翻开一次，像找当时橋珠酒家许愿牌那样，露出内部彩色缩略图。把金针穿过那个位置以后，把日晷正中心也戳穿。】
    【提示3：旋转日晷，对准四个日晷边缘上的四个属性颜色。把昳字拆开剩下一个失字，前往失字的位置。】
    `
  }).then(() => {})
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
