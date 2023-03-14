export default {
  distDir: 'build-' + process.env.NODE_ENV,
  output: 'standalone',
  sassOptions: {
    includePaths: [
      './styles'
    ]
  },
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  }
};
