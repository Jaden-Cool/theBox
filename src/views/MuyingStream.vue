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
import { reactive, toRefs, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { debounce } from '@/utils'
// 沐英涧
import muyingStream from '@/components/muyingStream/homePage.vue'
// 梳起1
import selfStyledUnmarriedWomenOne from '@/components/muyingStream/selfStyledUnmarriedWomenOne.vue'
// 梳起2
import selfStyledUnmarriedWomenTwo from '@/components/muyingStream/selfStyledUnmarriedWomenTwo.vue'
// 刘恭可红荔1
import liuGongOne from '@/components/muyingStream/liuGongOne.vue'
// 刘恭可红荔2
import liuGongTwo from '@/components/muyingStream/liuGongTwo.vue'
// 刘恭可红荔3
import liuGongThree from '@/components/muyingStream/liuGongThree.vue'
const state = reactive({
  tabs: [
    { id: 0, title: '沐英涧' },
    { id: 1, title: '梳起1' },
    { id: 2, title: '梳起2' },
    { id: 3, title: '刘恭可红荔1' },
    { id: 4, title: '刘恭可红荔2' },
    { id: 5, title: '刘恭可红荔3' },
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
  handleScroll()
  if (+state.active === 0) {
    return muyingStream
  }
  if (+state.active === 1) {
    return selfStyledUnmarriedWomenOne
  }
  if (+state.active === 2) {
    return selfStyledUnmarriedWomenTwo
  }
  if (+state.active === 3) {
    return liuGongOne
  }
  if (+state.active === 4) {
    return liuGongTwo
  }
  if (+state.active === 5) {
    return liuGongThree
  }
  return null
})

// 滚动事件处理函数
const handleScroll = () => {
  nextTick(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
    const clientHeight = document.documentElement.clientHeight // 元素内部可视区域的高度
    const scrollHeight = document.documentElement.scrollHeight //元素内部所有内容
    state.isAtBottom =
      scrollHeight <= clientHeight || scrollTop + clientHeight >= scrollHeight - 100
  })
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
