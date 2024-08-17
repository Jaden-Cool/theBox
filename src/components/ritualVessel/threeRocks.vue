<template>
  <div>
    <!-- <h1 class="center">三块石头1</h1> -->
    <div class="paragraph">
      <p class="normal">你从幻觉中醒来，心中有些难过。 突然，只见面前不知道何时出现了一团刺眼的金光。你一时间失了分寸，差点一脚把自己绊倒。你踉跄了两步，那金光伸手来拉你，但是却穿透了你的身体。</p>
      <p class="normal">你见那金光抬起了自己的手端详，随即摇了摇头。你抓紧时间马上发问，但是它仿佛听不到你的声音一般。只见他伸手一抬，你袋中折起的地图已经飘在空中。他转掌为指，往前一伸。一道金光嗖的一下穿过了地图，留下了一个孔洞。</p>
      <p class="center"><strong>访客地图顺德眼，取出金针穿正中</strong></p>
      <p class="center"><strong>舆图展开八星洞，西公寓旁寻石踪</strong></p>
    </div>
    <p class="center subtleFade" style="margin: 0 0 26px 0; font-size: 16px">【按照指示前往该地点，寻找通往下一步的二维码】</p>

    <van-popover v-model:show="showPopover" :actions="actions" placement="top-start" :offset="[24, 10]" @select="onSelect">
      <template #reference>
        <!--  -->
        <div class="floating-btn">提示</div>
      </template>
    </van-popover>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { showDialog } from 'vant'
const state = reactive({
  showPopover: false,
  actions: [{ text: '提示1' }, { text: '提示2' }]
})
const { showPopover, actions } = toRefs(state)
const onSelect = (action, index) => {
  if (index === 0) {
    showDialog({
      message: '提示1：拿出访客地图，不要打开，用金色泡钉穿过红色顺德眼中心，穿透所有纸张'
    }).then(() => {})
  } else {
    showDialog({
      message: '提示2：其中有一个孔洞是在西公寓的附近的。去往那个地方'
    }).then(() => {})
  }
}
</script>

<style lang="less" scoped>
@keyframes subtleFade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.subtleFade {
  animation: subtleFade 1s infinite;
}
</style>
