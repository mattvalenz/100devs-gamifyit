import type { NextConfig } from "next";

module.exports = {
  allowedDevOrigins: ['127.0.0.1'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      }
    ]
  }
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;