import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // For GitHub Pages with repository name in the URL path
  basePath: '/pizzeria-showcase',
  images: {
    unoptimized: true, // Required for static export
  },
  /* config options here */
};

export default nextConfig;
