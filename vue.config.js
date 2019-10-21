// const devServerConfig = require('./dev-server.config')
module.exports = Object.assign({
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 10000,
        maxSize: 200000,
      }
    }
  }
})
