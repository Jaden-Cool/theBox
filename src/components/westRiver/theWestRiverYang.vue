<template>
  <div :class="{ 'black-bg': !translate, 'white-bg': translate }" @click="handleAutoPlay">
    <!-- <h1 class="center">西江</h1> -->

    <div v-if="!translate">
      <div class="paragraph">
        <p class="normal">
          说起孩子，你的头有些痛，其实为了在护送过程中让他们克服恐惧保持镇定，你们四个扒船的扒仔早早就开始给他们做了大量的思想工作。
          尝试用一些温和的方式分散他们注意力。这些孩子里面最大的只有十一岁，常日昳内心都惴惴不安，更何况这些小孩。
        </p>
        <p class="normal">
          这些孩子里，有些是富贵人家的子女，有一些则是本地“大天二”的孩子，以及一些较为聪慧的孩子。你明白，这一船二十五个小孩身上承载着广东未来的希望。
        </p>
        <p class="normal">
          “常师傅，我想回家……我朋友阿牛没能跟我来……我怕……我们回去好不好？我棉胎里面有一百块钱，你带我回家好不好？”
          一个刚刚哭完的小朋友突然拉住日昳的衣袖，把正在苦恼的他拉回了现实。日昳摸了摸他的头：“小蔡头，这里也有很多别的小朋友啊，他们不陪你玩吗？”这个人叫蔡尔洪，年仅十岁，父亲是有头有脸的人物，与周之贞是朋友。
        </p>
        <p class="normal">
          “趴在船头那边的那一群，家里都挺有钱的，有的很霸道，我其实都不怎么处得来，能和我说上话的人不多。”蔡尔洪闪着大眼睛看着日昳：“我听说，乡长的仔李伟强已经过河了，‘麦白虎’的仔也去了……还有那个好厉害的哥哥欧阳学翘。我知道留在这的都是些不乖的，有的因为离开了爹娘，有的因为吃不饱，平时哭一哭也有人理会，现在没人理他们，他们就只会哭。”
        </p>
        <p class="normal">你看着他脸上未干的泪痕，也不知道该说他什么，笑了笑。</p>
        <p class="normal">
          看着蔡尓洪小小年纪，你心里想，他口中那位发小阿牛，可能并没有什么背景，家中也没什么条件，可是家境背景这些根本不能阻止两个人的友谊。
        </p>
        <p class="normal">想到两个人也许就永远没有相见的机会，也许是两岸相隔，亦或者是生死相隔……</p>
        <p class="normal">此时，你想到了与姐姐的离别。别样的心情在心头涌现。</p>
        <p class="normal">
          在拥有的时候要珍惜，不要留下遗憾。 因为说不定哪次分别，就是生死离别。
          但是，这些话你最后还是没说出口。
        </p>
      </div>

      <div class="paragraph">
        <p class="normal">
          多亏了日军给渔民一定上的自由，虽然无法渡江，但是他们有了较近距离观察日军的机会。现在，等日军巡逻交班的时候，相近的渔民就会把蓑衣升起晾起来，示意“下雨了”
          ，莫要渡江。这样只要对岸的几件蓑衣都收起来的时候，那就是千载难逢可以渡江的时刻了。
        </p>
        <p class="normal">等待了几天后，这样的时机如期而至。</p>
        <p class="normal">
          夜幕降临，常日昳和孩子们悄悄来到西江边。江面在月光下闪烁着微光，波光粼粼，江水缓缓流动，偶尔发出轻微的拍打声。常日昳和青云文社的几个成员带着孩子们，把船从芦苇丛中推出，众人屏息凝神，缓慢地开始了过江。
        </p>
        <p class="center"><strong>乒乒砰！</strong></p>
        <p class="normal">
          “暴露了！”
          船上另外一名扒仔小声喊道。那是下游的游击队与日军发生了交火。常日昳心头一紧，知道现在情况变得更加危险了。无论是不是游击队为了他们行动做的掩护，根据事前的部署，他们如今该做的就是全力前进，带孩子们尽快离开战斗区域。
        </p>
        <p class="normal">
          你咬紧牙关，拼尽全力推动船桨把船扒过了江的一半。这艘超载的假渔船在江里逆流而上，
          “我们不能错过汇合地点！对岸的纤夫兄弟们等着我们呢。错过他们的话我们就上不了岸了！
          飘到下游会被打成筛子的！”
          你低声喊。船速陡然加快，水花在船边溅起。孩子们虽然害怕，但也明白情况危急，都紧紧抱在一起，互相捂着对方嘴巴。
        </p>
        <p class="normal">
          枪声渐远，筋疲力竭的大家终于靠近了对岸。但是并没见到原本应该出现的纤夫。难道……
        </p>
        <p class="normal">
          你来不及细想，你摇桨的双手已经在发抖，这么下去不是办法！
          你拿着缆绳一头栽进了树丛里，胡乱地用缆绳绑住了一颗树，好不容易终于把船固定好了。你和几个扒仔迅速地抱孩子们下船，孩子们有的已经开始了哭闹，你看见了之前哭闹的蔡尔洪，他反而很懂事地先推别的孩子下船，把自己留在了最后。
        </p>
        <p class="center"><strong>咻咻— </strong></p>
        <p class="normal">此时，近处突然传来了一声枪弹破空之声。</p>
        <p class="center"><strong>砰！船身被崩了一角。 </strong></p>
        <p class="normal">
          被日军发现了！难怪河岸这边没有纤夫！还好孩子们已经运送完毕，且都已前往撤退的方向，只要穿过这片树林，他们就有人接应。
        </p>
        <p class="normal">
          现在只要松开缆绳，自己和另外一个船夫就可以原路回去了。江边这一段都是安全区，江上没有日军的船只。
          “顺流而下，他们怎么都追不上的。” 你开始尝试解开缆绳。
        </p>
        <p class="normal">
          之前跳下船的时候，身体早就到达了极限，只是紧张感和到岸一瞬间的喜悦都让自己的精神和力气都异常充沛，此时，日军的探照灯照了过来，你隐约看到船舱中，似乎还有一个小小的黑影！
        </p>
        <p class="center"><strong>“蔡尔洪！！你还在这干什么！！”</strong></p>
        <p class="normal">
          你靠近发现孩子缩在角落里，口里嘟囔着什么：“我要回去，我要回去见阿牛……”
          你摸到他的手，一惊，他体温不对劲，多日的内耗与饥饿让他精神与身体都极其虚弱，刚勉强扶着船边的他随着你接近后的摇晃，从船边跌落了下来。坠落在水中。
        </p>
        <p class="normal">你没拉得住他。</p>
        <p class="normal">
          此时你在弱光下，才看清自己的双手，上面已经布满了粗糙的划痕和血丝，已经被新鲜的血浸透了。
        </p>
        <p class="normal">
          你循声在水中无力地摸索着蔡尔洪的位置，每次快要拉上来，他不断挣扎都导致你脱手。
        </p>
        <p class="normal">
          日军的枪声渐进，你终于把他抱上了船，来不及让他上岸了，至少，要让他们活着……
        </p>
        <p class="normal">手臂已经麻了，不知道是失血还是疲劳。</p>
        <p class="center" style="color: red"><strong>走！！！</strong></p>
        <p class="normal">
          你最后朝着船内吼去，用全身最后的力气一脚踢开了船身，自己倒在了浅滩的泥泞里，土腥味和河腥味，混着血腥味，钻进了鼻孔里。
        </p>
        <p class="normal">最后在视线里的 是顺流远去的小船背影。</p>
        <p class="center"><strong>常日昳，牺牲于1944年。</strong></p>
      </div>
    </div>

    <div v-else>
      <div class="paragraph">
        <p class="normal">
          說起孩子，妳的頭有些痛，其實爲了在護送過程中讓他們克服恐懼保持鎮定，妳們四個扒船的扒仔早早就開始給他們做了大量的思想工作。
          常使用一些溫和的方式分散他們注意力。這些孩子裏面最大的只有十一歲，常日昳內心都惴惴不安，更何況這些小孩。
        </p>
        <p class="normal">
          這些孩子裏，有些是富貴人家的子女，有一些則是本地“大天二”的孩子，以及一些較爲聰慧的孩子。妳明白，這一船二十五個小孩身上承載著廣東未來的希望。
        </p>
        <p class="normal">
          “常師傅，我想回家……我朋友阿牛沒能跟我來……我怕……我們回去好不好？我棉胎裏面有一百塊錢，妳帶我回家好不好？”
          一個剛剛哭完的小朋友突然拉住日昳的衣袖，把正在苦惱的他拉回了現實。日昳摸了摸他的頭：“小蔡頭，這裏也有很多別的小朋友啊，他們不陪妳玩嗎？”這個人叫蔡爾洪，年僅十歲，父親是有頭有臉的人物，與周之貞是朋友。
        </p>
        <p class="normal">
          “趴在船頭那邊的那一群，家裏都挺有錢的，有的很霸道，我其實都不怎麽處得來，能和我說上話的人不多。”蔡爾洪閃著大眼睛看著日昳：“我聽說，鄉長的仔李偉強已經過河了，‘麥白虎’的仔也去了……還有那個好厲害的哥哥歐陽學翹。我知道留在這的都是些不乖的，有的因爲離開了爹娘，有的因爲吃不飽，平時哭一哭也有人理會，現在沒人理他們，他們就只會哭。”
        </p>
        <p class="normal">妳看著他臉上未幹的淚痕，也不知道該說他什麽，笑了笑。</p>
        <p class="normal">
          看著蔡尓洪小小年紀，妳心裏想，他口中那位發小阿牛，可能並沒有什麽背景，家中也沒什麽條件，可是家境背景這些根本不能阻止兩個人的友誼。
        </p>
        <p class="normal">想到兩個人也許就永遠沒有相見的機會，也許是兩岸相隔，亦或者是生死相隔……</p>
        <p class="normal">此時，妳想到了與姐姐的離別。別樣的心情在心頭湧現。</p>
        <div style="margin: 26px 8px">
          在擁有的時候要珍惜，不要留下遺憾。 因爲說不定哪次分別，就是生死離別。
          但是，這些話你最後還是
          <p style="display: inline-block; padding: 0; margin: 0; text-align: center" @click="next">
            說了
          </p>
          出口
        </div>
      </div>

      <div class="paragraph">
        <p class="normal">
          多虧了日軍給漁民一定上的自由，雖然無法渡江，但是他們有了較近距離觀察日軍的機會。現在，等日軍巡邏交班的時候，相近的漁民就會把蓑衣升起晾起來，示意“下雨了”
          ，莫要渡江。這樣只要對岸的幾件蓑衣都收起來的時候，那就是千載難逢可以渡江的時刻了。
        </p>
        <p class="normal">等待了幾天後，這樣的時機如期而至。</p>
        <p class="normal">
          夜幕降臨，常日昳和孩子們悄悄來到西江邊。江面在月光下閃爍著微光，波光粼粼，江水緩緩流動，偶爾發出輕微的拍打聲。常日昳和青雲文社的幾個成員帶著孩子們，把船從蘆葦叢中推出，衆人屏息凝神，緩慢地開始了過江。
        </p>
        <p class="center"><strong>乒乒砰！</strong></p>
        <p class="normal">
          “暴露了！”
          船上另外一名扒仔小聲喊道。那是下遊的遊擊隊與日軍發生了交火。常日昳心頭一緊，知道現在情況變得更加危險了。無論是不是遊擊隊爲了他們行動做的掩護，根據事前的部署，他們如今該做的就是全力前進，帶孩子們盡快離開戰鬥區域。
        </p>
        <p class="normal">
          妳咬緊牙關，拼盡全力推動船槳把船扒過了江的一半。這艘超載的假漁船在江裏逆流而上，
          “我們不能錯過彙合地點！對岸的纖夫兄弟們等著我們呢。錯過他們的話我們就上不了岸了！
          飄到下遊會被打成篩子的！”
          妳低聲喊。船速陡然加快，水花在船邊濺起。孩子們雖然害怕，但也明白情況危急，都緊緊抱在一起，互相捂著對方嘴巴。
        </p>
        <p class="normal">
          槍聲漸遠，筋疲力竭的大家終于靠近了對岸。但是並沒見到原本應該出現的纖夫。難道……
        </p>
        <p class="normal">
          妳來不及細想，妳搖槳的雙手已經在發抖，這麽下去不是辦法！
          妳拿著纜繩一頭栽進了樹叢裏，胡亂地用纜繩綁住了一顆樹，好不容易終于把船固定好了。妳和幾個扒仔迅速地抱孩子們下船，孩子們有的已經開始了哭鬧，妳看見了之前哭鬧的蔡爾洪，他反而很懂事地先推別的孩子下船，把自己留在了最後。
        </p>
        <p class="center"><strong>咻咻— </strong></p>
        <p class="normal">此時，近處突然傳來了一聲槍彈破空之聲。</p>
        <p class="center"><strong>砰！船身被崩了一角。 </strong></p>
        <p class="normal">
          被日軍發現了！難怪河岸這邊沒有纖夫！還好孩子們已經運送完畢，且都已前往撤退的方向，只要穿過這片樹林，他們就有人接應。
        </p>
        <p class="normal">
          現在只要松開纜繩，自己和另外一個船夫就可以原路回去了。江邊這一段都是安全區，江上沒有日軍的船只。
          “順流而下，他們怎麽都追不上的。” 妳開始嘗試解開纜繩。
        </p>
        <p class="normal">
          之前跳下船的時候，身體早就到達了極限，只是緊張感和到岸一瞬間的喜悅都讓自己的精神和力氣都異常充沛，此時，日軍的探照燈照了過來，妳隱約看到船艙中，似乎還有一個小小的黑影！
        </p>
        <p class="center"><strong>“蔡爾洪！！妳還在這幹什麽！！”</strong></p>
        <p class="normal">
          妳靠近發現孩子縮在角落裏，口裏都囔著什麽：“我要回去，我要回去見阿牛……”
          妳摸到他的手，一驚，他體溫不對勁，多日的內耗與饑餓讓他精神與身體都極其虛弱，剛勉強扶著船邊的他隨著妳接近後的搖晃，從船邊跌落了下來。墜落在水中。
        </p>
        <p class="normal">妳沒拉得住他。</p>
        <p class="normal">
          此時妳在弱光下，才看清自己的雙手，上面已經布滿了粗糙的劃痕和血絲，已經被新鮮的血浸透了。
        </p>
        <p class="normal">
          妳循聲在水中無力地摸索著蔡爾洪的位置，每次快要拉上來，他不斷掙紮都導致妳脫手。
        </p>
        <p class="normal">
          日軍的槍聲漸進，妳終于把他抱上了船，來不及讓他上岸了，至少，要讓他們活著……
        </p>
        <p class="normal">手臂已經麻了，不知道是失血還是疲勞。</p>
        <p class="center"><strong>走！！！</strong></p>
        <p class="normal">
          你最後朝著船內吼去，用全身最後的力氣一腳踢開了船身，自己倒在了淺灘的泥濘裏，土腥味和河腥味，混著血腥味，鑽進了鼻孔裏。
        </p>
        <p class="normal">最後在視線裏的 是順流遠去的小船背影。</p>
      </div>
    </div>

    <Vue3DraggableResizable
      :initW="40"
      :initH="40"
      v-model:x="x"
      v-model:y="y"
      v-model:w="w"
      v-model:h="h"
      :parent="true"
      :draggable="true"
      :resizable="false"
    >
      <img class="translate" src="@/assets/images/translate.png" @click="handleTranslateClick" />
    </Vue3DraggableResizable>

    <div class="center subtleFade" @click="handleContinueClick">接受命运</div>
  </div>
