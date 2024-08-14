<template>
  <div class="main-box">
    <!-- <h1 class="center">口味苦</h1> -->

    <div class="paragraph">
      <p class="normal">
        青云文教所的所有学生不仅学习文化知识，还要建校社，种菜，养猪。周之贞院长和老师们都会教孩子们一个道理：<strong>做人一定要有腰骨，要做开边大鱼</strong>。
      </p>
      <p>
        <van-image
          fit="contain"
          :src="unopenedFish"
          @click="showImagePreview({ images: [unopenedFish], showIndex: false })"
        />
      </p>
      <p class="normal">
        <strong>一条鱼开两边，软边有头无尾。所以做人一定要硬边！有头 有尾 有腰骨。</strong>
      </p>

      <p class="normal">
        在文教所，每个人都尽自己全力去做力所能及的事情。所里每日吃的米，需要从五公里外靠学生自己走一个多小时去江谷墟去搬，四十斤一袋的大米压在学生身上，汗滴在土里，村口榕树根弥漫着咸咸的味道。但是没人喊苦。
      </p>
      <p class="normal">
        渐渐的，日子好了起来。餐桌上开始出现了土豆和“青云猪肉”（白萝卜）。蔡尓洪更是展现了物尽其用的机灵精神，经常把锅底焦黑锅巴铲下来，美其名曰“青云切酥”分给其他同学吃。
      </p>
      <p>
        <van-image
          fit="contain"
          :src="cooking"
          @click="showImagePreview({ images: [cooking], showIndex: false })"
        />
      </p>
      <div class="center">
        <strong
          >饮得锅灰骨汤
          <p style="margin: 0; color: #00b0f0">苦</p>
          ，无惧战火血汗
          <p style="margin: 0; color: #c00000">咸</p>
          。</strong
        >
      </div>

      <div class="center">
        【解锁真味：
        <p style="margin: 0; color: #00b0f0">苦</p>
        】
      </div>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      <p style="margin: 0; padding: 0">把此页面截图</p>
      <p style="margin: 0; padding: 0">团队青云研究所里拍一张合照</p>
      <p style="margin: 0; padding: 0">记录完毕后点击此处继续</p>
    </div>
  </div>
</template>

<script setup>
import { showImagePreview, showDialog } from 'vant'
import cooking from '@/assets/images/cooking.jpeg'
import unopenedFish from '@/assets/images/unopenedFish.png'
const emit = defineEmits(['update:active', 'handleAutoPlay'])
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
.main-box {
  background-color: #e6fff3;
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
