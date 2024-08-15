import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'PrefacePage',
      meta: { title: '前言' },
      component: () => import('@/views/PrefacePage.vue')
    },
    {
      path: '/AdventureInAncestralHouse',
      name: 'AdventureInAncestralHouse',
      meta: { title: '祖屋奇遇' },
      component: () => import('@/views/AdventureInAncestralHouse.vue')
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
      meta: { title: '初遇周之贞' },
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
    },
    {
      path: '/QingyunCulturalEducation',
      name: 'QingyunCulturalEducation',
      meta: { title: '青云文教所' },
      component: () => import('@/views/QingyunCulturalEducation.vue')
    },
    {
      path: '/TheStoryOfThreeStonesAndAbench',
      name: 'TheStoryOfThreeStonesAndAbench',
      meta: { title: '三块石头板凳故事' },
      component: () => import('@/views/TheStoryOfThreeStonesAndAbench.vue')
    },
    {
      path: '/HorseTiePost',
      name: 'HorseTiePost',
      meta: { title: '拴马桩' },
      component: () => import('@/views/HorseTiePost.vue')
    },
    {
      path: '/CircularSkyRectangularEarth',
      name: 'CircularSkyRectangularEarth',
      meta: { title: '天圆地方' },
      component: () => import('@/views/CircularSkyRectangularEarth.vue')
    },
    {
      path: '/ShunLiquorWorkShop',
      name: 'ShunLiquorWorkShop',
      meta: { title: '顺酒坊' },
      component: () => import('@/views/ShunLiquorWorkShop.vue')
    },
    {
      path: '/MuyingStream',
      name: 'MuyingStream',
      meta: { title: '沐英涧' },
      component: () => import('@/views/MuyingStream.vue')
    },
    {
      path: '/MotherPage',
      name: 'MotherPage',
      meta: { title: '母亲回归' },
      component: () => import('@/views/MotherPage.vue')
    },
    {
      path: '/OperaStage',
      name: 'OperaStage',
      meta: { title: '戏台' },
      component: () => import('@/views/OperaStage.vue')
    },
    {
      path: '/PreferredTenThousandYears',
      name: 'PreferredTenThousandYears',
      meta: { title: '喜万年年' },
      component: () => import('@/views/PreferredTenThousandYears.vue')
    },
    {
      path: '/EndingPage',
      name: 'EndingPage',
      meta: { title: '结局' },
      component: () => import('@/views/EndingPage.vue')
    }
  ]
})

export default router
