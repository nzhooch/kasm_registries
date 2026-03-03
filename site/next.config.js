/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Chris Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://nzhooch.github.io/kasm_registries/',
    contactUrl: 'https://github.com/nzhooch/kasm_registries/issues'
  },
  reactStrictMode: true,
  basePath: '/kasm_registries/1.0',
    trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
