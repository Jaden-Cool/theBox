<template>
  <div>
    <h1 class="center">wg时期</h1>
    <div class="paragraph">
      <p class="normal">
        在一个漆黑的夜晚，四周寂静得让人害怕。午未怀揣着那些视为生命般重要的地契和各种金银财宝，悄悄地来到了一棵井边的柚子树下。他不敢通知任何人，连招娣都没有知会。这些物件在安稳时期就是瑰宝，在这个年代却是一张张烫得发红的烙铁。
      </p>

      <p class="normal">
        他的手颤抖不停，从怀中掏出一瓶酒，仰头猛灌了几口。酒液顺着喉咙流下，却无法平息他内心的恐惧与焦虑。
      </p>

      <p class="normal">于是，费了好一番功夫你才听到一声“砰啪”，盖子被打开了。</p>

      <p class="normal">
        清冷的月光洒在他那满是汗水的脸上。他一边大口喝着酒，一边开始费力地挖土。每一下都极其小心，哪怕是轻微的声响在这寂静的夜里都显得格外突兀，生怕引来不必要的麻烦。
      </p>

      <p class="normal">
        户口上他的名字还是常日昳。在当时混乱的局面下，这样的身份混淆使得真要查起来还真不容易查到他。这也让午未在这万分危急的时刻，看到了一丝希望，多了一份冒险藏匿财产的勇气。
      </p>
      <p class="normal">
        汗水混合着酒水，不断地从他的脸颊滑落。他咬着牙关，将封装着地契和金银财宝的酒坛埋进坑中。他正在掩埋一段无比珍贵却又充满危险的过往。
      </p>
      <p class="normal">
        终于，东西都被埋好了。午未无力地瘫坐在地上，又狠狠地灌了一大口酒。他呆呆地望着那重新被填上的土，心中五味杂陈。他不知道未来的日子里，这些宝贝是否还能有重见天日的那一天，也不清楚自己的命运究竟会走向何方。然而在当下，这似乎是他所能想到的唯一办法了。
      </p>
      <p class="center">——————————</p>
      <p class="normal">
        接下来的每一年，午未都会偷偷地过来确保地契还在。同时，埋下一坛新酒来纪念又平安的渡过了一年。
      </p>
    </div>
    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      <p style="margin: 0">前往【顺酒坊】寻找你太爷留下的宝藏，</p>
      <p style="margin: 0">一坛酒一坛酒的开来找吧。</p>
    </div>
  </div>
</template>

<script setup>
import { showDialog } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleContinueClick = () => {
  showDialog({
    message: '即将前往【顺酒坊】',
    confirmButtonText: '继续故事',
    showCancelButton: true
  }).then(() => {
    router.push({ name: 'ShunLiquorWorkShop' })
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
