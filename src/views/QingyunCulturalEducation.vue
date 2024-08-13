<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab v-for="item of tabs" :key="item.id" :title="item.title" />
    </van-tabs>

    <component
      :is="currentComponent"
      :isAtBottom="isAtBottom"
      @update:active="handleActiveUpdate"
    />
  </div>
</template>

<script setup>
import { reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
import { debounce } from '@/utils'
import { useRoute } from 'vue-router'
const route = useRoute()
// 青云文教所
import home from '@/components/qingyunCulturalEducation/homePage.vue'
// 口味苦
import bitterTaste from '@/components/qingyunCulturalEducation/bitterTaste.vue'
// 离开文教所
import exitTheCulturalInstitute from '@/components/qingyunCulturalEducation/exitTheCulturalInstitute.vue'
// 命运分岔
import aBifurcationOfFate from '@/components/qingyunCulturalEducation/aBifurcationOfFate.vue'
// 读信毕
import afterReadingTheLetter from '@/components/qingyunCulturalEducation/afterReadingTheLetter.vue'
// 猪脚姜
import pigTrotterCookedWithGinger from '@/components/qingyunCulturalEducation/pigTrotterCookedWithGinger.vue'
// 口味辛
import spicyTaste from '@/components/qingyunCulturalEducation/spicyTaste.vue'
// 扇子
// import fanPage from '@/components/qingyunCulturalEducation/fanPage.vue'

const state = reactive({
  tabs: [
    { id: 0, title: '青云文教所' },
    { id: 1, title: '口味苦' },
    { id: 2, title: '离开文教所' },
    { id: 3, title: '命运分岔' },
    { id: 4, title: '读信毕' },
    { id: 5, title: '猪脚姜' },
    { id: 6, title: '口味辛' },
    // { id: 7, title: '扇子' }
  ],
  active: 0,
  isAtBottom: false
})
const { active, tabs, isAtBottom } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  state.active = active
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return home
  }
  if (+state.active === 1) {
    return bitterTaste
  }
  if (+state.active === 2) {
    return exitTheCulturalInstitute
  }
  if (+state.active === 3) {
    return aBifurcationOfFate
  }
  if (+state.active === 4) {
    return afterReadingTheLetter
  }
  if (+state.active === 5) {
    return pigTrotterCookedWithGinger
  }
  if (+state.active === 6) {
    return spicyTaste
  }
  // if (+state.active === 7) {
  //   return fanPage
  // }
  return null
})

// 滚动事件处理函数
const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = document.documentElement.scrollHeight

  // 首先检查内容是否足够长以产生滚动条
  if (scrollHeight <= clientHeight) {
    // 如果没有滚动条，直接设置 isAtBottom 为 true
    state.isAtBottom = true
  } else {
    // 如果有滚动条，则根据滚动位置判断
    state.isAtBottom = scrollTop + clientHeight >= scrollHeight - 100 // 假设距离底部100px时认为已到底部
  }

  // 判断是否滚动到底部（这里可以根据需要调整阈值）
  state.isAtBottom = scrollTop + clientHeight >= scrollHeight - 100 // 假设距离底部100px时认为已到底部
}

// 防抖函数
const debouncedHandleScroll = debounce(handleScroll, 500) // 等待时间为500毫秒

// 组件挂载后添加滚动事件监听器
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  if (route.query.active) {
    state.active = +route.query.active
  }
  window.addEventListener('scroll', debouncedHandleScroll)
})

// 组件卸载前移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
})
</script>

<!-- <style lang="less" scoped></style> -->
