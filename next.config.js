import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow images from Sanity CDN
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Redirect /studio to Sanity Studio embedded route
  async redirects() {
    return []
  },
}

export default nextConfig
