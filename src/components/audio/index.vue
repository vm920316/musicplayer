<template>
  <audio
    id="player"
    preload="auto"
    @timeupdate="updateTime"
    @progress="fetchDuration"
    @playing="fetchDuration"
    @load="fetchDuration"
    @canplay="fetchDuration"
    @ended="ended"
    v-control="{beginPlay, muted, currentTime, url}"
  >
    <source
      :src="url"
      type="audio/mpeg"
    >
  </audio>
</template>

<script>
export default {
  name: 'gl-audio',
  props: {
    url: {
      type: String
    },
    beginPlay: {
      type: Boolean
    },
    muted: {
      type: Boolean
    },
    currentTime: {
      type: Number
    }
  },
  methods: {
    updateTime(e) {
      this.$emit('fetchCurrentTime', e.target.currentTime)
    },
    fetchDuration(e) {
      this.$emit('fetchDuration', e.target.duration || 0)
    },
    ended() {
      this.$emit('ended', true)
    }
  },
  directives: {
    control(el, binding) {
      var old = binding.oldValue
      var val = binding.value

      controlInvoker(el, val, old, 'beginPlay', (el, newVal) => {
        if (newVal) {
          if (el.currentTime === 0) {
            el.load()
          }
          setTimeout(() => {
            el.play()
          })
        } else {
          el.pause()
        }
      })

      controlInvoker(el, val, old, ['muted', 'currentTime', 'url'], (el, newVal, oldVal, key) => {
        el[key] = newVal
        if (key === 'url') {
          el.load()
          if (val.beginPlay) {
            setTimeout(() => {
              el.play()
            })
          }
        }
      })

      function controlInvoker(el, val, old, keys, cb) {
        if (!Array.isArray(keys)) {
          keys = [keys]
        }
        keys.forEach(key => {
          if (old && val && val[key] === old[key]) {
            return
          }
          cb(el, val && val[key], old && old[key], key)
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