</template>

<script setup>
import { reactive, toRefs, onMounted, onUnmounted } from 'vue'
import { showDialog, showLoadingToast } from 'vant'
import { debounce } from '@/utils'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
const emit = defineEmits(['update:active', 'handleAutoPlay'])
const state = reactive({
  x: 330,
  y: 50,
  originalY: 50,
  w: 100,
  h: 100,
  translate: false
})
const { x, y, w, h, translate } = toRefs(state)
const handleTranslateClick = () => {
  showLoadingToast({
    message: '阴阳切换中',
    forbidClick: true,
    overlay: true
  })
  setTimeout(() => {
    state.translate = !state.translate
  }, 300)
}
const handleContinueClick = () => {
  showDialog({
    message: '命运戛然而止，回到现实'
  }).then(() => {
    emit('update:active', 2)
  })
}
const next = () => {
  emit('update:active', 3)
}
const handleScroll = () => {
  const scrollY = window.scrollY
  state.y = state.originalY + scrollY
}
// 防抖函数
const debouncedHandleScroll = debounce(handleScroll, 500) // 等待时间为500毫秒

onMounted(() => {
  window.addEventListener('scroll', debouncedHandleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
})
</script>

<style lang="less" scoped>
.white-bg {
  padding: 26px 0;
  background-color: white;
  color: black !important;
}
.black-bg {
  padding: 26px 0;
  background-color: black;
  h1 {
    color: white !important;
  }
  P {
    color: white !important;
  }
  .subtleFade {
    color: white;
  }
  .paragraph:first-child {
    margin: 0 24px 0 24px;
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
</style>
