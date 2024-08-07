<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab v-for="item of tabs" :key="item.id" :title="item.title" />
    </van-tabs>

    <component :is="currentComponent" @update:active="handleActiveUpdate" />
  </div>
</template>

<script setup>
import {  reactive, toRefs, computed,  onMounted } from 'vue'

import chapterOneSectionOne from '@/components/chapterOne/chapterOneSectionOne.vue'
import chapterOneSectionTwo from '@/components/chapterOne/chapterOneSectionTwo.vue'

const state = reactive({
  tabs: [
    { id: 0, active: '1-1', title: '祖屋奇遇', name: '祖屋奇遇' },
    { id: 1, active: '1-2', title: '祖屋奇遇2繁', name: '祖屋奇遇2繁' }
  ],
  active: '1-1',
  tabTitle: '祖屋奇遇'
})
const { active, tabs } = toRefs(state)

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
onMounted(() => {})
</script>

<!-- <style lang="less" scoped></style> -->
