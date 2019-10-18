export default {
  namespaced: true,
  state: {
    open: false,
    songInfo: {},
    songList: [],
    playing: false
  },
  getters: {
    songIndex(state) {
      const song = state.songInfo
      const songList = state.songList
      if (!song || !songList) {
        return -1
      }

      return songList.indexOf(song)
    }
  },
  mutations: {
    openDialog(state) {
      state.open = true
    },
    closeDialog(state) {
      state.open = false
    },
    changeSongByIndex(state, i) {
      if (!state.songList || !state.songList.length) {
        return
      }
      const songLength = state.songList.length
      let song
      if (i < 0) {
        song = state.songList[0]
      } else if (i > songLength - 1) {
        song = state.songList[songLength - 1]
      } else {
        song = state.songList[i]
      }

      state.songInfo = song
    },
    changeSong(state, song) {
      state.songInfo = song
    },
    setSongList(state, songs) {
      state.songList = songs
    },
    toPlay(state) {
      state.playing = true
    },
    toPause(state) {
      state.playing = false
    }
  }
}
