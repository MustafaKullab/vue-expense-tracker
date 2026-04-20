import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteSingleFile } from 'vite-plugin-singlefile' // 👈 هذا السطر الذي كان ناقصاً

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    viteSingleFile(), // 👈 استدعاء الدالة هنا
  ],
  base: '/vue-expense-tracker',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
