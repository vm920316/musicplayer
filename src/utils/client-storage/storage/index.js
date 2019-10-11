import Storage from './storage'
import cookieStorage from './cookieStorage'

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0
    let v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export default function getStorage(options) {
  let storageObj
  if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
    try {
      let key = `musicplayer-${uuidv4()}`
      window.localStorage.setItem(key, 'test')
      let value = window.localStorage.getItem(key)
      if (value === 'test') {
        storageObj = window.localStorage
      }
      window.localStorage.removeItem(key)
    } catch (error) {
      // hold the exception
    }
  }

  storageObj = storageObj || cookieStorage

  const storage = new Storage(storageObj, options)
  return storage
}
