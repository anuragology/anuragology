import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Use "/" for a custom domain
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude unnecessary deps if needed
  },
});
