<template>
  <div>
    <van-tabs v-model:active="active" v-show="false">
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
import chapterOneSectionThree from '@/components/chapterOne/chapterOneSectionThree.vue'
import chapterOneSectionFour from '@/components/chapterOne/chapterOneSectionFour.vue'
import chapterTwoSectionOne from '@/components/chapterTwo/chapterTwoSectionOne.vue'
import chapterTwoSectionTwo from '@/components/chapterTwo/chapterTwoSectionTwo.vue'
import chapterThreeSectionOne from '@/components/chapterThree/chapterThreeSectionOne.vue'
import chapterFourSectionOne from '@/components/chapterFour/chapterFourSectionOne.vue'
import chapterFourSectionTwo from '@/components/chapterFour/chapterFourSectionTwo.vue'
import chapterFourSectionThree from '@/components/chapterFour/chapterFourSectionThree.vue'

const state = reactive({
  tabs: [
    { id: 0, active: '1-1', title: '祖屋奇遇', name: '祖屋奇遇' },
    { id: 1, active: '1-2', title: '祖屋奇遇2', name: '祖屋奇遇2' },
    { id: 2, active: '1-3', title: '祖屋奇遇3', name: '祖屋奇遇3' },
    { id: 3, active: '1-4', title: '祖屋奇遇4', name: '祖屋奇遇4' },
    { id: 4, active: '2-1', title: '常日昳1', name: '常日昳1' },
    { id: 5, active: '2-2', title: '常日昳2', name: '常日昳2' },
    { id: 6, active: '3-1', title: '常家后人', name: '常家后人' },
    { id: 7, active: '4-1', title: '橋珠酒家', name: '橋珠酒家' },
    { id: 8, active: '4-2', title: '仁信1938', name: '仁信1938' },
    { id: 9, active: '4-3', title: '开天眼', name: '开天眼' },
  ],
  active: '1-1',
  isAtBottom: false
})
const { active, tabs, isAtBottom } = toRefs(state)

const handleActiveUpdate = (key) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  switch (key) {
    case '祖屋奇遇2':
      state.active = 1
      break
    case '祖屋奇遇3':
      state.active = 2
      break
    case '祖屋奇遇4':
      state.active = 3
      break
    case '常日昳1':
      state.active = 4
      break
    case '常日昳2':
      state.active = 5
      break
    case '常家后人':
      state.active = 6
      break
    case '橋珠酒家':
      state.active = 7
      break
    case '仁信1938':
      state.active = 8
      break
    case '开天眼':
      state.active = 9
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
  if (+state.active === 2) {
    return chapterOneSectionThree
  }
  if (+state.active === 3) {
    handleScroll()
    return chapterOneSectionFour
  }
  if (+state.active === 4) {
    handleScroll()
    return chapterTwoSectionOne
  }
  if (+state.active === 5) {
    return chapterTwoSectionTwo
  }
  if (+state.active === 6) {
    return chapterThreeSectionOne
  }
  if (+state.active === 7) {
    return chapterFourSectionOne
  }
  if (+state.active === 8) {
    return chapterFourSectionTwo
  }
  if (+state.active === 9) {
    return chapterFourSectionThree
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
