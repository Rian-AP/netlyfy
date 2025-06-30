/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <<< это ключ к GitHub Pages

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
