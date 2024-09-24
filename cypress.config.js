import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: "t4435a",
  e2e: {
    baseUrl: 'http://localhost:5173', // vite's default port
  },
  component: {
    devServer: {
      bundler: 'vite',
    },
  },
});
