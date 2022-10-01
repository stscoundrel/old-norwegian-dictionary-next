const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
})

module.exports = withPWA({
  sassOptions: {
    prependData: `
        @import 'styles/variables';
        @import 'styles/media-queries';
        @import 'styles/rem';
      `,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
})
