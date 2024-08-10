<template>
  <div>
    <h1 class="center">梳起2</h1>
    <div class="paragraph">
      <p class="normal">
        石船上躺了一个人，辨不清男女。头上插着几朵不知名的鲜花。只见他/她把手中的一个篮子漂浮水中当做是船。见你靠近，咧嘴一笑，示意你过来看看他篮子内的东西。你靠了过去，只见各种奇珍异草上面，放着一把梳齿特别密的梳子。你记得这个，这个东西好像叫
        梳篦（bì）。你忍不住伸手去摸，就在你碰到这把梳子的一瞬间，被卷进了一场回忆当中。
      </p>
      <p class="center">
        <van-image
          fit="contain"
          :src="aManHoldingAflowerBasket"
          @click="showImagePreview({ images: [aManHoldingAflowerBasket], showIndex: false })"
        />
      </p>
      <p class="normal">
        阿妈和李清鹂跟着红船离开的日子已经过去了数月，在替李清鹂做初登台的准备期间，招娣也即将偷渡去香港，而阿妈对招娣的事情并不知情。我这几天都寝食难安，神不守舍，早上练习的时候也险些掉下水。
      </p>

      <p class="normal">
        该来的还是来了。清早我见到招娣在偷偷收集黄皮叶用于煲水。今夜是十五，此时此刻的姑婆屋灯火通明，在几位年长妈姐的簇拥下，招娣身穿新的白衫和黑裤，神情庄重，站在妆镜前。手中握着一把梳篦，也象征着她的独立和决心。
      </p>

      <p class="normal">
        梳头这一刻对每一个自梳女都极度重要，招娣拜托黄瑞云姑婆为她完成梳起的重要仪式。黄瑞云缓缓地解开了招娣的长辫。
      </p>

      <p class="normal">
        自从阿爹离开后，招娣在姑婆屋里学到的不止有手艺，妈姐们对她倾囊相授的，还有让她从懵懂少女成长为独立女人的自信。
      </p>

      <p class="normal">
        过了今天，招娣将不再成为婚嫁的被动者，而是选择靠着自己的力量去掌握自己的命运。她的眼中闪烁着坚定的光芒，我安静站在一旁，默默注视着家姐，心中充满了敬佩和不舍。
      </p>

      <p class="center">————————</p>
      <p class="center"><strong>“一梳福，</strong></p>
      <p class="center"><strong>二梳寿，</strong></p>
      <p class="center"><strong>三梳自在，</strong></p>
      <p class="center"><strong>四梳清白，</strong></p>
      <p class="center"><strong>五梳坚心，</strong></p>
      <p class="center"><strong>六梳无穿无烂，</strong></p>
      <p class="center"><strong>七梳一帆风水，</strong></p>
      <p class="center"><strong>八梳金兰姐妹相爱，</strong></p>
      <p class="center"><strong>九梳九九归一，</strong></p>
      <p class="center"><strong>十梳终身不嫁。”</strong></p>
      <p class="center">————————</p>
      <p class="normal">随着最后一句誓词说完，黄瑞云把招娣的头发盘成了云髻，仪式就正式的结束了。</p>
      <p class="normal">
        招娣转过身，轻轻拥抱了我，低声说道：“日昳，姐姐走了以后，你要好好照顾自己，将来，不管走到哪里，我们都是一家人。”
      </p>
      <p class="normal">我明白招娣的苦心。要是阿妈在这里的话……</p>
      <p class="center">————————</p>
    </div>
    <div class="paragraph">
      <p class="center">梳篦是当年的顺德特产之一。</p>
      <p class="center">在那个年代洗头非常麻烦，</p>
      <p class="center">很多人都有虱子，</p>
      <p class="center">一把梳篦是必备之物。</p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      点击此处继续
    </div>
  </div>
</template>

<script setup>
import { showImagePreview, showDialog } from 'vant'
import aManHoldingAflowerBasket from '@/assets/images/aManHoldingAflowerBasket.png'
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  showDialog({
    message: '前往地图上的⑥',
    confirmButtonText: '继续故事',
    showCancelButton: true
  })
    .then(() => {
      emit('update:active', 3)
    })
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
