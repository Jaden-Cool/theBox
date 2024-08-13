<template>
  <div>
    <h1 class="center">改命</h1>

    <div class="paragraph">
      <p class="normal">
        老道：“他魄火已起！执念已生！尚差一步！你既然已然穿过了阴阳牌坊，获得紫瑞祥福，已可不受伤害而通阴阳，我将倾尽法力送你去更迭因果。以我此刻所剩的法力，只能供你更迭<strong>一处</strong>而已。你需自寻玄机，穿越阴阳，找寻他生平中，那唯一可改变他死局的生机。把他带回去！”
      </p>
    </div>

    <div class="paragraph">
      <p class="center">
        【切换与<strong>阴阳二间</strong>，寻找命中唯一变数，寻到以后，通过它，便能逆天改命，为日昳展开新的道路。】
      </p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击此处跳转到相应章节
    </div>

    <div  class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import {  showDialog } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleContinueClick = () => {
  router.push({ name: 'TheWestRiver', query: { active: 1 } })
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '点击阴阳后，找到两篇文章中不一样的唯一地方' }).then(() => {})
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
