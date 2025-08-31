import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Build optimizations
  build: {
    // Enable minification
    minify: 'terser',
    
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['gsap', 'lenis'],
        }
      }
    },
    
    // Optimize assets
    assetsInlineLimit: 4096,
    
    // Enable source maps for debugging (disable in production if needed)
    sourcemap: false,
    
    // Optimize CSS
    cssCodeSplit: true,
  },
  
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'gsap']
  },
  
  // Server configuration for development
  server: {
    port: 3000,
    open: true
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    open: true
  }
})
