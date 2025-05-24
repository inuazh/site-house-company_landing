import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/site-house-company_landing/',
  plugins: [react()],
});
