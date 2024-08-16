<template>
  <div>
    <van-tabs v-show="false" v-model:active="active">
      <van-tab v-for="item of tabs" :key="item.id" :title="item.title" />
    </van-tabs>

    <component :is="currentComponent" @update:active="handleActiveUpdate" />
  </div>
</template>

<script setup>
import { reactive, toRefs, computed, onMounted } from 'vue'
import { useUserStore } from '@/store/userStore'
const userStore = useUserStore()
// 石门
import stoneGate from '@/components/stoneGate/homePage.vue'
// 更迭信物
import exchangeOfKeepsakes from '@/components/stoneGate/exchangeOfKeepsakes.vue'
// 徘徊
import lingerAround from '@/components/stoneGate/lingerAround.vue'
// 改命
import changeDestiny from '@/components/stoneGate/changeDestiny.vue'
const state = reactive({
  tabs: [
    { id: 0, title: '石门' },
    { id: 1, title: '更迭信物' },
    { id: 2, title: '徘徊' },
    { id: 3, title: '改命' }
  ],
  active: 0
})
const { active, tabs } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  state.active = active
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return stoneGate
  }
  if (+state.active === 1) {
    return exchangeOfKeepsakes
  }
  if (+state.active === 2) {
    return lingerAround
  }
  if (+state.active === 3) {
    return changeDestiny
  }
  return null
})

// 组件挂载后添加滚动事件监听器
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  userStore.updateDropdownMenuList([
    { text: '【一、曲水湾鹊桥】', value: 'QuShuiBay' },
    { text: '【二、食神之鼎】', value: 'RitualVessel', active: 0 },
    { text: '【三、三字经】', value: 'ThreeWordPrimer' },
    { text: '【四、烧焦木板】', value: 'TheCalamityOfQiaoZhuRestaurant' },
    { text: '【五、青云之路】', value: 'TheRoadToSuccess' },
    { text: '【六、石门】', value: 'StoneGate' }
  ])
})
</script>

<!-- <style lang="less" scoped></style> -->
