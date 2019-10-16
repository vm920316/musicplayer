const mockLoginData = require('./mock/login.json')
const mockNavItems = require('./mock/navItems.json')
const mockFindData = require('./mock/find.json')
module.exports = {
  devServer: {
    port: 8081,
    before(app) {
      app.post('/api/login', (req, res) => {
        res.json(mockLoginData)
      })
      app.get('/api/find', (req, res) => {
        res.json(mockFindData)
      })
      app.get('/api/navItems', (req, res) => {
        res.json(mockNavItems)
      })
    }
  }
}
