<template>
  <div class="paragraph">
    <p class="normal">
      你猛然有了线索——奶奶的姓，正是”常“。这世界上恐怕也只有奶奶能续上这段前缘了，你这么想着，从暑气中回过神来，马上驱车前往了啊仁居住的老人院。
    </p>

    <p class="center">
      <van-image
        fit="contain"
        :src="grandma"
        @click="showImagePreview({ images: [grandma], showIndex: false })"
      />
    </p>

    <p class="normal">耐心听你讲述一阵后，奶奶取出一双珍藏多年的一对月牙形木块。</p>

    <p class="normal">
      “一会儿你双手，对，这样合在掌心——你这样拿着，一会儿闭上眼睛，我会念两句话，你听我不说话以后呢，就诚心地把这筊杯抛出去。”你看着面前慈祥可亲的老人，按她的指点缓缓闭上眼睛。
    </p>

    <p class="normal">
      老人院坐落在城市边缘，环境清幽，种满植被。你渐渐地感觉到，空气中弥漫着淡淡的花香和淡淡的樟木味，让你的心神无比的凝聚。于是你一步步按照奶奶的指示，把这对称为“筊杯”的问卜之物，合在了掌心。
    </p>

    <p class="center">
      <strong>
        “..信女常碧霞，诚信叩拜，欲问旧事，请乞明示（往常正式问挂，需要烧香，念出一系列要请的神仙，以及报出地址，姓名，生辰八字，再请示问题。为不冒犯神明，此处故意留空。）。”</strong
      >
    </p>

    <p class="center">抛出</p>

    <div class="center cup-box">
      <img src="@/assets/images/agree.jpg" @click="handleCupClick('青云文社pv')" />
      <img src="@/assets/images/hesitate.jpg" @click="handleCupClick('橋珠酒家pv')" />
      <img src="@/assets/images/object.jpg" @click="handleCupClick('红荔pv')" />
    </div>

    <!-- <p>
      （内测第二场暂时没有选择，正式版里面是三个照片，点击其中一个以后会跳转。我后面内容默认是选择了同意以后的结果）
    </p> -->
  </div>
</template>

<script setup>
import { showImagePreview, showDialog } from 'vant'
import grandma from '@/assets/images/grandma.jpeg'
const emit = defineEmits(['update:active', 'handleAutoPlay'])

const handleCupClick = (key) => {
  switch (key) {
    case '青云文社pv':
      showDialog({
        message: '即将探索【青云文社】故事线',
        confirmButtonText: '继续故事',
        showCancelButton: true
      })
        .then(() => {
          emit('update:active', 7)
        })
        .catch(() => {})
      break
    case '橋珠酒家pv':
      showDialog({
        message: '即将探索【橋珠酒家】故事线',
        confirmButtonText: '继续故事',
        showCancelButton: true
      })
        .then(() => {
          emit('update:active', 8)
        })
        .catch(() => {})
      break
    case '红荔pv':
      showDialog({
        message: '即将探索【红荔】故事线',
        confirmButtonText: '继续故事',
        showCancelButton: true
      })
        .then(() => {
          emit('update:active', 9)
        })
        .catch(() => {})
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
