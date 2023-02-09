import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import postcssPxToViewport from 'postcss-px-to-viewport'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    css: {
        postcss: {
            plugins: [
                // Tips: 在配置 postcss-loader 时，应避免 ignore node_modules 目录，否则将导致 Vant 样式无法被编译。
                postcssPxToViewport({
                    unitToConvert: 'px', // 需要转换的单位，默认为"px"
                    viewportWidth: 375, // 设计稿宽度
                    unitPrecision: 5, // 转换后的精度，即小数点位数
                    viewportUnit: 'vw', // 转换成的视窗单位
                    selectorBlackList: ['ignore'], // 指定不需要转换的类
                    minPixelValue: 1, // 小于或等于1px不转换为视窗单位
                    mediaQuery: false, // 允许在媒体查询中转换px
                    // exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
                    landscape: false, // 是否处理横屏情况
                }),
            ]
        }
    }
})
