import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Cấu hình Vite
export default defineConfig({
  plugins: [react()],
  historyApiFallback: {
    index: '/index.html',  // Đảm bảo trả về trang index.html
  },
});
