import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // English is the default entry point; Arabic lives under /ar.
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
