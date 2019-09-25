const mockLoginData = require("./mock/login.json")

module.exports = {
  devServer: {
    port: 8081,
    before(app) {
      app.post("/api/login", (req, res) => {
        res.json(mockLoginData)
      })
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
