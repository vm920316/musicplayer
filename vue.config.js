const devServerConfig = require('./dev-server.config')
module.exports = Object.assign({
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}, devServerConfig)
