/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gobag-media.s3.amazonaws.com', 'd3iebby00nbtu7.cloudfront.net'],
  },
};

module.exports = nextConfig;
