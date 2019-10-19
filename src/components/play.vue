<template>
  <div class="play">
    <div class="head">
      <!-- <div class="back"></div> -->
      <img
        class="back"
        @click="goBack"
        src="~@/assets/back-icon.png"
      >
      <div class="song-name">
        <div class="song-content">
          {{ songInfo.name }}
        </div>
        <div class="player">
          {{ songInfo.author }}>
        </div>
      </div>
      <!-- <div class="share"></div> -->
      <img
        class="share"
        src="~@/assets/share-icon.png"
      >
    </div>

    <div class="main">
      <!-- <div class="play-bar"></div> -->
      <img
        class="play-bar"
        :class="{'play-bar-rotate': playing}"
        src="~@/assets/bar-icon.png"
      >
      <div
        class="disk"
        :style="{'animation-play-state': animationPlayState}"
      >
        <div class="disk-black">
          <!-- <div class="disk-pho"></div> -->
          <img
            :src="songInfo.image"
            class="disk-pho"
          >
        </div>
      </div>
      <div class="opinion">
        <img
          class="opinion-item"
          src="~@/assets/like-icon.png"
        >
        <img
          class="opinion-item"
          src="~@/assets/download-icon.png"
        >
        <img
          class="opinion-item"
          src="~@/assets/new-icon.png"
        >
        <img
          class="opinion-item"
          src="~@/assets/review-icon.png"
        >
        <img
          class="opinion-item"
          src="~@/assets/more-icon.png"
        >
      </div>
    </div>

    <div class="footer">
      <div class="progress">
        <span class="current-time">{{ currentTime | formatTime }}</span>
        <div
          class="progress-bar"
          @click="changeCurrent"
        >
          <div
            class="progress-dot"
            :style="{ left: progressPercent + '%' }"
          ></div>
        </div>
        <span class="duration">{{ duration | formatTime }}</span>
      </div>
      <div class="play-zone">
        <!-- <div class="play-mode"></div> -->
        <img
          class="play-mode"
          src="~@/assets/playmode-icon.png"
        >
        <div class="play-moment">
          <img
            class="last-song"
            @click="playSong(-1)"
            src="~@/assets/last-icon.png"
          >
          <img
            class="play-song"
            @click="playOrPause"
            :src="require('@/assets/' + playIcon)"
          >
          <img
            @click="playSong(1)"
            class="next-song"
            src="~@/assets/next-icon.png"
          >
        </div>
        <div
          class="play-list"
          @click="changeModalStatus(true)"
        >
          <img src="~@/assets/list-icon.png">
        </div>
      </div>
    </div>
    <music-modal
      :open="openModal"
      @close="changeModalStatus(false)"
    >
      <song-list :songs="songList"></song-list>
    </music-modal>
    <audio-player
      :url="songInfo.url"
      :begin-play="playing"
      :current-time="changedCurrentTime"
      @fetchCurrentTime="fetchCurrentTime"
      @fetchDuration="fetchDuration"
      @ended="ended"
    ></audio-player>
  </div>
</template>

<script>
import AudioPlayer from '@/components/audio'
import { SONG_PLAYING, CURRENT_SONG, SONG_LIST } from '@/utils/contants'
import MusicModal from '@/components/music-list-modal'
import SongList from '@/components/music-list/song-list'
export default {
  name: 'play-dialog',
  components: {
    AudioPlayer: AudioPlayer,
    MusicModal,
    SongList
  },
  data() {
    return {
      currentTime: 0,
      changedCurrentTime: 0,
      duration: 0,
      openModal: false
    }
  },
  mounted() {
    let song = this.$store.state.Play.song || this.$ls.get(CURRENT_SONG)
    const songList = this.songList.length ? this.songList : this.$ls.get(SONG_LIST) || []
    if (!song && songList.length) {
      song = songList[0]
    }
    this.$store.commit('Play/setSongList', songList)
    this.$store.commit('Play/changeSong', song)
  },
  computed: {
    progressPercent() {
      if (!this.duration) {
        return 0
      }
      var result = this.currentTime * 100 / this.duration
      return result * 0.97
    },
    playIcon() {
      return this.playing ? 'playbtn-icon.png' : 'pausebtn-icon.png'
    },
    animationPlayState() {
      return this.playing ? 'running' : 'paused'
    },
    playing() {
      return this.$store.state.Play.playing
    },
    songInfo() {
      return this.$store.state.Play.songInfo || {}
    },
    songIndex() {
      return this.$store.getters['Play/songIndex']
    },
    songList() {
      return this.$store.state.Play.songList || []
    }
  },
  methods: {
    goBack() {
      this.$store.commit('Play/closeDialog')
    },
    playOrPause() {
      const action = this.playing ? 'toPause' : 'toPlay'
      this.$store.commit(`Play/${action}`)
    },
    fetchCurrentTime(c) {
      this.currentTime = c
    },
    fetchDuration(d) {
      this.duration = d
    },
    changeCurrent(e) {
      var rect = e.target.getBoundingClientRect()
      this.changedCurrentTime = this.duration * (e.clientX - rect.left) / rect.width
    },
    playSong(num) {
      const index = this.songIndex === -1 ? 0 : this.songIndex + num
      this.$store.commit('Play/changeSongByIndex', index)
    },
    ended() {
      this.playSong(1)
    },
    changeModalStatus(val) {
      this.openModal = val
    }
  },
  filters: {
    formatTime(val) {
      var minutes = wrapWithPrefix(Math.floor(val / 60))
      var seconds = wrapWithPrefix(Math.floor(val % 60))

      return `${minutes}:${seconds}`

      function wrapWithPrefix(v) {
        if (v < 10) {
          return `0${v}`
        }

        return v.toString()
      }
    }
  },
  watch: {
    playing: {
      handler(val) {
        this.$ls.set(SONG_PLAYING, val)
      }
    },
    songList: {
      deep: true,
      handler(val) {
        if (!val || !val.length) {
          return
        }

        this.$ls.set(SONG_LIST, val)
      }
    },
    songInfo(val, old) {
      this.$ls.set(CURRENT_SONG, val)
      if (!old) {
        return
      }
      this.currentTime = 0
      this.changedCurrentTime = 0
    }
  }
}
</script>

