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
          我还想她
        </div>
        <div class="player">
          林俊杰>
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
        src="~@/assets/bar-icon.png"
      >
      <div class="disk">
        <div class="disk-black">
          <!-- <div class="disk-pho"></div> -->
          <img
            src="http://pic28.nipic.com/20130401/10857451_144522260134_2.jpg"
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
          <!-- <div class="last-song"></div>
          <div class="play-song"></div>
          <div class="next-song"></div> -->
          <img
            class="last-song"
            src="~@/assets/last-icon.png"
          >
          <img
            class="play-song"
            @click="playOrPause"
            :src="require('@/assets/' + playIcon)"
          >
          <img
            class="next-song"
            src="~@/assets/next-icon.png"
          >
        </div>
        <!-- <div class="play-list"></div> -->
        <img
          class="play-list"
          src="~@/assets/list-icon.png"
        >
      </div>
    </div>
    <audio-player
      :begin-play="beginPlay"
      :current-time="changedCurrentTime"
      @fetchCurrentTime="fetchCurrentTime"
      @fetchDuration="fetchDuration"
    ></audio-player>
  </div>
</template>

<script>
import AudioPlayer from '@/components/audio'
export default {
  name: 'play-dialog',
  components: {
    AudioPlayer: AudioPlayer
  },
  data() {
    return {
      beginPlay: false,
      currentTime: 0,
      changedCurrentTime: 0,
      duration: 0
    }
  },
  computed: {
    progressPercent() {
      if (!this.duration) {
        return 0
      }
      var result = this.currentTime * 100 / this.duration
      return result * 0.95
    },
    playIcon() {
      return this.beginPlay ? 'playbtn-icon.png' : 'pausebtn-icon.png'
    }
  },
  methods: {
    goBack() {
      this.$store.commit('Play/closeDialog')
    },
    playOrPause() {
      this.beginPlay = !this.beginPlay
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
  font-size: 18px;
  line-height: 22px;
  color: rgb(240, 240, 240);
}
.player {
  height: 18px;
  font-size: 13px;
  line-height: 22px;
  color: rgb(230, 230, 230);
}
.play-bar {
  width: 170px;
  height: 170px;
  /* background-color: blue; */
  margin: 0px auto;
  position: fixed;
  top: 70px;
  left: 45%;
  z-index: 1;
}
.disk {
  width: 300px;
  height: 300px;
  background-color: rgb(255, 255, 255, 0.3);
  border-radius: 150px;
  margin: 110px auto 0px;
  position: relative;
}
.disk-black {
  width: 280px;
  height: 280px;
  border-radius: 140px;
  background-image: url("~@/assets/disk-icon.png");
  background-repeat: no-repeat;
  position: absolute;
  margin: 10px;
  box-shadow: 2px 2px 5px #888888;
}
.disk-pho {
  width: 170px;
  height: 170px;
  border-radius: 85px;
  background-color: white;
  position: absolute;
  margin: 55px;
}
.opinion {
  width: 90%;
  height: 60px;
  margin: 70px auto 40px;
  display: flex;
  justify-content: space-between;
}
.opinion-item {
  width: 40px;
  height: 40px;
}

.footer {
  margin: 0px auto;
  width: 90%;
  height: 120px;
}
.progress {
  margin-bottom: 30px;
}
.progress-bar {
  height: 10px;
  background-color: pink;
  display: inline-block;
  width: 75%;
}
.current-time,
.duration {
  display: inline-block;
  width: 10%;
  font-size: 10px;
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
  position: relative;
  bottom: 3px;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: brown;
}

.play-zone {
  height: 70px;
  display: flex;
  justify-content: space-between;
}
.play-mode,
.play-list {
  width: 50px;
  height: 50px;
  margin: 10px 0px;
}
.play-moment {
  width: 60%;
  display: flex;
  justify-content: space-between;
}

.play-moment .last-song,
.play-moment .next-song {
  width: 50px;
  height: 50px;
  margin: 10px 0px;
}
.play-moment .play-song {
  width: 70px;
  height: 70px;
}
</style>
