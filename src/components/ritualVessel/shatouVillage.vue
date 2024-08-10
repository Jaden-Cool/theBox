<template>
  <div>
    <h1 class="center">沙头村1</h1>

    <div class="paragraph">
      <p class="center">
        <van-image
          fit="contain"
          :src="portrait"
          @click="showImagePreview({ images: [portrait], showIndex: false })"
        />
      </p>
      <p class="center"><strong>辛未年 【羊年】 辛卯月 庚申日</strong></p>
      <p class="normal">
        1931年春节过后，债台高筑的瀘紹年变卖了祖屋，并经过兰姐介绍，在均安沙头村定居了下来。
      </p>
      <p class="normal">这个村庄静谧而美丽，四周环绕着清澈的河流和数不尽的桥梁。</p>
      <p class="normal">
        远离债务和丈夫失踪的困扰之后，这景色让瀘紹年相信可以在这里重新开始，
        唯一的难题是经济来源，经过一段日子的苦思冥想，瀘紹年决定听从兰姐建议带着两个孩子去当地的某处寻找出路……
      </p>

      <p class="center">【今天在三世书上写了什么？】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>

    <van-dialog
      v-model:show="show"
      title="回答正确，在博物馆内寻找【马姐菜：煎酿鲮鱼】扫描二维码继续"
      show-cancel-button
      @confirm="handleDialogConfirm"
    >
      <img :src="fish" />
    </van-dialog>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
// import { useRouter } from 'vue-router'
import { showImagePreview, showToast, showDialog } from 'vant'
import portrait from '@/assets/images/portrait.jpeg'
import fish from '@/assets/images/fish.png'
// const router = useRouter()
const emit = defineEmits(['update:active'])
const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  answer: '',
  show: false
})
const { answer, show } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  const isInWorkHoursAndWeekdaysBoolean = isInWorkHoursAndWeekdays()
  switch (state.answer) {
    case '姑婆屋':
      // （周一或者，六点后回答正确跳转【姑婆屋】，其他时间弹出对话框【回答正确，在博物馆内寻找【马姐菜：煎酿鲮鱼】扫描二维码继续】 以及下面图片）
      if (isInWorkHoursAndWeekdaysBoolean) {
        state.show = true
      } else {
        emit('update:active', 10)
      }
      break
    default:
      state.answer = ''
      showToast({
        message: '不正确，请再试一次，或者考虑一下看提示哦~',
        icon: 'cross'
      })
      break
  }
}
const handleDialogConfirm = () => {
  showToast({
    message: '回答正确，在博物馆内寻找【马姐菜：煎酿鲮鱼】扫描二维码继续'
  })
  //   router.push({ name: 'EndingPage' })
}
const isInWorkHoursAndWeekdays = () => {
  // 获取当前时间
  const now = new Date()

  // 获取当前的小时数
  const currentHour = now.getHours()

  // 获取当前的分钟数
  const currentMinute = now.getMinutes()

  // 获取当前是星期几（0代表周日，1代表周一，...，6代表周六）
  const currentDay = now.getDay()

  // 定义工作时间范围的开始和结束（小时和分钟）
  const startTimeHour = 9
  const endTimeHour = 17
  const endTimeMinute = 30

  // 判断是否在工作时间范围内
  if (
    currentHour >= startTimeHour &&
    (currentHour < endTimeHour || (currentHour === endTimeHour && currentMinute < endTimeMinute))
  ) {
    // 如果在工作时间范围内，再判断是否是周一到周五
    if (currentDay >= 1 && currentDay <= 5) {
      return true // 是的，当前时间在周一到周五的09:00-17:30之间
    }
  }

  // 如果不满足上述条件，则返回false
  return false
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '今日日期是 辛未年 辛卯月 庚申日' }).then(() => {})
}
</script>

<style lang="less" scoped>
:deep(.van-dialog__header) {
  padding: 16px;
}
:deep(.van-dialog__content) {
  margin-bottom: 16px;
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
