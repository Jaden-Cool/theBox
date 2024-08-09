<template>
  <div>
    <h1 class="center">母亲离开</h1>

    <div class="paragraph">
      <p class="normal">
        那夜，瀘紹年坐在昏暗的油灯下，手里握着酒杯，心中翻涌着难以言喻的情绪。她听着赵氏夫妇在席间轻声提出的请求，邀请她北上去他们外省的糖厂打工。酒杯在她手中转动着，几次放下，又几次拿起，仿佛那落地有声的三次笑杯回荡在耳边，才让她心中有了定夺。
      </p>
      <p class="normal">
        夜深人静时，她把招娣叫到房间内，轻声嘱咐着盘缠的用处和未来的打算，并亲手把自己的卖身契交给了招娣。她知道这个决定会撕裂家庭的安宁，但她别无选择。为了不让日昳太过伤心，第二天，常招娣以运糖去大良为由，将毫不知情的日昳带上了去往大良的牛车，泪水在离别的晨光中悄然滑落。
      </p>
      <p class="normal">
        两姐弟在兰姨大良的家中定居了下来。日昳知道真相后，像被抽去了所有的力气，接连几个月的茶饭都变得索然无味。他一次次哭闹，像小兽般不愿接受这个残酷的现实，甚至几次深夜试图偷跑回去，险些丧命。最终还是兰姨把他找了回来。
      </p>
      <p class="normal">
        最终，现实的无情和时间的流逝让他逐渐沉默了下来。不识字的瀘紹年时不时托人给家里带信和寄钱，字里行间都是母亲的牵挂和不安。但随着战争的阴影逐渐逼近，信件传递的时间变得越来越长，愿意回到大良的人越来越少。
      </p>
      <p class="normal">
        直到有一天，信件再也没有到来。常家姐弟与母亲的音讯逐渐断绝，他们只能在那一纸卖身契和鱼仔饼留下的红绳上寄托思念。
      </p>
      <p class="normal center">
        <strong>未品人间处处甜，却尝离别朝朝苦。</strong>
      </p>
      <p class="normal center">解锁真味：【苦】</p>
      <p class="normal center">公仔饼：中秋节在街边买到的饼。饼甜中混着别离的苦。</p>
    </div>
    <p style="margin: 0; font-size: 16px" class="center">
      【把此页面截图，团队每个人都摸着中华食品拍照】
    </p>
    <div style="margin: 26px 8px" class="center subtleFade" @click="handleContinueClick">
      <p style="margin: 0">完成以上操作后点击此处继续</p>
    </div>
  </div>
</template>

<script setup>
import { showDialog } from 'vant'
import { defineEmits } from 'vue'
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  showDialog({
    message: '请确定已完成所要求的操作',
    confirmButtonText: '继续故事',
    showCancelButton: true
  }).then(() => {
    emit('update:active', 6)
  })
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