<style scoped>
.play {
  background: linear-gradient(rgb(250, 146, 177), rgb(250, 166, 117));
  position: absolute;
  height: 100%;
  width: 100%;
}
.head {
  width: 90%;
  text-align: center;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;
}
.back,
.share {
  width: 40px;
  height: 40px;
}
.song-name {
  width: 60%;
  height: 40px;
  letter-spacing: 1px;
}
.song-content {
  height: 22px;
  font-size: 16px;
  line-height: 22px;
  color: rgb(240, 240, 240);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.player {
  height: 18px;
  font-size: 11px;
  line-height: 18px;
  color: rgb(230, 230, 230);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.play-bar {
  width: 140px;
  height: 140px;
  /* background-color: blue; */
  margin: 0px auto;
  position: absolute;
  top: 70px;
  left: 45%;
  z-index: 1;
  transform-origin: 13.5px 13.5px;
  transition: transform 1s;
}

.play-bar-rotate {
  transform: rotate(30deg);
  transform-origin: 13.5px 13.5px;
  transition: transform 1s;
}

.disk {
  width: 260px;
  height: 260px;
  background-color: rgb(255, 255, 255, 0.3);
  border-radius: 150px;
  margin: 80px auto 0px;
  position: relative;
  animation: spin 4s infinite linear;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.disk-black {
  width: 240px;
  height: 240px;
  border-radius: 120px;
  background-image: url("~@/assets/disk-icon.png");
  background-repeat: no-repeat;
  position: absolute;
  margin: 10px;
  /* box-shadow: 2px 2px 5px #888888; */
}
.disk-pho {
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: white;
  position: absolute;
  margin: 50px;
}
.opinion {
  width: 90%;
  /* height: 60px; */
  margin: 50px auto 0px;
  display: flex;
  justify-content: space-between;
}
.opinion-item {
  width: 30px;
  height: 30px;
}

.footer {
  margin: 0px auto;
  width: 90%;
  /* height: 120px; */
}
.progress {
  margin: 15px auto 20px;
  height: 20px;
}
.progress-bar {
  height: 2px;
  background-color: pink;
  display: inline-block;
  width: 75%;
  margin: 2px 0px;
  position: relative;
}
.current-time,
.duration {
  display: inline-block;
  width: 10%;
  font-size: 10px;
  color: white;
}
.current-time {
  text-align: left;
  margin-right: 5px;
}
.duration {
  text-align: right;
  margin-left: 5px;
}
.progress-dot {
  position: absolute;
  bottom: -3px;
  height: 8px;
  width: 8px;
  border-radius: 5px;
  background-color: rgb(184, 27, 27);
}

.play-zone {
  height: 70px;
  display: flex;
  justify-content: space-between;
}
.play-mode,
.play-list {
  width: 40px;
  height: 40px;
  margin: 10px 0px;
}
.play-list > img {
  width: 100%;
  height: 100%;
}
.play-moment {
  width: 60%;
  display: flex;
  justify-content: space-between;
}

.play-moment .last-song,
.play-moment .next-song {
  width: 40px;
  height: 40px;
  margin: 10px 0px;
}
.play-moment .play-song {
  width: 60px;
  height: 60px;
}
</style>
