import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Gzip compression
    compression({ algorithm: 'gzip', ext: '.gz' }),
    // Brotli compression (better for Vercel CDN)
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
    // Target modern browsers for smaller bundles
    target: 'es2015',
    // Generate source maps for debugging in production
    sourcemap: false,
    // Improve chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Preload critical assets
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})
