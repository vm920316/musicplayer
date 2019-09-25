import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Storage from './utils/client-storage'
import Http from './utils/http'
import { NAMESPACE } from './utils/contants'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(Storage, {
  namespace: NAMESPACE
})

Vue.use(Http, {
  namespace: NAMESPACE
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
