<template>
  <div class="find">
    <template v-if="!showFindSearch">
      <find-header @open-find-search="openFindSearch"></find-header>

      <div class="find-content">
        <div class="navbar"></div>

        <nav-items :nav-items="navItems"></nav-items>

        <horizontal-line
          width="100%"
          border-bottom-size="1px"
          border-bottom-color="rgb(199, 199, 199"
          margin-top="0px"
        ></horizontal-line>

        <song-list :content-list="newSongs">
          <div class="main-title-name">
            <span class="letter-space">新碟</span>
            <span class="letter-split">|</span>
            <span class="letter-space">新歌</span>
          </div>
          <input
            type="button"
            value="更多新碟"
            class="main-button"
          />
        </song-list>
        <horizontal-line></horizontal-line>

        <song-list :content-list="recommendSongs">
          <!-- <div class="main-title-name"> -->
          <span class="letter-space">推荐歌单</span>
          <!-- </div> -->
          <input
            type="button"
            value="歌单广场"
            class="main-button"
          />
        </song-list>
        <horizontal-line></horizontal-line>

        <cloud-country-header :title="cloudCountryTitle"></cloud-country-header>
        <horizontal-line></horizontal-line>
        <template v-for="(selected, i) in selecteds">
          <cloud-country-selected
            :key="i"
            :title="selected.title"
            :content="selected.content"
            :likes="selected.likes"
            :reviews="selected.reviews"
          ></cloud-country-selected>
          <horizontal-line :key="-i-1"></horizontal-line>
        </template>
      </div>
    </template>
    <find-search
      v-else
      @close="closeFindSearch"
    ></find-search>
    <gl-footer></gl-footer>
  </div>
</template>

<script>
import FindSearch from '@/components/find-search'
import NavItems from '@/components/nav-items'
import Footer from '@/components/footer'
import FindHeader from '@/components/find-header'
import SongList from '@/components/song-list'
import HorizontalLine from '@/components/horizontal-line'
import CloudCountryHeader from '@/components/cloud-country/header'
import CloudCountrySelected from '@/components/cloud-country/selected'
import findService from '@/services/find'
export default {
  name: 'find',
  components: {
    NavItems: NavItems,
    FindSearch: FindSearch,
    GlFooter: Footer,
    FindHeader: FindHeader,
    SongList: SongList,
    HorizontalLine: HorizontalLine,
    CloudCountryHeader: CloudCountryHeader,
    CloudCountrySelected: CloudCountrySelected
  },
  data () {
    return {
      navItems: [],
      showFindSearch: false,
      recommendSongs: [],
      newSongs: [],
      cloudCountryTitle: '',
      selecteds: []
    }
  },
  created() {
    findService.findPageData().then(data => {
      this.recommendSongs = data.recommendSongs || []
      this.newSongs = data.newSongs || []
      this.selecteds = data.countrySelecteds.selecteds || []
      this.cloudCountryTitle = data.countrySelecteds.title
    })
    findService.navItems().then(data => {
      this.navItems = data || []
    })
  },
  methods: {
    openFindSearch() {
      this.showFindSearch = true
    },
    closeFindSearch() {
      this.showFindSearch = false
    }
  }
}
</script>

<style scoped>
.find-content {
  margin: 70px auto;
}
.find-content > div {
  width: 90%;
  text-align: center;
  margin: 15px auto 0px;
}

.navbar {
  width: 100%;
  height: 150px;
  background-color: pink;
  border-radius: 10px;
  top: 45px;
}

/* .main-title-name{display:flex;width: 50%;} */
.letter-space {
  letter-spacing: 2px;
  font-size: 12px;
  line-height: 30px;
}
.letter-split {
  margin: 0 10px;
  line-height: 30px;
}
</style>
