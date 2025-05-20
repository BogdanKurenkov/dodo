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
  async headers() {
    return [
      {
        source: "/(.*).(webp|avif|png|jpg|jpeg|gif|svg|webm|mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable",
          },
        ],
      },
      {
        source: "/(.*).json",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800",
          },
        ],
      },
      {
        source: "/(.*).(mp4|webm|mov|ogg|hevc)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Accept-Ranges",
            value: "bytes",
          },
          {
            key: "Content-Type",
            value: "video/mp4",
          },
        ],
      },
    ];
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

    config.module.rules.push({
      test: /\.(mp4|webm|mov|ogg|hevc)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    return config;
  },
};

export default nextConfig;
