<template>
  <div @click="handleMainBoxClick">
    <!-- <h1 class="center">口味酸</h1> -->

    <div class="paragraph">
      <p class="normal">
        你小心翼翼地打开了那个酒坛......
        里面竟然不是地契，是真的酒？醋？。你犹豫再三还是喝了一口。猛烈的酸味夹杂着一阵浓香直接让你头晕目眩。
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        <strong
          >四周人声鼎沸，欢笑声、交谈声交织在一起。他们面前的小酒杯缓缓的散发着金光。人不多，大概六七个人，落座在长桌旁吞云吐雾，品尝着精美的小菜，气氛热烈。</strong
        >
      </p>

      <p class="normal">
        你环顾四周，认出那是午未正忙碌地穿梭在宴席之间。他穿着一身浅色的中山装，手里端着一盘刚出炉的桂花鱼卷，面带笑容地招待着客人们。
      </p>

      <p class="normal">
        这时，你注意到一个特别的身影。他神情自若，四周的人都对他怀有极大的敬意。你凑近一看，心中猛然一震——这位中年男子竟然是邓小平！现在应该是1984年，邓小平正在第一次探访顺德！从装潢你能看得出来这里是清晖园。你没想到，太爷常午未竟然接待过的这位国家领导人！
      </p>

      <div class="center">
        <van-image
          fit="contain"
          :src="president"
          @click="showImagePreview({ images: [president], showIndex: false })"
        />
        <p>（图片出自半月谈网，由顺德档案馆提供 ）</p>
      </div>

      <p class="normal">
        席间，午未以他的精湛的厨艺和好酒量赢得了邓小平的赞赏，两人谈笑风生，气氛十分融洽。“常师傅，我听说你的手艺真是了得啊！”邓小平伸起了大拇指向午未致意。
      </p>

      <p class="normal">
        “哪里哪里，邓先生过奖了。顺德菜讲求一个粗菜精做，能让您满意就已经最大的荣幸了。”午未惶恐地笑道。
      </p>

      <p class="normal">
        邓小平点点头，抿了一口酒，眼中闪过一丝深思。“常师傅，我听说你喜欢钻研新东西啊。特别是当年大镬饭时代，厨房里面的边角料都可以在你这边化腐朽为神奇。有这回事吗？”
      </p>

      <p class="normal">
        午未微微一愣，随即露出感激的笑容。“邓先生真的是细致入微。过誉了，过誉了，只不过是时世所迫，有些急才，说不上什么本事。”
      </p>

      <p class="normal">
        邓小平深深看了午未一眼，也看了看旁边赴宴的几位领导人，缓缓说道：“实践是检验真理的唯一标准。在艰难时期，要先确保够吃，再其次就是钻研怎么好吃。一切都要一个有试验精神的人一样一样的试出来，各位说对吗？”
        虽然邓小平是看着午未，但是话中却好像是说给其他人听的。
      </p>

      <p class="normal">
        只见旁边两个男人眼神亮了，
        “所以说，顺德到底能够搞什么，试过才知道。”邓小平点了点头，带头举起酒杯
        “来，这一杯，我们敬常师傅，敬朴实肯干的顺德人。你们那句话怎么说的？醒目、识做、搞定、坚嘢。饮胜！”
      </p>
    </div>

    <div class="paragraph">
      <p class="normal">
        当你从那段充满历史的幻境中醒来，细细咀嚼着邓公说的话。通晓现代历史的你，终于咀嚼出了这些话背后的深意。你明白，这几句看似家常的话语，在几年后让顺德一跃成为了全国最有钱的出口城镇。
      </p>

      <div class="center">【可用粮食卷在顺酒坊换取一杯酒】</div>

      <div class="center">
        献身犯险陈酒
        <p style="display: inline-block; margin: 0; color: #7f6000">酸</p>
        ，待酒成醋岁月
        <strong>辛</strong>
        。
      </div>

      <p class="center">红米酒：喝到一口发酸的陈米酒，能感受到当年改革背后的辣。</p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      <p style="margin: 0; padding: 0">把此页面截图</p>
      <p style="margin: 0; padding: 0">在顺酒坊牌匾下抱着酒埕拍照</p>
      <p style="margin: 0; padding: 0">记录完毕后点击此处继续</p>
    </div>
  </div>
</template>

<script setup>
// import { showImagePreview, showDialog } from 'vant'
import { showImagePreview } from 'vant'
import president from '@/assets/images/president.jpeg'
const emit = defineEmits(['update:active', 'handleAutoPlay'])
const handleContinueClick = () => {
  // showDialog({
  //   message: '苦只是一时的，用汗水浇灌的土地总会有相对称的收成',
  //   showCancelButton: true
  // }).then(() => {
  emit('update:active', 2)
  // })
}
const handleMainBoxClick = () => {
  emit('handleAutoPlay')
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
