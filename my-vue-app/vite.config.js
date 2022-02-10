import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
      vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: './',   // 在生产中服务时的基本公共路径。
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'), // 这里是将src目录配置别名为 @ 方便在项目中导入src目录下的文件
    }
  },
  server: {
    host: 'localhost', // 指定服务器主机名
    port: 8888, // 指定服务器端口
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
    https: false, // 是否开启 https
    cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
    proxy: { // 为开发服务器配置自定义代理规则
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
