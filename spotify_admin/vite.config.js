import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [
    react(),
    svelte({
      compilerOptions: {
        customElement: true,
      }
    })
  ],
  build:{
    manifest: true,
    rollupOptions: {
      input: '/src/main.js'
    }
  },
  
})