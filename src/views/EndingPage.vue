<template>
  <div>
    <h1 class="center">结局</h1>
    <div class="paragraph">
      <p class="normal">
        你的能力再次触发，但是这一次你的意识并没有穿越。一阵金光亮起，一个留着长须的形象渐渐现形在了你的身旁，他的身影高大而挺拔，身穿一袭古朴的暗红金丝官服，腰间系着一条绿色的腰带，显得威严而慈祥。他的头发虽然花白，但依旧精神抖擞，脸上带着温暖的微笑。
      </p>
      <p class="normal">
        他慢慢转过身来，眼神中透露出一丝欣慰和骄傲。 “终于等到你了，”
        他用温和的声音说道，仿佛穿越了时空的界限。
      </p>
      <p class="normal">你紧张又激动，心中有千言万语却一时不知从何说起。</p>
      <p class="normal">
        “一路上辛苦你了，”
        他笑笑说道，“有你和刘天师帮我续上了这些因果，我可以不用再轮回，安安心心的在天庭做个食神了。”
        说着，常日昳在空中用手指写下了两个字
      </p>
      <p>
        <van-image
          fit="contain"
          :src="daLiang"
          @click="showImagePreview({ images: [daLiang], showIndex: false })"
        />
      </p>
      <p class="normal">
        “乖曾孙你有没有发觉，大良两个字很特殊？大良呢两个字，无非就是一同食。大良这个地方对食物的热情和专注是写在名字里的。
      </p>
      <p class="normal">
        唔讲你唔知，系仙界，负责保佑大良的灶君法力是最充足的。我管人食，管人煮。
        在这个快没有灶的年代，很多顺德geh厨房都还是有我的神位。我保佑个阿妈帮细路哥整火腿肠煎双蛋，期待他们平步青云。保佑个D系出租房入面通宵煲剧，look个面都仲要过冷河geh情侣，保佑区地长长久久。保佑个D深夜系猪杂粥档度，准备接单的司机，财源广进。
      </p>
      <p class="normal">
        系大良食饭，不单只是为了填饱个肚子。喺度，食饭系一种面对生活ge态度。每餐饭，就是一场仪式。你认真吃饭，我就认真保佑你。人生边有咁复杂，只不过就是很多餐饭拼接而的酸甜苦辣咸。”
      </p>
      <p class="normal">
        他的身影渐渐变得模糊，但他的声音依旧清晰，“记住啊，识饮识食，人生积极啊。”
      </p>
      <p class="normal">食神常日昳的身影最终消失在光芒中。</p>
      <p class="normal">风景依旧壮丽，而你，也该去吃饭了。</p>
    </div>
    <p class="center"><strong>【《寻味》解谜盒——完结】</strong></p>
    <p class="center"><strong>【祝各位食饮识食，人生积极】</strong></p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { showImagePreview } from 'vant'
import daLiang from '@/assets/images/daLiang.png'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
