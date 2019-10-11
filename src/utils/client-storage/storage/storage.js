function isQuotaExceeded(e) {
  var quotaExceeded = false
  if (!e) {
    return quotaExceeded
  }
  if (e.code) {
    switch (e.code) {
      case 22:
        quotaExceeded = true
        break
      case 1014:
        // Firefox
        if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
          quotaExceeded = true
        }
        break
    }
  } else if (e.number === -2147024882) {
    // Internet Explorer 8
    quotaExceeded = true
  }
  return quotaExceeded
}

export default class Storage {
  constructor(storage, options) {
    this.storage = storage
    this.options = Object.assign({
      namespace: '',
      expire: 1000 * 60 * 60 * 24
    }, options || {})
  }

  get namespace() {
    return this.options.namespace
  }

  get length() {
    return this.storage.length
  }

  set(name, value) {
    let toStore = {
      created: Date.now(),
      value
    }

    const storeFn = () => {
      this.storage.setItem(this.namespace + name, JSON.stringify(toStore))
    }

    try {
      storeFn()
    } catch (e) {
      if (isQuotaExceeded(e)) {
        this.clear()
        storeFn()
      } else {
        throw e
      }
    }
  }

  get(name, def = null) {
    const item = this.storage.getItem(this.namespace + name)
    if (item != null) {
      try {
        const parsedData = JSON.parse(item)
        if (!this.options.expire || Date.now() - this.options.expire < parsedData.created) {
          return parsedData.value
        }

        this.remove(name)
      } catch (e) {
        console.error(e)
      }
    }

    return def
  }

  key(index) {
    return this.storage.key(index)
  }

  remove(name) {
    return this.storage.removeItem(this.namespace + name)
  }

  clear() {
    if (!this.length) {
      return
    }

    const removedKeys = []

    for (let i = 0; i < this.length; i++) {
      const key = this.storage.key(i)
      const regex = new RegExp(`^${this.namespace}.+`, 'i')
      if (!regex.test(key)) {
        continue
      }

      removedKeys.push(key)
    }

    for (let key of removedKeys) {
      this.storage.removeItem(key)
    }
  }
}
