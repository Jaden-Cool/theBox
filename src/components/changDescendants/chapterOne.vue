<template>
  <div class="paragraph">
    <p class="normal">
      恐怕这世界上，也只有奶奶能够续上这一段前缘了。你的疑惑和直觉已经让你寻到了这里——因为奶奶也
      姓常。当你从暑气中回过神来，已经来到了奶奶居住的老人院。
    </p>

    <p class="normal">你简单讲述了事情的大概。奶奶取出了一双珍藏多年的的一对月牙形木块。</p>

    <p class="normal">
      “你这样拿着，对，一会儿闭上眼睛，然后诚心的把这圣杯扔出去。记得，要心静。”你看着银色发丝慈祥
      的奶奶，跟着她示意一样，缓缓闭上了眼睛。
    </p>

    <p class="normal">
      老人院坐落在城市边缘，环境清幽，四周种满了各种花草树木，此时，你方才感觉到，空气中弥漫着淡淡的花香。
    </p>

    <p class="normal">
      于是开始按照奶奶的指示，开始使用手上这对称为“圣杯”的问卜之物，将它们合在一起，并抛出。
    </p>

    <div class="cup-box">
      <img src="@/assets/images/agree.png" @click="handleCupClick('青云文社pv')" />
      <img src="@/assets/images/hesitate.png" @click="handleCupClick('橋珠酒家pv')" />
      <img src="@/assets/images/object.png" @click="handleCupClick('红荔pv')" />
    </div>

    <!-- <p>
      （内测第二场暂时没有选择，正式版里面是三个照片，点击其中一个以后会跳转。我后面内容默认是选择了同意以后的结果）
    </p> -->
  </div>
</template>

<script setup>
const emit = defineEmits(['update:active'])

const handleCupClick = (key) => {
  switch (key) {
    case '青云文社pv':
      emit('update:active', 7)
      break
    case '橋珠酒家pv':
      emit('update:active', 8)
      break
    case '红荔pv':
      emit('update:active', 9)
      break
  }
}
</script>

<style lang="less" scoped>
.van-cell {
  padding: 8.1px;
}
:deep(.van-cell__value) {
  display: flex;
  align-items: center;
}
.cup-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
}
.cup-box > img {
  width: 100px;
  height: 100px;
}
</style>
