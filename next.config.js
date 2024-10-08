/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/photo/**",
      },
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
        port: "",
        pathname: "/weather/**",
      },
      {
        protocol: "https",
        hostname: "api.ipify.org",
        port: "80",
        pathname: "/?format=json",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/current-weather",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
