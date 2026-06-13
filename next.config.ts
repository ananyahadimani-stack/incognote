/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mongoose'],

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

module.exports = nextConfig;