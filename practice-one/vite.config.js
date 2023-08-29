import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@layouts': `${path.resolve(__dirname, './src/layouts/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
    },
  },
})
