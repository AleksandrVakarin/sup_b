import type { MetadataRoute } from 'next'

interface ExtendedManifest extends MetadataRoute.Manifest {
  yandex?: {
    pwa_version: string;
    ui_theme: 'light' | 'dark' | 'system';
  };
}

export default function manifest(): ExtendedManifest {
  return {
    name: 'Sup board rent',
    short_name: 'Sup rent',
    description: 'Sup board rent',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icons/icon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/icons/icon-144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icons/icon-1024.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
    yandex: {
      pwa_version: '1.0',
      ui_theme: 'dark',
    },
  }
}