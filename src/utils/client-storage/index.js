import getStorage from './storage'
export default {
  install (Vue, options = {}) {
    const storage = getStorage(options)
    const getLsDescripter = (name) => {
      return {
        configurable: false,
        enumerable: false,
        get () {
          return storage
        },
        set () {
          console.error(`can not set the ${name}`)
        }
      }
    }

    Object.defineProperty(Vue.prototype, '$ls', getLsDescripter('$ls'))

    Object.defineProperty(Vue, 'ls', getLsDescripter('ls'))

    Object.defineProperty(window, 'VueLocalStorage', getLsDescripter('VueLocalStorage'))
  }
}
