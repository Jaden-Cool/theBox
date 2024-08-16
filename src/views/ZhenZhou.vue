<template>
  <div>
    <van-tabs v-show="false" v-model:active="active">
      <van-tab v-for="item of tabs" :key="item.id" :title="item.title" />
    </van-tabs>

    <component
      :is="currentComponent"
      
      @update:active="handleActiveUpdate"
    />
  </div>
</template>

<script setup>
import { reactive, toRefs, computed, onMounted } from 'vue'
// 初遇周之贞
import firstEncounter from '@/components/zhenZhou/firstEncounter.vue'
// 回答周之贞
import answer from '@/components/zhenZhou/answerPage.vue'

const state = reactive({
  tabs: [
    { id: 0, title: '初遇周之贞' },
    { id: 1, title: '回答周之贞' }
  ],
  active: 0,
})
const { active, tabs } = toRefs(state)

const handleActiveUpdate = (active) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  state.active = active
}

const currentComponent = computed(() => {
  if (+state.active === 0) {
    return firstEncounter
  }
  if (+state.active === 1) {
    return answer
  }
  return null
})

// 组件挂载后添加滚动事件监听器
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
