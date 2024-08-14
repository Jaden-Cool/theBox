<template>
  <div>
    <!-- <h1 class="center">祖屋奇遇</h1> -->
     
    <div class="paragraph" @click="handleMainBoxClick">
      <p class="normal">
        阳光透过柚子树叶斑驳地洒下，在身上投射出神秘的斑点。你仍旧坐在水井旁，不曾挪窝。
      </p>

      <p class="normal">
        用祖屋厨房里找到的小刀，你沿着缝隙小心翼翼地撬着铁盒。盒子的缝隙间充塞着锈迹和泥土，密封得异常严实。想用井水浸一浸污垢，却又怕沾湿了盒内的物件，只得顶着暑热，一点点地撬动。把上面一张黄纸切开了以后，终于，随着一声“咔哒”，盒内之物终于映入眼帘。
      </p>

      <p class="normal">
        铁盒里装着些看起来有些年头的纸制品，像是信件。轻轻翻开，里面是你从未见过的字迹，带着老派的优雅。
      </p>

      <p class="normal">
        在一份信件中你，看到一个熟悉的名字：瀘紹年。其他东西你暂无头绪，似乎要先从这里看起。
      </p>

      <p class="normal">
        读着读着，眼前的景象逐渐模糊，像是幻境，你发现自己置身于一个老式工厂的小隔间内，薄薄的木门遮掩不住门外的纺织机声。
      </p>
    </div>
    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击此处继续
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:active', 'handleAutoPlay'])
const handleContinueClick = () => {
  emit('update:active', 3)
}
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
