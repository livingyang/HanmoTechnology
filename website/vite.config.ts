import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Hub Pages 默认域: https://livingyang.github.io/HanmoTechnology/
// 子路径部署必须显式声明 base，否则 JS / CSS / assets 全部 404。
export default defineConfig({
  base: '/HanmoTechnology/',
  plugins: [vue()],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2020',
  },
})