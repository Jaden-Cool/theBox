<template>
  <div>
    <!-- <h1 class="center">读信毕</h1> -->

    <div class="paragraph" @click="handleMainBoxClick">
      <p class="normal">
        常日昳,
        不，现在是常午未了。读完这封家书，看着这家训，泪水盈眶。他想到了等待了多年的母亲，想到了被贱卖的招娣，被付之一炬的橋珠酒楼，被强行拆散的蔡尔洪，和文教所中躲躲藏藏的日子。
      </p>
      <p class="normal">
        刘恭可静静地看着他，等他平复情绪后，开口说道：“......
        你父亲有恩于我，他在死前仍坚持让我为你批命改名。我和你本应在另外一处，另外一时相见”
        刘恭可指了指不远处的码头，“而前面的渡口，本来应该是你的葬身之地。”
      </p>
      <p class="normal">
        刘恭可说到这里停了一下，扫视了一下还沉浸在悲伤中的日昳。“有人已经替你改变过了一次命运。此人……
      </p>

      <p class="center">未来。”</p>
      <p class="normal">
        说罢，他摊开了一张带有格子的纸张，好像在和日昳说，又好像是和你在说，
        “你命中乃灶君托世，每一世都会有贵人辅助。你于祭灶这天下凡，待你百年归老，需上天庭禀报这一世的所见所闻，不生不灭，循环往复。
      </p>
      <p class="normal">日昳，你听好了。我现在正式替你更名为‘午未’，以我之命与你交换。”</p>
      <p class="normal">常日昳有些疑惑的点点头，“但是，你为什么要冒这个险？”</p>
      <p class="normal">
        “修道之人，无非求个长生。与你换命，我就可代你接这人间司命灶君之轮回，世世都为人。待我替你把这三世因缘全部应验，我也就大道得成了。”
      </p>
      <p class="normal">
        “赠你几字。”
        刘恭可单手一招，手中出现了原本在日昳行囊里的扇子。不由得日昳言语，刘恭可一手拿扇，一手运笔。很快，<strong>平步青云</strong>四个大字就写好了。
      </p>
      <p class="normal">
        刘恭可接着说道：“从今天开始你就是常午未了。更名换命非一时之功，就算我此时出现，也不能完全影响天公所定的命数，还需命定之人相助。我在来的路上，已为“常午未”之名推演了人生中的一些大事，并写好了一封三世书。这份三世书是为你和你的后人准备的。日积月累，因果相连，瞒天过海，命运交替。”
      </p>
      <p class="normal">
        “其实你爹还有许多东西未曾跟你交代。但是午未这个人本来就不该存在于世，日昳从今日开始已经死了。”
        刘恭可把仍未干透的扇子和一个包袱递了给日昳。
      </p>
      <p class="normal">
        刘恭可再次看向你的方向，在离去之前，再三叮嘱道：“切记，你须将这些信物与三世书一同葬于祖屋的凤眼果树下，务必遵循。我和常日昳这一世的缘分已尽，下世见。”
        说完，他转身就离开了。
      </p>
    </div>
    <div class="paragraph">
      <p class="center">【此时是1944年三月十三，甲申年 丁卯月 丙子日。解读三世书得出三字】</p>
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
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
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
    case '宿命改':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 5)
      break
    default:
      state.answer = ''
      showToast({
        message: '答案是一个字',
        icon: 'cross'
      })
      break
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '使用万年历网站' }).then(() => {})
}
const handleMainBoxClick = () => {
  emit('handleAutoPlay')
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
