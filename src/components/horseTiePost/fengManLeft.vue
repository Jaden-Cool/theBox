<template>
  <div>
    <!-- <h1 class="center">冯满离开</h1> -->

    <div class="paragraph">
      <p class="normal">
        1940年的某个黄昏，冯满约了我在桥珠酒楼后院的黄皮树底下见面。那天，夕阳染红了天际，空气中弥漫着一种难言的忧愁。
      </p>
      <p class="normal">
        “日昳，区财师傅让我和他一起去香港躲避战乱，可能，会在那边开一家店。人可以死，但是顺德菜的手艺必须传下去。”冯满的声音低沉，眼神中流露出一丝复杂的情感。
      </p>
      <p class="normal">我点了点头，心中隐约知道他要说些什么，但还是静静地听着。</p>
      <p class="normal">“我明白，去香港对我来说是个好机会。”他轻轻叹了口气，“但是，阿鸾……”</p>
      <p class="normal">
        冯满顿了顿，看向我，那双眼睛里充满了难以割舍的情感。“你知道的，我喜欢她。”
      </p>
      <p class="normal">
        这句话如同一块石头投入了我的心湖，激起了层层涟漪。我想起了阿鸾，那次火灾中的情景依然历历在目，我无法否认自己对她的情感。
      </p>
      <p class="normal">冯满看出了我的心思，苦笑了一下，“我知道你也喜欢她，日昳。”</p>
      <p class="normal">我沉默不语。</p>
      <p class="normal">
        “她很坚强，也很独立，但这个世道那么乱，我放心不下她。”冯满的语气中透着无奈与关切。“我离开之后，希望你能替我好好照顾她。”
      </p>
      <p class="normal">
        我郑重地点了点头，心里承载着一种难以言说的沉重。我知道，这不仅仅是冯满对我的托付，更是我对阿鸾的一份责任。
      </p>
      <p class="normal">
        “谢谢你，日昳。”冯满拍了拍我的肩膀，脸上勉强挤出一个微笑。“我们都要好好活下去。”
      </p>
      <p class="normal">
        那一刻，夕阳已经快要落下，天空逐渐被黑暗吞没。冯满离开的身影渐行渐远，而我站在原地，心中久久不能平静。
      </p>
    </div>

    <div class="paragraph">
      <p>
        <van-image
          fit="contain"
          :src="yellowTalismanPaper"
          @click="showImagePreview({ images: [yellowTalismanPaper], showIndex: false })"
        />
      </p>
      <p style="margin: 0" class="center">你发现众多许愿纸中，</p>
      <p style="margin: 0" class="center">有一张黄色的尤为显眼</p>
    </div>

    <div class="paragraph">
      <p class="center"><strong>【解读出这张黄纸上的具体内容】</strong></p>
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
import yellowTalismanPaper from '@/assets/images/yellowTalismanPaper.png'
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
    case '半闲庭':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      setTimeout(() => {
        showDialog({
          message: '前往③荷园并寻找半闲庭以继续',
          confirmButtonText: '继续故事',
          showCancelButton: true
        }).then(() => {
          emit('update:active', 9)
        })
      }, 1000)
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
const handleFloatingBtnClick = () => {
  showDialog({ message: '三个中文字' }).then(() => {})
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
