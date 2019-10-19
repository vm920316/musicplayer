<template>
  <div class="head">
    <img
      class="back"
      @click="goBack"
      src="~@/assets/back-icon.png"
    >
    <div class="title">
      {{ pageTitle }}
    </div>
    <div>
      <img
        class="more"
        src="~@/assets/more-icon.png"
      >
      <img
        @click="openPlayDialog"
        class="playwhite"
        src="~@/assets/playwhite-icon.png"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default() {
        return this.$t('music-list')
      }
    }
  },
  methods: {
    openPlayDialog() {
      this.$store.commit('Play/openDialog')
    },
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.head {
  width: 90%;
  text-align: center;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;
}
.back,
.more,
.playwhite {
  width: 40px;
  height: 40px;
}
.title {
  width: 60%;
  height: 40px;
  line-height: 40px;
  letter-spacing: 1px;
  font-size: 20px;
  color: white;
  padding-left: 13px;
}
</style>
