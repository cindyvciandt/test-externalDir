module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
    esmExternals: false,
    // externalDir: true, // these breaks the app
  },
  webpack: (config) => {
    console.log(config)
    return config
  }
};
