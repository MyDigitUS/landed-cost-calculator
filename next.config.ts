import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration
  turbopack: {
    root: process.cwd(),
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options", 
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
