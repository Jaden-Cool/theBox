<template>
  <h1 class="center">石门</h1>

  <div class="paragraph">
    <p class="normal">
      你根据提示，右行到石门，也就是牌坊处，你一直觉得冥冥中一定有人在指引你。大概就是前面一直出现的那道金光。而被撕裂的常日昳三个字，让你隐隐觉得有些不安。
    </p>
    <p class="normal">
      来到牌坊附近，你抬头看到一个铜钱样的窗口，一道金光从铜钱窗那里撒下，穿过了牌坊的中门，又像一束聚光灯一般，照耀在岸边一个人形身上。
    </p>
    <p class="normal">
      你站在牌坊下面，此时 “看来，你已…能够感应…我了。” 模糊声音却仿佛在你耳边直接响起。
      “我花…心机，附着…阴阳…现代符箓..，助你增…阴阳…力。”
    </p>
    <p class="normal">
      说着，他手中漂浮出一张符箓，黑白二色形成，难怪你使用一次二维码，就感觉身上更加清爽有力。原来都是这个人在驱动着这一切。
    </p>
    <p class="normal">“所以，你知…现在发生…什么…？”道士问你。“你知道你该…些什…吗？”</p>
    <p class="normal">
      你沉默许久，没有回答他。你不知道幻境中那个人和你们常家有什么关系，但你确实感觉到了血脉相连。你必须做点什么，否则一切都在那里结束了。
    </p>
    <p class="normal">“天庭…此事我无…直接…涉，此事仍…改变…地。” 神秘道人接着说。“我叫刘……”</p>
    <p class="center"><strong>轰隆！！</strong></p>
    <p class="normal">
      一阵滚滚天雷淹没了他的话语。他抬头看了看阴下来的天，摇了摇头。他狠狠跺了跺地板，消失在了你眼前。
    </p>
    <p class="normal">
      此时你身边的一根栓满了佛经的柱子开始随风而动，上面的彩色经文里面飘出细腻的光点。这些光点最终落在了你手心，排列成了文字。
    </p>
    <p class="center"><strong>佛經彩旗積善起，面朝大屋銅錢窗，</strong></p>
    <p class="center"><strong>前進五步踏門檻，抬头存誠通路现，</strong></p>
    <p class="center"><strong>直行沿縫穿荷門，中途银雨指前路，</strong></p>
    <p class="center"><strong>雨下不停遇甲停，腳踏石甲观尚美，</strong></p>
    <p class="center"><strong>踏步向前君莫停，走至方柱石鼓拦，</strong></p>
    <p class="center"><strong>微蹲欲摘八瓣花，堂口身後两丈现。</strong></p>
    <p class="center">你终于知道他为什么跺了跺地板，循着诗找到了目的地。</p>

    <p class="center">【输入找到的堂口名，进入下段剧情】</p>
    <p style="display: flex; align-items: center; justify-content: center" class="center">
      <van-cell-group inset>
        <van-field v-model="answer" />
      </van-cell-group>
      <van-button plain hairline @click="handleConfirmClick">确认</van-button>
    </p>
  </div>
  <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
const emit = defineEmits(['update:active'])
const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '刘恭可堂':
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
const handleFloatingBtnClick = () => {
  showDialog({ message: '留意地上砖石有文字，时刻不忘抬头也寻找' }).then(() => {})
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
