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
// 喜万年年
import aFavorite from '@/components/preferredTenThousandYears/homePage.vue'
// 清鹂梳头
import qingLi from '@/components/preferredTenThousandYears/qingLi.vue'
// 虎口符
import tigerMouthToken from '@/components/preferredTenThousandYears/tigerMouthToken.vue'
// 寻根问祖
import traceonesRoots from '@/components/preferredTenThousandYears/traceonesRoots.vue'

const state = reactive({
  tabs: [
    { id: 0, title: '喜万年年' },
    { id: 1, title: '清鹂梳头' },
    { id: 2, title: '虎口符' },
    { id: 3, title: '寻根问祖' },
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
    return aFavorite
  }
  if (+state.active === 1) {
    return qingLi
  }
  if (+state.active === 2) {
    return tigerMouthToken
  }
  if (+state.active === 3) {
    return traceonesRoots
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
  window.addEventListener('scroll', debouncedHandleScroll)
})

// 组件卸载前移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
})
</script>

<!-- <style lang="less" scoped></style> -->
