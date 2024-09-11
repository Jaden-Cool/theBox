<template>
  <div>
    <!-- <h1 class="center">母亲回归</h1> -->

    <div class="paragraph">
      <p class="normal">抗日战争结束了！终于等到了母亲的消息！白驹班要回大良的橋珠酒家表演了！收到信的午未难掩兴奋。常午未丢下手头所有的事情，心急如焚地赶往大良。未见的母亲瀘紹年和旧时伙伴李清鹂，是他心中最深的牵挂。当日一别，已经快七年没见了，也不知道......</p>

      <p class="normal">天色渐暗，午未终于赶到橋珠酒家。那里已是灯火通明，台上戏班的人们正忙碌地准备着，台下挤满了观众，热闹非凡。午未在人群中艰难地穿行，目光急切地搜寻着那两个熟悉的身影。</p>

      <p class="normal">就在此时，舞台边缘，一个熟悉的声音传来：“虾仔！”那是母亲瀘紹年的声音，带着一如既往的温柔和关切。</p>

      <p class="normal">午未转过头，看到母亲站在一旁，眼中闪烁着泪光。他迅速走过去，紧紧握住母亲的手，激动地大喊：“阿妈！”</p>

      <p class="normal">瀘紹年用力地拍了拍他的肩膀，惊喜中带着哽咽：“虾仔，你怎么会...” 两人激动得话都说不完整，抱在一起喜极而泣。</p>

      <p class="normal">半响后，瀘紹年被后台叫去化妆，午未很快被人潮淹没。</p>

      <p class="normal">但他的心并未完全安定，因为他还没有看到李清鹂的身影。台上的表演者络绎不绝，李清鹂始终没有出现。午未的心情如潮水般起伏，不禁开始担心起李清鹂的安危。</p>
    </div>

    <div class="paragraph">
      <p class="center">【请从左到右排列：末，生，旦，丑，外，小，贴，夫 八个字】</p>
      <p class="center" style="margin-bottom: 0">可用这个网站作为排列的提示：</p>
      <div class="center" style="margin-top: 0">
        <p id="copy" style="margin: 0; color: blue" @click="handleCopyClick">点击这里</p>
      </div>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field maxlength="8" show-word-limit v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <van-popover v-model:show="showPopover" :actions="actions" placement="top-start" :offset="[24, 10]" @select="onSelect">
      <template #reference>
        <div class="floating-btn">提示</div>
      </template>
    </van-popover>
    <!-- <div class="floating-btn" @click="handleFloatingBtnClick">提示</div> -->
  </div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
import ClipboardJS from 'clipboard'
const emit = defineEmits(['update:active', 'handleAutoPlay'])

const state = reactive({
  answer: '',
  showPopover: false,
  actions: [{ text: '提示1' }, { text: '提示2' }]
})
const { answer,showPopover,actions } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '丑末夫外旦生小贴':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
      break
    default:
      state.answer = ''
      showToast({
        message: '不需要分隔开',
        icon: 'cross'
      })
      break
  }
}
// const handleFloatingBtnClick = () => {
//   showDialog({ message: '墙上最左边为丑，正中间花旦左边是外，最右为贴' }).then(() => {})
// }
const onSelect = (action, index) => {
  if (index === 0) {
    showDialog({
      message: '提示1：墙上最左边为丑，正中间花旦左边是外，最右为贴'
    }).then(() => {})
    return
  }
  if (index === 1) {
    showDialog({
      message: '提示2：丑末夫外旦生小贴'
    }).then(() => {})
  }
}
const handleCopyClick = async () => {
  try {
    var clipboard = new ClipboardJS('#copy', {
      // 点击copy按钮，直按通过text直接返回复印的内容
      text: function () {
        return 'https://chiculture.org.hk/sc/china-five-thousand-years/3339'
      }
    })
    clipboard.on('success', () => {
      showToast({ duration: 4000, message: '已复制跳转所需的URL\n请使用新的标签页打开' })
    })
  } catch (err) {
    console.error(err)
  }
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
</style>
