import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/QuShuiBay',
      name: 'QuShuiBay',
      meta: { title: '前往曲水湾' },
      component: () => import('@/views/QuShuiBay.vue')
    },
    {
      path: '/RitualVessel',
      name: 'RitualVessel',
      meta: { title: '食神之鼎' },
      component: () => import('@/views/RitualVessel.vue')
    },
    {
      path: '/ThreeWordPrimer',
      name: 'ThreeWordPrimer',
      meta: { title: '三字经' },
      component: () => import('@/views/ThreeWordPrimer.vue')
    },
    {
      path: '/ZhenZhou',
      name: 'ZhenZhou',
      meta: { title: '周之贞' },
      component: () => import('@/views/ZhenZhou.vue')
    },
    {
      path: '/QiaoZhu&QingYun',
      name: 'QiaoZhu&QingYun',
      meta: { title: '橋珠酒家青云文社' },
      component: () => import('@/views/QiaoZhu&QingYun.vue')
    },
    {
      path: '/TheLetterDouble-LayerSteamedMilk',
      name: 'TheLetterDouble-LayerSteamedMilk',
      meta: { title: '仁信1938' },
      component: () => import('@/views/TheLetterDouble-LayerSteamedMilk.vue')
    },
    {
      path: '/ClairvoyancePage',
      name: 'ClairvoyancePage',
      meta: { title: '开天眼' },
      component: () => import('@/views/ClairvoyancePage.vue')
    },
    {
      path: '/TheCalamityOfQiaoZhuRestaurant',
      name: 'TheCalamityOfQiaoZhuRestaurant',
      meta: { title: '橋珠酒家的劫难' },
      component: () => import('@/views/TheCalamityOfQiaoZhuRestaurant.vue')
    },
    {
      path: '/ReconstructionOfQiaoZhuRestaurant',
      name: 'ReconstructionOfQiaoZhuRestaurant',
      meta: { title: '橋珠酒家重建' },
      component: () => import('@/views/ReconstructionOfQiaoZhuRestaurant.vue')
    },
    {
      path: '/TheRoadToSuccess',
      name: 'TheRoadToSuccess',
      meta: { title: '青云之路' },
      component: () => import('@/views/TheRoadToSuccess.vue')
    },
    {
      path: '/TheWestRiver',
      name: 'TheWestRiver',
      meta: { title: '西江' },
      component: () => import('@/views/TheWestRiver.vue')
    },
    {
      path: '/StoneGate',
      name: 'StoneGate',
      meta: { title: '石门' },
      component: () => import('@/views/StoneGate.vue')
    }
  ]
})

export default router
