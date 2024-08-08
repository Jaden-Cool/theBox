<template>
  <h1 class="center">仁信1938</h1>
  <div class="paragraph">
    <p class="normal">1938年 六月一日</p>
    <p class="normal">
      今天是师傅第五次叫常日昳去白石村采购水牛奶，绰号“牛仔华”的董孝华出品的水牛乳质量特别好。区财师傅对食材品质有要求，日昳挑着一个木桶，来回一日的路程已经去了四次，却都被回绝供应。
    </p>
    <p class="normal">
      董孝华每次问完日昳的来头，就埋头干活不再理他。相信这一次也不例外。不过，不用在后厨备菜，日昳也是䟴䟴脚，滋滋悠。
    </p>
    <p class="normal">
      吃了那么多次闭门羹，这次日昳走得更慢了，到了白石村已经是下午了，这次反而没遇到董孝华，而是一个在做水牛乳的姐姐。
    </p>
    <p class="normal">董生不在，日昳没抱什么希望，反而悠闲地坐了下来。</p>
    <p class="normal">
      “小兄弟，我看你来了几次了，”姐姐一边熟练的给旁边的炉灶添加柴火一边问道。“你从哪儿来的呀？”
    </p>
    <p class="normal">“呀！大良那么远，来回都要一整天了吧？”姐姐问。“我都没去过那么远。”</p>
    <p class="normal">你看了看面前这位二十左右的姐姐，竟然没出过远门，你也感到了惊讶。</p>
    <p class="normal">
      “因为我们送水牛奶，只能送近的地方，家里活那么忙，牛奶送不到的地方我就都没去过。你那么远来，我爸爸不在，我让你尝一碗我们刚做好的新产品吧！省得你白来一趟。”
    </p>
    <p class="normal">
      原来她就是董孝华的女儿董洁文。交谈中，日昳终于明白了，这董生不卖给自己的原因，正是因为这路途遥远，天气炎热，水牛奶运到就变质了。
    </p>
    <p class="normal">
      “其实水牛奶的产出可麻烦了，除了<strong>热</strong>不好保存，这水牛也习惯了清幽的环境，最怕<strong>喧嚣嘈杂</strong>，一吵，便不产奶了。”董洁文说道。
    </p>
    <p class="normal">
      小姐姐端出一个蓝色瓷碗：“这是我们的新产品，水牛奶加热之后会产生奶皮，也能存放更久些。”
    </p>
    <p class="normal">日昳不知道，他竟是这日后鼎鼎大名的双皮奶的第一个客人。</p>
    <p class="normal">
      <strong>“收你一角钱好啦~”董洁文笑了笑。</strong>
    </p>
    <p class="normal">
      <strong>“噗！”日昳一口丝滑滴水牛奶差点喷了出来“不是说请我喝的吗？”</strong>
    </p>
    <p class="center">————————————</p>
    <p class="normal">
      <strong
        >回到现实，你也有了些许疲惫，手中握着盒子中的一角钱，行至仁信双皮奶店内，没想到用这一角钱真的换到了一碗水牛奶。你摇了摇头，感觉不可思议。抬头看见了周围墙上有些古老的物件，联想到回忆中生产水牛奶的两个避忌之处，把他们去除之后，数了数剩下物品的数量。</strong
      >
    </p>
    <p class="center">【去除避忌后，从左到右输入物品数量的数字】</p>
    <p style="display: flex; align-items: center; justify-content: center" class="center">
      <van-cell-group inset>
        <van-field v-model="answer" />
      </van-cell-group>
      <van-button plain hairline @click="handleConfirmClick">确认</van-button>
    </p>
  </div>
  <div v-show="isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { useRouter } from 'vue-router'
import { reactive, toRefs, onMounted, onUnmounted } from 'vue'
import { debounce } from '@/utils'
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
    case '1323':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      router.push({ name: 'Clairvoyance' })
      break
    default:
      showToast({
        message: '不正确，请再试一次，或者考虑一下看提示哦~',
        icon: 'cross'
      })
      break
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '例如，如果答案是，从左到右剩下两个水壶和两个电视就输入22为答案' }).then(
    () => {}
  )
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

// 组件挂载后添加滚动事件监听器
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  window.addEventListener('scroll', debouncedHandleScroll)
})

// 组件卸载前移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
})
</script>

<style lang="less" scoped>
.van-cell {
  padding: 8.1px;
}
/deep/.van-cell__value {
  display: flex;
  align-items: center;
}
</style>
