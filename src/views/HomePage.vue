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
import chapterOneSectionOne from '@/components/chapterOne/chapterOneSectionOne.vue'
import chapterOneSectionTwo from '@/components/chapterOne/chapterOneSectionTwo.vue'

const state = reactive({
  tabs: [
    { id: 0, active: '1-1', title: '祖屋奇遇', name: '祖屋奇遇' },
    { id: 1, active: '1-2', title: '祖屋奇遇2繁', name: '祖屋奇遇2繁' }
  ],
  active: '1-1',
  tabTitle: '祖屋奇遇',
  isAtBottom: false
})
const { active, tabs, isAtBottom } = toRefs(state)

const handleActiveUpdate = (key) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  switch (key) {
    case '祖屋奇遇2繁':
      state.active = 1
      state.tabTitle = '祖屋奇遇2繁'
      break

    default:
      break
  }
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return chapterOneSectionOne
  }
  if (+state.active === 1) {
    return chapterOneSectionTwo
  }
  return null
})

// 滚动事件处理函数
const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = document.documentElement.scrollHeight

  // 判断是否滚动到底部（这里可以根据需要调整阈值）
  state.isAtBottom = scrollTop + clientHeight >= scrollHeight - 100 // 假设距离底部100px时认为已到底部
  console.log(`state.isAtBottom`, state.isAtBottom)
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
