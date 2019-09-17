function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default {
  install(Vue, options = {}) {
    let isSupported = true
    try {
      let key = uuidv4()
      window.localStorage.setItem(key, 'test')
      let value = window.localStorage.getItem(key)
      if (value !== 'test') {
        isSupported = false
      }
      window.localStorage.removeItem(key)
    } catch (error) {
      isSupported = false
      console.log('localStorage is not supported')
    }

    if (!isSupported) {
      return
    }

    
  }
}