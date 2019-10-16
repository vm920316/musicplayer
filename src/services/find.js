import Vue from 'vue'
export default {
  findPageData() {
    return new Promise((resolve) => {
      Vue.http.get('/api/find').then(response => {
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
      Vue.http.get('/api/navItems').then(response => {
        if (response.status === 200) {
          resolve(response.data || [])
        }
      }, () => {
        resolve([])
      })
    })
  }
}
