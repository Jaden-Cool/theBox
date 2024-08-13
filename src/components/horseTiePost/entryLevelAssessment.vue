<template>
  <div>
    <h1 class="center">入门考核</h1>

    <div class="paragraph">
      <p class="center">《区财收徒入门考核》</p>
      <van-form>
        <van-field name="radio" label="抽烟吗？">
          <template #input>
            <van-radio-group v-model="isSmoking" direction="horizontal">
              <van-radio name="1">抽</van-radio>
              <van-radio name="2">不抽</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field v-show="+isSmoking === 2" name="radio" label="喝酒吗？">
          <template #input>
            <van-radio-group v-model="isDrinking" direction="horizontal">
              <van-radio name="1">喝</van-radio>
              <van-radio name="2">不喝</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field
          v-show="+isSmoking === 1 || +isDrinking === 1"
          name="radio"
          label="春天会不会打喷嚏？"
        >
          <template #input>
            <van-radio-group v-model="sneeze" direction="horizontal">
              <van-radio name="1">会</van-radio>
              <van-radio name="2">不会</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field v-show="+sneeze === 1 && isDrinking != 2" name="radio" label="喜欢吃辣椒么？">
          <template #input>
            <van-radio-group v-model="likesSpicy" direction="horizontal">
              <van-radio name="1">喜欢</van-radio>
              <van-radio name="2">不喜欢</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field
          v-show="+sneeze === 2 && isDrinking != 2"
          name="radio"
          label="闲时会省出钱买书看吗？"
        >
          <template #input>
            <van-radio-group v-model="isReading" direction="horizontal">
              <van-radio name="1">会</van-radio>
              <van-radio name="2">不会</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field
          v-show="(+isSmoking === 2 && +isDrinking === 2) || +isReading === 2"
          name="radio"
          label="学厨是为了什么？"
        >
          <template #input>
            <van-radio-group v-model="learnCooking" direction="horizontal">
              <van-radio name="1">把菜式发扬光大</van-radio>
              <van-radio name="2">想赚钱</van-radio>
              <van-radio name="3">混口饭吃</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </van-form>
    </div>

    <div class="paragraph" v-show="currentComponent">
      <p class="normal" v-show="currentComponent === '解答 A'">
        {{
          currentComponent
        }}．你的味觉和嗅觉的底子都没有问题。在这个偷师才是正道的时代，你的主动会让你走得更快，走的更远。你的动机在这个时代过于淳朴，虽然有成为一代名师的潜质，但是听起来不像是真话。区财对你有一些保留，但是仍然愿意给你一个机会。
      </p>
      <p class="normal" v-show="currentComponent === '解答 B'">
        {{
          currentComponent
        }}．你的味觉和嗅觉的底子都没问题。在这个偷师才是正道的时代，你的主动会让你走得更快，走的更远。你的动机和这个时代的大部分后来的名师都是一样的，这种朴实的答案反而更让区财赏识。
      </p>
      <p class="normal" v-show="currentComponent === '解答 C'">
        {{
          currentComponent
        }}．你的味觉和嗅觉的底子都没问题。在这个师傅甚少主动传艺的时代，不会偷师也不够主动只会让你碌碌无为。你是可造之材吗，你通过了第一轮考验。
      </p>
      <p class="normal" v-show="currentComponent === '解答 D'">
        {{
          currentComponent
        }}．你嗅觉弱，味觉被后天的习惯剥夺了一半，只能练刀工，能成才的概率不高。不收
      </p>
      <p class="normal" v-show="currentComponent === '解答 E'">
        {{ currentComponent }}．你的先天嗅觉弱，味觉被后天的习惯糟蹋完毕了，不适合做厨。不收
      </p>
    </div>

    <div
      v-show="currentComponent"
      class="center subtleFade"
      style="margin-bottom: 26px"
      @click="handleContinueClick"
    >
      在附近寻找一个人少的地方继续
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, computed } from 'vue'
const emit = defineEmits(['update:active'])

const state = reactive({
  isSmoking: '',
  isDrinking: '',
  sneeze: '',
  likesSpicy: '',
  isReading: '',
  learnCooking: ''
})
const { isSmoking, isDrinking, sneeze, likesSpicy, isReading, learnCooking } = toRefs(state)
const currentComponent = computed(() => {
  if (
    +state.isSmoking === 2 &&
    +state.isDrinking === 2 &&
    +state.learnCooking === 1
  ) {
    return '解答 A'
  }
  if (
    +state.isSmoking === 1 &&
    +state.sneeze === 2 &&
    +state.isReading === 1 &&
    +state.learnCooking === 1
  ) {
    return '解答 A'
  }
  if (
    +state.isSmoking === 2 &&
    +state.isDrinking === 1 &&
    +state.sneeze === 2 &&
    +state.isReading === 1 &&
    +state.learnCooking === 1
  ) {
    return '解答 A'
  }
  if (
    +state.isSmoking === 2 &&
    +state.isDrinking === 2 &&
    +state.learnCooking === 2
  ) {
    return '解答 C'
  }
  if (
    +state.isSmoking === 1 &&
    +state.sneeze === 2 &&
    +state.isReading === 1 &&
    +state.learnCooking === 2
  ) {
    return '解答 C'
  }
  if (
    +state.isSmoking === 2 &&
    +state.isDrinking === 1 &&
    +state.sneeze === 2 &&
    +state.isReading === 1 &&
    +state.learnCooking === 2
  ) {
    return '解答 C'
  }
  if (
    +state.isSmoking === 2 &&
    +state.isDrinking === 2 &&
    +state.learnCooking === 3
  ) {
    return '解答 B'
  }
  if (
    +state.isSmoking === 1 &&
    +state.sneeze === 2 &&
    +state.isReading === 1 &&
    +state.learnCooking === 3
  ) {
    return '解答 B'
  }
  if (
    +state.isSmoking === 2 &&
    +state.isDrinking === 1 &&
    +state.sneeze === 2 &&
    +state.isReading === 1 &&
    +state.learnCooking === 3
  ) {
    return '解答 B'
  }
  if (+state.isSmoking === 1 && +state.sneeze === 2 && +state.isReading === 2) {
    return '解答 C'
  }
  if (
    +state.isSmoking === 2 &&
    +state.isDrinking === 1 &&
    +state.sneeze === 2 &&
    +state.isReading === 2
  ) {
    return '解答 C'
  }
  if (+state.isSmoking === 1 && +state.sneeze === 1 && +state.likesSpicy === 1) {
    return '解答 E'
  }
  if (
    +state.isSmoking === 2 &&
    +state.isDrinking === 1 &&
    +state.sneeze === 1 &&
    +state.likesSpicy === 1
  ) {
    return '解答 E'
  }
  if (+state.isSmoking === 1 && +state.sneeze === 1 && +state.likesSpicy === 2) {
    return '解答 D'
  }
  if (
    +state.isSmoking === 2 &&
    +state.isDrinking === 1 &&
    +state.sneeze === 1 &&
    +state.likesSpicy === 2
  ) {
    return '解答 D'
  }
  return null
})
const handleContinueClick = () => {
  emit('update:active', 3)
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
