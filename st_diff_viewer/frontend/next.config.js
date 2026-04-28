/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "./",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    "streamlit-component-lib-react-hooks",
    "streamlit-component-lib",
  ],
};

module.exports = nextConfig;
