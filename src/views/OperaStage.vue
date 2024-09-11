<template>
  <div class="main-box">
    <!-- <h1 class="center">起单脚</h1> -->

    <div class="paragraph">
      <p class="center">【以下挑战为体能挑战，请量力而为。】</p>
      <div style="width: 300px; margin: 0 auto">
        <p style="margin: 0">规则：</p>
        <p style="margin: 0">用盖子作为底座，</p>
        <p style="margin: 0">点燃盒内锥形塔香，</p>
        <p style="margin: 0 0 26px 0">然后保持单脚站立开始挑战。</p>
        <p style="margin: 0">没有打火机？</p>
        <p style="margin: 0 0 26px 0" class="subtleFade" @click="isNeedTimer = !isNeedTimer">是否需要我来帮你计时？{{ isNeedTimer ? '帮我计时' : '不需要' }}</p>
      </div>
    </div>
    <p class="center subtleFade" @click="handleIsStartClick">【准备好了吗？点击此处开始挑战】</p>

    <div v-show="isStart" class="paragraph">
      <p class="normal">随着午未和红荔之间的关系日益亲密，白驹班里的成员们也渐渐察觉到了这段爱情的萌芽。文武生和花旦们护妹心切，一番讨论过后他们一致认为，午未这个根本还没入行的木匠根本就配不上红荔。</p>

      <p class="normal">他们推选出了艺名为靓少凤的班长，<strong>罗叔铭</strong>，给午未下了一封“战书”，好让这个男人识相离开他们的掌上明珠。为了保证午未会输，又不至于显得他们过于欺负人，戏班选择了一项传统的戏班技巧比拼——“起单脚”。</p>

      <p class="center">
        <van-image fit="contain" :src="shuMingLuo" @click="showImagePreview({ images: [shuMingLuo], showIndex: false })" />
      </p>

      <p class="normal">“起单脚” “起单脚” 出自《罗成写书》，是一项考验平衡力和耐力的技巧。这是戏班的武生们都需要练的功，是最简单也是最难的功夫。常午未对这项技艺并不熟悉，但是为了证明自己对红荔的真心，午未接受了挑战。</p>

      <p class="normal">挑战当天选在端午节，村子里张灯结彩，好不热闹。白驹班的成员故意挑了这一天，让午未错过自己一年一度的木匠考核。午未暗骂他们卑鄙，但却又无可奈何。</p>

      <p class="normal">白驹班约了午未在村头的体育场集合。演出台上搭起的醒狮木桩被简单的系上了红绳，做成了一个擂台模样，周围围满了来看热闹的观众。午未独自站在演出台中央，面对着一众戏班的领班和看热闹的群众。红荔不在人群中......看来白驹班没有告诉她这件事情。</p>

      <p class="normal">靓少凤面带笑意地说道：“常午未，你决定要追红荔，就你今天就要证明你有心有力。起码要我们看得起你，我也不欺负你，今天我们来比‘起单脚’。论资排辈我虽然是班主，但是我是演花旦出身的，单脚不是我强项。别说我们没有留手。”</p>

      <p class="normal">两个人爬到木桩上面，像两个武林高手一般，一脸严肃地看着对方。下面观众的情绪也被调动了起来，开始起哄。</p>

      <p class="normal">靓少凤转身面向观众大声说道：“要是你今天输了，你以后就要和红荔断绝关系。” 还没等常午未回答，他就转身向着看戏的众人喊道：“在座各位都是我靓少凤的见证人！我们事不宜迟。奏乐！开始！”</p>

      <p class="normal">白驹班点起一根香，常午未和领班抬起一只脚，比赛正式开始。白驹班围在了最内圈，一边观战一边给班长鼓劲。戏班的几个常驻武生干脆也抬起了单脚，唱起了《罗成写书》，刚开始的几分钟，常午未仗着一身横练的肌肉，一直保持着稳定的姿势，但随着时间的推移，他的腿开始感到了酸痛。</p>
    </div>

    <div v-show="isStart" class="paragraph">
      <p class="center">一根香将要燃尽，十分钟过去了</p>

      <p class="center">（一般人到这里已经不行了，要是顶不住可以放弃）</p>
    </div>

    <div v-show="isStart" class="paragraph">
      <p class="normal">一般人到这里早就倒下了，就连在台下几个武生也是苦苦坚持着。靓少凤的表情开始变得严肃起来，他显然没有想到午未能够坚持这么久。他看了一眼常午未，冷冷地说：“我承认你有点毅力。不过，你撑不了多久的。放弃吧小子，你配不上红荔的。”白驹班的人跟着起哄，“放弃啦！”，“你斗不过班长的！”</p>

      <p class="normal">就在此时，白驹班和人潮被几个肌肉猛男推开。从人群中走出的人竟然是“金眼风”黄师傅。他身后带着一大堆徒弟，少说也有五六十人。走在后面的几个人架起了锣鼓开始猛烈的擂锣，打着龙船冲刺的鼓点，音浪和白驹班这边分庭抗礼。</p>

      <p class="normal">黄师傅嘴里叼着一支长烟，吞云吐雾的走在队伍最前方，用嘴里的烟续上了第二根香，竟然向着靓少凤隔空拜了一拜，“罗班长！小心你的老腿呀~” 靓少凤气的一阵摇晃，差点从木桩上掉落下来。</p>

      <p class="normal">接着黄师傅对着午未大喊，“妖！今日我连龙船都不去看，专门来看你这个衰仔（混小子），米映衰（丢脸）我地堂口啊！如果你赢到呢条花靚仔（这个老油条）——我破格收你做徒弟！”</p>

      <p class="normal">看到这一幕，常午未感到眼泪在眼眶里打转，一股巨大的力量在心中涌动。他知道，不仅红荔在等他，龙船队所有的兄弟们都在为他加油。日昳在喉咙底发出了一声怒吼：“收到！师傅！！”力气再次充满了他的全身。</p>
    </div>

    <div v-show="isStart" class="paragraph">
      <p class="center">一根香将要燃尽，二十分钟过去了</p>

      <p class="center">（二十分钟在专业人士中也是非常优秀）</p>
    </div>

    <div v-show="isStart" class="paragraph">
      <p class="center">
        <van-image fit="contain" :src="singleFoot" @click="showImagePreview({ images: [singleFoot], showIndex: false })" />
      </p>

      <p class="normal">第二根香燃尽了，时间来到了二十分钟。烈日当空，所有人额头上都挂着汗珠。两根木桩下的红布也被汗水染成了猪肝色。白驹班的人一开始都只是等着看午未的笑话，他们都没有想到这个倔强的小子竟然会坚持那么久。台上两个人的脚都微微颤抖了起来。《罗成写书》这一幕的曲也完全唱完了。两边乐手都识趣地停了手。</p>

      <p class="normal">所有人大气都不敢喘的看着，生怕一口气就会把其中一人吹倒。常午未满脸通红的咬紧牙关，靓少凤这边则是面如金纸嘴唇发紫。这场比赛陷入了焦灼。</p>

      <p class="normal">此时，人群后面传来了骚动，只见突然有一颗红色的异物飞出，正正的打在了其中一个人的头上。那人一惊，脚下一乱马上失去了平衡。</p>

      <p class="center">“咚！！”</p>

      <p class="normal">两个人几乎一先一后从三米高的木桩上掉了下来。</p>

      <p class="normal">只见红荔一袭红衣，湿淋淋，手上拿着一根断木棍，气喘吁吁地出现在了人群之后。她身上的衣服有曾被拉扯的痕迹，脚上仅剩一只绣花鞋，披头散发却气势汹汹，所有人都不自觉地慢慢让出一条路。</p>

      <p class="normal">红荔红着眼，三步化作两步跳到台上，就像一只凶猛的猛兽一般，拦在了午未身前。</p>

      <p class="normal">平日清亮透彻的声线此时嘶哑中带着怒气：</p>

      <p class="normal">“罗班长，各位好手段啊！”</p>

      <p class="normal">她重新把自己的头发挽好，缓缓站起，阳光透过她的滴水的发尖，此刻宛如一顶桂冠一般。</p>

      <p class="normal">“我出身寒微，五岁就被家中卖到了戏班，十岁开始登台表演。”</p>

      <p class="normal">“但我心里从没感觉到缺损，白驹班里的每个人都那么像我的亲人，有视我如己出的长辈，有待我如亲妹的兄弟们。”</p>

      <p class="normal">“一日三餐，共度了几千个日夜。他们都说戏子命薄，所以要身段软。我们都做过许多对不起自己的艰难选择，但是唯独这一件事……”</p>

      <p class="normal">说到这里她顿了一下，高昂的语气慢慢降了下来，但每个字都坚决有力：“我不能折！”</p>

      <p class="normal">她的脸已经红透了，整个人英气勃发 “在香港那七年，我见识了太多的生离死别，人情冷暖。生活不像戏那样简单，有剧本，有台词。有情人大多无法成眷属，在好心帮人不会娶到龙女三娘，也没有那么多金枝玉叶。</p>

      <p class="normal">但是为什么不可以呢！”</p>

      <p class="normal">白驹班的成员们彼此对视，心中多少有些感触。</p>

      <p class="normal">“就我这个扫把星！你们不也把我当做金枝一般看待吗？这个男人觉得自己命硬，就算你们明着要欺负他，他也没有跟我提过哪怕一句。要不是瀘姨找到了我，恐怕我还和几个姐妹在船上吃酒呢。为什么人生就不能如戏？我就偏要做那龙女三娘，就算午未不是那柳毅！我要一个好结局！”</p>

      <p class="normal">台下，戏班众人陷入了短暂的沉默，部分人心亏的移开了视线，有的则是微微点头内心感触。</p>

      <p class="center">啪——啪——啪——</p>

      <p class="normal">黄师傅带着头鼓起了掌，龙船队的众人也把锣鼓打了起来，围观的群众也是跟着掌声雷动。</p>

      <p class="normal">靓少凤和午未双双龇牙咧嘴的躺了在地上。刚刚被砸中的人是靓少凤，是他先落的地，虽然是红荔造成的，但是没有这个台阶他可能真的会输。</p>

      <p class="normal">靓少凤叹了一口气，费劲的伸手拍了拍常午未的肩膀，假装凶狠的说道：“我代表我们白驹班认你这个人了。你要好好对待红荔，要是有什么闪失，我们一个人拆你一条腿。”</p>

      <p class="normal">午未躺了在地上，那一颗击中了班长头部的东西恰好滚到他的手边，竟是他昨天晚上给红荔做的荔枝虾滑。他把虾滑放进了嘴里咀嚼。咸口的虾滑伴随着右腿火辣辣的疼痛感，形成了一种莫名其妙的荒诞感。午未躺在地上动弹不得，看着挡在他身前的红荔，眼中充满着爱意。</p>
    </div>

    <div v-show="isStart" class="paragraph">
      <p class="center" style="margin-bottom: 0"><strong>【解锁核心玩法】</strong></p>
      <p><strong>本游戏所体验到的所有味道都可以分为食物尝到的口味，与带出的心中滋味。在【中华食鼎】处，午未的人生就分裂成了三个分支，重新组合就会形成一段合恰的五味人生。 五种味道隐作五行相生之阵，生生不息。 收集完五种味道所对应的五张场景自拍和页面截图，即可前往购买处，凭购买小票兑换特殊奖励一份，仅限前100组玩家</strong></p>
    </div>

    <div v-show="isStart" class="paragraph">
      <p class="center" style="margin-bottom: 0">“<strong style="color: red">咸</strong>盐共尝心甘愿，<strong style="color: #7f6000">酸</strong>楚同受共春秋。”</p>

      <p class="center" style="margin: 6px 0 6px 0">解锁味道：【咸】</p>

      <p class="center" style="margin-top: 0">荔枝虾球：用河虾给爱人做的咸口小点。咸鲜中夹杂着大腿和鼻子的酸。</p>
    </div>

    <div v-show="isStart" class="center subtleFade" style="margin-bottom: 26px" @click="handleContinueClick">
      <p style="margin: 0; padding: 0">把此页面截图</p>
      <p style="margin: 0; padding: 0">团队单脚站立在戏台上拍照</p>
      <p style="margin: 0; padding: 0">记录完毕后点击此处继续</p>
    </div>

    <!-- <Vue3DraggableResizable v-if="isShowTimer"  :initW="135" :initH="100" v-model:x="x" v-model:y="y" v-model:w="w" v-model:h="h" :parent="true" :draggable="false" :resizable="false">
      <div class="timer-box">
        <p class="time">计时器: {{ formattedTime }}</p>
        <div class="btn">
          <p @click="startStopwatch">{{ isRunning ? '停止' : '开始' }}</p>
          <p @click="resetStopwatch">重置</p>
        </div>
      </div>
    </Vue3DraggableResizable> -->
    <div class="timer-box" v-if="isShowTimer">
      <p class="time">计时器: {{ formattedTime }}</p>
      <div class="btn">
        <p @click="startStopwatch">{{ isRunning ? '停止' : '开始' }}</p>
        <p @click="resetStopwatch">重置</p>
      </div>
    </div>

    <div class="audio-box" v-if="audioSrc">
      <van-icon :name="iconName" size="22" @click="handlePlayAudio" />
      <audio ref="audio" :src="audioSrc" type="audio/mp3" loop @play="onPlay" @pause="onPause" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { showImagePreview, showDialog } from 'vant'
