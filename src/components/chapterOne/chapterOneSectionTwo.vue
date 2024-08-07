<template>
  <div class="paragraph">
    <p class="normal">
      你摇晃到了水井边，恍惚之间，你在深邃的井中看到了一个二十多岁的女人，画面逐渐清晰，她抱着一个襁褓中的婴儿。
      旁边站着的模模糊糊看着像是一个带着眼镜和黑色圆帽的先生。你听说过，以前好像确实有很多这种师傅，帮人代笔写书。
      不知道为什么你觉得这一幕有点熟悉的感觉。
    </p>
  </div>

  <div class="paragraph">
    <div class="letterPaper">
      <p class="letter">
        致常惜端：
        <br />
      </p>

      <p class="normal letter">
        見字如面，展信如晤。
        <br />
      </p>

      <p class="normal letter">
        臊孲（孩子）出生了！在三日前，对我來说仿佛就在方才，是個男孩。我的心情到現在還非常難以平復。
        <br />
      </p>

      <p class="normal letter">
        數月不見，甚是掛念。
        <br />
      </p>

      <p class="normal letter">
        蝦仔出世那天，正值祭竈（zào）。天格外的冷，卻是少見的藍天。<strong>大概两点钟</strong>，我剛送走了去大良的那批金蠶（cán）絲。
        <br />
      </p>

      <p class="normal letter">
        蠶園這邊要做的功夫虽然很多，但是招娣很乖，主動替我去喂蠶，說讓我得閒來可以吃個午飯。
        <br />
      </p>

      <p class="normal letter">
        我坐在竈邊添柴，燒水，順便取暖。突然就感覺呼吸一順，羊水破了。我很急啊，慌慌乱乱就抓起一根干柴，敲旁邊的銅盆。
        <br />
      </p>

      <p class="normal letter">
        我邊敲邊叫，回想翻來，真是觀世音菩薩保佑，招娣剛跑出門尋人，就和幾位鄰居撞了個滿懷。原定
        <strong>下午才過來</strong>炸煎堆的隔离鄰舍竟都到了門口。
        <br />
      </p>

      <p class="normal letter">
        她们急手急腳地把我擡到了房間。沒想到，孩子是个急性子，產婆都還沒來到，就迫不及待出來了。
        大家都開玩笑說一定是闻到了油角和煎堆，那么喜欢吃糯米，说不定就是灶神转世。听得我笑到见牙不见眼。
        <br />
      </p>

      <p class="normal letter">
        <strong>常哥</strong
        >你远在佛山打拼，我唯有自把自為<strong>根據時辰給孩子取了個名字</strong>先填到出生紙上。
        等你下次翻来我們一起找個先生問個好名。祝你順順利利，家中之事勿用擔憂。
        <br />
      </p>

      <p class="letter" align="right">癸亥年 腊月二十四</p>
      <p class="letter" align="right"><strong>瀘紹年親筆</strong></p>
    </div>
  </div>

  <div class="paragraph">
    <p class="normal">慢慢地，你从影像中缓过神来。</p>

    <p class="normal">
      <strong>
        你看着繁体字觉得略有些头痛，有些字句甚至不知道是什么意思。想去查阅一些资料，突然仿佛融会贯通一般，
        繁体书信便自动变成了简体。
      </strong>
    </p>

    <p class="center">
      <strong>
        【注意游戏界面上方的繁简体按钮，此处点击后，可切换至自动翻译界面，
        开启后，包含繁体字内容的界面将自动转换，请玩家根据自身阅读习惯自行选择】
      </strong>
    </p>

    <p class="center">【请推算信中的孩子叫什么名字】</p>

    <p style="display: flex; align-items: center; justify-content: center" class="center">
      <!-- <input id="ans" required /> -->
      <van-cell-group inset>
        <van-field v-model="answer" />
      </van-cell-group>
      <van-button plain hairline class="floating-btn" @click="handleConfirmClick">确认</van-button>
    </p>
  </div>

  <van-back-top class="floating-btn" offset="1000">提示</van-back-top>
</template>

<script setup>
import { showToast } from 'vant'
import { reactive, toRefs, defineEmits } from 'vue'
const emit = defineEmits(['update:active'])

const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '日昳' || '常日昳':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', '祖屋奇遇3')
      break
    default:
      showToast({
        message: '不正确，请再试一次，或者考虑一下看提示哦~',
        icon: 'cross'
      })
      break
  }
}
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
