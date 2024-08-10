<template>
  <div style="padding-bottom: 48px">
    <h1 class="center">红荔1</h1>

    <div class="paragraph">
      <p class="normal">
        瀘紹年去了村口戏班做画大妆（给粤剧演员画脸谱）。本来就很喜欢摆弄胭脂水粉的她，和其他牛皮灯笼（怎么点都不明）比起来根本就是天差地别，很快就成为了那里的焦点。
      </p>
      <p class="normal">
        再过几个月她就第一次跟着戏班下香港和澳门巡演了，应该半年后就会回来，日跌的内心还是很不是滋味。
      </p>
      <p class="normal">
        阿妈进了白驹班的后备役，我也跟着进入戏班认识了一些有粤剧天赋的同龄孩子。而村子里的孩子都会聚集在一起，在村头唯一铺了石板的黄氏大宗祠前练功。
      </p>
      <p class="normal">
        说起来也是好笑，他们学舞狮、粤剧啊那些人，全部都在拉筋、跑圈，训练柔韧性，鬼哭狼嚎练声，活脱脱的一群吗喽。而我们斗木啊，灰雕啊这些学徒就好很多了，都是安安静静的举举沙包，练练端水和闭气。但始终场地只有一个，人却有好几十，互相不起冲突是很难的。
      </p>
      <p class="normal">
        我们和戏班打架打了无数次，各有输赢。直到今天场地的归属权还没有个说法。平常不服人的黄师傅对这件事情也是睁一只眼闭一只眼。在沙头村这里一个”金眼风”，竟然要让一个戏班班长三分，白驹班的实力也是可见一斑。
      </p>
      <p class="normal">
        当然了，这样的僵持对于我来说也不是没有意义。这样我每天就可以借故去看李清鹂。
      </p>
      <p class="center">——————————</p>
      <p class="normal">
        随着你的思绪从这段记忆中抽离，你回到了现实。就在此时，一阵旋风扑面而来，竟然把你手中的地图卷了起来。地图在空中打了两个转被一阵光影击中，又重新飞到回了你的手上。
      </p>
      <p class="center">
        <van-image
          fit="contain"
          :src="aManWithAsword"
          @click="showImagePreview({ images: [aManWithAsword], showIndex: false })"
        />
      </p>
      <p class="normal">
        只见在荷花池的对岸，一个男人轻轻把手上的剑入了鞘，那剑气所过之处，在荷叶上切割出了深浅不一的细痕，你隐约能辨认出两句话：
      </p>
      <p style="margin: 0;" class="center"><strong>灶君自顾金土火，</strong></p>
      <p style="margin: 0;" class="center"><strong>去木舍水余央间。</strong></p>
      <p class="center">【根据诗句找到地图上对应地点，去往该地点寻找下一步的二维码】</p>
    </div>

    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>

    <van-dialog
      v-model:show="show"
      title="回答正确，在博物馆内寻找【马姐菜：煎酿鲮鱼】扫描二维码继续"
      show-cancel-button
      @confirm="handleDialogConfirm"
    >
      <img :src="fish" />
    </van-dialog>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { showImagePreview, showDialog } from 'vant'
import aManWithAsword from '@/assets/images/aManWithAsword.png'
import fish from '@/assets/images/fish.png'
const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  show: false
})
const { show } = toRefs(state)
const handleFloatingBtnClick = () => {
  showDialog({ message: '注意看地图上面的十三个红点，其中有一个地点符合这首诗的第二句' }).then(() => {})
}
</script>

<style lang="less" scoped>
:deep(.van-dialog__header) {
  padding: 16px;
}
:deep(.van-dialog__content) {
  margin-bottom: 16px;
}
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
