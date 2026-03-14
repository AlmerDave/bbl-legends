import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/bbl-legends/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',       // auto-updates SW in background
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Basketball Badminton Legends',
        short_name: 'BBL',
        description: 'Basketball Badminton Legends',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',          // feels like a native app
        scope: '/bbl-legends/',
        start_url: '/bbl-legends/',
        icons: [
          {
            "src": "/bbl-legends/icons/manifest/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/manifest/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/manifest/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/manifest/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/manifest/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "/bbl-legends/icons/manifest/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "/bbl-legends/icons/ios/apple-touch-icon-120x120.png",
            "sizes": "120x120",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/ios/apple-touch-icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/ios/apple-touch-icon-167x167.png",
            "sizes": "167x167",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/ios/apple-touch-icon-180x180.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/windows/tile-44x44.png",
            "sizes": "44x44",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/windows/tile-150x150.png",
            "sizes": "150x150",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/windows/tile-310x150.png",
            "sizes": "310x150",
            "type": "image/png"
          },
          {
            "src": "/bbl-legends/icons/windows/tile-310x310.png",
            "sizes": "310x310",
            "type": "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          }
        ]
      }
    })
  ],
})
