<template>
  <div>
    <h1 class="center">寻找陈酒</h1>

    <div class="paragraph">
      <p class="normal">
        “喂！！！你是谁！鬼鬼祟祟的！”
        一个看着五六十岁的男人跑了过来。此时，你已经喝得有点多，原本想仓促逃亡，却一头栽倒在一颗粗壮的桑树树干上，震落了一头的桑葚。
      </p>
      <p class="normal">“你在干什么？”园主出现在你面前，眉头紧锁，眼中闪烁着警觉的光芒。</p>
    </div>

    <div class="paragraph">
      <p class="normal">
        你心中一惊，忙转过身来，结结巴巴地解释道：“我是……我是来找我我太爷爷的东西的！他在这里埋过，额，一些酒。”
      </p>
      <p class="normal">
        园主不为所动，他低头看了看你脚下那被挖得乱七八糟的桑树林，脸色变得更加难看。他冷冷地说道：“这里是什么地方？想来就来想走就走？来到王家的地盘还那么嚣张？你过来偷酒是吧？那就要把它喝完再走咯。”
      </p>
      <p class="normal">
        你一时语塞，心中暗暗叫苦。只见这个自称老王的大叔拍开了一坛酒的泥封，放到了你面前。你自认继承了太爷的酒量，基本千杯不醉，但喝完这一坛，恐怕非醉不可。而且，这酒放了那么多年都快成醋了。
      </p>
      <p>
        就在你把心一横，举起酒坛，准备硬着头皮喝下时，园主忽然停住了你。他皱着眉头，仔细打量了你一番，眼中闪过一丝惊疑。“你真的是常伯的后人？”他问道。
      </p>
      <p>
        你点了点头，急忙从怀中掏出那封常惜端的遗书。园主接过信件，认真地看了半晌，神色逐渐缓和下来。他长叹一声，似乎想起了往事。
      </p>
      <p>
        “原来如此……”他轻轻地喃喃自语，随即露出一丝微笑。他从棚子里取出了一坛酒，那坛酒看上去比你挖出的有些不一样，仿佛经历了岁月的洗礼。
      </p>
      <p>
        “这是常伯存在我这里的酒。”园主将酒坛交到你手中，目光中多了一份柔和与宽容。“这酒埋了几十年了，是我阿爸王一平传到我这里的。现在也算物归原主了。”
      </p>
      <p>
        你感激地接过酒坛，向园主深深鞠了一躬。那坛酒在你怀中温暖而沉重，仿佛承载着祖辈的深情厚意。月光下，桑树林中的一切恢复了宁静，只有你与园主的身影在苍茫的夜色中显得格外清晰。
      </p>
    </div>

    <div class="paragraph">
      <p class="center">【可用粮票兑换酒版一个，未成年人不得喝酒】</p>
    </div>

    <div class="center subtleFade" style="margin: 26px 8px" @click="handleContinueClick">
      点击此处继续
    </div>
  </div>
</template>

<script setup>
// import { useRouter } from 'vue-router'
// const router = useRouter()
const emit = defineEmits(['update:active'])
const handleContinueClick = () => {
  emit('update:active', 1)
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
