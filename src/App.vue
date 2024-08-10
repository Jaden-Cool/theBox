<template>
  <van-row>
    <van-col span="5">
      <van-sidebar v-model="sidebarActive" @change="handleSidebarChange">
        <van-sidebar-item v-for="item of sidebarList" :key="item.id" :title="item.title" />
      </van-sidebar>
    </van-col>

    <van-col span="19">
      <RouterView />
    </van-col>
  </van-row>

  <!-- <RouterView /> -->
</template>

<script setup>
// import { RouterView, useRouter } from 'vue-router'
import { RouterView, useRouter } from 'vue-router'
import { reactive, toRefs, onMounted } from 'vue'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
const router = useRouter()
const state = reactive({
  sidebarActive: 0,
  sidebarList: []
})
const { sidebarActive, sidebarList } = toRefs(state)
const handleSidebarChange = (index) => {
  if (index >= 0 && index < sidebarList.value.length) {
    router.push({ name: sidebarList.value[index].name })
  } else {
    console.error('Invalid sidebar index:', index)
  }
}
onMounted(() => {
  const resArr = router.options.routes.map((item, index) => {
    const title = item.meta && item.meta.title ? item.meta.title : ''
    return { id: index, title, name: item.name }
  })
  state.sidebarList = resArr
})
</script>

<style lang="less">
@import url('@/assets/less/base.less');
// .van-sidebar-item{
//   padding: 12px;
// }
</style>
