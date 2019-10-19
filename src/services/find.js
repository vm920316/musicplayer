import Vue from 'vue'
export default {
  findPageData() {
    return new Promise((resolve) => {
      Vue.http.get('/api/find', { cache: true }).then(response => {
        if (response.status === 200) {
          resolve(response.data || {})
        }
      }, () => {
        resolve({})
      })
    })
  },
  navItems() {
    return new Promise((resolve) => {
      Vue.http.get('/api/find/nav-items', { cache: true }).then(response => {
        if (response.status === 200) {
          resolve(response.data || [])
        }
      }, () => {
        resolve([])
      })
    })
  }
}
