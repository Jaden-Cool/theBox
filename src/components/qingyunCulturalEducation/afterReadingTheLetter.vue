<template>
  <div>
    <h1 class="center">读信毕</h1>

    <div class="paragraph">
      <p class="normal">
        <strong
          >常日昳读完这封家书，看着这家训，泪水盈眶。他想到了等待了多年的母亲，想到自己和姐姐，和蔡尔洪，和酒家的伙伴们，和文教所的大家。</strong
        >
        刘恭可静静地看着他，等他平复情绪后，开口说道：“你父亲有恩于我，他在死前仍坚持让我为你批命改名。我和你本应在另外一处另外一时相见”
        刘恭可指了指不远处的码头，“而前面的渡口，本来应该是你的葬身之地。”
      </p>
      <p class="normal">
        刘恭可说到这里停了一下，扫视了一下还沉浸在悲伤中的日昳。“有人已经替你改变过了一次命运。此人……”
      </p>
      <p class="normal">
        “未来” 说罢，他摊开了一张带有常日昳生辰八字的字条，好像在和日昳说，又好像是和你在说，
        “你乃灶君托世，你每一世都会有贵人辅助。你于祭灶一天下凡，死后你需上天庭禀报这一世的所见所闻。你前半世颇为坎坷，若此时让你归天，恐怕你多有抱怨。日昳已死，我现在正式替你更名为‘午未’，以延你阳寿。”
      </p>

      <p class="normal">常日昳点点头，“午未……好的，我接受。”</p>
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
      <p class="center">【此时是1944年三月十三，甲申年 丁卯月 丙子日。解读三世书得出三字】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
    <!-- <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div> -->
  </div>
</template>

<script setup>
// import { showToast, showDialog } from 'vant'
import { showToast } from 'vant'
// import { reactive, toRefs, defineEmits, defineProps } from 'vue'
import { reactive, toRefs, defineEmits } from 'vue'
const emit = defineEmits(['update:active'])
// const props = defineProps({ isAtBottom: Boolean })
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
      emit('update:active', 4)
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
// const handleFloatingBtnClick = () => {
//   showDialog({ message: '注意加粗的五个字' }).then(() => {})
// }
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
