<template>
  <div id="musiclist">
    <music-list-header :page-title="songSheet.pageTitle"></music-list-header>
    <music-list-main
      :title="songSheet.title"
      :photo="songSheet.photo"
      :description="songSheet.description"
      :author="songSheet.author"
    ></music-list-main>
    <function-bar
      :reviews="songSheet.reviews"
      :shares="songSheet.shares"
    ></function-bar>
    <song-list :songs="songSheet.songs"></song-list>
    <gl-footer></gl-footer>
  </div>
</template>

<script>
import MusicListHeader from './header'
import MusicListMain from './main'
import FunctionBar from './function-bar'
import SongList from './song-list'
import Footer from '@/components/footer'
export default {
  name: 'music-list',
  components: {
    MusicListHeader,
    MusicListMain,
    FunctionBar,
    GlFooter: Footer,
    SongList: SongList
  },
  data() {
    return {
      songSheet: {}
    }
  },
  created() {
    this.$http.get('/api/musicList').then(response => {
      this.songSheet = response.data
    })
  }
}
</script>

<style scoped>
#musiclist {
  background: linear-gradient(rgb(250, 146, 177), rgb(250, 166, 117));
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
