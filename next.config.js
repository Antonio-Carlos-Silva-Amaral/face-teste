/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  async headers() {
    return [
      {
        source: '/facebook.png',
        headers: [
          {
            key: 'Link',
            value: '</favicon.ico>; rel="icon"; type="image/png"', // Tipo MIME corrigido
          },
        ],
      },
    ]
  },
}
