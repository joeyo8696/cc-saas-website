import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "/Users/jorganisciak/Documents/Code/cc-saas-website",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev',
      },
    ],
  },
};

export default nextConfig;
