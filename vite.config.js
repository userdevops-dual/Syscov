import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 🔑 Netlify ke liye relative paths
  build: {
    outDir: 'dist', // ye folder publish directory ke liye
    sourcemap: false,
  },
  server: {
    open: true,
  },
})
