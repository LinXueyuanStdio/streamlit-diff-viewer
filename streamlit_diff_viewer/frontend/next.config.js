/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/component/streamlit_diff_viewer.streamlit_diff_viewer",
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
