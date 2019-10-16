<template>
  <div class="head">
    <!-- <div class="head-MusicRecognition"></div> -->
    <img
      class="head-MusicRecognition"
      src="~@/assets/listen-icon.png"
    >
    <input
      type="text"
      placeholder
      name="head-search"
      id="head-search"
      @click="openFindSearch"
    />
    <!-- <div class="head-MusicPlaying"></div> -->
    <img
      class="head-MusicPlaying"
      @click="openPlay"
      src="~@/assets/play-icon.png"
    >
  </div>
</template>

<script>
export default {
  name: 'find-header',
  methods: {
    openFindSearch() {
      this.$emit('open-find-search')
    },
    openPlay() {
      this.$router.push('/play')
    }
  }
}
</script>

<style>
.head {
  width: 100%;
  height: 40px;
  display: flex;
  padding: 15px 0 5px;
  position: fixed;
  top: 0px;
  background-color: white;
}

.head-MusicRecognition,
.head-MusicPlaying {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

#head-search {
  height: 40px;
  width: 100%;
  border-radius: 20px;
  background-color: rgb(240, 240, 240);
  border: 0px solid red;
}
</style>
