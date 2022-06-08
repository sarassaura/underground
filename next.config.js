/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/public',
        headers: [
          {
            key: 'content-security-policy',
            value: 'off',
          },
        ],
      },
    ]
  },
}

