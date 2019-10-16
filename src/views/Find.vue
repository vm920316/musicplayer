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
        <cloud-country-header></cloud-country-header>
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
      navItems: [
        {
          url: 'Recommended-icon.png',
          name: '每日推荐'
        },
        {
          url: 'Songlist-icon.png',
          name: '歌单'
        },
        {
          url: 'Songchart-icon.png',
          name: '排行榜'
        },
        {
          url: 'radio-icon.png',
          name: '电台'
        },
        {
          url: 'LiveVideo-icon.png',
          name: '直播'
        }
      ],
      showFindSearch: false,
      recommendSongs: [{
        name: '童话',
        author: '光良'
      }, {
        name: '逍遥叹（仙剑奇侠传）',
        author: '胡歌'
      }, {
        name: '时光诛仙',
        author: '任贤齐'
      }, {
        name: '童话',
        author: '光良'
      }, {
        name: '逍遥叹（仙剑奇侠传）',
        author: '胡歌'
      }, {
        name: '时光诛仙',
        author: '任贤齐'
      }],
      newSongs: [{
        name: '童话',
        author: '光良'
      }, {
        name: '逍遥叹（仙剑奇侠传）',
        author: '胡歌'
      }, {
        name: '时光诛仙',
        author: '任贤齐'
      }],
      selecteds: [{
        tittle: '原创精选：好听的古风歌曲',
        content: 'Lao-干妈-生死江湖',
        likes: 3168,
        reviews: 493
      }, {
        tittle: '原创精选：好听的古风歌曲',
        content: 'Lao-干妈-生死江湖',
        likes: 3168,
        reviews: 493
      }]
    }
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
