<template>
  <div>
    <!-- <h1 class="center">起单脚</h1> -->

    <div class="paragraph">
      <p class="center">【以下挑战为体能挑战，请量力而为。】</p>
      <div style="width: 300px; margin: 0 auto">
        <p style="margin: 0">规则：</p>
        <p style="margin: 0">用盖子作为底座，</p>
        <p style="margin: 0">点燃盒内锥形塔香，</p>
        <p style="margin: 0 0 26px 0">然后保持单脚站立开始挑战。</p>
        <p style="margin: 0">没有打火机？</p>
        <p style="margin: 0 0 26px 0" class="subtleFade" @click="isNeedTimer = !isNeedTimer">是否需要我来帮你计时？{{ isNeedTimer ? 'YES!' : 'NO!' }}</p>
      </div>
    </div>
    <p class="center subtleFade" @click="handleIsStartClick">【准备好了吗？点击此处开始挑战】</p>

    <div v-show="isStart" class="paragraph">
      <p class="normal">随着午未和红荔之间的关系日益亲密，白驹班里的成员们也渐渐察觉到了这段爱情的萌芽。文武生和花旦们护妹心切，一番讨论过后他们一致认为，午未这个根本还没入行的木匠根本就配不上红荔。</p>

      <p class="normal">他们推选出了艺名为靓少凤的班长，<strong>罗叔铭</strong>，给午未下了一封“战书”，好让这个男人识相离开他们的掌上明珠。为了保证午未会输，又不至于显得他们过于欺负人，戏班选择了一项传统的戏班技巧比拼——“起单脚”。</p>

      <p class="center">
        <van-image fit="contain" :src="shuMingLuo" @click="showImagePreview({ images: [shuMingLuo], showIndex: false })" />
      </p>

      <p class="normal">“起单脚” 出自《罗成写书》，是一项考验平衡力和耐力的技巧。这是戏班的武生们都需要练的功，是最简单也是最难的功夫。常午未对这项技艺并不熟悉，但是为了证明自己对红荔的真心，午未接受了挑战。</p>

      <p class="normal">但是为了证明自己对红荔的真心，午未接受了挑战。</p>

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

      <p class="normal">此时，人群后面传来了骚动，只见突然有一颗红色的异物飞出，正正的打在了靓少凤的头上。靓少凤一惊，脚下一乱马上失去了平衡。</p>

      <p class="center">“咚！！”</p>

      <p class="normal">正正的打在了台上其中一人头上。</p>

      <p class="normal">只见红荔一袭红衣，气喘吁吁地出现在了人群之后。她身上的衣服有曾被拉扯的痕迹，脚上仅剩一只绣花鞋，披头散发气势汹汹，所有人都自觉地慢慢让出一条路。</p>

      <p class="normal">她远远看到台上一人影倒下，谁也没看到赶来的她眼中那一抹焦急的泪花。</p>

      <p class="normal">午未看到对手被砸倒，心中一松，也虚下力来倒了下去。红荔心中祈祷着，因为她也是看着模模糊糊的身影出手，没有十足把握不误伤所爱之人，但她也有些许自信，因为有个身影已经烙印在她脑海里，就算模糊，也不会忘记。</p>

      <p class="normal">红荔三步化作两步跳到台上，扶起了那熟悉的身影，如今，他也算是比赛的胜者。</p>

      <p class="normal">确认无碍后，她抱着虚脱的午未对着所有人说道：</p>

      <p class="normal">“罗班长，各位兄弟姐妹，大家听我说两句！”</p>

      <p class="normal">她重新把自己的头发挽好，缓缓站起，阳光透过她的发尖。</p>

      <p class="normal">“我出身寒微，五岁就被家中卖到了戏班，十岁开始登台表演。“</p>

      <p class="normal">“但我心里从没感觉到缺损，白驹班里的每个人都那么像我的亲人，有视我如己出的长辈，有待我如亲妹的兄弟们。我和你们一日三餐都一起吃，大家都爱我，想保护我。生活所迫下，我们都做过许多自己不愿意的选择，有困难你们都很照顾我。但是唯独这一件事……”</p>

      <p class="normal">说到这里她顿了一下，高昂的语气慢慢降了下来，但每个字都坚决有力：“我不能妥协！”</p>

      <p class="normal">她的脸已经红透了，“戏班之中，我也见识了许多人生别离的故事，人情冷暖，有情人许多无法成眷属，有的来自父母的阻碍，有的来自人间的困扰，或者说家族、利益，都会给一段良缘立下许多阻碍，佳话总难成，斗争总会有。可我觉得我在戏班中，体会到的和戏中不同，日子虽然艰苦，但我从没感觉大家心中没有热枕，没有憧憬，对美好没有期待。”</p>

      <p class="normal">白驹班的成员们彼此对视，心中多少有些感触。</p>

      <p class="normal">“这个男人他肯为我拼命，我也感动，我也心疼，我希望大家能祝福我们，让我们两个这台戏，能成一段佳话。”</p>

      <p class="normal">台下，戏班众人陷入了短暂的沉默，他们不是不想回应，而是后面缓缓站起身的靓少凤吸引力大家注意力。</p>

      <p class="normal">靓少凤头有些晕晕的，双掌刚好搭在午未肩膀上，低下的头缓缓抬起，眼睛里还有些血丝，看似恶狠狠的眼神却说出了让红荔安心的话语：“好吧，常午未，我代表我们白驹班认你这个人。你要好好对待红荔，要是有什么闪失我们几十个人一人拆你一条狗腿。”</p>

      <p class="normal">轰——台下的戏班众人听到这话都一拥而上，有关照班长的，有关照师妹的，也有几个爱看热闹的在关心常午未，七嘴八舌他听得不太清楚，大概意思都是羡慕他的。</p>

      <p class="normal">有人把那一颗击中了班长头部的东西放到他的手边，说这是你们定情信物。他仔细一看，竟是他昨晚给红荔做的荔枝虾滑。虚脱的午未本能地把虾滑放进了嘴里咀嚼，补充体力。咸口的虾滑伴随着右腿的炽痛，形成了一种微妙的反应。午未看着红荔的背影，一生也忘不了这个味道。</p>
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

    <Vue3DraggableResizable v-if="isShowTimer" :initW="135" :initH="100" v-model:x="x" v-model:y="y" v-model:w="w" v-model:h="h" :parent="true" :draggable="true" :resizable="false">
      <div class="timer-box">
        <p class="time">计时器: {{ formattedTime }}</p>
        <div class="btn">
          <p @click="startStopwatch">{{ isRunning ? '停止' : '开始' }}</p>
          <p @click="resetStopwatch">重置</p>
        </div>
      </div>
    </Vue3DraggableResizable>

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
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import shuMingLuo from '@/assets/images/shuMingLuo.jpeg'
import singleFoot from '@/assets/images/singleFoot.jpg'
import luochengxieshu from '@/assets/audio/0206luochengxieshu.mp3' // BGM

const state = reactive({
  // 拖拽元素
  x: 216,
  y: 320,
  originalY: 10,
  w: 100,
  h: 100,
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
const { x, y, w, h, isRunning, isNeedTimer, isShowTimer, isStart, iconName, audioSrc } = toRefs(state)
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
// 格式化时间
const formattedTime = computed(() => {
  const ms = state.milliseconds.toString().padStart(2, '0')
  const s = state.seconds.toString().padStart(2, '0')
  const m = state.minutes.toString().padStart(2, '0')
  return `${m}:${s}.${ms}`
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
.draggable {
  background-color: white;
  border: 1px solid black;
}
.timer-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  .time {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    text-align: center;
    height: 50%;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    border-top: 1px solid black;
    box-sizing: border-box;
    > p {
      margin: 0;
      padding-top: 15px;
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
