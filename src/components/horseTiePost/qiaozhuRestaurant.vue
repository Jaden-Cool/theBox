<template>
  <div>
    <h1 class="center">橋珠酒家</h1>

    <div class="paragraph">
      <p class="normal">
        橋珠酒家是全顺德名厨的摇篮。
        区财师傅在这里坐镇，虽然名义上是主厨，但是区财基本上只会有贵客点名做宴的时候才会出现。日昳进来的头几个月，就马上被安排去了“追猫”。
      </p>
      <p class="normal">
        追猫是所有新弟子的必经之路，意指他们需要在酒家里四处奔走上菜。这段日子虽然辛苦，但是对于总是嘴馋的日昳倒是异常地享受。传菜期间偷吃一两口而不被发现是他每天最乐意琢磨的事情。
      </p>
      <p class="normal">
        橋珠酒家的老板是龙拜丹，从一九一几年开始营业至今已经有二十多个年头了。橋珠酒家取意，迎恩桥畔的一颗璀璨明珠。迎来送往的都是达官贵人。在这个年代，可以在橋珠酒家喝茶宴客就是一等一的有面子。就连手头不太阔绰的普通人，也会时不时奢侈一把，去吃上一个鸡球大包。
      </p>
      <p class="normal">橋珠酒家里，日昳结识了几个与他年龄相仿的师兄妹。</p>
      <p class="normal">
        首先就是一丝不苟的大师兄，冯满。总是穿着干净整洁的衣服，手上也从不沾半点油污。他拥有非常精确的味觉，入门两年都还不到就已经取缔了几个师傅晋升到做三锅了，可见天赋异禀。那些对于他靠舅舅冯科才进来的闲言闲语，自然不攻自破。大家都说，他以后定会接班区财师傅，成为顺德菜的总舵主。
      </p>
      <p class="normal">
        馮沃，性格开朗，爱开玩笑，经常让大家捧腹大笑。冯沃和冯满是远房亲戚，这两个人的性格是辣椒对苦瓜。相比于其他人冯沃和他舅舅，掌柜的冯科最像，完完全全就是一个商人。因为他来自和龙家关系密切的冯家，脑子又非常灵活，大家都戏称他叫“冯大少”。冯大少手段之高明，时不时会把不会转弯的日昳耍得叫苦连连。
      </p>
      <p class="normal">
        最后当然少不了还有师妹阿鸞（鸾luán），年纪虽然和日昳相仿，但是因为入门晚所有人都叫她“鸞师妹”。在这个时代，阿鸞是及其少见的正规女弟子。她性格坚韧，不怕苦累，常日昳对她心中充满了敬佩。
      </p>
      <p class="normal">
        区财也称得上是个奇人，当时还没有女子能做厨师的先例，但是鵉师妹在点心方面实在是天赋异秉。他不顾流言蜚语，留了阿鸾在身边，虽然导致后来也发生了许多事情，但也开创了先河，让后世厨艺界也有女性发光发热的机会。
      </p>
      <p class="normal">
        酒家包吃住，等其他人都下班以后，日昳也乐于继续待在厨房里面。准备第二天的食材之时，顺便用菜头菜尾和炉灶的余温，总能做出一些精致小点来。
      </p>
      <p class="normal">
        和他一起准备第二天点心食材的还有师妹阿鸞，
        而龙拜丹老爷的狼狗阿财也经常挎着菜篮子过来买宵夜。
      </p>
      <p class="normal">
        回忆缓缓的消散，你深呼一口气。陈皮的香气还在你身边萦绕着。那团金光再次出现。你照样还是看不清那个人的面容，但是这一次，你竟然能听清楚他说话了。
      </p>
      <p class="normal">
        “五感已开了三样，甚好甚好。好一个三世贵人之命格，资质果然不凡。时机快到了，你需再取一味火......
        ”
      </p>
      <p class="normal">说着，你的地图再次从包里被重引了出来，在你面前旋转了起来。 ”</p>
      <p style="margin: 0" class="center"><strong>金针已穿眼如蓑，阵眼已成终无悔，</strong></p>
      <p style="margin: 0" class="center"><strong>双掌开来四象齐，玄武指向需水处。</strong></p>

      <p class="center">
        【找到玄武所指之处，在那边会找到五个字，不要扫描二维码（那是另外一条故事线）。输入找到的五个字继续】
      </p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>
    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
    <van-dialog v-model:show="show" title="蓝色指向的阵眼处寻找一块烧焦的木牌" show-cancel-button>
      <img :src="map" />
    </van-dialog>
  </div>
</template>

<script setup>
import { showToast } from 'vant'
import { reactive, toRefs } from 'vue'
import map from '@/assets/images/map.svg'
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
    case '顺德一定得':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
      break
    case '顺德 一定得':
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
  state.show = true
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
:deep(.van-dialog__content) {
  margin: 26px 0 26px 0;
}
</style>
