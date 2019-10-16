<template>
  <div class="play">
    <div class="head">
      <div
        class="back"
        @click="goBack"
      ></div>
      <div class="song-name">
        <div class="song-content">
          我还想她
        </div>
        <div class="player">
          林俊杰>
        </div>
      </div>
      <div class="share"></div>
    </div>

    <div class="main">
      <div class="play-bar"></div>
      <div class="disk"></div>
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
      <div class="progress"></div>
      <div class="play-zone">
        <div class="play-mode"></div>
        <div class="play-moment">
          <div class="last-song"></div>
          <div class="play-song"></div>
          <div class="next-song"></div>
        </div>
        <div class="play-list"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back()
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
  background-color: blue;
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
  width: 110px;
  height: 110px;
  background-color: blue;
  margin: 0px auto;
}
.disk {
  width: 300px;
  height: 300px;
  background-color: blue;
  border-radius: 150px;
  margin: 0px auto;
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
  height: 20px;
  background-color: pink;
  margin-bottom: 30px;
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
  background-color: blue;
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
  background-color: blue;
  margin: 10px 0px;
}
.play-moment .play-song {
  width: 70px;
  height: 70px;
  background-color: blue;
}
</style>
