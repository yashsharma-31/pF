import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/build/', // Adjust as per your deployment environment
  build: {
    outDir: 'build', // Output directory for production build
  },
});
