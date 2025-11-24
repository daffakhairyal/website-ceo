import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "nginx-server",
        port: "8000",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
