export default class Storage {
  constructor (storage, options) {
    this.storage = storage
    this.options = Object.assign({
      namespace: ''
    }, options || {})
  }

  get namespace () {
    return this.options.namespace
  }

  get length () {
    return this.storage.length
  }

  set (name, value) {
    this.storage.setItem(this.namespace + name, JSON.stringify(value))
  }

  get (name, def = null) {
    const item = this.storage.getItem(this.namespace + name)
    if (item != null) {
      try {
        return JSON.parse(item)
      } catch (e) {
        return item
      }
    }

    return def
  }

  key (index) {
    return this.storage.key(index)
  }

  remove (name) {
    return this.storage.removeItem(this.namespace + name)
  }

  clear () {
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
