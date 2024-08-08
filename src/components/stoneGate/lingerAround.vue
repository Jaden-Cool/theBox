<template>
  <h1 class="center">徘徊</h1>

  <div class="paragraph">
    <p class="normal">
      剩下的，还得看日昳当时有没有求生的欲望了。刘恭可心想，常日昳临死前牺牲了自己，把船上其他人都救了下来，本就是积了大德，可能并无遗憾。倘他真的没有执念，不愿再活，即使这边做法，也是白做无用功……
    </p>
    <p class="center">【阴阳徘徊之处】</p>
    <p class="normal">
      常日昳的意识似乎飘离到了远处，他已经忘记了刚才在哪儿，在干什么，此时心中只有万分的遗憾、愤怒、不甘。他似乎感觉到自己所处的地方忽明忽暗，但他动弹不得，也睁不开眼睛。
    </p>
    <p class="center">到底为何不甘？</p>
    <p class="normal">
      虽然没有睁眼，但是他感觉到自己处于一个不一样的时代，你知道，这也是顺德。你看到一家大小虽然贫苦，却能吃得温饱。
    </p>
    <p class="center">你疑惑</p>
    <p class="normal">
      你看到名厨大厨把深藏多年的配方和做法，通过奇怪的玻璃，映射到每个人手上同样的玻璃上。这些秘密，不是该只传闭门弟子，藏着掖着吗？你不解。
    </p>
    <p class="normal">
      对啊，你看，这一个看起来呆呆的人，都能按照大厨的方子烹饪了，这烘烤的机器，为何不需要放油？而且家家户户，都有着看似高端的烹饪工具。还有这厨房里的一台机器，吹出丝丝凉风，做菜竟然不会大汗淋漓。
    </p>
    <p class="normal">而这双皮奶……竟然家家户户都吃得上，鸡鸭鱼肉，不仅在有钱人的餐桌上。</p>
    <p class="normal">
      这是什么神仙般的日子……日昳有些热泪盈眶，他终于知道自己哪里不甘心，姐姐被…被怎么了？怎么记不起来？只觉得内心好苦
    </p>
    <p class="normal">他想起来了，当时吃到的鱼形糕虽然味道是甜的，但是现在想起来却是苦！</p>
    <p class="center">为什么！</p>
    <p class="normal">为何一定要卖掉自己的姐姐！自己为什么只能沉默。</p>
    <p class="normal">为何好菜只能做给有钱人！自己怎么只能偷吃。</p>
    <p class="normal">为何好菜只能做给有钱人！自己怎么只能偷吃。</p>
    <p class="normal">为何同为孩童，没有背景就无法渡江，被抛下面对死亡！</p>
    <p class="normal">
      我想……大家都能吃上饭，菜该做给天下人！美食应不分贵贱，我还不能就这么离开！！
    </p>
    <p class="normal">他猛的睁开眼，看到了黑色虚空中，传来紫色的亮光。</p>
    <p class="normal">他伸出了手。</p>
    <p class="center">【解锁核心玩法】</p>
    <p class="normal">
      五种味道隐作五行相生之阵，生生不息，把本应零散的午未的三条分裂的人生组合成了一段合恰的因果。
      收集完五种味道的五张场景自拍和截图，可以去购买处，凭购买小票兑换特殊奖励一份，仅限前100组玩家
    </p>
    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击此处继续
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  emit('update:active', 4)
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

