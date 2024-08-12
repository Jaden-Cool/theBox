<template>
  <div class="main">
    <h1 class="center">渡西江</h1>

    <div class="paragraph">
      <p class="normal">
        你破译了这封口信，心理咯噔了一下。一生一世？还是...
        一生一死？常日昳这个时候才十四岁，不可能有那么多的心思在自己留给母亲的信上，去做那么复杂的暗号。难道一切皆有命数？你摇了摇头，集中精神，沉浸到了纸条里面......
      </p>
      <p class="normal">夜在你面前像幕布一样展开</p>
    </div>

    <div class="paragraph">
      <p class="normal">
        西江岸边的渔民们一如既往地享受着捕鱼后和家人一起吃饭的闲暇时光，仿佛战争的薪火还未燃烧到这里一般。
      </p>
      <p class="normal">
        讽刺的是，看似平和的表象下，这渡口其实早已被日军所完全占领，所以自然没有被卷入各种斗争之中。
      </p>
      <p class="normal">可这也意味着想要渡江寻求新生，几乎是难于登天的一件事。</p>
      <p class="normal">
        大家趁黑摸索了无数次，确实找不到日军封锁的缺口。就算是有些水性极好的渔民掩护，也很难避开巡逻的耳目。零零碎碎有几个游击队员找到了少许空隙到达了对岸准备随时接应。
      </p>
      <p class="normal">
        你依稀见到巡逻的日军配备了比较齐全的枪械装备，人数也相当充足。就算是深夜，甘竹滩这个绞肉机还没有完全停息。
      </p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击此处继续
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  emit('update:active', 1)
}
</script>

<style lang="less" scoped>
.main {
  background-color: #e6fff3 !important;
}
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
