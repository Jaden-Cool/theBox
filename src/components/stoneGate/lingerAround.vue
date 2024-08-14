<template>
  <div>
    <!-- <h1 class="center">徘徊</h1> -->

    <div class="paragraph">
      <p class="center">
        刘恭可双眼一闪，知道离事成还差一步之遥了。接下来就要看常日昳的本能了。现在生死状已改，倘他真的没有执念，不愿再活，他的灵魂就会散去。
      </p>
    </div>

    <div class="paragraph">
      <p class="center">【阴阳徘徊之处】</p>
    </div>

    <div class="paragraph">
      <p class="center">
        他的意识似乎飘离到了一处陌生的地方。穿过了一个巨大的石门后，他已经忘记了刚才在哪儿，在干什么，此时心中只有万分的遗憾、愤怒、不甘。他似乎感觉到自己所处的地方忽明忽暗，但他动弹不得，也睁不开眼睛。
      </p>

      <p class="center"><strong>在哪里？</strong></p>

      <p class="center">
        虽然他没有睁眼，但是他明白自己处于一个不一样的时代，这里也是顺德。这是天界吗？
      </p>

      <p class="center"><strong>你疑惑</strong></p>

      <p class="center">
        你看到好多人都有了千里眼，能通过手上的玻璃，看到名厨把深藏多年的配方和做法托盘而出。
      </p>

      <p class="center">
        你看到所有厨师都掌握了某种火的法术，稍微动一动脚尖就可以让面前的炼丹炉喷出蓝色的炉火。在这样的厨房里，竟然还吹出了丝丝的凉风！
      </p>

      <p class="center">你好羡慕...</p>

      <p class="center">
        而这双皮奶……竟然家家户户都吃得上，鸡鸭鱼肉，竟然每天都能吃得上，而不是只存在与有钱人的餐桌上。
      </p>

      <p class="center">不对，这里... 这里绝不是仙界。这里依然是顺德！</p>

      <p class="center">我想起来了......</p>

      <p class="center">姐姐！这是一个养得起你的时代！</p>

      <p class="center">
        阿妈！我们不要卖招娣好不好！满街都是糖，我答应你这饼我不吃了！钱我不会再乱花了！这五仙我还你，不要让姐姐走好不好！
      </p>

      <p class="center">这是一个没有战乱的时代！</p>

      <p class="center">
        没有人会在深夜防火了，我们重新把橋珠酒家建起来好不好！我再也不偷懒了，我一定好好的管账，你要我怎么跑腿都行！
      </p>

      <p class="center">蔡尓洪！这是一个你不用选择的时代！</p>

      <p class="center">我们带上阿牛，我们一起去文教所... 我，我带你去！</p>

      <p class="center">你猛的睁开眼。黑色虚空中，传来了紫色的光。</p>

      <p class="center">他伸出了手。</p>
    </div>

    <div class="paragraph">
      <p class="center"><strong>【解锁核心玩法】</strong></p>

      <p class="normal">
        <strong>
          本游戏所体验到的所有味道都可以分为食物尝到的口味，与带出的心中滋味，如果说鱼形饼表面为甜，那么实则承载了离别之苦。午未的人生分裂成了三个分支，重新组合就会形成一段合恰的五味人生。</strong
        >
      </p>
      <p class="normal"><strong> 五种味道隐作五行相生之阵，生生不息。</strong></p>
      <p class="normal">
        <strong>
          收集完五种味道所对应的五张场景自拍和页面截图，即可前往购买处，凭购买小票兑换特殊奖励一份，仅限前100组玩家。</strong
        >
      </p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击此处继续
    </div>
  </div>
</template>

<script setup>
import { showDialog } from 'vant'
const emit = defineEmits(['update:active', 'handleAutoPlay'])
const handleContinueClick = () => {
  showDialog({ message: '求生！' }).then(() => {
    emit('update:active', 3)
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
