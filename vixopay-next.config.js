/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeholder.com"],
    unoptimized: true, // Ensure images are not blocked
  },
  // Enable PWA features
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  async headers() {
    return [
      {
        source: "/manifest.webmanifest",
        headers: [{ key: "Content-Type", value: "application/manifest+json" }],
      },
    ];
  },
};

module.exports = nextConfig;
