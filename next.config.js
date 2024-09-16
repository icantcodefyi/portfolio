/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "repository-images.githubusercontent.com",
      "github.com",
      "cdn2.thecatapi.com",
      
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
