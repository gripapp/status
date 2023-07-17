/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: production ? '/status' : '',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/status',
}

module.exports = nextConfig
