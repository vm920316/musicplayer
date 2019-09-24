let cookieProvider = (function () {
  var cookie = {
    expiry: 30,
    path: '/'
  }

  var browserSupportsCookies = (function () {
    try {
      return window.navigator.cookieEnabled ||
        ('cookie' in document && (document.cookie.length > 0 ||
          (document.cookie = 'test').indexOf.call(document.cookie, 'test') > -1))
    } catch (e) {
      console.error(e.message)
      return false
    }
  }())

  let deriveQualifiedKey = function (key) {
    return key
  }

  var add = function (key, value) {
    if (!browserSupportsCookies) {
      console.error('COOKIES_NOT_SUPPORTED')
      return false
    }
    try {
      let expiry = ''
      let expiryDate = new Date()
      let cookieDomain = ''
      if (value === null) {
        expiryDate.setTime(expiryDate.getTime() + (-1 * 24 * 60 * 60 * 1000))
        expiry = '; expires=' + expiryDate.toGMTString()
        value = ''
      } else if (cookie.expiry !== 0) {
        expiryDate.setTime(expiryDate.getTime() + (cookie.expiry * 24 * 60 * 60 * 1000))
        expiry = '; expires=' + expiryDate.toGMTString()
      }
      if (key) {
        let cookiePath = '; path=' + cookie.path
        if (cookie.domain) {
          cookieDomain = '; domain=' + cookie.domain
        }
        document.cookie = deriveQualifiedKey(key) + '=' + encodeURIComponent(value) + expiry + cookiePath + cookieDomain
      }
    } catch (e) {
      console.error(e.message)
      return false
    }
    return true
  }

  var get = function (key) {
    if (!browserSupportsCookies) {
      console.error('COOKIES_NOT_SUPPORTED')
      return false
    }
    let cookies = (document.cookie && document.cookie.split(';')) || []
    for (let i = 0; i < cookies.length; i++) {
      let thisCookie = cookies[i]
      while (thisCookie.charAt(0) === ' ') {
        thisCookie = thisCookie.substring(1, thisCookie.length)
      }
      if (thisCookie.indexOf(deriveQualifiedKey(key) + '=') === 0) {
        let storedValues = decodeURIComponent(thisCookie.substring(key.length + 1, thisCookie.length))
        try {
          return storedValues
        } catch (e) {
          return storedValues
        }
      }
    }
    return null
  }

  var clear = function () {
    let thisCookie = null
    let cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      thisCookie = cookies[i]
      while (thisCookie.charAt(0) === ' ') {
        thisCookie = thisCookie.substring(1, thisCookie.length)
      }
      let key = thisCookie.substring(0, thisCookie.indexOf('='))
      this.removeItem(key)
    }
  }

  var getCookies = function () {
    return (document.cookie && document.cookie.split(';')) || []
  }

  return {
    get: get,
    add: add,
    clear: clear,
    getAll: getCookies
  }
})()

class CookieStorage {
  get length () {
    return cookieProvider.getAll().length
  }

  getItem (key) {
    return cookieProvider.get(key)
  }

  setItem (key, value) {
    return cookieProvider.add(key, value)
  }

  removeItem (key) {
    return this.setItem(key, null)
  }

  clear () {
    return cookieProvider.clear()
  }

  key (index) {
    const cookies = cookieProvider.getAll()
    const cookie = cookies[index]
    if (cookie) {
      return cookie.split('=')[0].trim()
    }

    return null
  }
}

export default new CookieStorage()
