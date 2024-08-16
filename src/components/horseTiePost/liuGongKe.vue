<template>
  <div>
    <!-- <h1 class="center">橋珠酒家刘恭可</h1> -->

    <div class="paragraph">
      <p class="center">压力使人成长。</p>
      <p class="normal">
        区财和部分老行尊带着众多弟子离开了橋珠酒家。这让龙拜丹陷入了更深的压抑之中，要不是冯科还和一众老人咬牙坚持着，或许橋珠酒家在这个时候就已经撑不住了。常日昳和一脱年轻的弟子成为了酒楼中不可或缺的顶梁柱。
      </p>
      <p class="normal">
        常日昳天性聪慧，双手灵活，而且对余料重做的功夫非常了得。厨房中的那金木水火土都能如臂使指。
      </p>
      <p class="normal">
        在其他酒楼都还在以星期美点招揽客人的时候，橋珠酒楼已经可以做到天天美点——一天出一种新点心。阿鸾的点心创造力是一等一的优秀，而日昳做点心的速度则是像扒五桡龙舟（五人龙艇）一样飞快，他们两个人往往能抵得上五个人的速度，因此日昳还获得了一个“五掌龙”的绰号。而阿鸾也不遑多让被称为“金嘴凤”。
      </p>
      <p class="normal">
        两人的名声越来越大，以至于让橋珠酒楼的名声也更上一层楼，隐约比烧毁之前更甚。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        这一天，常日昳和阿鸾几人一起在厨房里忙碌，正当他准备把一盘点心送入烤箱之时，一个身穿道袍的中年男子走进了酒楼。
      </p>
      <p class="normal">
        只见这个身穿道袍的中年男子从后门进来，不知怎的没有被在后门洗菜的弟兄拦住，径直来到了厨房。
      </p>
      <p class="normal">
        男子步罡踏斗，大热天的穿了三层的长袖黄袍，头上绑了一个混元髻，明明看着四十多岁却已经头发花白。引得几个水台的弟兄对他指指点点。他手持罗盘，神情庄重，目光在几人之间环视了一圈，最终停留在常日昳身上。
      </p>
      <p class="normal">
        常日昳抬头看到这位陌生的道士，心中不免疑惑：“这位道长，有何贵干？”
        道士走上前来，微微鞠躬：“常日昳。”
      </p>
      <p class="normal">
        常日昳有些疑惑的点了点头：“正是。不知道长有何指教？化缘的话我们前门有粥摊。”
      </p>
      <p class="normal">
        道士从怀中取出一封信，递给常日昳：“ 在打开之前，你要有些心理准备。不如，我们换个地方？”
      </p>
      <p class="normal">常日昳惊喜的说道：“是阿妈的来信吗！来来来，师傅请！”</p>
      <p class="normal">两人支开了其他人，来到了黄皮树下。</p>
      <p>
        <van-image
          fit="contain"
          :src="master"
          @click="showImagePreview({ images: [master], showIndex: false })"
        />
      </p>
      <p class="normal">
        道人细细的端详着日昳，艰难的组织着词汇。最终摇摇头，放弃了。“是你父亲的信...”
        道人把一封看着染血的信交了给日昳。
      </p>
    </div>

    <div class="paragraph">
      <p class="center">在盒子中寻找一封不在物品列表中的染血信件</p>
      <p class="center"><strong>【要找到父亲被陷害的线索的话，午未应该去哪里？】</strong></p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <div  class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog, showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import master from '@/assets/images/master.png'
const emit = defineEmits(['update:active', 'handleAutoPlay'])

const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '广州':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 10)
      break
    case '祖屋':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 10)
      break
    case '家乡':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 10)
      break
    case '乡下':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 10)
      break
    default:
      state.answer = ''
      showToast({
        message: '十年前....~',
        icon: 'cross'
      })
      break
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '奶奶说的盒子底难道其实说的是.....' }).then(() => {})
}
</script>

<style lang="less" scoped>
.van-cell {
  padding: 8.1px;
}
:deep(.van-cell__value) {
  display: flex;
  align-items: center;
}
.van-image {
  left: 50%;
  transform: translateX(-50%);
}
</style>
