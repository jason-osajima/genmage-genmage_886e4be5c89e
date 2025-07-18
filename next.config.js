/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    PORT: process.env.PORT || '3000',
    HOST: process.env.HOST || '0.0.0.0',
  },
}

module.exports = nextConfig