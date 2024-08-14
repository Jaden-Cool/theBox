<template>
  <div class="main-box">
    <!-- <h1 class="center">青云之路</h1> -->

    <div class="paragraph">
      <p class="normal">
        你来到了青云研究院，感受着桌子的厚重感。一股青木的灵气源源不断的涌入你的身体里。这张桌子好像是刷了桐油一般，让你想起了家乡的龙舟......
      </p>
      <p class="normal">
        1942年末的一天，常日昳像往常一样在厨房水台和酒楼各处奔跑。
        经历了橋珠酒家的灾后重建工作，他已然成为一名出色的全能帮厨。
      </p>
      <p class="normal">
        时代的动荡并未停止，随着战争的愈演愈烈，越来越多的人奔赴前线。就在这一天，一位老熟人找上了门。
      </p>
      <p>
        <van-image
          fit="contain"
          :src="zhenZhou"
          @click="showImagePreview({ images: [zhenZhou], showIndex: false })"
        />
      </p>
      <p class="normal">
        “啊！是周.. 陈八老爷。”
        正在杀鱼的日昳停下了手上的功夫，一脸惊讶的看着出现在面前的周之贞。陈八是周之贞曾经用过的化名，虽然日昳对政治不敏感，但是就算是他也知道，这位前县长无论如何也不应该出现在这沦陷区中。
      </p>
      <p class="normal">
        周之贞和几年前已经大不一样，储了两撇胡子之余，头上的发型已经改成了利落的寸头，身上往常利落的中山装也换成了一套粗布蓝衣。日昳赶忙擦了擦手，把手头上的活计交了给身边的人，随口说道，“哦，是设宴的事情吗，来我们去后院聊。”
        日昳着急忙慌的编了一个借口，把周之贞带离了厨房。
      </p>
      <p class="normal">
        两人来到后院的煤房，周围是竹篱和几株桂花树。微风拂过，带来了淡淡的反季桂花香，这本应有些诗意的场景两人却无暇欣赏。再香的桂花也掩盖不住硝烟的刺鼻，和两人之间紧张的气息。
      </p>
      <p class="normal">
        “周校长，你怎么会在这？你护卫呢？最近过的还好吗？” 常日昳受不了这沉默，率先开口说道。
      </p>
      <p class="normal">
        周之贞看着常日昳，眼神里满是信任和期望。只见他深吸一口气，开始解释当前的形势。
        “常，倭奴狂悍，蚕食上邦 ……生机绝焉 ……
        独之青云志父志师冀存，丧亡之余能培乡邦之元气。从广州，到现在的顺德，有能力有财力的很多人都已经逃去外面了，其中也包括你师傅和你几位同门。
      </p>
      <p class="normal">常，我相信你是有机会跟区财一起去香港的，但是你没有。”</p>
      <p class="normal">
        周之贞深深的看着常日昳的眼睛，这个年近半百的老人本应在远处休养生息，却越过了封锁线回到了这个是非之地。
      </p>
      <p class="normal">
        "青云文社正在组织一场护送行动，将一批有潜质的孩子送到封锁区外，但此时我们人手不足。”
        说到这里，周之贞猛的一弯腰，止不住的一阵干咳。日昳赶紧上前给他抚背顺气，好一阵子周之贞才咳得顺过气来。
      </p>
      <p class="normal">
        周之贞摇着手接着说：“不碍事不碍事，我已经重新联系上了很多旧时的社员，但是…
        在这个年代，人多眼杂，这个计划多一个人知道就多一分风险。”
      </p>
      <p class="normal">
        常日昳静静地听着，心中隐隐猜到了什么。他的目光闪烁，脸上充满了犹豫。他意会到当年周之贞老师和陈器范老师在绘画的那张地图，就是在计划今日的事情。
      </p>
      <p class="normal">
        周之贞看着常日昳的沉默，轻轻拍了拍他的肩膀，语重心长地说：“这个任务很危险，我也知道你也有家人在大良，所以我也不想勉强你。国难当前，念在你也曾经是一个难童的份上，常，帮帮我。”
      </p>
      <p class="normal">
        最快下周，最晚下个月，会有一个人送一样物件上门给你。要是你愿意接受这个任务，那你就收下，他会告诉你整个计划。要是不愿意的话，你就不要收。我只求你不要把这件事情告诉其他人。”
        说完，周之贞就孤身一人的离开了。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        战争的残酷他早已听闻过，只是没想到这场战争会直接来到他的面前。
        想到不确定的未来，常日昳给瀘紹年留下了一封口信。
      </p>
      <p class="center">
        <van-image
          fit="contain"
          :src="letter"
          @click="showImagePreview({ images: [letter], showIndex: false })"
        />
      </p>
    </div>

    <div class="paragraph">
      <p class="center">【今天是对常日昳来说一个重要的日子，解开口信的秘密】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
  </div>
  <div v-show="isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { showToast, showDialog, showImagePreview } from 'vant'
import { debounce } from '@/utils'
import zhenZhou from '@/assets/images/zhenZhou.jpeg'
import letter from '@/assets/images/letter.png'
const router = useRouter()
const state = reactive({
  answer: '',
  isAtBottom: false
})
const { answer, isAtBottom } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '1314':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      router.push({ name: 'TheWestRiver' })
      break
    case '一生一世':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      router.push({ name: 'TheWestRiver' })
      break
    case '亦生亦死':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      router.push({ name: 'TheWestRiver' })
      break
    case '一生一死':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      router.push({ name: 'TheWestRiver' })
      break
    default:
      showToast({
        message: '最终答案为四个数字',
        icon: 'cross'
      })
      break
  }
}
const handleFloatingBtnClick = () => {
  showDialog({
    message: '使用 葵未年佳音月己亥日 解出三个字，然后根据三个字的表面含义找到对应的内容'
  }).then(() => {})
}
// 滚动事件处理函数
const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = document.documentElement.scrollHeight

  // 首先检查内容是否足够长以产生滚动条
  if (scrollHeight <= clientHeight) {
    // 如果没有滚动条，直接设置 isAtBottom 为 true
    state.isAtBottom = true
  } else {
    // 如果有滚动条，则根据滚动位置判断
    state.isAtBottom = scrollTop + clientHeight >= scrollHeight - 100 // 假设距离底部100px时认为已到底部
  }

  // 判断是否滚动到底部（这里可以根据需要调整阈值）
  state.isAtBottom = scrollTop + clientHeight >= scrollHeight - 100 // 假设距离底部100px时认为已到底部
}

// 防抖函数
const debouncedHandleScroll = debounce(handleScroll, 500) // 等待时间为500毫秒

onMounted(() => {
  window.addEventListener('scroll', debouncedHandleScroll)
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
})
</script>

<style lang="less" scoped>
.main-box {
  background-color: #e6fff3 !important;
}
</style>
