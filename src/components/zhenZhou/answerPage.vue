<template>
  <div>
    <h1 class="center">回答周之贞</h1>

    <div class="paragraph">
      <p class="normal">
        <strong>周之贞</strong>老师总是来无影去无踪，有同学私底下说他和连作霖先生一样曾经中过举人
      </p>
      <p class="normal">
        我当时最担心的是找到了他以后我答案又对不上。于是我拿着三字经，反复数了三天，又反复的和几个同学对照过以后就去找他讨赏了。
      </p>
      <p class="normal">
        我找到周之贞老师的时候，他正在和陈器范老师皱着眉头画着一张地图。我那个时候还不知道，原来这个时不时指点学生上课的周之贞老师竟然是前县长。
      </p>
      <p class="normal">
        周之贞老师对教学一向看得非常着紧，他总是会挤出时间处理文社里面的大小事务。虽然科举考试已经结束了多年，但是青云文社还是帮了很多像我一样的孩子，承担学费，让我有了认字的机会，我内心是万分感激。
      </p>
      <p class="normal">“周老师好。</p>
      <p class="normal">“常，你来找我做什么？”</p>
      <p class="normal">“三字经里面的黄金我数完了！”</p>
      <p class="normal">
        只见周之贞老师愣了一下，随即反应了过来。我马上把自己的答案告诉了他。陈老师在旁边依着桌子，轻摇着扇子，面带笑意的听着我的解释。
      </p>
      <p class="normal">
        “答得好啊。”周老师平静的点了点头，放下了手中的笔。“常，用这种方法，这书啊
        就容易背了。这三字经啊，你以后…”
      </p>
      <p class="normal">
        “啊？你骗我！你不是说有赏的吗！那我都答对了，赏呢？”
        我着急的打断了老师的说教。我来是讨赏的，可不是来听他讲道理的。我一把抓过他们桌子上的地图就塞进了书包里面。要是今天讨不到赏，好歹拿点彩头。
      </p>
      <p class="normal">
        周老师见糊弄我不成眉头都皱了起来。我才不管他那么多，刚刚准备摔在地上打滚，陈老师啪的一声把扇子一关，横了在我面前。说道
        “常日昳同学，你可别得寸进尺啊。背得出三字经是你应当的，但是嘛
        周之贞老师也不是个会食言的人。这样，我作个主。这个赏，我替他奖励给你好不好？”
      </p>
      <p class="normal">
        我的眼睛都亮了：“好啊好啊。陈老师要给我什么？”
        陈器范老师拿起笔，在旁边取了一张纸，洋洋洒洒写了四个字，还煞有其事的写了日期，签了名落了印。我拿起来一看，上面写着四个大字“人脉一条”。我嘟着嘴满脸怨念的走了。我没想到的是，这张字条竟然在几年之后真的改变了我的人生。
      </p>

      <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
        点击此处继续
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleContinueClick = () => {
  router.push({ name: 'QiaoZhu&QingYun' })
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
