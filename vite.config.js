// import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import postcssPxToViewport from 'postcss-px-to-viewport'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src' // 直接指定为 /src，Vite 会自动处理这个路径 
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  css: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 375 // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
          // viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般可以不写
          // unitPrecision: 5, // 转换后的精度，即小数点位数
          // viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          // selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
          // minPixelValue: 1, // 小于等于1px则不进行转换
          // mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
          // exclude: /(\/node_modules\/)|(\.svg$)/ // 排除指定目录下的文件或指定文件不进行转换
        })
        // autoprefixer() // 如果需要自动添加浏览器前缀，可以使用autoprefixer
      ]
    }
  }
})
