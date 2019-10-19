export default {
  namespaced: true,
  state: {
    open: false,
    songInfo: null,
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
      const selectedSongs = state.songList.slice(i, i + 1)
      state.songInfo = selectedSongs.length ? selectedSongs[0] : state.songList[0]
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
