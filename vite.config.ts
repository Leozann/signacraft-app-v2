import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  test: {
    environment: 'jsdom',
    // setupFiles: './src/setupTests.ts',
    globals: true,
    include: ['src/__tests__/**/*.test.tsx']
  },
  server: {
    port:3010,
    strictPort: true,
    host: 'localhost',
    open: true,
  },
  build: {
    outDir: 'build',
    emptyOutDir: true, // Remove old files before building
  }
})
