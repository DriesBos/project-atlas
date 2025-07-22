import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: '',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: '**.storyblok.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
