<template>
  <h1 class="center">改命</h1>

  <div class="paragraph">
    <p class="normal">
      老道：“他精魄已醒！执念已起！尚差一步！你既然已然穿过阴阳牌坊，获得紫瑞祥福，便已可通阴阳，我将倾尽法力渡你更迭因果之力，但我积攒多年的法力，也只能供你更迭一处而已。你需自寻玄机，穿越阴阳，找寻他生平中，那唯一可改变他死局的生机。把他带回去！”
    </p>
    <p class="center">你努力回想，找寻着那穿越阴阳和更迭生机之法。</p>
    <p class="normal">你努力回想，找寻着那穿越阴阳和更迭生机之法。</p>
    <p class="center">
      <strong
        >【在渡西江的深色背景章节中利用阴阳之力（如果你还记得是哪个按钮的话）寻找命运的变数（一处，两个字），寻到以后，通过它，便能更迭命运，展现新的道路。】</strong
      >
    </p>
    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击此处跳转到相应章节
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleContinueClick = () => {
  router.push({ name: 'TheWestRiver', query: { active: 1 } })
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
