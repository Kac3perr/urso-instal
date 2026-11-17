
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: process.env.NODE_ENV === "production" ? "/urso-instal" : "",

  images: {
    unoptimized: true,
  },

  experimental: {
    agentFeedback: true,
  },

  // Static Export nie korzysta z PPR ani Cache Components.
  cacheComponents: false,
  partialPrefetching: false,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
