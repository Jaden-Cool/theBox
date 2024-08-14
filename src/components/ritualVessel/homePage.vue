<template>
  <div>
    <div class="paragraph">
      <p class="normal">
        你一面躲避着烈日，一边好不容易才寻到此处。 除了一座大鼎，这里竟还藏着一座博物馆。
      </p>
    </div>
      
      <p class="center">【可入馆后再阅读下一段剧情】</p>

    <div class="paragraph">
      <p class="normal">
        一晃神，你發現你站在了瀘紹年面前。此時的她正襟危坐在你面前，手中捧著一對筊杯，看那纹理和质感，赫然正是你现在手中的那一付。
      </p>

      <p class="normal">
        只见她口中念念有詞，“<strong>信女瀘紹年，零零年三月三十日生，家住順德縣，神心參拜請示。丈夫常惜端，出广州做生意已近三年，至今渺無音訊</strong>。家中已无余粮养育两个孩子。万不得已，现打算将家中大女常招娣过契给赵姓酒商，可保她食宿不愁，换来的钱财也可保日昳健康成长。如贵人同意，请赐圣杯。瀘紹年诚心叩拜。”
        断断续续地到这里，瀘紹年已经泪流满面，合十的双手微微颤抖，丢出了两片筊杯。
      </p>

      <p class="normal">
        两片筊杯与你刚在奶奶面前抛出的筊杯影子重合在一起，你好像突然明白了奶奶的那句”问心无愧”的意思。
      </p>

      <p class="normal">也理解了为什么叫“祸端开现”。</p>

      <p class="normal">这似乎正是一切的开始。</p>
    </div>

    <div class="paragraph">
      <div class="cup-box">
        <img src="@/assets/images/agree.png" @click="handleCupClick('食神之鼎青云')" />
        <img src="@/assets/images/hesitate.png" @click="handleCupClick('食神之鼎酒家')" />
        <img src="@/assets/images/object.png" @click="handleCupClick('食神之鼎红荔')" />
      </div>

      <p class="normal center">
        圣杯:难度硬核，耗时3到5小时
        <br />
        （跳转【食神之鼎青云】）
      </p>
      <p class="normal center">
        笑杯:难度中等，耗时2.5小时到4小时
        <br />
        （跳转【食神之鼎酒家】）
      </p>
      <p class="normal center">
        阴杯:难度普通，耗时2小时到3.5小时
        <br />
        （跳转【食神之鼎红荔】）
      </p>
    </div>

    <van-popup v-model:show="show">
      <img src="@/assets/images/talisman.png" alt="" />
    </van-popup>
    <!-- <p>
      （内测第二场暂时没有选择，正式版里面是三个照片，点击其中一个以后会跳转。我后面内容默认是选择了同意以后的结果）
    </p> -->
  </div>
</template>

<script setup>
import { showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
const emit = defineEmits(['update:active'])
const state = reactive({
  show: false
})
const { show } = toRefs(state)
const handleCupClick = (key) => {
  state.show = true
  setTimeout(() => {
    state.show = false
    switch (key) {
      case '食神之鼎青云':
        showDialog({
          message: '即将探索【食神之鼎青云】故事线',
          confirmButtonText: '继续故事',
          showCancelButton: true
        }).then(() => {
          emit('update:active', 1)
        })
        break
      case '食神之鼎酒家':
        showDialog({
          message: '即将探索【食神之鼎酒家】故事线',
          confirmButtonText: '继续故事',
          showCancelButton: true
        }).then(() => {
          emit('update:active', 4)
        })
        break
      case '食神之鼎红荔':
        showDialog({
          message: '即将探索【食神之鼎红荔】故事线',
          confirmButtonText: '继续故事',
          showCancelButton: true
        }).then(() => {
          emit('update:active', 7)
        })
        break
    }
  }, 1000)
}
</script>

<style lang="less" scoped>
.cup-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
}
.cup-box > img {
  width: 100px;
  height: 100px;
}
.van-popup {
  width: 100vw;
  height: 100vh;
}
.van-popup > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
