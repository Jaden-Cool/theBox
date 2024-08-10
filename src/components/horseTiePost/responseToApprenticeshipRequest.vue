<template>
  <div>
    <h1 class="center">拜师答复</h1>

    <div class="paragraph">
      <p class="normal">日昳回想过后认真回答，“是陈皮的味道。”</p>
      <p class="normal">
        区财点了点头，说 “没错是陈皮。能闻得出年份吗？”
        本来就细长的眼睛直接眯成了一条线看着日昳。日昳实在是想不出来，只好摇了摇头。这下完了，临门一脚，前功尽弃。日昳给区财鞠了一躬，“谢谢区财师傅赐教，日昳不知道。我就不打搅你了。”
        转身就开始往家的方向走。
      </p>
      <p class="normal">
        日昳垂头丧气的走到了路口，只听区财不紧不慢的说
        “呵，你这个靚仔都几实在。不用气馁，你那么多师兄里面，也只有冯满闻出了年份。”
      </p>
      <p class="normal">此时常日昳还没有会过意来，越走越远。</p>
      <p class="normal">
        区财看常日昳这孩子没反应，临关门之前提着嗓子大声说了一句：“回家买包靓茶叶，明天九点准时过来斟茶拜师！”
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
  emit('update:active', 5)
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
