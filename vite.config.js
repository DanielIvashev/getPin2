import { defineConfig } from 'vite';
import { babel } from '@rollup/plugin-babel';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';

const path = require('path');

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: '@/styles/_quasar-variables.scss',
    }),
    babel({ babelHelpers: 'bundled' }),
  ],
  config: {
    dark: 'false',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          quasar: ['quasar'],
        },
      },
    },
  },
});
