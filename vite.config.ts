import path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // 监听所有IP地址
    host: '0.0.0.0',
    // 指定dev sever的端口号，默认为5173
    port: 3000,
    // 自动打开浏览器
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  plugins: [react()],
})
