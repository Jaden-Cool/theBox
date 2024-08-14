<template>
  <div>
    <!-- <h1 class="center">文教所</h1> -->

    <div class="paragraph">
      <p class="normal">
        在接下来的日子里，常日昳按照周之贞所托留在了青云文教所，给这些“过海神仙”们做老师和统筹食物。
        看着还没建完的校舍，他一开始还抱着侥幸心理，幻想这里有朝一日会设备齐全。
        接下来的日子里，他就是这二百多个孩子的老师了。
      </p>
      <p class="normal">
        橋珠酒楼，大鱼大肉海陆空俱全。日昳除了要一手安排几百种食材，从未被食材所困；而现在，食材的种类根本不需要他苦恼，只有白豆和未脱米衣的稻米。
      </p>
      <p class="normal">
        每顿饭，一斤生白豆要煮出给两百个孩子分食的分量。一个孩子只能分到一打——即为12颗白豆作为佐餐配菜，主食的粗米饭倒是够吃。蔡尓洪那小子甚至研究出了“一满二下三锥”的抢饭方法。
      </p>
      <p class="center">“每饭不忘！打倒日本！” 喊完口号，一群小孩子开始疯狂的扒饭。</p>
      <p class="normal">
        每一桌都有一筐饭，但是整个饭堂一共有两箩额外的米饭以供大家添饭。所以孩子们要吃完自己桌的第一碗才能加第二碗，万一后面抢不到饭的话，光靠这第一碗饭也尽量吃饱。所以第一碗他们都会装满，所谓“一满”；而第二碗不用多，在公共饭里面抢，重点在快，所谓的
        “二下”；而第三碗，就要垒得高高的，反正可以慢慢吃，所谓的“三锥”。
      </p>
      <p>
        <van-image
          fit="contain"
          :src="oldTime"
          @click="showImagePreview({ images: [oldTime], showIndex: false })"
        />
      </p>
      <p class="normal">
        尽管饭量很大，在青云文教所死去的孩子大多都是因为营养不良。
        这些孩子每周六来回十公里，千辛万苦带回来的米，根本就没有办法完全脱壳。
        依靠学校的舂，根本就无法去除米粒内的米衣。
      </p>
      <p class="normal">
        很多孩子都是进去多少出来多少，根本不消化。人不饿但是营养不良而死常有发生。
      </p>
      <p class="normal">
        为了给学生增加营养，学校的老师们和附近的屠宰场商量后，长期包圆了剩下的牛骨。用牛骨汤来弥补学生们的营养。
      </p>
      <p class="normal">
        当时很多人都患上了夜盲症，包括日昳在内，一到晚上就被迫只能睡觉了。虽然知道病因是缺维他命A，但是文教所里面根本就没有药。直到有人找到了用锅底灰加到牛骨汤里面的偏方，这件事情才得到了缓解。在那段时间，所有人一眼都能看得出谁有夜盲症。因为他们笑起来牙齿都是黑的。
      </p>
    </div>
    <div class="paragraph">
      <p class="center">【此时你品尝到的是什么味道？】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
  </div>
  <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
</template>

<script setup>
import { showToast, showDialog, showImagePreview } from 'vant'
import { reactive, toRefs } from 'vue'
import oldTime from '@/assets/images/oldTime.jpeg'
const emit = defineEmits(['update:active', 'handleAutoPlay'])
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
    case '苦':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
      break
    default:
      state.answer = ''
      showToast({
        message: '不正确，请再试一次',
        icon: 'cross'
      })
      break
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '五味之一' }).then(() => {})
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
