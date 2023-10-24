import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@contexts': `${path.resolve(__dirname, './src/contexts/')}`,
      '@constants': `${path.resolve(__dirname, './src/constants/')}`,
      '@data': `${path.resolve(__dirname, './src/data/')}`,
      '@helpers': `${path.resolve(__dirname, './src/helpers/')}`,
      '@layouts': `${path.resolve(__dirname, './src/layouts/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@router': `${path.resolve(__dirname, './src/router/')}`,
      '@services': `${path.resolve(__dirname, './src/services')}`,
      '@stores': `${path.resolve(__dirname, './src/stores')}`,
      '@themes': `${path.resolve(__dirname, './src/themes/')}`,
    },
  },
});
