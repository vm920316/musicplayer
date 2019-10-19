<template>
  <div class="list">
    <div>
      <div class="list-head">
        <!-- <div class="list-icon"></div> -->
        <img
          class="list-icon"
          @click="play(0)"
          src="~@/assets/playbtnblack-icon.png"
        >
        <div
          class="list-title"
          @click="play(0)"
        >
          播放全部
        </div>
        <div class="list-collection">
          +收藏
        </div>
      </div>
      <song-item
        v-for="(song, i) in songs"
        :key="i"
        :song="{...song, index: i}"
        @play="play(i)"
      ></song-item>
      <div class="list-footer"></div>
    </div>
  </div>
</template>

<script>
import { SONG_LIST } from '@/utils/contants'
import SongItem from './song-item'
export default {
  name: 'song-list',
  components: {
    SongItem
  },
  props: {
    songs: {
      type: Array,
      default() {
        return [{
          name: '',
          author: '',
          url: '',
          image: ''
        }]
      }
    }
  },
  methods: {
    play(i) {
      const song = this.songs[i]
      this.$store.commit('Play/changeSong', song)
      this.$store.commit('Play/setSongList', this.songs.slice())
      this.$nextTick(() => {
        this.$store.commit('Play/toPlay')
        this.$store.commit('Play/openDialog')
      })
    },
    isCurrent(i) {
      const currentSong = this.$store.state.Play.songInfo
      const songs = this.songs || []
      if (!currentSong || !songs.length || !songs[i]) {
        return false
      }

      return currentSong.name === this.songs && this.songs[i].name
    }
  },
  watch: {
    songs: {
      deep: true,
      handler(val) {
        this.$ls.set(SONG_LIST, val || [])
      }
    }
  }
}
</script>

<style scoped>
.list {
  height: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.list > div {
  width: 90%;
  text-align: center;
  margin: 0px auto;
}
.list-head {
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding-top: 5px;
}
.list-head .list-icon {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin-top: 5px;
}
.list-head .list-title {
  width: 50%;
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: left;
}
.list-head .list-collection {
  width: 30%;
  height: 40px;
  border-radius: 20px;
  background: linear-gradient(rgb(250, 146, 177), rgb(250, 166, 117));
  line-height: 40px;
  color: white;
  font-size: 17px;
  letter-spacing: 2px;
}
.list-footer {
  height: 80px;
}
</style>
