/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // GitHub Pages has no image optimizer; serve pre-optimized assets.
    unoptimized: true,
  },
};

export default nextConfig;
