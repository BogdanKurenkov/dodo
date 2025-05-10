import type { NextConfig } from "next";
const { i18n } = require("./next-i18next.config");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n,
  serverRuntimeConfig: {
    siteUrl: process.env.SITE_URL || "https://lab-preview.vercel.app",
  },
  publicRuntimeConfig: {},
  pageExtensions: [
    "index.tsx",
    "index.ts",
    "index.jsx",
    "index.js",
    "tsx",
    "jsx",
    "js",
  ],
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      pure: true,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.(woff|woff2)$/,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
