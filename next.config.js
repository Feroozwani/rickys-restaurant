/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickyrestaurants.com',
        pathname: '/wp-content/**',
      },
    ],
  },
};

module.exports = nextConfig;
