/** @type {import('next').NextConfig} */
const nextConfig = {}
const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM();
module.exports = nextConfig;
// next.config.js
module.exports = {
    images: {
      domains: ['source.unsplash.com'],
    },
  };
  