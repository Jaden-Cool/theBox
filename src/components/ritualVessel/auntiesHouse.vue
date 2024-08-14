<template>
  <div style="padding-bottom: 48px">
    <h1 class="center">姑婆屋</h1>

    <div class="paragraph">
      <p class="center">《顺德县志》</p>
      <p class="normal">
        “过去女子出嫁，须由母亲束髻，立心不嫁者则履行一定的仪式自行束髻，称“自梳”。仪式通常在自梳女及不落家妇女聚居的“姑婆屋”内举行，当事者预先购备新衣、鞋袜、妆镜、头绳及香、烛、肴，以黄皮叶煮水沐浴，设供拜观音，立誓永不婚嫁，然后由年长的自梳女将其辫子梳成发髻，更换新衣新鞋，向其他自梳姐妹一一行礼，经济宽裕的，还须摆酒宴客。履行仪式后，该女子即为“梳起”，正式成为“自梳女”，终生不得反悔。”
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        几年前，瀘紹年通过缫丝的行当认识了好几个决定自梳的独立女性。就连这做鱼腐的手艺都是她们传授的。这些经济独立的女性各自都怀着自己的原因决定自梳。瀘紹年接受了她们的介绍来到了伦教，接下来的日子也注定和这些自梳女（即“妈姐“或“姑婆“）脱不了关系。
      </p>
      <p class="normal">
        到达“姑婆屋”时，瀘紹年恭敬地向妈姐们说明了来意。她们都是些刚刚“梳起”的少女，年纪不大，目光中透着一种从容不迫的智慧。
      </p>
      <p class="normal">她们细心地倾听了瀘紹年的诉求后，开始七嘴八舌的商量着如何安置几人。</p>
      <p class="normal">
        为首的姑婆黄瑞云为难地说：“紹年你的情况有一些特殊。你是兰姐介绍过来的，不看僧面也看佛面，我们不介意给你提供一些基本的食宿。但是，我们这里也不是善堂，不养闲人，你迟早还是要找个活计来做……”
      </p>
      <p class="normal">
        她停了停，摇了摇头，指了指瀘紹年的脚。那是大户人家的小姐才有的“三寸金莲”。
      </p>

      <p class="normal">
        “看你这双绣花鞋的做工，想必也曾经见过一些世面。村里有个戏班，他们的红船每几个月就会回来一次，前几天刚刚停靠，或许你可以去碰碰运气？至于招娣，我看着她厨艺应该是有一点天赋的。她可以留下来做一段时间厨娘。要是手艺合格的话，我们有姊妹可以举荐她去香港做女佣。”
      </p>
      <p class="normal">
        常招娣被带到了厨房。妈姐们很快就看出了她的聪慧与勤快，决定培养她的厨艺，希望她将来能有一技之长，走出村子，去外面谋生。
      </p>
      <p class="normal">
        至于常日昳，一群妈姐们围着他，微笑着讨论了一会儿。最后，一个和蔼的妈姐，摸了摸常日昳的头，说：“这小家伙眼睛里透着灵气，不如去村头跟黄师傅去学做木雕吧？”
      </p>
      <p class="normal">
        就这样，常日昳被送去了成为斗木（做木工）学徒。虽然年纪尚小，但他本身就手巧，或许这是个好选择？
      </p>
      <p class="center" style="margin: 0"><strong>已趁群真入紫微，</strong></p>
      <p class="center" style="margin: 0"><strong>故乡回首尚迟迟。</strong></p>
      <p class="center" style="margin: 0"><strong>千年留取井边履，</strong></p>
      <p class="center" style="margin: 0"><strong>说与草堂仙子知。</strong></p>
      <p class="center">
        <van-image
          fit="contain"
          :src="garden"
          @click="showImagePreview({ images: [garden], showIndex: false })"
        />
      </p>
    </div>

    <div class="paragraph">
      <p class="center">【前往荷花盛开的地方，寻找这个牌子上的三个字】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
      <van-popup v-model:show="show">
        <img src="@/assets/images/fairy.jpeg" alt="" />
      </van-popup>
    </div>
    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog, showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import garden from '@/assets/images/garden.jpeg'
const emit = defineEmits(['update:active'])
const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  answer: '',
  show: false
})
const { answer, show } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '适适轩':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      setTimeout(() => {
        state.show = true
      }, 3000)
      setTimeout(() => {
        emit('update:active', 11)
      }, 10000)
      break
    case '適適軒':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      setTimeout(() => {
        state.show = true
      }, 3000)
      setTimeout(() => {
        emit('update:active', 11)
      }, 10000)
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
  showDialog({ message: '或许可以通过手机地图app找到答案' }).then(() => {})
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
