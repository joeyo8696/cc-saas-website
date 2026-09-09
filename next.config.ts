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
  async redirects() {
    return [
      // Permanent 301s — preserve SEO equity from old solution URLs
      {
        source: '/solutions/intake',
        destination: '/intakeos',
        permanent: true,
      },
      {
        source: '/solutions/intake/:path*',
        destination: '/intakeos',
        permanent: true,
      },
      {
        source: '/solutions/dwellex',
        destination: '/dwellex',
        permanent: true,
      },
      {
        source: '/solutions/dwellex/:path*',
        destination: '/dwellex',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
