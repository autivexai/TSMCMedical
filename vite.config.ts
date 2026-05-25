import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'supabase': ['@supabase/supabase-js']
        }
      }
    },
    // Add source map for production debugging if needed
    sourcemap: true,
    // Improve chunk size reporting
    reportCompressedSize: true,
    // Reduce chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  server: {
    // Enable compression
    compress: true
  }
});