// vite.config.test.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
        '@': '/src',
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
        include: ['src/__tests__/**/*.test.{ts,tsx}'],
    },
});
