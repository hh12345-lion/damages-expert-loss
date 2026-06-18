import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/faq", destination: "/how-to-instruct", permanent: true },
      { source: "/fees", destination: "/how-to-instruct", permanent: true },
      { source: "/experts", destination: "/qualifications", permanent: true },
    ];
  },
};

export default nextConfig;
