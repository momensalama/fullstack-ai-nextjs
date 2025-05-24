/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["langchain", "@langchain/core"],
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default nextConfig;
