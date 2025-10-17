import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Jangan hentikan build walaupun ada error ESLint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
