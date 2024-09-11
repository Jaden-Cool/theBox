<template>
  <div>
    <!-- <h1 class="center">拴马桩</h1> -->

    <div class="paragraph">
      <p class="center">你手触碰到拴马桩，一阵土石之力绵绵的溢出。日子平淡，却暗藏生机。</p>
      <p class="center">稳定，平和，万物之基础。</p>
    </div>

    <div class="paragraph">
      <p class="normal">阿妈已经跟赵家走了有几年了，近一年再也没有收到她的来信。兰姨对我们姐弟俩都很好，很快就给我们介绍了工作。我的日常就是在去糖厂和招娣一起铲蔗渣，但是赚的那点三豪几分远远不够我交学费的。糖厂的老板，蔡祖兼和阿爹有过一些旧交情，但是我始终觉得他是看上了招娣才招了她做女工。思前想后，我就没再上学，全职的给蔡祖兼打杂。</p>
      <p class="normal">这几年我和蔡老板混的很熟，也顺便打探父亲的下落。 蔡老板口口声声答应我会帮我打听，但是每次得出的答复都是：我爹几年前去了广州那边开厂以后就卖鱼佬冲凉（卖鱼的洗澡） —— 无噻腥气（没了音讯）。我相信，阿爹不是那种会抛妻弃子的人。有机会我一定把这件事情查个水落石出。</p>
      <p class="normal">我想了很久，决定去拜师做厨师。一来，这几年我在糖厂工作也练就了一身腱子肉，搬搬抬抬一定没问题。二来，做厨师学徒通常都要出门采购，我可以乘机去打听一下阿爹的下落。三来，就是打算做食有得食，就算如何也饿不着我。能想出这一石三鸟之计，真聪明嘿嘿。挑来选去我最终选择了去碧鉴路拜师。</p>
      <p class="normal">有一晚，蔡老板去了清晖园赴宴，喝得烂醉。那夜，我负责领他回府。他一路上一直在夸一个叫区财的师傅。这个人的名号我听过，他曾经在青云文社打杂，后来机缘巧合之下去了清晖园给龍洙惠做私厨。期间又受到龍季許的器重，龍家直接给他置办了一套宅子，让他住进了碧鑒路。现在他作为“凤城三大名厨之首”名声在外，收我一个打杂的应该湿湿碎（随随便便）。</p>
    </div>

    <div class="paragraph">
      <p class="normal">看着面前这一间镬耳大屋，我免不了有点心慌。我大力的扣了三下门环。我发现大宅的铺首和门环都被摸得锃亮，而且门面前竟然有整整十二根拴马桩，可见平常人来人往。就在我准备第二次扣门的时候，我听到有人来应门了。</p>
      <p>
        <van-image fit="contain" :src="door" @click="showImagePreview({ images: [door], showIndex: false })" />
      </p>
      <p class="normal">门后传来嘹亮的人声，“几双？”。我愣住了，一时间不知道回复什么。过了几秒后，门后的人声又说道，“门外人可识字？” 我赶紧回答 “识字！” 对方又喊了一声，“识字的话为何不报？” 细看之下，拴马桩旁贴了一张纸，上面写着：</p>
      <p style="margin: 0" class="center"><strong>拴马桩旁下贵人，区家往来无白丁。</strong></p>
      <p style="margin: 0" class="center"><strong>灵猴雌雄成一对，雄狮左右算一组，</strong></p>
      <p style="margin: 0" class="center"><strong>狮猴相邻可作伴，石兽最多凑几双？</strong></p>
    </div>

    <div class="paragraph">
      <p class="center">【答案是几双？】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <van-popover
      v-model:show="showPopover"
      :actions="actions"
      placement="top-start"
      :offset="[24, 10]"
      @select="onSelect"
    >
      <template #reference>
        <div class="floating-btn">提示</div>
      </template>
    </van-popover>
    <!-- <div class="floating-btn" @click="handleFloatingBtnClick">提示</div> -->
  </div>
</template>

<script setup>
import { showToast, showDialog, showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import door from '@/assets/images/door.png'
const emit = defineEmits(['update:active', 'handleAutoPlay'])

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
  switch (state.answer) {
    case '6':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
      break
    case '六双':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
      break
    case '六':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
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
      message: '提示1：有小猴子为雌猴，石狮子有的是面朝正前方的'
    }).then(() => {})
  } else {
    showDialog({
      message: '提示2：实在算不出来就蒙吧'
    }).then(() => {})
  }
}
// const handleFloatingBtnClick = () => {
//   showDialog({ message: '有小猴子为雌猴，石狮子有的是面朝正前方的。实在算不出来就蒙吧' }).then(() => {})
// }
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
