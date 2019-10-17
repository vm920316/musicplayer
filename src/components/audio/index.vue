<template>
  <audio
    id="player"
    @timeupdate="updateTime"
    @progress="fetchDuration"
    @playing="fetchDuration"
    v-control="{beginPlay, muted, currentTime}"
  >
    <source
      src="../../../music-sources/your_eyes.mp3"
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
    }
  },
  directives: {
    control(el, binding) {
      var old = binding.oldValue
      var val = binding.value
      play(el, val, old)
      mute(el, val, old)
      changeCurrentTime(el, val, old)

      function changeCurrentTime(el, val, old) {
        if (old && val.currentTime === old.currentTime) {
          return
        }
        el.currentTime = val.currentTime
      }
      function mute(el, val, old) {
        if (old && val.muted === old.muted) {
          return
        }

        el.muted = val.muted
      }
      function play(el, val, old) {
        if (old && old.beginPlay === val.beginPlay) {
          return
        }
        if (val.beginPlay) {
          el.play()
        } else {
          el.pause()
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
