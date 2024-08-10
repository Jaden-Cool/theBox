<template>
  <div>
    <h1 class="center">真味甜</h1>

    <div class="paragraph">
      <p class="normal">
        “我这辈子最自豪的事情，莫过于成为了一条所谓的开边大鱼，无论多少辛辣，到了最后，我似乎只能尝到甜味。就像刚吃上的这一口猪脚姜。
      </p>
      <p class="normal">
        我曾经到达过一个陌生的地方，虽然大部分事情都难以记清，但唯独记得那里的猪脚姜店铺已经随处可见了。吃上这一口，仿佛那样的未来就快要到来了一般，这是我生命中最幸福的时刻之一了。”
      </p>
      <p class="normal">他的脸上浮现出一抹温暖的笑容，那是对未来憧憬的信心。</p>
      <p>
        <van-image
          fit="contain"
          :src="sweetMemories"
          @click="showImagePreview({ images: [sweetMemories], showIndex: false })"
        />
      </p>
      <p class="center"><strong>“品味人间步步辛，只为后人尝尽甜。”</strong></p>
    </div>
    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击此处进入到游戏最终阶段
    </div>
  </div>
</template>

<script setup>
import { showImagePreview } from 'vant'
import sweetMemories from '@/assets/images/sweetMemories.png'
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  emit('update:active', 6)
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
