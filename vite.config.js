import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio/', // important for GitHub Pages
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Naveen Portfolio',
        short_name: 'Portfolio',
        description: 'My personal portfolio website',
        theme_color: '#0d9488',
        background_color: '#111827',
        display: 'standalone',
        start_url: '/my-portfolio/',
        icons: [
          {
            src: '/icon-192.png', // Place this in /public
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png', // Place this in /public
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
