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
import { useUserStore } from '@/store/userStore'
import { useRoute } from 'vue-router'
const route = useRoute()
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
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, 500)
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
const userStore = useUserStore()
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  if (route.query.active) {
    state.active = +route.query.active
  }
  userStore.updateDropdownMenuList([
    { text: '【一、曲水湾鹊桥】', value: 'QuShuiBay' },
    { text: '【二、食神之鼎】', value: 'RitualVessel?active=0' },
    { text: '【三、三字经】', value: 'ZhenZhou?active=0' }
  ])
})
</script>
