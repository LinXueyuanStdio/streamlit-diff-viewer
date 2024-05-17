/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/component/st-diff-viewer.st-diff-viewer",
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
