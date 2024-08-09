<template>
  <div>
    <div v-if="!translate">
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
            <br />
          </p>

          <p class="normal letter">
            見字如面，展信如晤。
            <br />
            <br />
          </p>

          <p class="normal letter">
            臊孲（孩子）出生了！在三日前，对我來说仿佛就在方才，是個男孩。我的心情到現在還非常難以平復。
            <br />
            <br />
          </p>

          <p class="normal letter">
            數月不見，甚是掛念。
            <br />
            <br />
          </p>

          <p class="normal letter">
            蝦仔出世那天，正值祭竈（zào）。天格外的冷，卻是少見的藍天。<strong>大概两点钟</strong>，我剛送走了去大良的那批金蠶（cán）絲。
            <br />
            <br />
          </p>

          <p class="normal letter">
            蠶園這邊要做的功夫虽然很多，但是招娣很乖，主動替我去喂蠶，說讓我得閒來可以吃個午飯。
            <br />
            <br />
          </p>

          <p class="normal letter">
            我坐在竈邊添柴，燒水，順便取暖。突然就感覺呼吸一順，羊水破了。我很急啊，慌慌乱乱就抓起一根干柴，敲旁邊的銅盆。
            <br />
            <br />
          </p>

          <p class="normal letter">
            我邊敲邊叫，回想翻來，真是觀世音菩薩保佑，招娣剛跑出門尋人，就和幾位鄰居撞了個滿懷。原定
            <strong>下午才過來</strong>炸煎堆的隔离鄰舍竟都到了門口。
            <br />
            <br />
          </p>

          <p class="normal letter">
            她们急手急腳地把我擡到了房間。沒想到，孩子是个急性子，產婆都還沒來到，就迫不及待出來了。
            大家都開玩笑說一定是闻到了油角和煎堆，那么喜欢吃糯米，说不定就是灶神转世。听得我笑到见牙不见眼。
            <br />
            <br />
          </p>

          <p class="normal letter">
            <strong>常哥</strong
            >你远在佛山打拼，我唯有自把自為<strong>根據時辰給孩子取了個名字</strong>先填到出生紙上。
            等你下次翻来我們一起找個先生問個好名。祝你順順利利，家中之事勿用擔憂。
            <br />
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
          <van-cell-group inset>
            <van-field v-model="answer" />
          </van-cell-group>
          <van-button plain hairline @click="handleConfirmClick">确认</van-button>
        </p>
      </div>
    </div>

    <div v-else>
      <div class="paragraph" ontouchstart="aplay()">
        <p class="normal">
          你摇晃到了水井边，恍惚之间，你在深邃的井中看到了一个二十多岁的女人，画面逐渐清晰，她抱着一个襁褓中的婴儿。
          旁边站着的模模糊糊看着像是一个带着眼镜和黑色圆帽的先生。你听说过，以前好像确实有很多这种师傅，帮人代笔写书。
          不知道为什么你觉得这一幕有点熟悉的感觉。
        </p>
      </div>

      <div class="paragraph">
        <div class="letterPaper">
          <p class="letter">
            致常惜端：<br />
            <br />
          </p>

          <p class="normal letter">
            见字如面，展信如晤。
            <br />
            <br />
          </p>

          <p class="normal letter">
            臊孲（孩子）出生了！在三日前，对我来说仿佛就在方才，是个男孩。我的心情到现在还非常难以平复。
            <br />
            <br />
          </p>

          <p class="normal letter">
            数月不见，甚是挂念。
            <br />
            <br />
          </p>

          <p class="normal letter">
            虾仔出世那天，正值祭灶。天格外的冷，却是少见的蓝天。<strong>大概两点钟</strong>，我刚送走了去大良的那批金蚕丝。
            <br />
            <br />
          </p>

          <p class="normal letter">
            蚕园这边要做的功夫虽然很多，但是招娣很乖，主动替我去喂蚕，说让我得闲来可以吃个午饭。
            <br />
            <br />
          </p>

          <p class="normal letter">
            我坐在灶边添柴，烧水，顺便取暖。突然就感觉呼吸一顺，羊水破了。我很急啊，慌慌乱乱就抓起一根干柴，敲旁边的铜盆。
            <br />
            <br />
          </p>

          <p class="normal letter">
            我边敲边叫，回想翻来，真是观世音菩萨保佑，招娣刚跑出门寻人，就和几位邻居撞了个满怀。原定
            <strong>下午才过来</strong>炸煎堆的隔离邻舍竟都到了门口。
            <br />
            <br />
          </p>

          <p class="normal letter">
            她们急手急脚地把我抬到了房间。没想到，孩子是个急性子，产婆都还没来到，就迫不及待出来了。
            大家都开玩笑说一定是闻到了油角和煎堆，那么喜欢吃糯米，说不定就是灶神转世。听得我笑到见牙不见眼。
            <br />
            <br />
          </p>

          <p class="normal letter">
            <strong>常哥</strong
            >你远在佛山打拼，我唯有自把自为<strong>根据时辰给孩子取了个名字</strong>先填到出生纸上。
            等你下次翻来我们一起找个先生问个好名。祝你顺顺利利，家中之事勿用担忧。
            <br />
            <br />
          </p>

          <p class="letter" align="right">癸亥年 腊月二十四</p>
          <p class="letter" align="right"><strong>泸绍年亲笔</strong></p>
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
          <van-cell-group inset>
            <van-field v-model="answer" />
          </van-cell-group>
          <van-button plain hairline @click="handleConfirmClick">确认</van-button>
        </p>
      </div>
    </div>
    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>

    <Vue3DraggableResizable
      :initW="40"
      :initH="40"
      v-model:x="x"
      v-model:y="y"
      v-model:w="w"
      v-model:h="h"
      :parent="true"
      :draggable="true"
      :resizable="false"
    >
      <img class="translate" src="@/assets/images/translate.png" @click="handleTranslateClick" />
    </Vue3DraggableResizable>
  </div>
</template>

<script setup>
import { showToast, showDialog, showLoadingToast } from 'vant'
import { reactive, toRefs, onMounted, onUnmounted } from 'vue'
import { debounce } from '@/utils'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
const emit = defineEmits(['update:active'])
const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  answer: '',
  x: 330,
  y: 50,
  originalY: 50,
  w: 100,
  h: 100,
  translate: true
})
const { answer, x, y, w, h, translate } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) return
  const correctAnswers = ['日昳', '常日昳']
  if (correctAnswers.includes(state.answer)) {
    showToast({ message: '恭喜，回答正确', icon: 'success' })
    emit('update:active', 2)
  } else {
    state.answer = ''
    showToast({ message: '不正确，请再试一次，或者考虑一下看提示哦~', icon: 'cross' })
  }
}
const handleFloatingBtnClick = () => {
  showDialog({
    message: '从瀘紹年的信件里面推算出孩子出生的时辰时间，可以细看日晷的外围有时间'
  }).then(() => {})
}
const handleTranslateClick = () => {
  showLoadingToast({
    message: state.translate ? `正在切換為繁體` : `正在切换为简体`,
    forbidClick: true,
    overlay: true
  })
  setTimeout(() => {
    state.translate = !state.translate
  }, 300)
}
const handleScroll = () => {
  const scrollY = window.scrollY
  state.y = state.originalY + scrollY
}
// 防抖函数
const debouncedHandleScroll = debounce(handleScroll, 500) // 等待时间为500毫秒
onMounted(() => {
  window.addEventListener('scroll', debouncedHandleScroll)
})
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
