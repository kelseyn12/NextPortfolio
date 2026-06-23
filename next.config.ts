import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/short-form',
        destination: 'https://ugc.kelseynocek.com',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
