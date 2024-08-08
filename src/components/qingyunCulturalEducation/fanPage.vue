<template>
  <div>
    <h1 class="center">扇子</h1>
    <div class="paragraph">
      <p class="normal">
        我用这扇，给你留了一点祝福，只要是你... 只要是你就定能找到……
        说罢常午未写完最后一个字。他的气息越来越弱，最后一缕金光消失在他的指尖。
      </p>
      <p class="center"><strong>一纸相隔南北折，金光在东尾朝西，</strong></p>
      <p class="center"><strong>铆钉为眼在碉楼，青云展尽向南开，</strong></p>
      <p class="center"><strong>曲折黑白分阴阳，剑指两界相交处。</strong></p>
      <p class="center"><strong>金钉在柄置于眼，敦仁尚美宏图展，</strong></p>
      <p class="center"><strong>青山易改指巷镜，保底就在美人尖。</strong></p>
    </div>
    <div class="center subtleFade">
      <p style="margin: 0;">到达指示场景处</p>
      <p style="margin: 0;">寻找<strong>"午未"</strong>二字</p>
      <p style="margin: 0;">将午未放上去</p>
    </div>
    <div class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showDialog } from 'vant'
const handleFloatingBtnClick = () => {
  showDialog({
    message: '最后一次使用地图，找到常午未为你留下的最终秘密。最终地点有最后一道二维码'
  }).then(() => {})
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
