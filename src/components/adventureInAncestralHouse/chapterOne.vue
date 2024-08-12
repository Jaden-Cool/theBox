<template>
  <div style="padding-bottom: 48px">
    <!-- <h1 class="center">祖屋奇遇</h1> -->

    <div class="paragraph">
      <p class="center">*乒*</p>

      <p class="normal">
        铲尖传来金属的坚硬触感，你顿时停了手。
        这棵凤眼果树怎么那么深......祖屋的这棵树的深度和历史都超乎了你的想象。
        你小心地松了那东西周围的土，将它挖了出来，用肩上的擦汗巾略一擦拭，吹一吹灰，才看清——原是个锈迹斑斑的铁盒。
      </p>

      <p class="normal">
        蝉鸣和茂密树叶的揉趔声，把你置于一片暑热的喧嚣中。手里捧着盒子，你却感觉一切声音都越来越远，莫名的空灵......
        不，你能听到某种呢喃：
      </p>

      <p class="normal">“贵……马……，……缘再……，天官……，……神归……。”</p>

      <p class="normal">醒神过来，四处一望，这声音却没有源头。</p>

      <p class="normal">幻听？..中暑了？</p>

      <p class="normal">
        <strong>二零二四年八月十八日</strong
        >。夏天的广东一如既往的潮湿闷热，父亲把祖屋钥匙交给你，使唤你做着有一件叫你不情愿的差事。
      </p>

      <p class="normal">
        “就不可以选一个更凉快的日子吗……”
        你走回前厅，在柚子树下的井里舀起一勺清凉的井水，撇去浮叶，你给自己的脸降了降温。
      </p>

      <p class="normal">天官和井神处的香刚刚燃尽，有一些东西却刚刚开始了。</p>

      <p class="normal">
        “阿仁（奶奶）不会怪你的，你是他最疼爱的乖孙，你也不想老窦（爸爸）和阿仁一直这么僵持下去吧？“
        父亲摇着你的肩膀，晃得你有些迷糊：“这半年来，你阿仁已经和我吵了许多次了，为了老人家的身体着想，拖得太久对大家都不好。”言罢他不摇了，眼睛直直地盯着你。
      </p>

      <p class="normal">这件事让两辈人冷战半年多的事儿，其实你也清楚——卖掉空置许久的祖屋。</p>

      <p class="normal">
        祖屋正是那经典的“三无”（无水，无电，无信号）的老旧屋子，除了奶奶和几位姑婆，更是甚少住人。乡下地方蚊虫多，你回想起来，记忆里全是花露水味儿。那时却哪有什么空调，但夏夜的蒲扇，却能带来莫名的清凉。捧着这月饼盒，这些回忆竟让你有些不舍。只是那夏夜渐渐地只存在于回忆中，如今的你..似乎更支持父辈的决定。
      </p>

      <p class="normal">
        既然决定要卖掉，就不得不先把后院里这棵凤眼果砍倒。啊仁老是以这个为借口，偷偷的跑回来爬树摘苹婆（凤眼果）。路程远已经危险不说，以她的年纪爬上树就更危险了。攥着父亲偷偷塞给你的祖屋钥匙，你想着，今天周日，明天可就没空了，不如早些来处理。
      </p>

      <p class="normal">
        乡下地方蚊虫较多，记忆里面全是蚊香和花露水的味道。没有空调，只有蒲扇的夏天，却一点不像现在一般炎热，
        甚至夜晚有些清凉。回忆起来竟然有些不舍。
      </p>
    </div>

    <div class="paragraph">
      <p class="center">“贵人禄马到，因缘再续，天官赐福，食神归位。”</p>

      <p class="normal">
        又来了，明明只听过一次低语般的呢喃，这次却不知为何，在你脑海里来越清晰起来。
      </p>

      <p class="center">【<strong>输入盒子的三字出处以继续</strong>】</p>
      <p style="display: flex; align-items: center; justify-content: center" class="center">
        <van-cell-group inset>
          <van-field maxlength="3" show-word-limit v-model="answer" />
        </van-cell-group>
        <van-button plain hairline @click="handleConfirmClick">确认</van-button>
      </p>
    </div>

    <div v-show="props.isAtBottom" class="floating-btn" @click="handleFloatingBtnClick">提示</div>
  </div>
</template>

<script setup>
import { showToast, showDialog } from 'vant'
import { reactive, toRefs } from 'vue'
const emit = defineEmits(['update:active'])
const props = defineProps({ isAtBottom: Boolean })
const state = reactive({
  answer: ''
})
const { answer } = toRefs(state)
const handleConfirmClick = () => {
  if (!state.answer) {
    return
  }
  switch (state.answer) {
    case '清晖园':
      showToast({
        message: '恭喜，回答正确',
        icon: 'success'
      })
      emit('update:active', 1)
      break
    default:
      state.answer = ''
      showToast({
        message: '不正确，请再试一次，或者考虑一下看提示哦~',
        icon: 'cross'
      })
      break
  }
}
const handleFloatingBtnClick = () => {
  showDialog({ message: '看盒子右下角' }).then(() => {})
}
</script>

<style lang="less" scoped>
.van-cell {
  padding: 8.1px;
}
:deep(.van-cell__value) {
  display: flex;
  align-items: center;
}
</style>
