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
      <div
        class="hot-item"
        v-for="(song, i) in songs"
        :key="i"
      >
        <div
          class="hot-item-num"
          @click="play(i)"
        >
          {{ i + 1 }}
        </div>
        <div
          class="hot-item-content"
          @click="play(i)"
        >
          <div class="content-title">
            <strong>{{ song.name }}</strong>
          </div>
          <div class="content-text">
            {{ `${song.author} - ${song.name} ` }}
          </div>
        </div>
        <div class="hot-item-like">
          ...
        </div>
      </div>
      <div class="list-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'song-list',
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
.list-container:last-child() {
  margin-bottom: 20px;
}
.hot-item {
  display: flex;
  justify-content: space-between;
  height: 60px;
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
.list-footer {
  height: 80px;
}
</style>
