import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deploy target: GitHub Pages at aegis.clarvix.net (static host, no
  // Node runtime available) — matches the rest of Clarvix's subdomains.
  output: "export",
  images: {
    // Static export can't run the on-demand image optimization API.
    unoptimized: true,
  },
};

export default nextConfig;
