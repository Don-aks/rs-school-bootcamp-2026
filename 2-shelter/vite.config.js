import { fileURLToPath } from 'node:url';

import { viteImageToAVIFPlugin } from 'vite-image-to-avif-plugin';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

import optimizeSvgSources from './plugins/optimizeSvgSources';
import spritemapFix from './plugins/spritemapFix';
import getAllHTMLFiles from './plugins/getAllHTMLFiles';

export default {
  base: './',
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: "@use '@/styles/helpers' as *;",
      },
    },
  },

  build: {
    outDir: '../dist/2-shelter',
    emptyOutDir: true,
    rollupOptions: {
      input: getAllHTMLFiles(new URL('.', import.meta.url)),
    },
    sourcemap: true,
  },

  plugins: [
    VitePluginSvgSpritemap(['src/assets/icons/**/*.svg'], {
      prefix: '',
      svgo: false,
      styles: false,
      injectSvgOnDev: true,
    }),

    viteImageToAVIFPlugin({
      sourcePaths: ['src/assets/images'],
      outputDir: 'src/assets/images',
    }),
    optimizeSvgSources(),
    spritemapFix,
  ],
};
