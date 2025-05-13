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
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*).(webp|avif|png|jpg|jpeg|gif|svg)",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=604800",
  //         },
  //       ],
  //     },
  //     {
  //       source: "/(.*).json",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=604800", 
  //         },
  //       ],
  //     },
  //   ];
  // },
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