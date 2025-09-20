import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["next-themes"],
  },
};

export default nextConfig;
