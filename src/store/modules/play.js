export default {
  namespaced: true,
  state: {
    open: false
  },
  mutations: {
    openDialog(state) {
      state.open = true
    },
    closeDialog(state) {
      state.open = false
    }
  }
}
