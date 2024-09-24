import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    build: {
      outDir: 'dist', // Output directory
      minify: 'terser',
      lib: {
        entry: './src/ModernMenu.js',
        name: 'ModernMenu',
        fileName: 'modern-menu',
      },
    },
  };
});
