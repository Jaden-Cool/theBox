<template>
  <div>
    <h1 class="center">搬家</h1>
    <div class="paragraph">
      <p class="normal">
        收下日晷后，那人还叮嘱了兰姨几句，日昳没听清，只知道兰姨带着他俩匆匆往家赶。
      </p>
      <p class="normal">
        那夜，膝下无儿的赵氏夫妇在提出了要想要让常招娣过继到赵家做二房的打算。一来是可以减轻常家的负担，同时也是出于对常惜端的情义。
      </p>
      <p class="normal">
        阿兰此时正巧带着孩子们回来，把孩子们放下之后，就冲了进去大人们聊天的房间，里面传来了她高昂的声线。
      </p>
      <p class="normal">
        瀘紹年不知道阿兰为何突然提前回来，也不知道她为什么这么激动，但她也想起那三副落地有声的阴杯……
      </p>
      <p class="normal">那夜，赵氏夫妇离开的时候没有带走任何一人。</p>
      <p class="normal">
        接下来的几个月，瀘紹年变卖了家中的屋子和剩余的物品，筹得了一笔钱，带着两个孩子举家搬去了均安沙头村避债。
      </p>
      <p class="center">————————————————</p>
      <p class="normal">你的视线重新凝实，手上的小罗盘还在微微发烫。那芭蕉扇闪烁着炽热的红光</p>
    </div>
    <p class="center">
      <van-image
        fit="contain"
        :src="aFan"
        @click="showImagePreview({ images: [aFan], showIndex: false })"
      />
    </p>
    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      【点击此处继续】
    </div>
  </div>
</template>

<script setup>
import { showImagePreview } from 'vant'
import aFan from '@/assets/images/aFan.png'
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  emit('update:active', 9)
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
