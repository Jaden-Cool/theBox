<template>
  <div>
    <h1 class="center">口味苦</h1>

    <div class="paragraph">
      <p class="normal">
        食物的味道实在太寡淡，许多孩子半夜悄悄去厨房偷盐一顿饭放几颗，饭便有了味道。喝牛骨孩子们还带了自己偷的盐加到汤里，想中和一下这难以入口的感觉。
      </p>
      <p class="normal">
        青云文教所的所有学生不仅学习文化知识，在文教所的重建中，还出了很多力气。周之贞院长有一句名言：做人一定要有腰骨，要做开边大鱼。何为开边大鱼？开边即为切开两半，鱼只能从鱼骨旁边开半，左右各不相同，如图所示。
      </p>
      <p>
        <van-image
          fit="contain"
          :src="cooking"
          @click="showImagePreview({ images: [cooking], showIndex: false })"
        />
      </p>
      <p class="normal">切下肉的一半，虽然肉好吃，但是没有骨头和头尾。</p>
      <p class="normal">做人要有骨气，有头尾，才能开创自己道路。</p>
      <p class="normal">孩子们虽然半懂半不懂，但是每个人都尽自己全力去做力所能及的事情。</p>
      <p class="normal">
        所里每日吃的米，需要从五公里外靠学生自己搬运进来，四十斤一袋的大米压在学生身上，汗滴在土里，村口榕树根弥漫着咸咸的味道。但是没人喊苦。
      </p>
      <p class="normal">
        学生们还参与种菜、养猪等生产活动。孩子们在集体劳动中学会了如何自力更生，如何与他人合作。
      </p>
      <p class="normal">
        周之贞院长同时也努力沟通附近乡邻，在许多人的捐助下，学校逐渐有了坚实的后盾。
      </p>
      <p class="center"><strong>食得锅底黑水苦，不怕战火血汗咸。</strong></p>

      <p class="center">【此时你品尝到的是什么味道？】</p>
      <p class="center">【解锁真味：咸】</p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      <p style="margin: 0; padding: 0">把此页面截图</p>
      <p style="margin: 0; padding: 0">团队在附近拍一张照片</p>
      <p style="margin: 0; padding: 0">记录完毕后点击此处继续</p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import { showImagePreview, showDialog } from 'vant'
import cooking from '@/assets/images/cooking.jpeg'
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  showDialog({
    message: '苦只是一时的，用汗水浇灌的土地总会有相对称的收成',
    showCancelButton: true
  }).then(() => {
    emit('update:active', 2)
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
