import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  server: {
    port:3010,
    strictPort: true,
    host: 'localhost',
    open: true,
  },
  build: {
    outDir: 'build', // Ensure the output folder is correctly set
    emptyOutDir: true, // Remove old files before building
  }
})
