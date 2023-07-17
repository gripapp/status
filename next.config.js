/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: production ? '/gripstatus' : '',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/gripstatus',
}

module.exports = nextConfig
