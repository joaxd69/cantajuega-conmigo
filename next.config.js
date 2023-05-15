/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.cantajuegaconmigo.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