import { debounce } from '@/utils'
import { useUserStore } from '@/store/userStore'
const userStore = useUserStore()
// import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import shuMingLuo from '@/assets/images/shuMingLuo.jpeg'
import singleFoot from '@/assets/images/singleFoot.jpg'
import luochengxieshu from '@/assets/audio/0206luochengxieshu.mp3' // BGM

const state = reactive({
  // 拖拽元素
  // x: 216,
  // y: 320,
  // originalY: 10,
  // w: 100,
  // h: 100,
  // 计时器
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  intervalId: null,
  isRunning: false,
  isShowTimer: false,
  isNeedTimer: false,
  isStart: false,
  iconName: 'music-o',
  audioSrc: luochengxieshu ? luochengxieshu : '' // BGM的Src
})
// const { x, y, w, h, isRunning, isNeedTimer, isShowTimer, isStart, iconName, audioSrc } = toRefs(state)
const { isRunning, isNeedTimer, isShowTimer, isStart, iconName, audioSrc } = toRefs(state)
const handleIsStartClick = () => {
  state.isStart = true
  if (state.isNeedTimer) {
    state.isShowTimer = true
    startStopwatch()
  }
  handleAutoPlay()
}
const handleContinueClick = () => {
  showDialog({
    message: '照片拍好了吗？听到了吗？好像听到有婚礼的声音？出发前往喜万年年寻找二维码进行下一部分吧'
    // showCancelButton: true
  })
    .then(() => {})
    .catch(() => {})
}

