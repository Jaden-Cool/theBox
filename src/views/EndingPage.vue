<template>
  <div>
    <!-- <h1 class="center">结局</h1> -->
    <div class="paragraph">
      <p class="normal">
        你终于找到了这个最终的地点，并把放着不知道写着“午未”还是“五味”的徽章放到了此处，但是这一次你的意识并没有穿越。
      </p>
      <p class="normal">
        他慢慢转过身来，眼神中透露出一丝欣慰和骄傲。 “终于等到你了，”
        他用温和的声音说道，仿佛穿越了时空的界限。
      </p>
      <p class="normal">你紧张又激动，心中有千言万语却一时不知从何说起。</p>
      <p class="normal">
        “一路上真的是辛苦你了，”
        他笑笑说道，“你和刘天师帮我续上了这些因果，我再也可以不用再轮回，安安心心的在天庭做个食神了。”
        说着，他在空中用手指写下了两个字
      </p>
      <p>
        <van-image
          fit="contain"
          :src="daLiang"
          @click="showImagePreview({ images: [daLiang], showIndex: false })"
        />
      </p>
      <p class="normal">“曾乖孙你有没有发现，大良这个名字很特殊？</p>
      <p class="normal">
        大良两个字，无非就是食字头上兼了个一。大良这个地方以食为先的态度是包含在了名字中的。
      </p>
      <p class="normal">
        不说你不知道，在仙界，负责保佑大良的灶君，法力是最充足的。因为做灶君同时要兼任食神。要吃，就要煮，所以都归我管。
        在这个土灶都快要绝迹的年代，只有顺德的厨房，几乎家家户户都还有我的神位。
      </p>
      <p class="normal">我看着那些妈妈，早起帮小朋友做火腿肠煎双蛋，保佑他们考一百分，平步青云。</p>
      <p class="normal">
        我看着那些在出租房里面通宵煲剧，煮个方便面都要过冷河的挑剔情侣，保佑他们长长久久。
      </p>
      <p class="normal">我看着那些深夜，在猪杂粥店里，等着接单的出租师傅，保佑他们财源广进。</p>

      <p class="normal">
        在大良吃饭，不是只为了填饱肚子。在这里，吃饭是一种对抗生活的态度。每餐饭，都是一场仪式。一食一食，就是如此。只要你认真吃饭，我就会认真的保佑你。
      </p>

      <p class="normal">人生哪有那么复杂，只不过就是很多餐饭，拼接而成的酸甜苦辣咸。”</p>

      <p class="normal">
        他的身影渐渐变得模糊，但他的声音依旧清晰，“记住啊，识饮识食，人生积极啊。”
        食神的身影最终消失在光芒中。
      </p>

      <p class="center">风景依旧壮丽，而你，也该去吃饭了。</p>
    </div>
    <p class="center"><strong>【《寻味》解谜盒——完结】</strong></p>
    <p class="center"><strong>【祝各位 日日有食神。】</strong></p>

    
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
