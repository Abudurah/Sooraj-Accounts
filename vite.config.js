import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/Sooraj-Accounts/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
      includeAssets: ['icon.png'],
      manifest: {
        name: 'Sooraj Caterers – Accounts',
        short_name: 'Sooraj A/C',
        description: 'Accounts management for Sooraj Caterers & Events',
        theme_color: '#182F24',
        background_color: '#F0EBE1',
        display: 'standalone',
        scope: '/Sooraj-Accounts/',
        start_url: '/Sooraj-Accounts/',
        icons: [
          { src: 'icon.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
          { src: 'icon.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    }),
  ],
});
