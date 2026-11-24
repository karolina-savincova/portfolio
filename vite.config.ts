import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    license: { fileName: 'license.md' },
    rolldownOptions: {
      output: {
        postBanner: '/* Third-party licenses: /portfolio/license.md */',
      },
    },
  },
});
