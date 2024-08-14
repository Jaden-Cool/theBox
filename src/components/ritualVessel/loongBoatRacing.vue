<template>
  <div style="padding-bottom: 48px">
    <!-- <h1 class="center">扒龙舟1</h1> -->

    <div class="paragraph">
      <p class="normal">
        你跟随着指引来到了荷园。只见一个美丽的女人站在了荷花池前的庭院朝着你招了招手。发现你看到了她以后，她指了指庭院上的匾额。随着你的视线移动到匾额上，她不见了。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">今日是常日昳第一天去找<strong>黄朔风师傅</strong>拜师。</p>
      <p class="normal">
        黄朔风师傅木雕和斗木技艺高超，坊间人称“金眼风”，谓其眼光毒辣，下手快如风。作为一个怪才，他经常在荒山野岭里寻找木材。一切作品都是率性而为。转念之间，朽木往往会被化为神态迥异的飞禽走兽。手艺到达了如此化境，在收徒上他也全凭心意。也是因为如此，姑婆屋的众人才决定让日昳去碰碰运气拜他为师，学习一门谋生的手艺。
      </p>
      <p class="normal">
        常日昳找到陈先师傅，恭敬地磕头拜师。黄师傅看他一幅小大人的模样，微微一笑，没有立刻答应，也没有拒绝，而是指着村口的正在起龙船的小伙子们说道：“小子，要拜我为师，就得先去扒龙舟（赛龙舟）。这是旧例。哪年端午节赢了比赛，我就正式收那船的人为徒。在此期间你可以留下帮我打打下手。”
      </p>
      <p class="normal">
        常日昳虽然不解，但还是点头答应。他开始每天早晨天还没亮就来到村口，与村里其他过来拜师的男子们一起学扒船。
      </p>
      <p class="normal">
        此时的日昳只有八岁，船桨对他来说还是太重了，他的任务是学好“擂锣”。龙舟相互行礼的方式称为“擂锣”，若龙舟在江河上相遇，双方的锣鼓手会密密地打击锣鼓，互相来往划个两三个来回才分道扬镳，以示友好。
      </p>

      <p class="normal">
        每天，常日昳在河道上挥汗如雨，随着龙船在水面上飞驰。他的双臂渐渐变得结实了起来，体魄也日益健壮。
      </p>
    </div>

    <div class="paragraph">
      <p class="center">【观看[日晷]，日昳的命格五行里面属什么？】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <van-popup v-model:show="show">
      <p class="center" style="margin: 26px 26px 0 26px">除了何仙姑</p>
      <p class="center" style="margin: 0">在后天八卦中</p>
      <p class="center" style="margin: 0 0 26px 0">只有曹国舅也属土</p>
      <img src="@/assets/images/caoGuoJiu.png" alt="" />
    </van-popup>
    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
const emit = defineEmits(['update:active', 'handleAutoPlay'])
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
    case '土':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      setTimeout(() => {
        state.show = true
      }, 3000)
      setTimeout(() => {
        emit('update:active', 12)
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
  showDialog({ message: '细看颜色' }).then(() => {})
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
:deep(.van-popup) {
  height: 70%;
}
img {
  width: 200px;
  height: 300px;
  margin: 0 26px;
}
</style>
