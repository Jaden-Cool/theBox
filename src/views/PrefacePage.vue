<template>
  <div>
    <div class="paragraph">
      <h1 class="center">【前言】</h1>
      <p class="normal">
        你好，欢迎来到欢乐海岸PLUS，我是作者北极。首先，<strong>感谢你给了顺德一次表达自己的机会</strong>。无论你来自何方，我也衷心地希望你可以透过这次体验，感受到这座城市古老的脉络。”
      </p>
      <p class="normal">
        这个故事里面除了主角一家，所有其他角色都是根据真实历史轻量改编。可以说是我写给顺德的一封情书吧。这些有名有姓的历史人物，在此次寻味之旅结束以后，你也会在顺德其他历史遗留中再与这些角色相遇。
      </p>
      <p class="normal">
        游戏开始前，请根据盒盖内侧过一遍内容物。如果有缺少东西的话，可以在购买地点拿取备用。
      </p>
      <p class="normal">
        我们的解谜盒体验是没有通关时间限制的，欢迎呼朋唤友，看看故事，解解迷，边走边逛，吃点美食，拍点美图。
      </p>
      <p class="normal">
        在这次沉浸式的体验里面，你将会扮演一位找到了一盒时间胶囊的人。你将会跟随着时间胶囊里面的线索，剥丝抽茧，解开一个尘封已久的家族秘密。
      </p>
    </div>

    <div class="paragraph">
      <h1 class="center">【游玩规则】</h1>
      <p class="normal">
        1.人数限制：这个沉浸式的体验是为<strong>三个人设计的</strong>，参与人数多于三人的话，则推荐额外购买一个盒子。
      </p>
      <p class="normal">2.额外需要（非必要）：带一瓶水，一个打火机。</p>
      <p class="normal">
        3.时间限制：本游戏没有时间限制。完成完整的任意故事线所需时间为二到五个小时。二刷别的故事线的时间会大大缩短，因为会从存档点开始。如果整个队伍都是新手，请预留充分的时间进行。如果时间有限，选择最短的故事线进行。
      </p>
      <p class="normal">
        <strong>某些地区六点后会关闭使用</strong>，游戏自动会进入题目较少的“夜间模式”。如
        果你需要提前结束游戏，请尽量在<strong>九点之前</strong>回到购买区这里进行游戏存档。
      </p>
      <p class="normal">
        4.<strong>存档和二刷机制</strong>：如果队伍发现时间不够完成其中一条故事线，请去购买区进行“存档”。故事中每条特殊故事线都会解锁一个特殊的【味】。当出现【解锁味道】页面和二维码的时候，请进行该位置的队伍自拍，以及页面截图保存。
      </p>
      <p class="normal">
        回到购买区，向工作人员提出存档请求，展示购买小票，【味】的自拍和截图。工作人员会用一个特殊手段帮你进行存档。二刷别的故事线的时候不需要完全重新开始游戏，从你想开始的分支位置开始即可。
      </p>
      <p class="normal">
        5.游玩安全：请注意自身安全，游玩中不需要靠近危险的地域，如：没有护栏的河边、人迹罕至的草地、各种工作人员的后备间、各种配电设施消防设施等。若在酷暑寒冬，请注意自身的健康管理，可进入商场等地方避暑避寒。游戏可随时中断游玩和随时再开，所以没有硬性时间需求，请不要勉强，保持健康的身体和愉悦的心态进行游戏。
      </p>
      <p class="normal">6.为了保证你的体验完整，不推荐提前阅读和尝试使用某些道具。</p>
      <p class="normal">7.旅途中要是感受到不适，请及时终止游玩。</p>
      <p class="normal">
        8.通关奖励：从游戏发售日开始，头一百名收集完五个【味】的队伍会获得特制奖品一份。数量有限，先到先得！
      </p>
      <div class="normal" style="margin: 26px 8px">
        9.特殊规则：游戏的配件中，有一条隐藏的第四条故事线。要是到达了那个地方，提交自拍和解题过程，也可联系客服：
        <p
          style="display: inline-block; margin: 0; padding: 0; color: blue; text-indent: 0"
          @click="handlePhoneNumClick"
        >
          13450895529
        </p>
        获得特制奖品一份。
      </div>
      <p class="normal">10.最后，请保证你们的手机都连上了互联网，并拥有二维码扫描功能。</p>
      <p class="center">我们的寻味之旅，正式开始。</p>
    </div>

    <div class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      <p style="margin: 0">【点击此处开始我们的旅程】</p>
      <p style="margin: 0">（跳转【祖屋奇遇】）</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleContinueClick = () => {
  router.push({ name: 'AdventureInAncestralHouse' })
}
const handlePhoneNumClick = () => {
  showToast('复制客服电话成功！')
  navigator.clipboard.writeText('13450895529')
}
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
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
