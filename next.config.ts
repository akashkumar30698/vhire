import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    // Add server/app directory to resolve modules
    config.resolve.modules.push(path.resolve(__dirname, 'server', 'app'));
    
    return config;
  },
};

export default nextConfig;
