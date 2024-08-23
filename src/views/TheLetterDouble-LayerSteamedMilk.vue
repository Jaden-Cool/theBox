<template>
  <!-- <h1 class="center">仁信1938</h1> -->
  <div>
    <div class="paragraph">
      <p class="normal">1938年 六月一日</p>
      <p class="normal">今天是师傅第五次叫常日昳去白石村采购水牛奶，绰号“牛仔华”的董孝华出品的水牛乳质量特别好。区财师傅对食材品质有要求，日昳挑着一个木桶，来回一日的路程已经去了四次，却都被回绝供应。</p>
      <p class="normal">董孝华每次问完日昳的来头，就埋头干活不再理他。相信这一次也不例外。不过，不用在厨房处理材料，日昳也是䟴䟴脚，滋滋悠。</p>
      <p class="normal">吃了那么多次闭门羹，这次日昳走得更慢了，到了白石村已经是下午了，这次反而没遇到董孝华，而是一个在做水牛乳的姐姐。</p>
      <p class="normal">董生不在，日昳没抱什么希望，反而悠闲地坐了下来。</p>
      <p class="normal">“小兄弟，我看你来了几次了，”姐姐一边熟练的给旁边的炉灶添加柴火一边问道。“你从哪儿来的呀？”</p>
      <p class="normal">“呀！大良那么远，来回都要一整天了吧？”姐姐问。“我都没去过那么远。”</p>
      <p class="normal">你看了看面前这位二十左右的姐姐，竟然没出过远门，你也感到了惊讶。</p>
      <p class="normal">“因为我们送水牛奶，只能送近的地方，家里活那么忙，牛奶送不到的地方我就都没去过。你那么远来，我爸爸不在，我让你尝一碗我们刚做好的新产品吧！省得你白来一趟。”</p>
      <p class="normal">原来她就是董孝华的女儿董洁文。交谈中，日昳终于明白了，这董生不卖给自己的原因，正是因为这路途遥远，天气炎热，水牛奶运到就变质了。</p>
      <p class="normal">“其实水牛奶的产出可麻烦了，除了<strong>热</strong>不好保存，这水牛也习惯了清幽的环境，最怕<strong>喧嚣嘈杂</strong>，一吵，便不产奶了。”董洁文说道。</p>
      <p class="normal">小姐姐端出一个蓝色瓷碗：“这是我们的新产品，水牛奶加热放凉之后会产生奶皮，也能存放更久些。我加了蛋白和砂糖进去炖，然后就会凝固了，我想这样应该更容易卖。”</p>
      <p class="normal">日昳不知道，他竟是这日后鼎鼎大名的双皮奶的第一拨客人。吃了两口以后只觉得水牛奶的奶腥气完全被白糖压住了，顺滑的口感重新带出了奶香。日昳闭着眼享受着余韵的时候，</p>
      <p class="normal">
        <strong>“收你一角钱好啦~”董洁文笑了笑。</strong>
      </p>
      <p class="normal">
        <strong>“噗！”日昳一口奶糊喷了出来 “不是说请我喝的吗！”</strong>
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">回到现实，你也有了些许疲惫，手中<strong>握着盒子中的一角钱，行至曲水湾的仁信老铺内，没想到用这张老旧的一角钱真的换到了一碗水牛奶</strong>。店里的店员貌似对这张一角钱都有一种默契。</p>
    </div>

    <div class="paragraph">
      <p class="center">【抬头看见了周围墙上有些古老的物件，联想到回忆中生产水牛奶的两个避忌之处，把他们去除之后，数了数剩下物品的数量。答案为四个数字】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <van-popover v-model:show="showPopover" :actions="actions" placement="top-start" :offset="[24, 10]" @select="onSelect">
      <template #reference>
        <div class="floating-btn">提示</div>
      </template>
    </van-popover>
  </div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { useRouter } from 'vue-router'
import { reactive, toRefs, onMounted } from 'vue'
const router = useRouter()
const state = reactive({
  answer: '',
  showPopover: false,
  actions: [{ text: '提示1' }, { text: '提示2' }]
})
const { answer, showPopover, actions } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer.toString()) {
    case '1323':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      router.push({ name: 'ClairvoyancePage' })
      break
    default:
      showToast({
        message: '不正确，请再试一次，或者考虑一下看提示哦~',
        icon: 'cross'
      })
      break
  }
}
const onSelect = (action, index) => {
  if (index === 0) {
    showDialog({
      message: '提示1：水牛忌讳【热】和【吵】'
    }).then(() => {})
  } else {
    showDialog({
      message: '提示2：墙上饼干罐子是唯一不热又不吵的东西。输入四字的最终答案'
    }).then(() => {})
  }
}
// 组件挂载后添加滚动事件监听器
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<style lang="less" scoped>
.van-cell {
  padding: 8.1px;
}
:deep(.van-cell__value) {
  display: flex;
  align-items: center;
}
</style>
