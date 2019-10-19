import axios from 'axios'
import hash from '@/utils/hash'
import getStorage from '@/utils/client-storage/storage'
import { TOKEN_KEY } from '@/utils/contants'
let storage

function getDescriptor(key) {
  return {
    configurable: false,
    enumerable: false,
    get() {
      return axios
    },
    set() {
      console.error(`can not change ${key}`)
    }
  }
}

function isError(response) {
  return !response || (response.data && response.data.ErrorCode) ||
    (response.data && response.data.Message && response.data.MessageDetail) ||
    (response.data && response.data.Message && Object.getOwnPropertyNames(response.data).length === 1)
}

function configAxios(options) {
  axios.defaults.baseURL = options.baseURL || axios.defaults.baseURL
  const adapter = axios.defaults.adapter
  axios.interceptors.request.use(function (config) {
    if (config.cache && config.method.toLowerCase() === 'get') {
      config.adapter = (config) => {
        const cacheKey = hash({
          url: config.url,
          params: config.params
        })
        const cacheData = storage.get(cacheKey)
        if (cacheData) {
          let response = {
            data: cacheData,
            status: 200,
            statusText: 'OK'
          }
          return new Promise((resolve, reject) => {
            resolve(response)
          })
        } else {
          return adapter(config)
        }
      }
    }

    const token = storage.get(TOKEN_KEY)
    config.headers.Authorization = token ? `Bearer ${token}` : 'Bearer token'
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(function (response) {
    if (isError(response)) {
      Promise.reject(response)
    }

    if (response.config && response.config.cache && response.config.method === 'get' && response.status === 200) {
      let cacheKey = hash({
        url: response.config.url,
        params: response.config.params
      })
      storage.set(cacheKey, response.data)
    }
    return response
  }, function (error) {
    if (error.message && error.message.indexOf('401') && window.location.pathname !== '/login') {
      window.location.href = `/login?redirect=${encodeURIComponent(window.location.href)}&needAuth=true`
    }
    return Promise.reject(error)
  })
}

export default {
  install(Vue, options) {
    options = options || {}
    storage = Vue.ls ? Vue.ls : getStorage(options)
    Object.defineProperty(Vue.prototype, '$http', getDescriptor('Vue.prototype.$http'))
    Object.defineProperty(Vue, 'http', getDescriptor('Vue.http'))
    Object.defineProperty(window, 'http', getDescriptor('window.http'))

    configAxios(options)
  }
}
