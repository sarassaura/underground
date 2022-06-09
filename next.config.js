/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    contentSecurityPolicy: `img-src * 'self' data:;`,
  },
}

