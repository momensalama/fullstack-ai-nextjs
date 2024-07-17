/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push("@langchain/core/tools");
    }
    return config;
  },
};

export default nextConfig;
