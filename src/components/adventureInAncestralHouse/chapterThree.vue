<template>
  <div>
    <h1 class="center">祖屋奇遇</h1>
    <div class="paragraph">
      <p class="normal">阳光透过柚子树叶，斑驳地洒在你身上，你还是坐在水井旁，没有动过地方。</p>

      <p class="normal">
        你在祖屋的厨房中找到了一把小刀，沿着缝隙小心翼翼地撬开这个铁盒。盒子的缝隙中，
        锈迹和泥土混在一起，卡得异常严实，你想用井水把污垢化开，但是又怕弄坏里面的存物。
      </p>

      <p class="normal">于是，费了好一番功夫你才听到一声“砰啪”，盖子被打开了。</p>

      <p class="normal">
        如你所见，铁盒里装着一些看起来年代久远的物品。你轻轻翻开那些信件，里面是你从未见过的字迹，带着老派的优雅。
      </p>

      <p class="normal">
        <strong
          >这时，你看到一个在影像中熟悉的名字，泸绍年。别的信件你还没有头绪，似乎，要先从这里看起。</strong
        >
      </p>

      <p class="normal">
        读着读着，眼前的景象逐渐模糊，你发现自己置身于一个工厂的办公室内，外面纺织机的噪声被木制薄门勉强盖住了。
      </p>

      <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
        点击此处继续
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  emit('update:active', 3)
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
