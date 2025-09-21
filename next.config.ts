import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ tells Next.js to skip ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
