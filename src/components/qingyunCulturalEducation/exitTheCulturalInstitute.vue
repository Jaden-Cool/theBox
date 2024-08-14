<template>
  <div>
    <!-- <h1 class="center">离开文教所</h1> -->

    <div class="paragraph" @click="handleMainBoxClick">
      <p class="normal">
        1944某天午饭过后，高年级的孩子们在台上表演赖子英老师写的话剧，旁边围着五六十个十一二岁的学生们正兴高采烈的围坐在一起观看。
      </p>

      <p class="normal">
        不知不觉已经一年了。
        常日昳交代好了自己的工作，准备离开。他最后与赵百则打了声招呼，背起行囊，准备悄悄离开。尽管不舍，他知道自己已经完成了使命，是时候前往新的旅程了。
      </p>

      <p class="normal">
        就在常日昳走到校门口，准备离开的时候，台上的高年级学生们忽然站成一排，齐声喊道：“常师傅，再见！”
      </p>

      <p class="normal">
        常日昳内心五味杂陈，他们前不久都还是一些任性难哄的纨绔子弟，现在却无比懂事。常日昳感受着手中军用水壶的温热和情谊。他深吸一口气，双手放在嘴边扯着喉咙喊道：
      </p>

      <p class="center">
        “孩子们，在这个最黑暗的年代里面，你们要成为最亮也是最旺的一团火！你们一定会照亮更多人的人生，而那些人也会照亮更多的人。你们要诚实，要勇敢，要顽强，要抗争
        ！这青云之魂势必会成为那燎原之火！”
      </p>

      <p class="center">说罢，日昳转头藏起泪水，踏上了归家之路。</p>
    </div>
    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击此处继续
    </div>
  </div>
</template>

<script setup>
import { showDialog } from 'vant'
const emit = defineEmits(['update:active', 'handleAutoPlay'])
const handleContinueClick = () => {
  showDialog({
    message: '在那个艰难的年代，每一条生命都无比脆弱',
    confirmButtonText: '继续故事',
    showCancelButton: true
  }).then(() => {
    emit('update:active', 3)
  })
}
const handleMainBoxClick = () => {
  emit('handleAutoPlay')
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