const audio = ref(null)
const handlePlayAudio = () => {
  if (state.iconName === 'music-o' || state.iconName === 'pause-circle-o') {
    audio.value.play()
  } else {
    audio.value.pause()
  }
}
const onPlay = () => {
  state.iconName = 'play-circle-o'
}
const onPause = () => {
  state.iconName = 'pause-circle-o'
}
const handleAutoPlay = () => {
  if (!audio.value) {
    return
  }
  if (state.iconName === 'pause-circle-o') {
    return
  }
  audio.value.play()
}
// 格式化时间，不包含毫秒
const formattedTime = computed(() => {
  const s = state.seconds.toString().padStart(2, '0')
  const m = state.minutes.toString().padStart(2, '0')
  // 直接拼接分钟和秒，不需要毫秒
  return `${m}:${s}`
})
// 更新计时器
const updateStopwatch = () => {
  if (state.isRunning) {
    state.milliseconds++
    if (state.milliseconds >= 1000) {
      state.milliseconds = 0
      state.seconds++
      if (state.seconds >= 60) {
        state.seconds = 0
        state.minutes++
      }
    }
  }
}
// 开始或停止计时器
const startStopwatch = () => {
  if (state.isRunning) {
    clearInterval(state.intervalId)
    state.isRunning = false
  } else {
    state.intervalId = setInterval(updateStopwatch, 10) // 每10毫秒更新一次
    state.isRunning = true
  }
}
// 重置计时器
const resetStopwatch = () => {
  if (state.isRunning) {
    clearInterval(state.intervalId)
    state.isRunning = false
  }
  state.minutes = 0
  state.seconds = 0
  state.milliseconds = 0
}
const handleScroll = () => {
  nextTick(() => {
    const scrollY = window.scrollY
    state.y = state.originalY + scrollY
  })
}
// 防抖函数
const debouncedHandleScroll = debounce(handleScroll, 500) // 等待时间为500毫秒
onMounted(() => {
  window.addEventListener('scroll', debouncedHandleScroll)
  userStore.updateDropdownMenuList([
    { text: '【一、曲水湾鹊桥】', value: 'QuShuiBay' },
    { text: '【二、食神之鼎】', value: 'RitualVessel?active=0' },
    { text: '【三、姑婆屋】', value: 'RitualVessel?active=10' },
    { text: '【四、适适轩】', value: 'RitualVessel?active=11' },
    { text: '【五、沐英涧】', value: 'MuyingStream' },
    { text: '【六、石船】', value: 'MuyingStream?active=2' },
    { text: '【七、凤城大观】', value: 'MotherPage' },
    { text: '【八、戏台】', value: 'OperaStage' }
  ])
})
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
})
</script>

<style lang="less" scoped>
.main-box {
  padding-bottom: 80px;
}
.draggable {
  background-color: white;
  border: 1px solid black;
}
.timer-box {
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  .time {
    width: 100%;
    height: 40px;
    text-align: center;
    margin: 0;
    line-height: 40px;
  }
  .btn {
    height: 40px;
    line-height: 40px;
    width: 100%;
    border-top: 1px solid black;
    box-sizing: border-box;
    > p {
      display: inline-block;
      margin: 0;
      box-sizing: border-box;
      width: 50%;
      height: 100%;
      text-align: center;
      &:nth-of-type(1) {
        border-right: 1px solid black;
      }
    }
  }
}
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
.van-cell {
  padding: 8.1px;
}
:deep(.van-cell__value) {
  display: flex;
  align-items: center;
}
</style>
