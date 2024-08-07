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
// 祖屋奇遇
import adventureInAncestralHouseChapterOne from '@/components/adventureInAncestralHouse/chapterOne.vue'
import adventureInAncestralHouseChapterTwo from '@/components/adventureInAncestralHouse/chapterTwo.vue'
import adventureInAncestralHouseChapterThree from '@/components/adventureInAncestralHouse/chapterThree.vue'
import adventureInAncestralHouseChapterFour from '@/components/adventureInAncestralHouse/chapterFour.vue'
// 常日昳
import juvenileChapterOne from '@/components/juvenile/chapterOne.vue'
import juvenileChapterTwo from '@/components/juvenile/chapterTwo.vue'
// 常家后人
import changDescendantsChapterOne from '@/components/changDescendants/chapterOne.vue'
// 青云文社pv
import qingyunLiteratureSociety from '@/components/qingyunLiteratureSociety/chapterOne.vue'
// 橋珠酒家pv
// import qiaozhuRestaurantChapterOne from '@/components/qiaozhuRestaurant/chapterOne.vue'
import qiaozhuRestaurantChapterTwo from '@/components/qiaozhuRestaurant/chapterTwo.vue'
import qiaozhuRestaurantChapterThree from '@/components/qiaozhuRestaurant/chapterThree.vue'

const state = reactive({
  tabs: [
    { id: 0, title: '祖屋奇遇1' },
    { id: 1, title: '祖屋奇遇2' },
    { id: 2, title: '祖屋奇遇3' },
    { id: 3, title: '祖屋奇遇4' },
    { id: 4, title: '常日昳1' },
    { id: 5, title: '常日昳2' },
    { id: 6, title: '常家后人' },
    { id: 7, title: '青云文社pv' },
    { id: 8, title: '橋珠酒家pv' },
    { id: 9, title: '红荔pv' },
    { id: 10, title: '前往曲水湾' },
    // { id: 7, title: '橋珠酒家' },
    // { id: 8, title: '仁信1938' },
    // { id: 9, title: '开天眼' }
  ],
  active: '0',
  isAtBottom: false
})
const { active, tabs, isAtBottom } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  state.active = active
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return adventureInAncestralHouseChapterOne
  }
  if (+state.active === 1) {
    return adventureInAncestralHouseChapterTwo
  }
  if (+state.active === 2) {
    return adventureInAncestralHouseChapterThree
  }
  if (+state.active === 3) {
    handleScroll()
    return adventureInAncestralHouseChapterFour
  }
  if (+state.active === 4) {
    handleScroll()
    return juvenileChapterOne
  }
  if (+state.active === 5) {
    return juvenileChapterTwo
  }
  if (+state.active === 6) {
    return changDescendantsChapterOne
  }
  if (+state.active === 7) {
    return qingyunLiteratureSociety
  }
  if (+state.active === 8) {
    return qiaozhuRestaurantChapterTwo
  }
  if (+state.active === 9) {
    return qiaozhuRestaurantChapterThree
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
