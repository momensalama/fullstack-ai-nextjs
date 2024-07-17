/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add .cjs and .cts extensions to resolve
    config.resolve.extensions.push(".cjs", ".cts");

    // Add a rule to handle .cjs and .cts files
    config.module.rules.push({
      test: /\.cjs$/,
      type: "javascript/auto",
    });

    // Ensure langchain modules are properly resolved
    if (!isServer) {
      config.resolve.fullySpecified = false;
    }

    config.module.rules.push({
      test: /node_modules\/langchain/,
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
};

export default nextConfig;
