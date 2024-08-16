<template>
  <p class="center"><strong>你看到，</strong></p>
  <p class="center"><strong>一个瘦弱的少年在打锣……</strong></p>
  <p class="center"><strong>一个昏暗的屋子里一群阿姨把一个女孩围在中间……</strong></p>
  <p class="center"><strong>一场热闹的粤剧……</strong></p>
  <p class="center"><strong>一扇年久失修的老门……</strong></p>

  <div class="paragraph">
    <p class="normal">
      你缓缓地睁开了眼睛，这次的记忆不像之前那么清晰，你赶紧趁忘记之前，将一些碎片告诉了奶奶。
    </p>

    <p class="normal">
      奶奶神色略微复杂，仿佛在回忆着什么久远的往事，“我和你几个姑婆不愿意卖掉祖屋的其中一个原因，就是因为阿爹跟我说，若有缘人挖到这个盒子的话，会来找我。”她倒了杯普洱，继续说道：“你太爷还在世的时候不喜欢吵闹，没有怎么去听粤剧的，更别说敲锣了......
      ”
    </p>

    <p class="normal">这真的是太爷藏的盒子吗？你的疑问好像反而变多了。</p>

    <p class="normal">“你也不要纠结太多，他们当年那辈的事情说不好的。”</p>

    <p class="normal">
      奶奶顿了顿，缓缓抚摸了你的头发，握了握手，眼睛看着你，眼中充满了忧虑，可随即又柔和了起来。
    </p>

    <p class="normal">
      “不知不觉你都长那么大了，既然这件事情非你不可，我最后再嘱咐你一句，注意安全，但求问心无愧，一定平安回来好吗？”
    </p>

    <p class="normal">
      <strong>最后，她终于告诉了你下一步的去向：“你太爷说，秘密在盒底。”</strong>
    </p>

    <p class="center">【根据线索去往该地点】</p>
    <p style="display: flex; align-items: center; justify-content: center" class="center">
      <van-cell-group inset>
        <van-field v-model="answer" />
      </van-cell-group>
      <van-button plain hairline @click="handleConfirmClick">确认</van-button>
    </p>
  </div>

  <div  class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
// const emit = defineEmits(['update:active','handleAutoPlay'])

const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '曲水湾鹊桥底':
      // showToast({
      //   message: '恭喜，回答正确',
      //   icon: 'success'
      // })
      showDialog({
        message: '鹊桥底下还有一道桥，那边有一个隐藏的二维码可以进入下一段剧情'
      }).then(() => {})
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
  showDialog({ message: '把铁盒翻转过来，底部藏有六字' }).then(() => {})
}
</script>
