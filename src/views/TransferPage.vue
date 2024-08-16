<template>
  <div></div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

import { useUserStore } from '@/store/userStore'
const userStore = useUserStore()

import { onMounted } from 'vue'
onMounted(() => {
  // 如果包含问号，则使用split('?')进行切割
  if (userStore.path.indexOf('?') !== -1) {
    const parts = userStore.path.split('?')
    const queryParams = new URLSearchParams(parts[1])
    router.push({ path: `/${parts[0]}`, query: { active: queryParams.get('active') } })
  } else {
    router.push({ path: `/${userStore.path}` })
  }
})
</script>
