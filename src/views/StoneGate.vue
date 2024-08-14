<template>
  <div>
    <van-tabs v-show="false" v-model:active="active">
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
  window.addEventListener('scroll', debouncedHandleScroll)
})

// 组件卸载前移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
})
</script>

<!-- <style lang="less" scoped></style> -->
