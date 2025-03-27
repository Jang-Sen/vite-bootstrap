import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  // optimizeDeps: {
  //   include: ['react-bootstrap', 'bootstrap'],
  // },
  // resolve: {
  //   alias: {
  //     bootstrap: path.resolve(__dirname, 'node_module/bootstrap'),
  //   },
  // },
  preview: {
    port: 5173,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:5173',
    watch: {
      usePolling: true, // 폴링 방식으로 파일 변경 감지
    },
  },
});
