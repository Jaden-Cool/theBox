<template>
  <div>
    <!-- <h1 class="center">大罗村</h1> -->
    <div class="paragraph">
      <p class="normal">就在你的指尖描绘出大罗的一瞬间，卖身契上的“仙”字发出了万丈金光。金光直冲苍穹，穿过房顶消失而去。你知道，你替午未完成了寻根之术。接下来应该不用等太久了......</p>
    </div>

    <div class="paragraph">
      <p class="normal">你在已经微微结块的炉子灰中挖着什么。刘天师吩咐过，一定要轻挖，你们要找的东西很小很脆弱。</p>
      <p class="center">此时站在门口的刘天师一手端着罗盘，另一手拿着笔，他的面前飘着一张纸。一路走来你已经见识过他的各种手段，就算此时他从道袍中掏出头牛来你都不会觉得惊讶。那张画着格子的纸你已经不止一次见他填写了。</p>
      <p class="normal">你虽然问过他那是什么，他总是摇摇头，也只好作罢。临出发之前他已经解释过了，他和你说的话句总数有限，再多就是泄露天机了，两人都会有危险。</p>
      <p class="normal">“啊，是不是这个？” 你手中捏着一个包了两层的纸包。刘恭可眼神一亮，随即又耸了耸肩表示不知道。这一路下来你也明白了他这种婉转表达同意的方法。你激动的拆开了纸包，只见里面出现了一个工整的三角符。这就是常惜端留给你的最重要的东西？难道只是一个平安符吗？你拆开平安符, 细细端详</p>
    </div>

    <div class="paragraph">
      <p class="center">
        <strong>【打开三角符，从奉字内的符号解出一串隐藏的内容，四个中文字加六位数字】</strong>
      </p>
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
import { reactive, toRefs } from 'vue'
import { showToast, showDialog } from 'vant'
const emit = defineEmits(['update:active', 'handleAutoPlay'])
//
const state = reactive({
  answer: '',
  showPopover: false,
  actions: [{ text: '提示1' }, { text: '提示2' }, { text: '提示3' }]
})
const { answer, showPopover, actions } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '广东银行240129':
    showDialog({
        message: '这串数字，是日昳的生日',
        confirmButtonText: '确定',
        showCancelButton: false
      })
        .then(() => {
          emit('update:active', 13)
        })
        .catch(() => {})

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
const onSelect = (action, index) => {
  if (index === 0) {
    showDialog({
      message: '提示1：把符箓顺时针旋转九十度以后尝试阅读'
    }).then(() => {})
  }
  if (index === 1) {
    showDialog({
      message: '提示2：后面的六个数字是以中间点旋转180度复制的'
    }).then(() => {})
  }
  if (index === 2) {
    showDialog({
      message: '提示3：前三个数字是240'
    }).then(() => {})
  }
}
</script>

<style lang="less" scoped>
:deep(.van-popup) {
  left: 24px;
}
.van-cell {
  padding: 8.1px;
}
:deep(.van-cell__value) {
  display: flex;
  align-items: center;
}
</style>
