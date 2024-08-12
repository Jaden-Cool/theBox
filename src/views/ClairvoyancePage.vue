<template>
  <div>
    <h1 class="center">开天眼</h1>
    <div class="paragraph">
      <p class="normal">
        你惬意地喝着水牛奶，一时间，仿佛你也去到了那个无忧无虑的年代。此时，那个虚影再次出现在了门口，这次比上一次清晰了一些。你依稀能感觉这应该是个瘦高的男人，金光刺眼。他缓缓向你说道，“你...天眼...开....需...多...火气。”
        ...天眼...开....需...多...火气。”
      </p>
      <p class="normal">
        他手一抬，<strong>【访客地图】</strong>从你袋子里中飘出，在你面前展开了。上面隐约出现了几行金字:
      </p>
      <p class="normal center">
        <strong>一数为塔遮其首，天空为镜映其愁。</strong>
      </p>
      <p class="normal center">
        <strong>红绳解离奔两头，重牵于好现桥头。</strong>
      </p>
      <p class="normal center">
        <strong>重圆破镜难长久，旧桥早已难寻游。</strong>
      </p>
      <p class="normal">
        留下这句话以后，道人再次消散，仿佛维持形体就已经让他筋疲力尽了。
        去往这首诗所指明的秘密地点，寻找下一步指引。
      </p>
    </div>

    <p class="subtleFade" @click="handleFloatingBtnClick">
      【提示：取出地图，使用珠绳，根据诗词里面链接对应的两个建筑物，操作绳子寻找旧桥】
    </p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { showDialog } from 'vant'
const handleFloatingBtnClick = () => {
  showDialog({ message: '到目标地点以后扫描二维码继续' }).then(() => {})
}
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
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
