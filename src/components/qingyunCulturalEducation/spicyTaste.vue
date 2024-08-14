<template>
  <div>
    <!-- <h1 class="center">口味辛</h1> -->

    <div class="paragraph">
      <p class="normal">
        “周之贞老师，你看到了吗？开边大鱼，我，做到了......
        无论多少辛辣我都能坦然面对，就为了这一口......
      </p>
      <p>
        <van-image
          fit="contain"
          :src="sweetMemories"
          @click="showImagePreview({ images: [sweetMemories], showIndex: false })"
        />
      </p>
      <p class="normal">
        ……我想见见你...... 这扇子，这是我唯一的法子了。"
        说罢常午未写完最后一个字。他的气息越来越弱，最后一缕金光消失在他的指尖。
      </p>

      <div class="center">
        “品味人间步步<strong>辛</strong>，只为后人尝尽
        <p style="display: inline-block; margin: 0; color: #bf9000">甜</p>
        。”
      </div>
      <p class="center"><strong>【解锁味道：辛】</strong></p>
    </div>

    <div class="center subtleFade">【把此页面截图，在最终地点合照】</div>

    <div class="paragraph">
      <p class="center">金钉在柄置于眼，敦仁尚美宏图展，</p>
      <p class="center">百字尽出覆红岸，九十竟在黄边镶，</p>
      <p class="center">青山易改指巷镜，宝地就在美人尖。</p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px">
      <p class="center" style="margin: 0">到达指示场景处，</p>
      <p class="center" style="margin: 0">寻找午未二字，</p>
      <p class="center" style="margin: 0">将午未放上去</p>
    </div>

    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>

    <!-- <div class="paragraph">
      <p>【提示1：最后一次使用地图和扇子，根据最后的提示定位。】</p>
      <p>【提示2：打开扇子和地图，把扇子上的“金钉”对准顺内页的德眼。把敦仁尚美那一面在上，展开扇子以后挡住整个红色的部分。】</p>
      <p>【提示3：】红色的⑨和⑩字在黄色的边缘上。把扇子里扇骨的青山二字，对准耗壳巷和天空之镜。最终在扇子上的“美”字尖尖的底下就是最终地点】</p>
    </div> -->
  </div>
</template>

<script setup>
import { showDialog, showImagePreview } from 'vant'
import sweetMemories from '@/assets/images/sweetMemories.png'
const props = defineProps({ isAtBottom: Boolean })
const handleFloatingBtnClick = () => {
  showDialog({
    message: `
    【提示1：最后一次使用地图和扇子，根据最后的提示定位。】
    【提示2：打开扇子和地图，把扇子上的“金钉”对准顺内页的德眼。把敦仁尚美那一面在上，展开扇子以后挡住整个红色的部分。】
    【提示3：】红色的⑨和⑩字在黄色的边缘上。把扇子里扇骨的青山二字，对准耗壳巷和天空之镜。最终在扇子上的“美”字尖尖的底下就是最终地点】
    `
  })
    .then(() => {})
    .catch(() => {})
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
