<template>
  <div>
    <h1 class="center">耗壳巷</h1>

    <div class="paragraph">
      <p class="normal">
        李清鹂最近总是心事重重。午未找戏班的人打听，说她经常一个人突然消失，待她重新出现的时候，她总是声音沙哑，一脸憔悴。
      </p>
      <p class="normal">
        午未大概猜出了缘由，于是每天清晨在龙舟锻炼时，总会顺手捕捉一些河虾，回到家里，将这些虾去壳、腌制，再用碾碎的虾壳裹好，炸成金黄酥脆的红色小球。炸好的虾球外表像极了新鲜荔枝，入口却是另一番咸鲜的滋味，鲜美、弹嫩、香气四溢。这道名为“荔枝虾球”的小吃，正是午未心思巧妙的杰作。
      </p>
      <p class="center">
        <van-image
          fit="contain"
          :src="lychee"
          @click="showImagePreview({ images: [lychee], showIndex: false })"
        />
      </p>

      <p class="center">
        这几年沙头村的战后重建工作进行得如火如荼。原本的青石巷子早就被更加贵重和安全的耗壳所代替。午未拿着自己做的木质食盒，兜兜转转找到了李清鹂。
      </p>
      <p class="normal">
        又是这条隐秘的巷子。只见李清鹂对着墙，一次又一次感情饱满的唱着《荔枝颂》。
      </p>
      <p class="center">“....什么呀，可是弄把戏，请尝个鲜，我告诉你。 ”</p>
      <p class="normal">
        可惜她用力过猛，那种俏皮和灵动的感觉荡然无存，反而是有一种强买强卖的推销感。
      </p>

      <p class="normal">
        这几年，李清鹂因为歌喉和红线女相似，成为了一个专门模仿红线女红腔的歌手。还因此获得了“红荔女”
        这个雅称。而戏班里的人也逐渐以”红荔”来称呼她，清鹂觉得要更加努力练声才能对得起这个称号。
      </p>

      <p class="normal">
        “谁！”红荔听声转头看到了午未，表情放松了下来。“我给你带点吃的。练狮吼功也要吃饭啊对吧。”午未打趣道，实则内心紧张得不行。
      </p>

      <p class="normal">
        红荔接过木盒，“你吓死我了...
        你怎么总是能找到我，我都找了那么偏僻的巷子了”午未耸了耸肩，不可置否。
      </p>

      <p class="normal">
        红荔打开木盒，看到里面有几颗荔枝，表情闪过一丝愤怒“啧，死竹杠仔，你摞景定是赠庆啊（幸灾乐祸），明明知道我唱曲吃甜的会封喉，你还给我送荔枝？你找死啊！”眼看红荔就要打过来，午未及时举手投降。
      </p>

      <p class="normal">
        “我哪敢啊——
        你先细看！这不是荔枝！”红荔拿起一颗荔枝虾球，认真的端详了起来，随即放了一颗进嘴里咀嚼。她眼睛瞬间亮了起来“好吃诶！这是什么东西？好吃！是河虾？”
      </p>

      <p class="normal">
        午未见她发现了其中玄妙，随即摇头晃脑的推敲了起来“哎呀，说道这荔枝虾滑啊，以河虾肉作底，虾壳舂碎作外壳，炼制七七四十九天方可成丹，看似荔枝却胜似荔枝。谁说荔枝不能是咸的？只要花点心思，我认为假货可比真货还要好————你说对吧？吗喽精。”
      </p>

      <p class="normal">
        红荔听完逐渐沉默了下来。这番话直击她的痛处。是啊，她总是在模仿，身边的人都用她唱的红腔和红线女对比。如果她总是觉得自己是假货，那她永远不可能成名。红荔这个名字是是她的聚光灯，也是她的枷锁。
      </p>

      <p class="normal">
        红荔蹲在墙角，又把一颗荔枝虾球放进嘴里，细细咀嚼。她抬头看着午未，发现午未也在偷看她。两人相视一笑。
      </p>

      <p class="center">————————————</p>
      <p class="center">
        从此之后，两人经常在耗壳巷里面吃虾球，有几颗虾球就这样散落在了这里。希望他们的日子可以一直这么下去。
      </p>

      <p class="center"></p>
    </div>
    <div class="center subtleFade" style="margin-bottom: 26px">【前往[戏台]寻找下一步内容】</div>
  </div>
</template>

<script setup>
import { showImagePreview } from 'vant'
import lychee from '@/assets/images/lychee.jpeg'
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
