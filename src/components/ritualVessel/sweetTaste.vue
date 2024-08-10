<template>
  <div>
    <h1 class="center">口味甜</h1>

    <div class="paragraph">
      <p class="normal">
        仿佛冥冥之中早有预感，当赵姓夫妇提出要认招娣做干女儿时，她竟没有表现出过多的惊讶。
      </p>
      <p class="normal">
        在那宴席之间，常日昳尚且懵懂，还不明白这一决定所蕴含的深意。晚饭后，在只有一盏油灯的客厅中，瀘紹年紧咬着嘴唇，双眼红肿，目光中满是痛苦与不舍。常招娣站在母亲面前，小小的身躯微微颤抖，泪水在眼眶里打转。
      </p>
      <p class="normal">
        瀘紹年颤抖着伸出双手，轻轻抚摸着招娣的头发，声音哽咽：“招娣啊，娘也舍不得你走，可这或许是能让你过上好日子的机会。”
      </p>
      <p class="normal">说着，她泪如雨下，紧紧将招娣拥入怀中，身子因抽泣而微微颤抖。</p>
      <p class="normal">
        但最终，瀘紹年还是强忍悲痛，缓缓松开了怀抱，强装镇定地说：“去吧，孩子，去好好过日子。”
      </p>
      <p class="normal">常招娣满是泪痕的脸望着母亲，一步一回头，最终跟着赵姓夫妇慢慢离开了。</p>
      <p class="normal">
        瀘紹年望着女儿远去的背影，无力地瘫坐在地上，掩面痛哭，那悲切的哭声在房间里久久回荡。常招娣就在当夜跟着赵姓夫妇匆匆离去，从此更名换姓，叫做赵明珠。
      </p>
      <p class="normal">
        知晓了真相后的日昳，仿佛灵魂被抽走了一般，连续好几个月都茶饭不思。他满心满脑都是姐姐的身影，思念成疾的他连续几次偷跑出去寻找姐姐，却每次都险象环生，差点就落入了人贩子的魔掌。
      </p>
      <p class="normal">
        在接下来的几年里，懂事的招娣时不时会托人给家里捎来信件和钱财。起初，常家母子还能从这些信件中感受到招娣的关怀与牵挂。然而，随着时光的流逝，距离的拉长，信件传递的间隔越来越久。最终，常家母子和招娣渐渐断了音讯。那曾经温暖的联系，如今只剩下那一纸卖身契和鱼仔饼留下的那一根红绳，承载着母子二人无尽的思念，在岁月的长河中，化作了心底最深处的痛楚与无奈。
      </p>
      <p>
        <van-image
          fit="contain"
          :src="tianchahua"
          @click="showImagePreview({ images: [tianchahua], showIndex: false })"
        />
      </p>
      <p class="center">——————————</p>
      <p class="normal center">
        <strong>未品人间处处甜，却尝离别朝朝苦。</strong>
      </p>
      <p class="normal center">解锁真味：【苦】</p>
      <p class="center subtleFade" @click="handleContinueClick">
        【把此页面截图，在美食博物馆门口合照，然后点击此处继续】
      </p>
    </div>
  </div>
</template>

<script setup>
import { showDialog, showImagePreview } from 'vant'

import tianchahua from '@/assets/images/tianchahua.jpg'
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  showDialog({
    message: '人生总是充满了不经意的遗憾',
    confirmButtonText: '继续故事',
    showCancelButton: true
  }).then(() => {
    emit('update:active', 3)
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
