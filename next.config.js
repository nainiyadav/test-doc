/** @type {import('next').NextConfig} */
const withMarkdoc = require('@markdoc/next.js');
const nextConfig = {
  reactStrictMode: true,
}
module.exports = withMarkdoc()({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  nextConfig
 });
