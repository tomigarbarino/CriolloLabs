const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      ...['work/:path*', 'builds/:path*', 'services', 'empresas', 'carrera'].map(path => ({ source: `/:locale(es|en)/${path}`, destination: '/es', permanent: false })),
      { source: '/:locale(es|en)/contact', destination: '/es#contacto', permanent: false },
      { source: '/en', destination: '/en/quote-follow-up', permanent: false },
    ]
  },
  transpilePackages: ['three'],
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    })
    return config
  },
}

module.exports = withNextIntl(nextConfig)
