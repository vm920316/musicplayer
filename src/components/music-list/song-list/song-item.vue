<template>
  <div class="hot-item">
    <div class="hot-item-num">
      {{ song.index + 1 }}
    </div>
    <div
      class="hot-item-content"
      @click="play"
    >
      <div
        class="content-title"
        :class="{ 'current-item': isCurrent }"
      >
        {{ song.name }}
      </div>
      <div class="content-text">
        {{ `${song.author} - ${song.name} ` }}
      </div>
    </div>
    <div class="hot-item-like">
      ...
    </div>
  </div>
</template>

<script>
export default {
  name: 'song-item',
  props: {
    song: {
      type: Object,
      default() {
        return {
          name: '',
          author: '',
          index: 0
        }
      }
    }
  },
  methods: {
    play() {
      this.$emit('play')
    }
  },
  computed: {
    isCurrent() {
      const currentSong = this.$store.state.Play.songInfo
      if (!currentSong) {
        return false
      }

      return currentSong === this.song || (currentSong.name === this.song.name && currentSong.author === this.song.author)
    }
  }
}
</script>

<style>
.hot-item {
  display: flex;
  justify-content: space-between;
  height: 60px;
}
.hot-item .current-item {
  font-weight: bold;
  color: brown;
}
.hot-item-num {
  width: 10%;
  line-height: 60px;
  font-size: 20px;
  color: rgb(255, 0, 0);
  text-align: left;
}
.hot-item-content {
  width: 65%;
}

.content-title {
  text-align: left;
  height: 30px;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.content-text {
  text-align: left;
  height: 30px;
  color: rgb(134, 134, 134);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.hot-item-like {
  width: 25%;
  line-height: 60px;
  text-align: right;
  letter-spacing: 3px;
}
</style>
